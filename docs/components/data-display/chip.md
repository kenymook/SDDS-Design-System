# Chip

> **Category** · Data Display
> **Figma page** · `10405:93971`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=10405-93573

---

## 1. Key Principles of Use

### What it is

Chip — компактный интерактивный элемент для отображения значений, фильтров или тегов с возможностью удаления. Отличается от Badge наличием интерактивности и кнопки закрытия.

### When to use

**Use** — для отображения выбранных фильтров, тегов пользователя, значений множественного выбора с возможностью удаления.

**Don't use** — для read-only статусных меток (используйте **Badge**).

---

## 2. Anatomy

| Слот | Проп | Описание |
|---|---|---|
| `contentBefore` | `ContentBefore` | Avatar, Icon или пусто |
| `label` | — | Текст чипа |
| `contentAfter` | `ContentAfter=true` | Иконка или значение справа |
| `closeButton` | `hasClose=true` | Кнопка удаления (×) |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | px | T-shirt |
|---|---|---|
| `Chip20XXS` | 20 | XXS |
| `Chip24XS` | 24 | XS |
| `Chip32S` | 32 | S |
| `Chip40M` | 40 | M |
| `Chip48L` | 48 | L |

### View

| View | Назначение |
|---|---|
| `Default` | Нейтральный |
| `Secondary` | Вторичный |
| `Accent` | Акцентный / активный |
| `Positive` | Позитивный |
| `Warning` | Предупреждение |
| `Negative` | Негативный |

### ContentBefore

| Значение | Описание |
|---|---|
| `Empty` | Без левого контента |
| `Icon` | Иконка |
| `Avatar` | Аватар пользователя |

### Shape

| Shape | Описание |
|---|---|
| `Default` | Стандартное скругление |
| `Pilled` | Полностью скруглённый |

---

## 4. Sizes

| T-shirt | px | Контекст |
|---------|-----|---------|
| `XXS` | 20 | Встроенные в поля ввода |
| `XS` | 24 | Компактные тулбары |
| `S` | 32 | Строки таблиц |
| `M` | 40 | Фильтры, стандартный — **дефолт** |
| `L` | 48 | Touch-first |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | — | Базовый вид |
| `hover` | — | Курсор над чипом |
| `active` | — | Нажатие |
| `disabled` | `Disabled=True` | Недоступен |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `role="option"` или `role="button"` | — | В зависимости от контекста |
| `aria-label` для кнопки закрытия | «Удалить [название чипа]» | `hasClose=true` |
| `aria-disabled` | `true` | `Disabled=True` |
