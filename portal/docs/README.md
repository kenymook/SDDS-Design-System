# DS Builder в составе SDDS Portal

> Статус: Draft v0.2  
> Источник: Markdown  
> Назначение: продуктовая и UX-документация Portal и DS Builder.  
> Reference-реализация UX: [portal/apps/portal-flow-prototype](../apps/portal-flow-prototype/README.md).

**SDDS Portal** — верхнеуровневая точка входа в экосистему SDDS.  
**DS Builder** — рабочий инструмент дизайнера внутри Portal для настройки, проверки и прямой публикации дизайн-системы проекта.

## Документация

### Product

- [Продуктовая рамка](product/context.md)
- [Текущее состояние](product/current-state.md)
- [Целевое состояние и scope](product/target-state-and-scope.md)

### Architecture

- [Место Builder в Portal и информационная архитектура](architecture/information-architecture.md)
- [Project and Design System model](architecture/project-model.md)
- [Роли и права](architecture/rbac-and-permissions.md)
- [Сущности и data model](architecture/entities-and-data-model.md)
- [Публикация, CLI и версии](architecture/publication-and-versioning.md)

### UX

- [Основные пользовательские сценарии](ux/core-user-flows.md)
- [UX-паттерны](ux/patterns.md)
- [Требования к экранам](ux/screen-requirements.md)

### Requirements and delivery

- [User stories и acceptance criteria](requirements/user-stories.md)
- [Validation, Quality и Health](requirements/validation-quality-health.md)
- [Roadmap](delivery/roadmap.md)
- [Открытые вопросы и решения](decisions/open-questions.md)

### Research

- [Анализ раннего DS Builder Playground](research/legacy-playground-analysis.md)

## Как читать

- Для синхронизации с PO/PM: Product, Information Architecture и Roadmap.
- Для проектирования интерфейса: UX и Requirements.
- Для системной модели: Project Model, Roles и Data Model.
- Для планирования: User Stories, Roadmap и Open Questions.

## Зафиксированные решения MVP

- Основной пользователь — Designer; Developer применяет опубликованную Version через CLI.
- Иерархия: User → Project → Design System → Theme.
- Project — граница данных и доступа; Design System и Theme наследуют роли Project.
- Designer публикует изменения самостоятельно, без Review и Approve.
- Validation issues не блокируют Publish; Builder сохраняет Version и Published Configuration для CLI.
- Components являются редактируемыми сущностями с ограничениями.
- Builder поддерживает редактирование визуальных значений: цвет, градиенты, типографика и скругления.
- Черновики изолированы по пользователю; tokens, Versions и Published Configuration общие для Project.
- Version details включают diff с предыдущей Version; rollback — через «Восстановить как draft».
- Публикация уведомляет участников Project; канал уведомлений единый с доступами.
- CLI contract, target files, авторизация и CI-сценарий пока не определены.

Полный лог решений: [Открытые вопросы и решения](decisions/open-questions.md).
