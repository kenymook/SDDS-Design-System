# Сущности и data model

## Карта сущностей

```text
User
  ├── Notification
  └── Project Membership
        └── Project
              └── Design System
                    ├── Component
                    └── Theme
                          ├── Token / Gradient / Typography / Rounding
                          ├── Change
                          ├── Publication
                          ├── Version
                          │     └── Published Configuration
                          └── Health Issue

Developer CLI
  └── reads Published Configuration by Version
```

## Project Membership

Связь `User ↔ Project`, содержащая роль и состояние доступа пользователя в проекте. Design System и Theme наследуют доступы Project и не имеют собственных members.

## Notification

Хранит `recipientId/email`, `projectId`, `type` (`invited / roleChanged / removed`), текст, дату, канал email и состояние `unread / read`. Notification сообщает об изменении Project Membership, но не заменяет его и не требует отдельного принятия приглашения.

## Design System

| Поле | Описание |
|---|---|
| id / projectId | Идентификаторы сущности и проекта |
| name | Название; система поддерживает все платформы |
| components | Набор компонентов |
| themes | Набор тем |
| currentVersion | Последняя опубликованная версия |
| status | active / archived |

Design System находится внутри Project и не хранит собственные роли доступа.

## Theme

| Поле | Описание |
|---|---|
| id / designSystemId | Идентификаторы темы и дизайн-системы |
| name | Название Theme |
| status | draft / published / archived |
| currentVersionId | Последняя опубликованная версия |
| modes / subThemes | Modes и подтемы |
| tokens / gradients / typography / rounding | Значения темы |
| ownerId | Ответственный дизайнер |

## Component

Компонент — редактируемая сущность дизайн-системы, но изменения ограничиваются разрешёнными настройками.

| Поле | Описание |
|---|---|
| id / designSystemId | Идентификаторы |
| name / category | Название и категория |
| supportStatus | available / partial / planned / deprecated |
| editability | editable / restricted / locked |
| editableProperties | Разрешённые свойства; состав уточняется |
| constraints | Системные ограничения редактирования |
| sizes / views / states | Поддерживаемые варианты |
| linkedTokens | Используемые токены |
| documentationLink | Ссылка на документацию |

## Token / Gradient / Typography / Rounding

Каждая редактируемая сущность хранит текущее и inherited-значение, usage, validation issues, автора и дату изменения.

## Change

| Поле | Описание |
|---|---|
| entityType / entityId | token / gradient / typography / rounding / component / theme |
| oldValue / newValue | Было / стало |
| authorId / createdAt | Автор и время |
| status | draft / reverted / published |
| validationIssues | Ошибки и предупреждения |
| affectedEntities | Затронутые компоненты, modes и темы |

## Publication

Фиксирует выбранные changes, validation snapshot, автора и дату. Успешная Publication создаёт Version и Published Configuration. Approval-сущность отсутствует.

## Published Configuration

Неизменяемый снимок опубликованной конфигурации, который CLI получает по конкретной Version. Builder не генерирует npm-пакеты.

| Поле | Описание |
|---|---|
| id / publicationId / versionId | Идентификаторы |
| schemaVersion | Версия схемы конфигурации |
| content | Опубликованные данные дизайн-системы |
| validationSnapshot | Issues на момент публикации |
| location / transport | TBD: способ получения конфигурации CLI |
| checksum | Контроль целостности, если применимо |

## Version и Audit Event

Version фиксирует опубликованное состояние Design System/Theme, changelog и ссылку на Published Configuration. Audit Event содержит projectId, actor, action, entity, before, after и timestamp.

## Health Issue

Хранит severity, type, entity, описание, рекомендацию и статус `open / ignored / resolved`. Health issues не блокируют публикацию в MVP.
