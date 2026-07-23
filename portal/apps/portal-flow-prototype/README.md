# SDDS Portal UX Flow Prototype

Утилитарный интерактивный прототип SDDS Portal: Portal Home, Documentation, Onboarding, DS Builder, Releases и Support.

Главный детализированный сценарий:

```text
Public Portal
→ authenticate to enter DS Builder
→ Personal Space: My Projects / Shared With Me
→ Project
→ Create/Open Design System
→ Create/Open Theme
→ edit Colors / Gradients / Sizes / Fonts
→ Changes and advisory validation
→ direct Publish
→ Version and CLI handoff
```

Публичные разделы не требуют авторизации. Роль Builder не выбирается при входе: создатель Project становится Owner, приглашает пользователей и назначает Editor или Viewer. Продуктовые роли Designer/Developer представлены только в Onboarding.

Project Settings доступны только со страницы конкретного Project. Приглашение создаёт membership только в этом Project, а не во всём Personal Space.
Design System и Theme наследуют доступы Project и не имеют собственных участников.

При создании Project Owner может сразу добавить несколько пользователей и назначить им Editor или Viewer.

Авторизация Builder выполняется по email или логину и паролю. Тестовые данные: `anna / demo`, `ivan / demo`, `maria / demo`.

## Возможности

- **Context header** — на всех экранах Theme workspace виден путь `Project / Design System / Theme`, версия, статус, счётчик draft changes и роль пользователя.
- **Light / Dark modes** — color tokens редактируются отдельно для Light и Dark; preview и Version snapshot сохраняют оба значения.
- **Gradient picker** — градиенты редактируются как отдельный тип визуального значения: тип, stop-значения, цвет, прозрачность, позиция и live preview.
- **Live preview** — Overview собирает компоненты на draft-значениях, а Component Editor использует отдельные previews для Button, Modal, Input, Card и остальных сущностей; Accessibility считает WCAG-контраст динамически.
- **Advisory validation с fix-suggestions** — issues не блокируют Publish; каждая проблема несёт конкретное исправление (кнопка «Fix» в Changes и рекомендации в Publish snapshot).
- **Connected impact** — Impact и Component list у токенов считаются из модели зависимостей; у компонентов показаны linked tokens с переходом к источнику.
- **Каталог из 10 компонентов** — editable / restricted / locked policy, поиск и инспектор с ограничениями.
- **Versions** — details modal с diff против предыдущей версии и «Restore as draft» (rollback значений в черновик с подтверждением).
- **Per-user drafts** — черновики (changes, undo/redo) изолированы по пользователю; `baseVersion` обнаруживает устаревший draft и предлагает rebase перед Publish.
- **Уведомления** — приглашение, смена роли, удаление доступа, запрос Editor-прав и публикация Version (toast + badge + popover).
- **Publish failure flow** — симуляция сбоя сохранения: error class, request id, retry и создание Support-запроса с prefill-контекстом.
- **Обложки и иконки** — загрузка изображений с client-side resize (canvas → WebP), чтобы не переполнять localStorage.

## Запуск

```bash
npm start
```

Откройте `http://127.0.0.1:4180`.

Прототип не фиксирует финальный UI, CLI-команды или API-контракт. Команда CLI на финальном экране помечена как пример синтаксиса. Экраны Onboarding, Documentation, color picker и gradient picker следуют дизайн-концептам из Figma (DS-BUILDER | PLAYGROUND); финальный визуальный дизайн не утверждён — см. open questions.
