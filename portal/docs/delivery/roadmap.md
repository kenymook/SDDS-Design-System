# Roadmap и этапы реализации

## Текущее состояние

Реализовано редактирование color tokens, typography и rounding; компоненты добавлены частично. Текущий уровень — `Basic Editing`.

## Этап 1. Stabilize existing editors

Единый layout, inspector, inherited/overridden state, old/new diff, preview, validation, revert и Draft Changes для color/typography/rounding.

**Exit criteria:** все существующие редакторы используют одну модель Change и одинаковые состояния UI.

## Этап 2. Project and Design System foundation

Project, Project Membership, создание Design System и Theme, а также роли Owner/Editor/Viewer.

**Почему раньше публикации:** доступ, изоляция данных и контекст Version/Configuration зависят от этой модели.

## Этап 3. Component editing

Component catalog, preview, support/editability status, editable/restricted/locked properties, constraints и linked tokens.

**Exit criteria:** зафиксирован разрешённый набор изменений компонентов и их отображение в Changes.

## Этап 4. Changes, impact and validation

Grouped Changes, affected entities, advisory validation, risk confirmation и Health summary. Validation issues не блокируют Publish.

## Этап 5. Direct Publish and CLI contract

Publish без review/approve, Version, changelog и Published Configuration. Параллельно фиксируется минимальный контракт CLI.

**Зависимость:** необходимо определить источник конфигурации, выбор Version, авторизацию, команды и target files CLI.

## Этап 6. Project administration and health

Members, roles, Project Settings, Audit Log, Design System health и publication monitoring.

## Этап 7. Version history and rollback

Compare versions, configuration history и rollback как новая публикация. Полный rollback находится вне MVP.

## Рекомендуемый порядок дизайна

1. Builder Home и context selector.
2. Project / Design System / Theme Overview.
3. Existing token editors и Inspector.
4. Components Editor.
5. Changes и validation states.
6. Publish.
7. Publication Result / CLI usage.
8. Project Settings / Members.
9. Health.
10. Versions.

## Рекомендуемые Jira epics

1. Project and Design System Model.
2. Access Roles and Project Membership.
3. Existing Editors Stabilization.
4. Changes and Diff.
5. Component Editing Constraints.
6. Impact and Validation.
7. Direct Publication.
8. CLI Integration.
9. Health and Audit.
10. Version History and Rollback.
