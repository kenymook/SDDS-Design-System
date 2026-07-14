# Место DS Builder в SDDS Portal

## Разделение продуктов

**SDDS Portal** — точка входа в экосистему SDDS.  
**DS Builder** — рабочий инструмент внутри Portal, в котором дизайнер редактирует и публикует дизайн-систему проекта.

Documentation, Onboarding, Releases, Support и About доступны без авторизации. Вход в DS Builder выполняется по email или логину и паролю; права Owner/Editor/Viewer загружаются из Project Membership после успешной авторизации.

## Верхнеуровневая структура Portal

```text
SDDS Portal
  ├── Documentation
  ├── Onboarding
  ├── DS Builder
  ├── Releases / Changelog
  ├── Support / Requests
  └── About
```

## Ответственность разделов

| Раздел | Назначение |
|---|---|
| Documentation | Документация SDDS, компонентов, токенов и handoff |
| Onboarding | Ролевые маршруты для дизайнера и разработчика |
| DS Builder | Редактирование, preview, validation и публикация Version для CLI |
| Releases | Версии SDDS, Builder и дизайн-систем проектов |
| Support | Доступ, баги, запросы компонентов и консультации |

## Структура DS Builder

```text
DS Builder
  ├── Personal Space
  │     ├── My Projects
  │     └── Shared With Me
  ├── Projects
  │     └── Design Systems
  │           ├── Themes
  │           │     ├── Color Tokens
  │           │     ├── Typography
  │           │     ├── Rounding
  │           │     ├── SubThemes
  │           │     └── Preview
  │           ├── Components
  │           ├── Changes
  │           ├── Publish / Versions
  │           ├── Health
  │           └── Versions
  └── Project
        └── Project Settings
              ├── Members and Roles for this Project
              ├── Design Systems
              └── Audit Log
```

Review/Approve отсутствует в MVP.

## Рабочий контекст

В Builder всегда показывается:

```text
Project / Design System / Theme / Version / Status
```

Пример:

```text
SberBusiness / CRM DS / Light Theme / v1.4.0 / Draft
```

## Entry points

| Откуда | Куда ведём |
|---|---|
| Главная Portal | Builder Home |
| Onboarding дизайнера | Open Project / Design System |
| Onboarding разработчика | CLI setup / Latest Version / Changelog |
| Documentation по токенам | Token Reference или Editor |
| Releases | Version details / CLI usage |
| Support | Контекст Project / Design System |

## UX-правило

Portal отвечает за вход и маршрутизацию. Builder отвечает за рабочие изменения, проверки, прямую публикацию и получение результата для разработки.
