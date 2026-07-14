# Reference: Keyboard

Клавиатурные паттерны компонентов SDDS.

---

## Принципы

- `Tab` → следующий интерактивный элемент
- `Shift+Tab` → предыдущий
- `Disabled=True` исключает из tab-order
- `ReadOnly=True` оставляет в tab-order
- Focus ring обязателен и виден всегда

---

## Activation

| Триггер | Действие |
|---|---|
| `Click` | Активация |
| `Enter` | Активация |
| `Space` | Активация для button-like компонентов |

Click, Enter и Space не запускают разные сценарии — это одно действие.

---

## Паттерны по семействам

### Button-like (BasicButton, IconButton, EmbeddedButton, LinkButton)

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение |
| `Enter` | Активация |
| `Space` | Активация |

### Field-like (TextField, TextArea, NumberInput)

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение |
| Текстовый ввод | Стандартный |
| `Enter` (TextField) | Submit формы |
| `Enter` (TextArea) | Перенос строки |

### List selection (RadioBox Group, Segment, Select options)

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение между группами |
| `Arrow keys` | Перемещение внутри группы |
| `Enter` / `Space` | Выбор |
| `Escape` | Закрытие (если открыто) |

### Range (Slider, Range)

| Клавиша | Действие |
|---|---|
| `Tab` | Перемещение к следующему |
| `Arrow keys` | Изменение значения на 1 шаг |
| `Home` | Минимальное значение |
| `End` | Максимальное значение |

### Tabs

| Клавиша | Действие |
|---|---|
| `Tab` | Перемещение к Tabs (один раз) |
| `Arrow Left/Right` | Перемещение между вкладками (Horizontal) |
| `Arrow Up/Down` | Перемещение между вкладками (Vertical) |
| `Home` / `End` | Первая / последняя вкладка |
| `Enter` / `Space` | Активация вкладки |

---

## Open / Close

**Открывается по:** `Click`, `Enter`, `Space`. Иногда `ArrowDown` (Select, ComboBox).

**Закрывается по:**

- `Escape`
- Click outside
- Выбор опции (если сценарий одношаговый)
- Явное действие (Close, Cancel)

После закрытия — фокус возвращается на триггер.

---

## Modal / Drawer / BottomSheet

### При открытии

- Фокус перемещается на первый интерактивный элемент или на сам контейнер
- Tab/Shift+Tab **зациклены** внутри — не выходят за пределы

### Внутри

- `Escape` закрывает компонент
- Tab проходит интерактивные элементы по порядку
- Если есть форма — `Enter` отправляет её

### При закрытии

- Фокус возвращается на элемент, открывший компонент
- Если триггер удалён — фокус на ближайший логический элемент

---

## Составные компоненты — куда идёт фокус

**Фокус остаётся на триггере:**

- Select
- DatePicker
- ComboBox
- Popover

**Фокус переходит внутрь:**

- CheckBoxGroup
- RadioBox Group
- CalendarGrid
- Tabs
- TreeSelect

---

## Touch-эквиваленты

| Mouse / Keyboard | Touch |
|---|---|
| `click` | `tap` |
| `hover` | — (не существует на touch) |
| `mousedown` длительное | `long press` (нестандартно, избегать) |
| `scroll` | `swipe` |

**Нет hover на touch.** Не прячьте критичный контент за hover-состоянием.

### Swipe-паттерны

| Компонент | Swipe |
|---|---|
| Drawer | Закрытие свайпом в сторону |
| BottomSheet | Закрытие свайпом вниз |
| Carousel | Переключение свайпом по горизонтали |

---

## Drag

| Компонент | Drag | Keyboard-альтернатива |
|---|---|---|
| Slider | Drag ползунка | Arrow keys, Home, End |
| Range | Drag двух ползунков | Tab между ползунками, Arrow keys |
| Dropzone | Drag & drop файлов | Click для открытия диалога |

Drag всегда требует keyboard-альтернативы — без неё компонент нарушает WCAG 2.1 SC 2.1.1.

---

## Связано

- [ARIA](aria.md) — атрибуты доступности
- [States](states.md) — `disabled`, `read-only`, `focus`
- [how-to/make-it-accessible.md](../guides/make-it-accessible.md) — чек-лист доступности
