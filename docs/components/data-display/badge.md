# Badge

> **Category** · Data Display
> **Figma page** · `9009:123537`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=9009-123537

---

## 1. Key Principles of Use

### What it is

Badge — компактный информационный элемент: метка статуса, счётчик, категория. Не является интерактивным самостоятельно — только информирует.

### When to use

**Use** — для отображения статуса объекта, счётчика уведомлений, категорийной метки, индикатора нового контента.

**Don't use** — для интерактивных фильтров или тегов с кнопкой удаления (используйте **Chip**).

---

## 2. Anatomy

| Слот | Проп | Описание |
|---|---|---|
| `contentLeft` | `ContentLeft=true` | Иконка слева |
| `label` | `Label=true` | Текстовая метка |
| `contentRight` | `ContentRight=true` | Иконка или значение справа |

---

## 3. Variants

### Figma Component Sets (стиль/размер)

| Имя в Figma | Стиль | Размер |
|---|---|---|
| `Badge/Solid/BadgeXS` | Solid | XS |
| `Badge/Solid/BadgeS` | Solid | S |
| `Badge/Solid/BadgeM` | Solid | M |
| `Badge/Solid/BadgeL` | Solid | L |
| `Badge/Transparent/BadgeXS` | Transparent | XS |
| `Badge/Transparent/BadgeS` | Transparent | S |
| `Badge/Transparent/BadgeM` | Transparent | M |
| `Badge/Transparent/BadgeL` | Transparent | L |
| `Badge/Clear/BadgeXS` | Clear | XS |
| `Badge/Clear/BadgeS` | Clear | S |
| `Badge/Clear/BadgeM` | Clear | M |
| `Badge/Clear/BadgeL` | Clear | L |

### Стили

| Стиль | Описание |
|---|---|
| `Solid` | Непрозрачная заливка |
| `Transparent` | Полупрозрачная заливка |
| `Clear` | Без заливки (только текст/иконки) |

### View

| View | Назначение |
|---|---|
| `Default` | Нейтральный |
| `Accent` | Акцентный |
| `Positive` | Успех / активно |
| `Negative` | Ошибка / неактивно |
| `Warning` | Предупреждение |
| `Custom` | Кастомный цвет |
| `Black` / `White` | Монохром |
| `Dark` / `Light` | Темный / Светлый |

### Shape

| Shape | Описание |
|---|---|
| `Pilled` | Полностью скруглённый |
| `Default` | Стандартное скругление (нет у Clear) |

---

## 4. Sizes

| T-shirt | Контекст |
|---------|---------|
| `XS` | Компактные места: аватары, иконки |
| `S` | Тулбары, строки таблиц |
| `M` | Карточки, стандартный контент — **дефолт** |
| `L` | Акцентные метки, крупные блоки |

---

## 5. States

Badge не имеет интерактивных состояний. Это read-only элемент.
