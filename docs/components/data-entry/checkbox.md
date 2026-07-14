# CheckBox

> **Category** · Data Entry
> **Figma page** · `8806:63106`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8806-63106

Связанный компонент: CheckBoxGroup (`10560:111515`)

---

## 1. Key Principles of Use

### What it is

CheckBox — элемент выбора одного или нескольких значений из набора. Поддерживает три состояния: снято, выбрано, частично выбрано (indeterminate).

### When to use

**Use** — для независимых опций, которые можно включать/выключать раздельно: настройки, фильтры, согласие с условиями.

**Don't use** — для выбора одного из взаимоисключающих вариантов (используйте **RadioBox**).

---

## 2. Anatomy

| Слот | Проп | Описание |
|---|---|---|
| `control` | — | Сам флажок |
| `label` | `hasLabel=Yes` | Текстовая метка |
| `description` | `hasDescription=Yes` | Дополнительное описание под лейблом |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | Размер |
|---|---|
| `CheckBoxS` | S |
| `CheckBoxM` | M |
| `CheckBoxL` | L |

### Value (состояние выбора)

| Value | Семантика | CSS |
|---|---|---|
| `Empty` | Не выбран | `unchecked` |
| `Single` | Выбран | `checked` |
| `Multiple` | Частично (indeterminate) | `indeterminate` |

### View

| View | Описание |
|---|---|
| `Default` | Стандартный |
| `Negative` | Ошибка / невалидный выбор |

> **Внимание:** `hasLabel` и `hasDescription` используют `Yes/No` вместо стандартных `True/False`.

> **Внимание:** в `CheckBoxS` `Disabled=false/true` (нижний регистр), в M и L — `False/True`.

---

## 4. Sizes

| T-shirt | Контекст |
|---------|---------|
| `S` | Компактные формы, тулбары |
| `M` | Стандартные формы — **дефолт** |
| `L` | Touch-first |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `unchecked` | `Value=Empty` | Не выбран |
| `checked` | `Value=Single` | Выбран |
| `indeterminate` | `Value=Multiple` | Частично |
| `negative` | `View=Negative` | Ошибка / невалидный выбор |
| `disabled` | `Disabled=True` | Недоступен |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<input type="checkbox">` | — | Всегда |
| `<label>` | — | `hasLabel=Yes` |
| `aria-checked="mixed"` | — | `Value=Multiple` (indeterminate) |
| `aria-invalid="true"` | — | `View=Negative` |
| `disabled` | — | `Disabled=True` |
