# Reference: Props

Единый словарь пропов компонентов SDDS.

---

## Категории

| Категория | Пропы |
|---|---|
| Appearance | `View` · `Shape` |
| Layout | `LabelPlacement` · `HintPlacement` · `RequiredPlacement` · `Stretching` · `Spacing` |
| Slots | `ContentLeft` · `ContentRight` · `ContentBefore` · `ContentAfter` · `hasLabel` · `hasDescription` · `hasClose` |
| Data | `Value` · `Opened` · `EmptyState` |
| Availability | `Disabled` · `ReadOnly` · `Required` · `Optional` |
| Interaction | `Focused` · `Turn On` |
| Async | `Loading` |
| Component-specific | `Status` · `isCirculed` · `ToggleSize` · `Clip` · `Strech` · `hasDivider` |

---

## Appearance

### `View`

Семантическая вариация компонента. **Допустимые значения зависят от типа компонента** — см. [concepts/view-vs-validation.md](../concepts/view-vs-validation.md).

**Компоненты** (Button, Badge, Chip, Toast, Notification…):

| Значение | Смысл |
|---|---|
| `Default` | Нейтральный |
| `Accent` | Брендовый акцент |
| `Secondary` | Вторичный |
| `Positive` | Успешное действие |
| `Warning` | Предупреждение |
| `Negative` | Деструктивное действие |
| `Info` | Информационный |
| `Clear` | Прозрачный фон |
| `Dark` / `Black` / `White` | Фиксированные цвета (не зависят от темы) |
| `Custom` | Произвольный (только Badge) |
| `Checked` | Выбранное (только IconButton) |

**Поля ввода** (TextField, Select, TextArea, Autocomplete…):

| Значение | Смысл |
|---|---|
| `Default` | Нейтральное |
| `Error` | Ошибка валидации |
| `Warning` | Предупреждение |
| `Success` | Валидация успешна |

`Warning` встречается в обоих наборах — единственное общее значение.

### `Shape`

| Значение | Описание | Компоненты |
|---|---|---|
| `Default` | Скругление по токену `Numbers` | Badge, Chip, IconButton |
| `Pilled` | Полностью скруглённый | Badge, Chip, IconButton |

---

## Layout

### `LabelPlacement`

| Значение | Описание |
|---|---|
| `Outer` | Лейбл над полем (дефолт) |
| `Inner` | Floating label внутри поля |
| `None` | Лейбл скрыт (требует `aria-label`) |

Компоненты: TextField, Select, TextArea, Autocomplete, ComboBox.

### `HintPlacement`

| Значение | Описание |
|---|---|
| `Outer` | Hint под полем |
| `Inner` | Hint внутри поля при пустом значении |

Компоненты: TextField, Select, TextArea.

### `RequiredPlacement`

| Значение | Описание |
|---|---|
| `Left` | Маркер слева от лейбла |
| `Right` | Маркер справа от лейбла |
| `None` | Маркер скрыт |

Активен только при `Required=True`.

### `Stretching`

| Значение | Описание |
|---|---|
| `Auto` | Ширина по контенту |
| `Fixed` | Фиксированная ширина |

Компоненты: BasicButton.

### `Spacing`

| Значение | Описание |
|---|---|
| `Packed` | Иконки и текст прижаты друг к другу |
| `Space Between` | Иконки прижаты к краям, текст по центру |

Компоненты: BasicButton (актуально при `Stretching=Fixed`).

---

## Slots

### `ContentLeft`

Boolean. Слот для иконки слева. Компоненты: Button, Badge, Chip, TextField.

### `ContentRight`

Enum (`None/Value/Icon`) для BasicButton, boolean для остальных. Слот для иконки/значения справа.

### `ContentBefore`

Enum (`Empty/Icon/Avatar`). Слот перед основным контентом. Только Chip.

### `ContentAfter`

Boolean. Слот после контента. Только Chip.

### `hasLabel`

Видимость лейбла рядом с контролом.

| Тип | Значения | Компоненты |
|---|---|---|
| boolean | `True/False` | Switch |
| enum | `Yes/No` ⚠️ | CheckBox |

### `hasDescription`

Видимость дополнительного описания.

| Тип | Значения | Компоненты |
|---|---|---|
| enum | `Yes/No` ⚠️ | CheckBox |

### `hasClose`

Boolean. Кнопка закрытия / удаления. Компоненты: Chip, Toast.

---

## Data

### `Value`

| Значение | Смысл | Компоненты |
|---|---|---|
| `Empty` | Нет значения | TextField, Select, TextArea |
| `Single` | Одно значение / отмечен | TextField, Select, CheckBox |
| `Multiple` | Несколько / частично отмечен | TextField, Select, CheckBox |
| `Filled` | Есть значение | Select, Autocomplete |

`Value` ≠ `View` — наличие значения не означает его валидность.

### `Opened`

Boolean. Компонент раскрыт. Компоненты: Select, DatePicker, ComboBox, Autocomplete.

### `EmptyState`

Boolean. Список пуст. Компоненты: Select.

---

## Availability

### `Disabled`

Boolean. Компонент недоступен. Исключается из tab-order. Применяется ко всем интерактивным компонентам.

Отменяет `hover`, `focus`, `active`, `error`.

### `ReadOnly`

Boolean. Компонент только для чтения. Остаётся в tab-order. Применяется к: TextField, Select, TextArea.

`ReadOnly` ≠ `Disabled` — [подробнее](../concepts/disabled-vs-readonly.md).

### `Required`

Boolean. Поле обязательно. Применяется к: TextField, Select, TextArea, Autocomplete.

`Required` — атрибут данных, **не** триггер валидации.

### `Optional`

Boolean. Поле необязательно. Используется в формах, где большинство полей обязательны.

---

## Interaction

### `Focused`

Boolean. Компонент в фокусе клавиатуры. В реализации — нативный `:focus`, в Figma — симулированное состояние.

### `Turn On`

| Значение | Описание |
|---|---|
| `on` | Включён |
| `off` | Выключен |

Только Switch.

⚠️ Имя содержит пробел — несоответствие конвенции.

---

## Async

### `Loading`

Boolean. Компонент ожидает завершения async-операции. Только Button, IconButton.

`Loading` ≠ `Disabled`. Подробнее — [how-to/handle-loading.md](../guides/handle-loading.md).

---

## Component-specific

### `Status` (Avatar)

| Значение | Описание |
|---|---|
| `Default` | Без статуса |
| `Active` | Онлайн |
| `Inactive` | Офлайн |

### `isCirculed` (Avatar)

Boolean. Кольцо вокруг аватара.

### `ToggleSize` (Switch)

| Значение | px |
|---|---|
| `28 L` | 28px |
| `20 S` | 20px |

### `Clip` (Tabs)

| Значение | Описание |
|---|---|
| `None` | Вкладки обрезаются |
| `Show More` | Кнопка «Ещё» |
| `Scroll` | Горизонтальная прокрутка |

### `Strech` (Tabs) ⚠️

Boolean. Вкладки растягиваются по ширине. Опечатка в имени (`Stretch`).

### `hasDivider` (Tabs)

Boolean. Разделитель под панелью.

---

## Известные несоответствия конвенции

| Проп | Проблема | Компонент |
|---|---|---|
| `hasLabel`, `hasDescription` | `Yes/No` вместо `True/False` | CheckBox |
| `Turn On` | Пробел в имени | Switch |
| `Strech` | Опечатка (должно быть `Stretch`) | Tabs |
| `View=Seccondary` | Опечатка (лишняя `c`) | Button 24 XXS |

---

## Связано

- [Props ↔ ARIA mapping](aria.md) — соответствие пропов ARIA-атрибутам
- [States](states.md) — пропы состояний
- [concepts/slots.md](../concepts/slots.md) — слотовая модель
- [concepts/view-vs-validation.md](../concepts/view-vs-validation.md) — два словаря для `View`
