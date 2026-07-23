# Роли и права доступа

## Принцип

Права назначаются пользователю в рамках Project Membership. Один пользователь может иметь разные роли в разных проектах. Управление участниками и ролями существует только на уровне Project; Design System и Theme наследуют доступы проекта.

Review, Reviewer, Publisher и approve не входят в MVP. Роли Builder: `Owner`, `Editor`, `Viewer`. Продуктовые роли Designer/Developer используются в Onboarding, но не в access model.

## MVP-роли

| Роль | Назначение |
|---|---|
| Owner | Владелец проекта: максимальная ответственность и доступ к проекту |
| Editor | Редактирует темы, проверяет и публикует изменения |
| Viewer | Просматривает состояние, версии и доступные результаты без редактирования |

Developer является потребителем Published Configuration через CLI и не обязан иметь отдельную роль в Builder. При доступе к проекту он может использовать Viewer.

Owner назначается создателю Project. В MVP Owner приглашает других пользователей только как Editor или Viewer; роль не выбирается пользователем при авторизации. Форма входа принимает email или логин и пароль.

Design System и Theme не имеют собственных ролей, members-list или отдельной матрицы доступа.

## Матрица прав MVP

| Действие | Viewer | Editor | Owner |
|---|---:|---:|---:|
| Смотреть Project и Design System | ✓ | ✓ | ✓ |
| Смотреть темы и компоненты | ✓ | ✓ | ✓ |
| Смотреть changes, health и versions | ✓ | ✓ | ✓ |
| Создать Design System | ✗ | ✗ | ✓ |
| Создать Theme | ✗ | ✓ | ✓ |
| Редактировать tokens | ✗ | ✓ | ✓ |
| Редактировать разрешённые свойства компонентов | ✗ | ✓ | ✓ |
| Запустить validation | ✗ | ✓ | ✓ |
| Revert собственные изменения | ✗ | ✓ | ✓ |
| Publish Version и Configuration | ✗ | ✓ | ✓ |
| Управлять участниками и ролями | ✗ | ✗ | ✓ |
| Архивировать Project / Design System | ✗ | ✗ | ✓ |
| Смотреть audit log | ✗ | ✓ | ✓ |

## Permission groups

View: `viewProject`, `viewDesignSystem`, `viewTheme`, `viewTokens`, `viewComponents`, `viewChanges`, `viewHealth`, `viewVersions`, `viewPublishedConfiguration`.

Edit: `createTheme`, `editTokens`, `editTypography`, `editRounding`, `editComponents`, `editSubThemes`, `revertChanges`.

Publish: `publishChanges`, `createVersion`, `publishConfiguration`.

Admin: `inviteUser`, `removeUser`, `changeRole`, `createDesignSystem`, `archiveDesignSystem`, `editProjectSettings`, `viewAuditLog`.

## Read-only mode

Если редактирование недоступно:

- поля отображаются read-only;
- destructive и edit actions скрыты или disabled с объяснением;
- показывается статус `Read-only`;
- доступно действие `Request edit access`, если оно поддерживается.

## Audit requirements

Логировать создание и архивирование проектов/дизайн-систем, изменение ролей, создание темы, редактирование tokens/components, validation и публикацию Version/Configuration.
