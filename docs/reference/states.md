# Reference: States

Состояния компонентов SDDS.

---

## Категории

| Категория | Состояния |
|---|---|
| Interaction | `hover` · `focus` · `active/pressed` |
| Selection | `checked` · `indeterminate` · `on/off` |
| Data | `filled` · `opened` |
| Validation (поля ввода) | `error` · `warning` · `success` |
| Semantic View (компоненты) | `negative` · `warning` · `positive` |
| Availability | `disabled` · `read-only` |
| Async | `loading` |

---

## Interaction

| Состояние | Описание | Figma | Компоненты |
|---|---|---|---|
| `default` | Начальный вид | — | Все |
| `hover` | Курсор наведён. Не означает выбор | — | Button, Chip, Badge, DropdownMenu, Tabs |
| `active/pressed` | Момент нажатия (mousedown). Не означает выбранность | — | Button, Chip, Link |
| `focus` | Фокус клавиатуры. Всегда видимое кольцо | `Focused=True` | Button, TextField, CheckBox, RadioBox, Select |

---

## Selection

| Состояние | Описание | Figma | Компоненты |
|---|---|---|---|
| `checked` | Бинарный выбор | `Value=Single` | CheckBox |
| `indeterminate` | Частично выбранное | `Value=Multiple` | CheckBox |
| `on/off` | Включено/выключено | `Turn On=on/off` | Switch |

---

## Data

| Состояние | Описание | Figma | Компоненты |
|---|---|---|---|
| `filled` | У компонента есть значение | `Value=Single/Multiple/Filled` | TextField, Select, Autocomplete |
| `opened` | Компонент раскрыт | `Opened=True` | Select, DatePicker, ComboBox |

---

## Validation (только поля ввода)

Применяются к: TextField, Select, TextArea, Autocomplete, ComboBox. Задаются через `View`.

| Состояние | Figma | Когда |
|---|---|---|
| `error` | `View=Error` | Данные невалидны (после взаимодействия) |
| `warning` | `View=Warning` | Потенциальная проблема, не блокирует |
| `success` | `View=Success` | Данные валидны |

---

## Semantic View (компоненты)

Применяются к: Button, Badge, Chip, Toast, Notification, CheckBox и др. Задаются через `View`.

| Figma | Описание |
|---|---|
| `View=Negative` | Деструктивное действие |
| `View=Warning` | Предупреждение |
| `View=Positive` | Успешное / позитивное действие |

[Чем отличается от валидации полей →](../concepts/view-vs-validation.md)

---

## Availability

| Состояние | Описание | Figma | Компоненты |
|---|---|---|---|
| `disabled` | Недоступен. Не в tab-order | `Disabled=True` | Все интерактивные |
| `read-only` | Доступен для чтения. В tab-order | `ReadOnly=True` | TextField, Select, TextArea |

[Disabled vs Read-only →](../concepts/disabled-vs-readonly.md)

---

## Async

| Состояние | Figma | Компоненты |
|---|---|---|
| `loading` | `Loading=True` | Button, IconButton |

Поведение `loading`:

- Заменяет контент на спиннер
- Блокирует повторное взаимодействие
- Фиксирует ширину (не схлопывается)
- `aria-busy="true"`

`loading` ≠ `disabled`. [Подробнее →](../guides/handle-loading.md)

---

## Комбинирование состояний

| Состояние | + `focus` | + `filled` | + `error` | + `disabled` | + `loading` |
|---|---|---|---|---|---|
| `default` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `filled` | ✓ | — | ✓ | ✓ | — |
| `error` | ✓ | ✓ | — | ✗ | — |
| `disabled` | ✗ | ✓ | ✗ | — | ✗ |
| `loading` | ✗ | — | — | ✗ | — |
| `read-only` | ✓ | ✓ | ✗ | ✗ | — |

Ключевые правила:

- `disabled` отменяет `hover`, `focus`, `active`, `error`
- `loading` отменяет `hover`, `focus`, `active`, но не `disabled`
- Поле может быть `filled` + `error` + `focus` одновременно
- `read-only` и `disabled` взаимоисключающие

---

## Визуальное наложение состояний

### Поле ввода: `filled` + `error` + `focus`

| Слой | Токен |
|---|---|
| Фон поля | `Surfaces/Default/Status/Transparent/Negative` |
| Обводка | `Outlines/Default/Status/Solid/Negative` |
| Кольцо фокуса | компонентный токен фокус-кольца |
| Текст значения | `Text&Icons/Default/General/Primary` |
| Текст ошибки | `Text&Icons/Default/Status/Negative` |

`error` определяет цвет фона/обводки, `focus` рисует кольцо сверху — они не конфликтуют.

### Кнопка: `loading`

Спиннер заменяет весь контент. Фон остаётся от `default` — `loading` не вводит свой цвет фона.

---

## Правила именования

- `active` ≠ `selected` — активация ≠ выбор
- `checked` ≠ `selected` — CheckBox использует `checked`
- Switch использует `on/off`, не `checked`
- `filled` ≠ `valid` — наличие значения ≠ корректность
- `disabled` ≠ `read-only`
- `loading` ≠ `disabled`
- Кольцо фокуса всегда поверх остальных состояний
- Не показывайте `Error`/`Warning` до того, как пользователь коснулся поля
