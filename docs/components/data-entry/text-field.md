# TextField

> **Category** · Data Entry
> **Figma page** · `8688:468`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8688-468

Связанные компоненты: TextFieldClear (`14446:247159`), TextFieldGroup (`13943:164509`), TextFieldSlider (`22919:4905`)

---

## 1. Key Principles of Use

### What it is

TextField — однострочное поле ввода текстовых данных. Основной инпут системы.

### When to use

**Use** — для ввода имени, email, телефона, пароля, поискового запроса, числа.

**Don't use:**
- Для длинных текстов — используйте **TextArea**
- Для выбора из списка — используйте **Select** или **Autocomplete**
- Для числового диапазона — используйте **Range**

---

## 2. Anatomy

```
[Label]
┌──────────────────────────────────────────┐
│ [prefix]  placeholder / value  [suffix]  │
└──────────────────────────────────────────┘
[Hint text]
```

| Слот | Проп | Описание |
|---|---|---|
| `label` | `LabelPlacement` | Метка поля. Может быть снаружи, внутри или скрыта |
| `input` | — | Само поле ввода |
| `prefix` | — | Иконка, текст или элемент слева внутри поля |
| `suffix` | — | Иконка, текст или элемент справа |
| `hint` | `HintPlacement` | Подсказка / текст ошибки |
| `requiredMarker` | `RequiredPlacement` | Маркер обязательности |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | px | T-shirt |
|---|---|---|
| ` TextField 32 XS` | 32 | XS |
| ` TextField 40 S` | 40 | S |
| ` TextField 48 M` | 48 | M |
| ` TextField 56 L` | 56 | L |
| `TextField 64 XL` | 64 | XL |

### View (состояние валидации)

| View | Описание |
|---|---|
| `Default` | Нейтральное |
| `Error` | Ошибка валидации |
| `Warning` | Предупреждение |
| `Success` | Успешная валидация |

### LabelPlacement

| Значение | Описание |
|---|---|
| `Outer` | Лейбл над полем |
| `Inner` | Floating label внутри поля (XS не поддерживает) |
| `None` | Лейбл скрыт |

### HintPlacement

| Значение | Описание |
|---|---|
| `Outer` | Подсказка под полем |
| `Inner` | Подсказка внутри при пустом поле |

### Value (состояние заполненности)

| Значение | Описание |
|---|---|
| `Empty` | Поле пустое |
| `Single` | Однострочное значение |
| `Multiple` | Многострочное значение |

---

## 4. Sizes

| T-shirt | px | Контекст |
|---------|-----|---------|
| `XS` | 32 | Тулбары, компактные формы |
| `S` | 40 | Вторичные формы |
| `M` | 48 | Стандартные формы — **дефолт** |
| `L` | 56 | Акцентные поля |
| `XL` | 64 | Touch-first |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | `View=Default` | Нейтральное |
| `focus` | `Focused=True` | Фокус, выделение поля |
| `filled` | `Value=Single/Multiple` | Есть значение |
| `error` | `View=Error` | Ошибка |
| `warning` | `View=Warning` | Предупреждение |
| `success` | `View=Success` | Успех |
| `disabled` | `Disabled=True` | Недоступно |
| `read-only` | `ReadOnly=True` | Только чтение |
| `required` | `Required=True` | Обязательное |
| `optional` | `Optional=True` | Необязательное (маркер) |

---

## 6. Behavior

### Keyboard interaction

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Переход к полю / из поля |
| Ввод символов | Заполнение значения |
| `Escape` | Снять фокус (опционально) |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<input>` с `<label>` | — | Всегда |
| `aria-invalid="true"` | — | `View=Error` |
| `aria-describedby` | ID hint-элемента | При наличии подсказки / ошибки |
| `aria-required="true"` | — | `Required=True` |
| `readonly` | — | `ReadOnly=True` |
| `disabled` | — | `Disabled=True` |

---

## 8. Design Tokens

| Роль | SDDS Token |
|---|---|
| Фон поля | `Surfaces/Default/General/Solid/Secondary` |
| Обводка default | `Outlines/Default/General/Solid/Secondary` |
| Обводка focus | `Outlines/Default/Accent/Solid/Accent` |
| Обводка error | `Outlines/Default/Status/Solid/Error` |
| Текст значения | `Text&Icons/Default/General/Primary` |
| Лейбл (outer) | `Text&Icons/Default/General/Secondary` |
| Placeholder | `Text&Icons/Default/General/Tertiary` |
| Hint (ошибка) | `Text&Icons/Default/Status/Error` |
| Disabled фон | `Surfaces/Default/General/Solid/Tertiary` |
| Disabled текст | `Text&Icons/Default/General/Tertiary` |
