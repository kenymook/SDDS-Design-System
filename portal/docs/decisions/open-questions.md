# Открытые вопросы и решения

## Blocking questions

| Вопрос | Влияние | Owner | Статус |
|---|---|---|---|
| Какие свойства компонентов Editable / Restricted / Locked? | Component Editor, validation, data model | Design System | Open |
| Откуда CLI получает Published Configuration? | API/storage и permissions | Development | Open |
| Как CLI выбирает и фиксирует Version? | Воспроизводимость и обновления | Development | Open |
| Какие команды и target files поддерживает CLI? | Developer workflow | Development | Open |
| Как устроены авторизация и non-interactive запуск в CI? | Security и automation | Development | Open |
| Нужен ли lock-файл и schema compatibility policy? | Воспроизводимость и migrations | Development | Open |

## Current implementation questions

| Вопрос | Влияние | Статус |
|---|---|---|
| Как сейчас сохраняются изменения? | Draft и recovery | Open |
| Есть ли существующий draft-state? | Safe editing | Open |
| Какие typography/rounding values уже редактируются? | Editor scope | Open |
| Какие компоненты и свойства уже добавлены? | Component roadmap | Open |
| Есть ли существующий CLI/export и какие сценарии он поддерживает? | CLI migration | Open |
| Как Builder связан с Figma/Pixso? | Design workflow | Open |
| Как Builder связан с кодом? | Developer workflow | Open |

## Product questions

| Вопрос | Влияние | Статус |
|---|---|---|
| Нужен ли self-service Request access? | Portal flow | Resolved: да — Viewer отправляет Request edit access, Owner одобряет из Project Settings (проверено прототипом) |
| Какие продукты участвуют в первом MVP? | Проверка модели на реальных кейсах | Open |
| Как измеряется успех MVP? | Product metrics | Open |
| Финальный визуальный дизайн Portal и DS Builder | UI всех экранов; текущие Figma-макеты (DS-BUILDER, DS-BUILDER \| PLAYGROUND) — концепты | Open |

## Decisions log

| Date | Decision | Status | Impact |
|---|---|---|---|
| 2026-07-01 | Основной пользователь MVP — Designer | Accepted | Product / UX |
| 2026-07-01 | Developer применяет опубликованную Version через CLI | Accepted | Publication / Handoff |
| 2026-07-01 | Иерархия: User → Project → Design System → Theme | Accepted | IA / Data Model |
| 2026-07-01 | Project является пользовательской границей данных и доступа | Accepted | IA / Access |
| 2026-07-01 | Публичные разделы Portal доступны без авторизации; вход требуется только для DS Builder | Accepted | Portal / Auth |
| 2026-07-01 | Создатель Project становится Owner и приглашает пользователей как Editor или Viewer | Accepted | Access / Administration |
| 2026-07-01 | Роль не выбирается при входе, а загружается из Project Membership | Accepted | Auth / RBAC |
| 2026-07-01 | Авторизация DS Builder выполняется по email или логину и паролю | Accepted | Auth |
| 2026-07-01 | После входа пользователь попадает в Personal Space с My Projects и Shared With Me | Accepted | Builder Home / Membership |
| 2026-07-01 | Project Settings и приглашение пользователей существуют только в контексте конкретного Project | Accepted | Project / Administration |
| 2026-07-01 | Design System и Theme наследуют доступы Project и не имеют собственных участников | Accepted | Access / Administration |
| 2026-07-01 | Пользователей Editor/Viewer можно пригласить уже на шаге создания Project | Accepted | Project Creation / Access |
| 2026-07-01 | Design System создаётся Owner внутри конкретного Project | Accepted | Design System Creation |
| 2026-07-01 | Theme создаётся Owner или Editor внутри конкретной Design System | Accepted | Theme Creation |
| 2026-07-01 | Все Design Systems поддерживают все платформы; platform не выбирается при создании | Accepted | Design System Model |
| 2026-07-01 | Стартовая palette выбирается при создании Theme, а не Design System | Accepted | Theme Creation |
| 2026-07-01 | Viewer видит причины ограничений и может отправить Request edit access | Accepted | Permissions UX |
| 2026-07-01 | Review и Approve отсутствуют в MVP | Accepted | Workflow / Screens |
| 2026-07-01 | Designer может самостоятельно публиковать свои изменения | Accepted | Roles / Publication |
| 2026-07-01 | Validation issues не блокируют Publish | Accepted | Validation / UX |
| 2026-07-01 | Builder не генерирует npm-пакеты или target files | Accepted | Architecture |
| 2026-07-01 | Ошибки генерации target files относятся к CLI и не отменяют опубликованную Version | Accepted | CLI / Publication |
| 2026-07-01 | Component является редактируемой сущностью с ограничениями | Accepted | Components / Data Model |
| 2026-07-01 | CLI contract, источник Configuration и target files остаются TBD | Deferred | CLI / Development |
| 2026-07-03 | Контекст `Project / DS / Theme / Version / Status / роль` всегда виден в Theme workspace | Accepted | UX / Navigation |
| 2026-07-03 | Черновики (changes, undo/redo) изолированы по пользователю; tokens, Versions и Published Configuration общие для Project | Accepted | Data Model / Collaboration |
| 2026-07-03 | Viewer видит только опубликованные значения, а не чужие черновики | Accepted | Permissions UX |
| 2026-07-03 | Validation issues сопровождаются fix suggestions, применяемыми в один клик | Accepted | Validation / UX |
| 2026-07-03 | Цвет токена выбирается через color picker: Custom (SV/hue/alpha, Hex/RGB/HSL) и Library (пресеты палитр) | Accepted | Editor UX |
| 2026-07-22 | Градиенты редактируются через gradient picker и сохраняются как часть Theme | Accepted | Editor UX |
| 2026-07-03 | Version details включают diff с предыдущей опубликованной Version | Accepted | Versions |
| 2026-07-03 | Rollback выполняется через «Восстановить как draft» с подтверждением; история Versions не переписывается | Accepted | Versions / Publication |
| 2026-07-03 | Успешная публикация уведомляет участников Project (in-app + email) | Accepted | Notifications / Publication |
| 2026-07-03 | Failed publish показывает error class, причину, request id и создание Support-запроса с контекстом | Accepted | Publication / Support |
| 2026-07-03 | Язык UI: русский текст + английские термины сущностей (Project, Theme, Publish, Changes и т.д.) | Accepted | UX / Content |
