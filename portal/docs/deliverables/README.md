# Спринт-материалы (дизайн-лид)

Материалы по четырём спринт-задачам, подготовленные на основе прототипа [SDDS Portal](https://portal-flow-prototype.vercel.app). Каждый документ привязан к экранам прототипа и содержит открытые вопросы для смежных команд.

| # | Задача спринта | Документ | Тип |
|---|---|---|---|
| 1 | Создать авторизацию для Builder | [01-builder-auth-spec.md](01-builder-auth-spec.md) | UX-спецификация |
| 2 | Зафиксировать DS Builder MVP Scope | [02-ds-builder-mvp-scope.md](02-ds-builder-mvp-scope.md) | Scope (locked) |
| 3 | Описать RBAC UI правила | [03-rbac-ui-rules.md](03-rbac-ui-rules.md) | UI-правила |
| 4 | Зафиксировать SDDS Portal MVP | [04-sdds-portal-mvp-scope.md](04-sdds-portal-mvp-scope.md) | Scope (locked) |
| 5 | Базовая тенантная модель (задача дизайнера) | [05-tenant-and-project-model.md](05-tenant-and-project-model.md) | Модель + навигация |

## Как пользоваться на защите

- **Прототип** — живое доказательство: [portal-flow-prototype.vercel.app](https://portal-flow-prototype.vercel.app). Тест-учётки Builder: `anna`/`demo` (Owner), `ivan`/`demo` (Editor), `maria`/`demo` (Viewer).
- Каждый документ ссылается на конкретные экраны (route) прототипа — можно показывать вживую.
- Открытые вопросы в конце каждого документа — то, что синхронизируется с инженерией / безопасностью / системной командой.

## Первоисточники в репозитории

Материалы синтезированы из уже зафиксированной документации портала:
- `docs/architecture/rbac-and-permissions.md` — модель прав (задача 3)
- `docs/product/target-state-and-scope.md` — рамка scope (задачи 2, 4)
- `docs/requirements/user-stories.md` — истории публичного контура и Builder
- `docs/ux/core-user-flows.md`, `docs/ux/screen-requirements.md` — сценарии и экраны
