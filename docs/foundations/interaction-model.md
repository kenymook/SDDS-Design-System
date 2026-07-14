# Interaction Model

Общие правила взаимодействия компонентов SDDS.

**См. также:** `states.md` — состояния компонентов, `validation-model.md` — валидация форм, `accessibility.md` — доступность.

---

## Принципы

- **Native first** — если нативный HTML-элемент даёт корректное поведение, используйте его как основу
- **Одно действие — один результат** — Click, Enter и Space не запускают разные сценарии
- **Keyboard parity** — всё доступное мышью доступно с клавиатуры
- **Predictable focus** — пользователь понимает, где фокус и куда он перейдёт

---

## Focus model

- `Tab` → следующий интерактивный элемент
- `Shift+Tab` → предыдущий интерактивный элемент
- `Disabled=True` — элемент исключается из tab-order
- `ReadOnly=True` — элемент остаётся в tab-order
- Focus ring обязателен и не зависит только от цвета

### Составные компоненты

**Фокус остаётся на триггере:**
- Select, DatePicker, ComboBox, Popover

**Фокус переходит внутрь:**
- CheckBoxGroup, RadioBox Group, CalendarGrid, Tabs, TreeSelect

---

## Activation model

| Триггер | Действие |
|---------|----------|
| `Click` | Активация |
| `Enter` | Активация |
| `Space` | Активация для button-like контролов |

---

## Selection patterns

### Единственный выбор
RadioBox, Segment, Tabs — выбирается один вариант. Навигация стрелками. Состояние: `checked` / `selected`.

### Множественный выбор
CheckBox, Select Multiple, Chip — каждый элемент независим. Состояние: `checked`.

### Switch
Switch — мгновенное переключение без submit. Состояние: `Turn On=on/off`.

---

## Open / Close model

**Открывается по:** Click, Enter, Space, иногда ArrowDown (Select, ComboBox)

**Закрывается по:**
- `Escape`
- Click outside
- Выбор опции (если сценарий одношаговый)
- Явное действие (Close, Cancel)

**После закрытия:** фокус возвращается на триггер.

---

## Keyboard patterns

### Button-like (BasicButton, IconButton, EmbeddedButton)
`Tab` / `Shift+Tab`, `Enter`, `Space`

### Field-like (TextField, TextArea, NumberInput)
`Tab` / `Shift+Tab`, текстовый ввод

### List selection (RadioBox Group, Segment, Select options)
`Tab` / `Shift+Tab`, `Arrow keys`, `Enter` / `Space`, `Escape`

### Range (Slider, Range)
`Tab`, `Arrow keys`, `Home`, `End`

---

## Disabled vs Read-only

| | Disabled | Read-only |
|---|---|---|
| Принимает ввод | ✗ | ✗ |
| Открывается | ✗ | ✗ |
| В tab-order | ✗ | ✓ |
| Значение видимо | ✓ | ✓ |
| Значение копируется | — | ✓ |
| Figma-проп | `Disabled=True` | `ReadOnly=True` |

---

## Touch patterns

На мобильных платформах мышь заменяется касанием. Ключевые отличия:

| Действие | Mouse | Touch |
|---|---|---|
| Активация | `click` | `tap` |
| Наведение | `hover` | — (не существует) |
| Удержание | `mousedown` длительное | `long press` (нестандартно, избегать) |
| Прокрутка | `scroll` | `swipe` |

**Нет hover на touch.** Компоненты не должны прятать критичный контент за hover-состоянием — на мобильных оно недостижимо.

**Swipe-паттерны:**
- Drawer, BottomSheet — закрываются свайпом в сторону/вниз
- Carousel — переключение свайпом по горизонтали

---

## Drag patterns

| Компонент | Действие | Keyboard-альтернатива |
|---|---|---|
| Slider | Drag ползунка | Arrow keys, Home, End |
| Range | Drag двух ползунков | Tab между ползунками, Arrow keys |
| Dropzone | Drag & drop файлов | Click для открытия диалога файлов |

Drag всегда требует keyboard-альтернативы — компонент без неё нарушает WCAG 2.1 SC 2.1.1.

---

## Async feedback

### Loading
Блокирует повторный запуск. Не должен менять размер компонента. Визуально заметен (спиннер вместо иконки или лейбла).

### Ошибка после async-операции
Если операция завершилась ошибкой:
- Компонент возвращается из `loading` в исходное состояние
- Ошибка отображается через Toast (`View=Negative`) или `View=Error` на поле — в зависимости от контекста
- Фокус возвращается на элемент, который инициировал операцию
- Кнопка снова становится интерактивной — пользователь может повторить попытку
