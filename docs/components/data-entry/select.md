# Select

> **Category** · Data Entry
> **Figma page** · `12012:74693`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=12012-74693

---

## 1. Key Principles of Use

### What it is

Select — выпадающий список для выбора одного или нескольких значений из предустановленного набора.

### When to use

**Use** — когда вариантов более 5 и они не помещаются на экране. Для форм выбора страны, категории, типа.

**Don't use:**
- До 5 вариантов — используйте **RadioBox** (Single) или **CheckBox** (Multiple)
- Для поиска по длинному списку — используйте **Autocomplete** или **ComboBox**

---

## 2. Anatomy

Аналогично TextField, дополнительно:

| Слот | Описание |
|---|---|
| `trigger` | Кнопка открытия списка (SelectButton) |
| `dropdown` | Выпадающий список опций |
| `option` | Отдельная опция в списке |

---

## 3. Variants

### Figma Component Sets

Именование: `Select/{Single|Multiple}/Select{T-shirt}`

| Имя | Режим | T-shirt |
|---|---|---|
| `Select/Single/Select32XS` | Single | XS |
| `Select/Single/Select40S` | Single | S |
| `Select/Single/Select48M` | Single | M |
| `Select/Single/Select56L` | Single | L |
| `Select/Single/Select64XL` | Single | XL |
| `Select/Multiple/Select32XS` | Multiple | XS |
| `Select/Multiple/Select40S` | Multiple | S |
| `Select/Multiple/Select48M` | Multiple | M |
| `Select/Multiple/Select56L` | Multiple | L |
| `Select/Multiple/Select64XL` | Multiple | XL |

Отдельно: `SelectButton/{Single|Multiple}/SelectButton{T-shirt}` — изолированный триггер.

### Режимы

| Режим | Описание |
|---|---|
| `Single` | Выбор одного значения |
| `Multiple` | Выбор нескольких значений |

### Пропы (аналогично TextField)

| Проп | Значения |
|---|---|
| `LabelPlacement` | Outer / Inner / None (XS: только Outer/None) |
| `Value` | Empty / Filled |
| `Opened` | True / False |
| `EmptyState` | True / False — нет результатов |
| `Disabled` | True / False |
| `ReadOnly` | True / False |
| `Required` | True / False (осторожно: mixed case в разных сетах) |
| `RequiredPlacement` | None / Left / Right |

---

## 4. Sizes

Аналогично TextField: XS(32) · S(40) · M(48) · L(56) · XL(64).

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | `Value=Empty, Opened=False` | Пустое, закрытое |
| `filled` | `Value=Filled` | Есть выбранное значение |
| `opened` | `Opened=True` | Список раскрыт |
| `empty-state` | `EmptyState=True` | Нет подходящих вариантов |
| `disabled` | `Disabled=True` | Недоступен |
| `read-only` | `ReadOnly=True` | Только чтение |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `role="combobox"` | — | На триггере |
| `aria-expanded` | `true` / `false` | `Opened=True/False` |
| `aria-haspopup="listbox"` | — | Всегда |
| `role="listbox"` | — | На контейнере списка |
| `role="option"` | — | На каждой опции |
| `aria-selected` | `true` / `false` | На опциях |
