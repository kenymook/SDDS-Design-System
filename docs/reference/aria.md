# Reference: ARIA

ARIA-роли и атрибуты по компонентам SDDS. Целевой уровень: WCAG 2.1 AA.

---

## Маппинг пропов на ARIA

Figma-пропы и React-пропы транслируются в ARIA-атрибуты автоматически:

| Проп | ARIA-атрибут |
|---|---|
| `Required=True` | `aria-required="true"` |
| `View=Error` | `aria-invalid="true"` |
| `Disabled=True` | `disabled` (нативный) или `aria-disabled="true"` |
| `Loading=True` | `aria-busy="true"` |
| `Opened=True` | `aria-expanded="true"` |
| `Value=Multiple` (CheckBox) | `aria-checked="mixed"` |
| `ReadOnly=True` | `readonly` (нативный) или `aria-readonly="true"` |

---

## Действия

| Компонент | Роль / семантика | Обязательные атрибуты |
|---|---|---|
| BasicButton, EmbeddedButton | `<button>` | — |
| LinkButton | `<a>` или `<button role="link">` | `href` для `<a>` |
| IconButton | `<button>` | `aria-label` (нет видимого текста) |

---

## Ввод данных

| Компонент | Роль / семантика | Обязательные атрибуты |
|---|---|---|
| TextField | `<input>` + `<label>` | `id` + `for` или `aria-label` |
| TextArea | `<textarea>` + `<label>` | `id` + `for` |
| CheckBox | `<input type="checkbox">` | `aria-checked` для indeterminate |
| RadioBox | `<input type="radio">` | обёртка `role="radiogroup"` |
| Switch | `<input type="checkbox" role="switch">` | `aria-checked` |
| Select | `role="combobox"` | `aria-expanded`, `aria-haspopup="listbox"` |
| Autocomplete | `role="combobox"` | `aria-expanded`, `aria-autocomplete` |
| ComboBox | `role="combobox"` | `aria-expanded`, `aria-controls` |
| Slider | `role="slider"` | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Range | `role="slider"` × 2 | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` на каждом |
| NumberInput | `<input type="number">` | `aria-label` если нет видимого лейбла |

---

## Навигация

| Компонент | Роль / семантика | Обязательные атрибуты |
|---|---|---|
| Tabs | `role="tablist"` / `role="tab"` / `role="tabpanel"` | `aria-selected`, `aria-controls` |
| BreadCrumbs | `<nav aria-label="breadcrumb">` + `<ol>` | `aria-current="page"` |
| Pagination | `<nav aria-label="pagination">` | `aria-current="page"` |
| Steps | `role="list"` или `<ol>` | `aria-current="step"` |
| Tree | `role="tree"` / `role="treeitem"` | `aria-expanded` на раскрываемых |
| Accordion | `<button>` + `role="region"` | `aria-expanded`, `aria-controls` |

---

## Наложения

| Компонент | Роль / семантика | Обязательные атрибуты |
|---|---|---|
| Modal | `role="dialog"` | `aria-modal="true"`, `aria-labelledby` |
| Drawer | `role="dialog"` | `aria-modal="true"`, `aria-label` |
| BottomSheet | `role="dialog"` | `aria-modal="true"`, `aria-label` |
| Tooltip | `role="tooltip"` | `aria-describedby` на триггере |
| Popover | `role="dialog"` или `role="region"` | `aria-expanded` на триггере |
| Toast | `role="status"` или `role="alert"` | `aria-live` |
| Notification | `role="alert"` или `role="status"` | `aria-live` |
| ProgressBar | `role="progressbar"` | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |

---

## Отображение

| Компонент | Роль / семантика |
|---|---|
| Note | `role="note"` |
| Badge (счётчик) | `aria-label` со значением (например, «5 уведомлений») |
| Spinner / Loader | `role="status"` + `aria-label="Загрузка"` |

---

## aria-live для уведомлений

| Компонент | `aria-live` | `aria-atomic` |
|---|---|---|
| Toast `View=Negative` | `assertive` | `true` |
| Toast `View=Default` / `View=Positive` | `polite` | `true` |
| Notification | `polite` | `true` |
| Loader / Spinner | `status` | — |

`assertive` **прерывает** текущее чтение скринридером — только для критичных ошибок. Для всего остального — `polite`.

---

## Focus trap

Modal, Drawer, BottomSheet захватывают фокус при открытии:

**При открытии:**

- Фокус → первый интерактивный элемент или сам контейнер
- Tab / Shift+Tab зациклены внутри

**При закрытии:**

- Фокус → элемент, открывший компонент
- Если триггер удалён — фокус на ближайший логический элемент

`Escape` всегда закрывает.

---

## Контрастность

| Элемент | Минимум |
|---|---|
| Обычный текст (< 18pt) | 4.5:1 |
| Крупный текст (≥ 18pt / bold ≥ 14pt) | 3:1 |
| UI-компоненты и иконки | 3:1 |
| Disabled-состояние | Исключение WCAG 1.4.3 |

---

## Touch-зоны

Минимум: **44×44px** (WCAG 2.5.8). Размеры XXS / XS меньше — для них зона касания расширяется невидимым padding.

---

## Правила

- Не дублируйте роли на нативных элементах (`<button role="button">` — лишнее)
- IconButton без видимого текста — всегда `aria-label`
- Disabled — нативный `disabled` или `aria-disabled="true"`
- Loading — `aria-busy="true"`, элемент остаётся в tab-order
- Не используйте `<div>` или `<span>` для интерактивных элементов

---

## Связано

- [Keyboard](keyboard.md) — клавиатурные паттерны
- [Props](props.md) — пропы и их соответствие ARIA
- [how-to/make-it-accessible.md](../guides/make-it-accessible.md) — чек-лист доступности
