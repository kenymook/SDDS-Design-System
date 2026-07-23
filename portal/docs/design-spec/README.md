# Спецификация под финальные макеты — SDDS Portal и DS Builder

Это раздел для Confluence. Его задача — по [работающему прототипу](https://portal-flow-prototype.vercel.app) описать всё, что нужно отрисовать в финальных макетах: **каждый экран, все его состояния, все роли, все пути**.

Это «производственный» слой. Он не переписывает продуктовые решения, а опирается на них и переводит в конкретные задачи на отрисовку.

## Как этим пользоваться

1. Прототип — источник поведения. Тестовые учётки Builder: `anna` (Owner), `ivan` (Editor), `maria` (Viewer), пароль у всех `demo`.
2. Продуктовые решения — границы MVP, роли, авторизация, модель проектов, градиенты — лежат в [разделе решений](../deliverables/README.md). Здесь мы на них ссылаемся, а не повторяем.
3. Каждый экран описан по [единому шаблону](_screen-spec-template.md): зачем он, из каких зон состоит, **все состояния**, отличия по ролям, входы и выходы, тексты, что именно отрисовать.
4. Финальные макеты собираются в Figma. Эта документация — их задание и заодно чек-лист, чтобы ничего не забыть.

## Что где лежит (страницы Confluence)

```text
Спецификация под финальные макеты
├── Обзор (этот файл)
├── Каталог состояний            → states-catalog.md
├── Паттерны и элементы           → patterns.md
├── Тексты и глоссарий            → content-and-glossary.md
├── Список всех экранов           → screen-inventory.md
└── Экраны                        → screens/
    ├── Публичная часть
    │   ├── Главная               → screens/public-home.md
    │   ├── Компоненты (развилка)  → screens/public-components-hub.md
    │   ├── Страница компонента    → screens/public-component-page.md
    │   ├── Про DS Builder         → screens/public-builder-about.md
    │   ├── Онбординг              → screens/public-onboarding.md
    │   ├── Релизы                 → screens/public-releases.md
    │   └── Поддержка              → screens/public-support.md
    ├── Вход
    │   └── Экран входа            → screens/auth-login.md
    └── DS Builder
        ├── Стартовый экран        → screens/builder-home.md
        ├── Создать проект         → screens/builder-create-project.md
        ├── Обзор проекта          → screens/builder-project.md
        ├── Настройки проекта      → screens/builder-project-settings.md
        ├── Профиль                → screens/builder-account-settings.md
        ├── Создать Design System  → screens/builder-create-design-system.md
        ├── Обзор Design System    → screens/builder-design-system.md
        ├── Настройки Design System → screens/builder-design-system-settings.md
        ├── Создать тему           → screens/builder-create-theme.md
        ├── Настройки темы          → screens/builder-theme-settings.md
        ├── Редактор темы          → screens/builder-editor.md
        ├── Редактор компонентов    → screens/builder-components.md
        ├── Изменения              → screens/builder-changes.md
        ├── Публикация             → screens/builder-publish.md
        ├── Итог публикации         → screens/builder-result.md
        ├── Версии                 → screens/builder-versions.md
        └── Качество               → screens/builder-health.md
```

Всплывающие окна (модалки, поповеры, пипетка, уведомления) описаны в [паттернах](patterns.md), а где именно они вызываются — в спецификациях экранов.

## Куда смотреть за контекстом (не дублируем — ссылаемся)

| Тема | Где зафиксировано |
|---|---|
| Бизнес-требования, цели, метрики, риски | [product-spec/business-requirements.md](../product-spec/business-requirements.md) |
| Продуктовые требования и принципы | [product-spec/product-requirements.md](../product-spec/product-requirements.md) |
| Решения и открытые вопросы | [product-spec/decisions-log.md](../product-spec/decisions-log.md) |
| Аудитории и пути | [deliverables/04](../deliverables/04-sdds-portal-mvp-scope.md), [ux/core-user-flows.md](../ux/core-user-flows.md) |
| Информационная архитектура и навигация | [architecture/information-architecture.md](../architecture/information-architecture.md) |
| Роли и права | [deliverables/03](../deliverables/03-rbac-ui-rules.md) |
| Авторизация | [deliverables/01](../deliverables/01-builder-auth-spec.md) |
| Модель проектов и путь до работы | [deliverables/05](../deliverables/05-project-and-design-system-model.md) |
| Поддержка градиентов | [deliverables/06](../deliverables/06-builder-gradient-support.md) |
| Границы MVP | [deliverables/02](../deliverables/02-ds-builder-mvp-scope.md), [deliverables/04](../deliverables/04-sdds-portal-mvp-scope.md) |

## Насколько заполнено

- [x] Каркас, шаблон, каталог состояний, паттерны, тексты, список экранов
- [x] Спецификации всех 25 экранов ([список](screen-inventory.md))
