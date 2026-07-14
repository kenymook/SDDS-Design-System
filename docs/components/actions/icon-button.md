# IconButton

> **Category** · Data Entry → Actions
> **Figma page** · `8923:75680` (в составе страницы Button)
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680

---

## 1. Key Principles of Use

### What it is

IconButton — кнопка без текстовой метки, только с иконкой. Используется в тулбарах, карточках, строках таблиц — где пространство ограничено или иконка однозначно передаёт смысл.

### When to use

**Use** — для действий, смысл которых однозначно передаётся иконкой: закрыть, удалить, редактировать, поделиться, развернуть.

**Don't use:**
- Если иконка не самоочевидна — добавьте Tooltip или используйте BasicButton
- Для основного CTA на экране — используйте BasicButton с лейблом

### Core principles

- **Всегда с aria-label** — иконка-only требует программного описания
- **Всегда с Tooltip** — визуальная подсказка для не-очевидных иконок
- **Квадратные пропорции** — ширина равна высоте

---

## 2. Anatomy

```
┌──────┐
│ icon │
└──────┘
```

| Слот | Обязательность | Описание |
|---|---|---|
| `icon` | required | Иконка действия |
| `spinner` | conditional | При `Loading=True` |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | px | T-shirt |
|---|---|---|
| `IconButton 24 XXS` | 24 | XXS |
| ` IconButton 32 XS` | 32 | XS |
| ` IconButton 40 S` | 40 | S |
| ` IconButton 48 M` | 48 | M |
| ` IconButton 56 L` | 56 | L |
| `IconButton 64 XL` | 64 | XL |

### View

| View | Назначение |
|---|---|
| `Default` | Нейтральный |
| `Accent` | Акцентный |
| `Secondary` | Вторичный |
| `Clear` | Прозрачный фон |
| `Positive` | Позитивный |
| `Warning` | Предупреждение |
| `Negative` | Деструктивный |
| `Checked` | Отмеченное/активное состояние |
| `Dark` / `Black` / `White` | Монохромные варианты |
| `AccentTransparent` | Только в XXS |

### Shape

| Shape | Описание |
|---|---|
| `Default` | Стандартное скругление согласно размеру |
| `Pilled` | Полностью скруглённый (circle) |

---

## 4. Sizes

| T-shirt | px | Контекст |
|---------|-----|---------|
| `XXS` | 24 | Встроенные в поля, чипы |
| `XS` | 32 | Тулбары, таблицы |
| `S` | 40 | Карточки, панели |
| `M` | 48 | Стандартный — **дефолт** |
| `L` | 56 | Акцентные действия |
| `XL` | 64 | Touch-first, hero |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | — | Базовый вид |
| `hover` | — | Курсор над кнопкой |
| `loading` | `Loading=true` (нижний регистр в XS–L) | Спиннер |
| `disabled` | `Disabled=true` (нижний регистр в XS–L) | Недоступна |

> Внимание: в IconButton XS–L используется нижний регистр `true/false`, в XXS и XL — `True/False`.

---

## 6. Behavior

### Keyboard interaction

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение фокуса |
| `Enter` | Активация |
| `Space` | Активация |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<button>` | — | Всегда |
| `aria-label` | Описание действия | Всегда (нет видимого текста) |
| `aria-busy="true"` | — | `Loading=true` |
| `disabled` | — | `Disabled=true` |
