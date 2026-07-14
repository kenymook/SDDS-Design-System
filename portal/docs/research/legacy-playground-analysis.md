# DS Builder Playground: анализ ранней версии

> Источник: Figma `DS BUILDER | PLAYGROUND`, frame `DS Builder Service / Fresh UX architecture`.
> Статус: reference; не является актуальной IA.

## Вывод

Ранняя версия хорошо прорабатывает рабочее пространство одной дизайн-системы, состояния интерфейса и permissions UX. Она не отражает актуальную иерархию `Personal Space → Project → Design System → Theme` и поэтому используется как библиотека UX-паттернов, а не как источник продуктовой структуры.

## Сохраняем

- Login и invalid credentials.
- Карточки, status badges, skeleton и empty states.
- Card actions: open, copy link, rename, duplicate и delete с учётом permissions.
- Viewer mode, disabled reasons и Request access.
- Validation summary, changelog, history и publication result.
- Toast/error/success patterns.
- Palette selection как стартовую настройку Theme.

## Переносим на другой уровень

| Ранняя версия | Актуальная модель |
|---|---|
| Список «Мои дизайн-системы» | Personal Space: My Projects / Shared With Me |
| Palette при Create Design System | Palette при Create Theme |
| Tokens / Typography / Sizes в корне системы | Colors / Sizes / Fonts внутри Theme |
| Participants внутри Design System | Members внутри Project Settings |
| Invite из карточки Design System | Project Membership |
| Design System workspace | Project → Design System → Theme hierarchy |

## Удаляем или заменяем

- NPM package заменяется на `Publication → Version → Published Configuration → CLI`.
- Web/Mobile platform template удаляется: каждая Design System поддерживает все платформы.
- Review/Approve не добавляются в MVP.
- Validation issues не блокируют Publish; Error/Critical требуют подтверждения риска.

## Решение для прототипа

В актуальный prototype переносятся palette selection для Theme, информативные карточки/statuses и Viewer request-access. Старый shell и плоский список Design Systems не используются.

