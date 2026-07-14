# Публикация, CLI и версии

## Принцип

DS Builder не генерирует npm-пакеты. Дизайнер публикует изменения как версионированную конфигурацию, а Developer получает и применяет её через CLI.

Review и approve отсутствуют. Validation сообщает о рисках, но не блокирует Publish.

## Lifecycle

```text
Draft Changes
  → Preview
  → Validate
  → Publish
  → Published Version + Configuration
  → Developer runs CLI
  → CLI loads selected Version
  → CLI generates target files
```

Техническая ошибка CLI не отменяет уже опубликованную Version. Она относится к выполнению CLI и должна диагностироваться на стороне CLI/CI.

## Draft Changes

Каждое изменение token, typography, rounding, component или theme metadata попадает в Changes и содержит old/new, автора, дату, validation issues и affected entities.

## Publish screen

Перед публикацией показываются:

- выбранные changes;
- validation summary;
- affected components и themes;
- version;
- changelog/release notes;
- предупреждение о публикации с issues.

После подтверждения Builder создаёт Publication, Version и Published Configuration. Дополнительное согласование не требуется.

## Validation policy

| Состояние | Поведение |
|---|---|
| No issues | Publish доступен |
| Warning | Publish доступен, issues сохраняются |
| Error / Critical | Publish доступен после явного подтверждения риска |
| Publish storage/API failure | Version не создаётся, доступен Retry |

## Versioning

| Поле | Описание |
|---|---|
| version | Номер версии |
| designSystemId / themeId | Контекст конфигурации |
| publicationId | Публикация |
| configurationId | Опубликованная конфигурация |
| changelog | Список изменений |
| validationSnapshot | Issues на момент публикации |
| authorId / publishedAt | Автор и дата |
| status | active / archived / rollback |

Patch используется для небольших изменений, Minor — для новых возможностей, Major — для breaking changes. Политика совместимости должна быть согласована с CLI.

## Published Configuration

Published Configuration — неизменяемый снимок данных конкретной Version, доступный CLI. Его физический формат и способ получения пока TBD.

Обязательные свойства:

- однозначная связь с Project, Design System, Theme и Version;
- воспроизводимость;
- неизменяемость после публикации;
- validation snapshot и changelog;
- возможность выбрать конкретную Version из CLI.

## CLI contract — открытые вопросы

- откуда CLI получает Published Configuration;
- как выполняется авторизация;
- как выбирается и фиксируется Version;
- какие команды и target files поддерживаются;
- нужен ли lock-файл;
- поддерживается ли non-interactive запуск в CI;
- как CLI сообщает о несовместимости и ошибках генерации.

## Rollback

Полный rollback находится вне MVP. В будущем он создаёт новую Version на основе выбранной прошлой конфигурации и не удаляет историю.

