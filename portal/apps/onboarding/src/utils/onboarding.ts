import { baseGuide, guides, roles } from "../content";

export function getGuide(taskId: string) {
  return guides[taskId] || baseGuide;
}

export function getAllTasks(role: any) {
  return role.levels.flatMap((level: any) => level.tasks.map((task: any) => ({ ...task, levelId: level.id, levelTitle: level.title })));
}

export function findTask(role: any, taskId: string) {
  for (const level of role.levels) {
    const task = level.tasks.find((item: any) => item.id === taskId);
    if (task) return { task, level };
  }
  return null;
}

export function getRoleProgress(role: any, done: Record<string, boolean>) {
  const tasks = getAllTasks(role);
  const complete = tasks.filter((task: any) => done[role.id + ":" + task.id]).length;
  return {
    percent: tasks.length ? Math.round((complete / tasks.length) * 100) : 0,
    complete,
    total: tasks.length,
  };
}

export function getLevelStatus(role: any, level: any, done: Record<string, boolean>) {
  const completed = level.tasks.filter((task: any) => done[role.id + ":" + task.id]).length;
  if (completed === level.tasks.length) return "done";
  if (completed > 0) return "progress";
  return "todo";
}

export function getNextTask(role: any, done: Record<string, boolean>) {
  return getAllTasks(role).find((task: any) => !done[role.id + ":" + task.id]) || null;
}

export function runSelfTests() {
  const designer = roles.find((role: any) => role.id === "designer");
  const developer = roles.find((role: any) => role.id === "developer");

  console.assert(Boolean(designer), "designer role exists");
  console.assert(Boolean(developer), "developer role exists");
  console.assert(getAllTasks(designer).length === 7, "designer has 7 onboarding tasks");
  console.assert(getAllTasks(developer).length === 4, "developer has 4 onboarding tasks");
  console.assert(getRoleProgress(designer, {}).percent === 0, "empty progress is 0%");
  console.assert(getNextTask(designer, {}).id === "d-1-1", "first next task is d-1-1");
  console.assert(getGuide("d-2-3").title === "Понять состояния", "guide lookup works");
  console.assert(findTask(designer, "d-2-1").level.id === "middle", "findTask returns middle level");
}
