# [Component Name]

> **Category** · [Data Display / Data Entry / Overlay / Navigation]
> **Figma page** · `[page-id]`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=[page-id]

---

## 1. Key Principles of Use

### What it is

[Одно–два предложения: что делает компонент и чем отличается от похожих.]

### When to use

**Use** — [конкретные сценарии использования]

**Don't use** — [когда нужен другой компонент, назовите альтернативы явно]

### Core principles

- **[Принцип 1]** — [пояснение]
- **[Принцип 2]** — [пояснение]

---

## 2. Anatomy

| Слот / Часть | Обязательность | Описание |
|---|---|---|
| `[slot-name]` | required | [что это, какое содержимое принимает] |
| `[slot-name]` | optional | [что это, когда используется] |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | Описание |
|---|---|
| `[ComponentName] [px] [T-shirt]` | [контекст применения] |

### View (визуальный стиль)

| View | Назначение |
|---|---|
| `Default` | Нейтральный стиль |
| `Accent` | Акцентный / основной бренд |
| `[другие]` | [назначение] |

### Modifiers

| Проп | Значения | Описание |
|---|---|---|
| `[PropName]` | [Значение A] / [Значение B] | [что делает] |

---

## 4. Sizes

| T-shirt | px | Контекст |
|---------|-----|---------|
| `XS` | 32 | [где используется] |
| `S` | 40 | [где используется] |
| `M` | 48 | Дефолт |
| `L` | 56 | [где используется] |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | — | Базовый вид |
| `hover` | — | Курсор над элементом |
| `focus` | `Focused=True` | Фокус клавиатуры |
| `disabled` | `Disabled=True` | Недоступен |
| `loading` | `Loading=True` | Ожидание (если применимо) |
| `[другое]` | `[проп]` | [описание] |

### Допустимые комбинации

| Комбинация | Допустимо | Примечание |
|---|---|---|
| `hover` + `focus` | ✓ | Tab-навигация при наведении |
| `disabled` + любое интерактивное | ✗ | disabled отменяет все взаимодействия |

---

## 6. Behavior

### Keyboard interaction

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение фокуса |
| `Enter` | [действие] |
| `Space` | [действие] |
| `Escape` | [действие, если применимо] |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `role` | `[role]` | [условие] |
| `aria-label` | `[описание]` | [когда нет видимого label] |
| `aria-[attr]` | `[значение]` | [условие] |

---

## 8. Design Tokens

### [Группа токенов]

| Роль | SDDS Token |
|---|---|
| Фон default | `Surfaces/Default/General/Solid/[Вариант]` |
| Текст | `Text&Icons/Default/General/Primary` |
| Обводка | `Outlines/Default/General/Solid/[Вариант]` |
| Disabled фон | `Surfaces/Default/General/Solid/Tertiary` |
| Disabled текст | `Text&Icons/Default/General/Tertiary` |

---

<!-- CHECKLIST
[ ] Все Figma Component Sets перечислены в разделе 3
[ ] Все размеры из sizes.md проверены
[ ] Все состояния из states.md перечислены или явно исключены
[ ] Figma page ID актуален
[ ] Accessibility атрибуты заполнены
-->
