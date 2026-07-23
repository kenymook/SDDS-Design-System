import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const realm = 'SDDS Prototype';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
};

function timingSafeEqual(left, right) {
  if (left.length !== right.length) return false;

  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return result === 0;
}

function isAuthorized(request) {
  const expectedUser = (process.env.PROTOTYPE_AUTH_USER || '').trim();
  const expectedPassword = (process.env.PROTOTYPE_AUTH_PASSWORD || '').trim();

  if (!expectedUser || !expectedPassword) {
    return true;
  }

  const authorization = request.headers.authorization || '';
  const [scheme, encoded] = authorization.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return false;
  }

  const [user, password] = Buffer.from(encoded, 'base64').toString('utf8').split(':');

  return timingSafeEqual((user || '').trim(), expectedUser) && timingSafeEqual((password || '').trim(), expectedPassword);
}

function resolveFile(request) {
  const url = new URL(request.url, `https://${request.headers.host || 'localhost'}`);
  const rawPath = url.searchParams.get('path') || 'index.html';
  const relative = rawPath === '/' || rawPath === '' ? 'index.html' : rawPath.replace(/^\/+/, '');
  const file = path.resolve(root, relative);

  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return null;
  }

  return file;
}

export default function handler(request, response) {
  if (!isAuthorized(request)) {
    response.writeHead(401, {
      'WWW-Authenticate': `Basic realm="${realm}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    });
    response.end('Authentication required');
    return;
  }

  const file = resolveFile(request);

  if (!file) {
    response.writeHead(404).end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
  });
  fs.createReadStream(file).pipe(response);
}
