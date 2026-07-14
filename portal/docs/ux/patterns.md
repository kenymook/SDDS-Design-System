# UX-паттерны DS Builder

> Проверено прототипом: [portal/apps/portal-flow-prototype](../../apps/portal-flow-prototype/README.md).

## Context header

Всегда показывать `Project / Design System / Theme / Version / Status`.

Реализация в прототипе: sticky-бар на всех экранах Theme workspace с кликабельными сегментами
`Project / Design System / Theme`, версией, статусом (Draft/Published), счётчиком draft-изменений
(ведёт в Changes) и ролью пользователя.

## Safe editing

```text
Edit → old/new → preview → validation → Changes → revert or publish
```

Validation информирует о рисках, но не блокирует Publish. Каждая issue сопровождается
конкретной рекомендацией исправления (fix suggestion), применяемой в один клик из Changes
или из Publish snapshot.

## Inspector

Показывает name, value, inherited value, editability, constraints, usage, affected entities, validation и history.

Секции инспектора адаптируются под тип токена:

| Группа | Секции |
|---|---|
| Colors | Light/Dark значения, color picker, Subtheme, Base value |
| Sizes | Value с единицами, Constraints (допустимый диапазон, признак «в пределах / вне диапазона»), Base value |
| Fonts | Value, живой текстовый preview шрифта, Base value |

Base value показывает унаследованное значение SDDS с меткой `inherited` / `overridden`.
Impact и Component list считаются из модели зависимостей (themes / tokens / components /
instances), элементы списка ведут к компоненту-потребителю.

## Color picker

Выбор цвета для Colors-токенов выполняется через popover у свотча значения:

- вкладка **Custom** — SV-область, hue- и alpha-слайдеры, форматы Hex / RGB / HSL, копирование значения;
- вкладка **Library** — пресеты палитр SDDS;
- каждое изменение проходит стандартный цикл Changes → validation → Publish и поддерживает undo/redo;
- для Viewer picker недоступен.

## Component editability

| Статус | Поведение |
|---|---|
| Editable | Свойство можно изменить |
| Restricted | Изменение разрешено в заданных пределах |
| Locked | Свойство доступно только для просмотра |

Состав editable/restricted/locked properties должен быть определён отдельно.
В инспекторе компонента показываются linked tokens с переходом к источнику значения.

## Diff and impact

Показывать entity, type, old/new, mode, author, validation, affected components/themes, usage и Revert.
Affected считается из модели зависимостей, а не задаётся статично.

## Validation

Field-level, entity-level, page-level, theme-level и publication-level issues используют единый severity. Error/Critical требуют подтверждения риска, но не блокируют Publish.

Accessibility-проверка контраста считает WCAG-ratio из фактических значений токенов
(primary / onPrimary и производные пары) и предлагает исправление при провале AA.

## Draft isolation

Черновики (changes, undo/redo) изолированы по пользователю в рамках Theme.
Tokens, components, Versions и Published Configuration — общие для Project.
Viewer видит только опубликованные значения, а не чужие черновики.

## Empty states

| Ситуация | Действия |
|---|---|
| Нет Project | Request access / Create project |
| Нет Design System | Create design system |
| Нет Theme | Create theme |
| Нет изменений | Open editor |
| Нет результатов | Clear filters |

## Unsaved and context switch

Draft-изменения персистентны: восстанавливаются при повторном входе пользователя и не
теряются при переключении Project/Design System/Theme. Предупреждение требуется при
переносе или удалении Theme с неопубликованными изменениями и при уходе с формы настроек
с несохранёнными полями.

## Notifications

Единый канал (in-app + email) для событий: приглашение в Project, смена роли, удаление
доступа, запрос Editor-прав и публикация Version. Непрочитанные уведомления — badge на
колокольчике и индикатор на иконке Project в rail; toast при первом входе; открытие
уведомления ведёт в связанный Project.

## Loading and errors

Использовать skeleton, inline validation progress и Publish progress. Отдельно обрабатывать failed loading, save и publish. Ошибки генерации target files показываются CLI, а не Builder.

Failed publish показывает error class, причину, request id и время, предлагает Retry и
создание Support-запроса с предзаполненным контекстом. Draft-изменения при сбое не теряются.

## Read-only

Viewer видит значения и историю, но поля read-only. Недоступные действия скрыты или disabled с объяснением.
Viewer может отправить Owner запрос на повышение доступа через `Request edit access`.
Одобрение запроса назначает роль Editor и уведомляет запросившего.

## Confirmation

Подтверждение требуется для Publish with issues, discard/revert all changes, archive Project/Design System, remove member и rollback (восстановление значений Version как draft).
