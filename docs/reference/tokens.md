# Reference: Tokens

Каталог семантических токенов SDDS. Зачем такие имена — [concepts/why-tokens.md](../concepts/why-tokens.md).

---

## Структура имени

```
Категория / Контекст / Группа / Тип / Вариант
```

| Сегмент | Значения |
|---|---|
| Категория | `Text&Icons` · `Surfaces` · `Outlines` · `BG` · `Overlay` · `Syntax` |
| Контекст | `Default` · `Inverse` · `onDark` · `onLight` |
| Группа | `General` · `Accent` · `Status` |
| Тип | `Solid` · `Transparent` (только для Surfaces и Outlines) |
| Вариант | См. ниже |

### Контексты

| Контекст | Где |
|---|---|
| `Default` | Основной фон (зависит от темы) |
| `Inverse` | Инвертированный фон (зависит от темы) |
| `onDark` | Гарантированно тёмный фон (не зависит от темы) |
| `onLight` | Гарантированно светлый фон (не зависит от темы) |

---

## Text & Icons

| Токен | Роль |
|---|---|
| `Text&Icons/Default/General/Primary` | Основной текст |
| `Text&Icons/Default/General/Secondary` | Вторичный текст |
| `Text&Icons/Default/General/Tertiary` | Третичный (подсказки, лейблы) |
| `Text&Icons/Default/General/Paragraph` | Текст параграфов (80% opacity) |
| `Text&Icons/Default/Accent/Accent` | Акцентный текст |
| `Text&Icons/Default/Accent/AccentMinor` | Второй акцентный оттенок |
| `Text&Icons/Inverse/General/Primary` | Основной текст на инверсном фоне |
| `Text&Icons/Default/Status/Positive` | Текст успеха |
| `Text&Icons/Default/Status/Warning` | Текст предупреждения |
| `Text&Icons/Default/Status/Negative` | Текст ошибки |
| `Text&Icons/Default/Status/Info` | Информационный текст |
| `Text&Icons/Default/Status/PositiveMinor` | Приглушённый текст успеха |
| `Text&Icons/Default/Status/WarningMinor` | Приглушённый warning |
| `Text&Icons/Default/Status/NegativeMinor` | Приглушённый negative |
| `Text&Icons/Default/Status/InfoMinor` | Приглушённый info |

---

## Surfaces

### General/Solid

| Токен | Роль |
|---|---|
| `Surfaces/Default/General/Solid/Card` | Поверхность карточки |
| `Surfaces/Default/General/Solid/Primary` | Основная поверхность |
| `Surfaces/Default/General/Solid/Secondary` | Вторичная поверхность |
| `Surfaces/Default/General/Solid/Tertiary` | Третичная поверхность |
| `Surfaces/Default/General/Solid/Default` | Инвертированная поверхность |

### General/Transparent

| Токен | Роль |
|---|---|
| `Surfaces/Default/General/Transparent/Card` | Прозрачная карточка |
| `Surfaces/Default/General/Transparent/Primary` | Слабая прозрачная |
| `Surfaces/Default/General/Transparent/Secondary` | Стандартная прозрачная |
| `Surfaces/Default/General/Transparent/Tertiary` | Заметная прозрачная |
| `Surfaces/Default/General/Transparent/Deep` | Глубокое полупрозрачное затемнение |
| `Surfaces/Default/General/Transparent/Clear` | Полностью прозрачная (0%) |

### Accent

| Токен | Роль |
|---|---|
| `Surfaces/Default/Accent/Solid/Accent` | Акцентная поверхность |
| `Surfaces/Default/Accent/Solid/AccentMinor` | Приглушённая акцентная |
| `Surfaces/Default/Accent/Transparent/Accent` | Прозрачная акцентная |

### Status/Solid

| Токен | Роль |
|---|---|
| `Surfaces/Default/Status/Solid/Positive` | Поверхность успеха |
| `Surfaces/Default/Status/Solid/Warning` | Поверхность предупреждения |
| `Surfaces/Default/Status/Solid/Negative` | Поверхность ошибки |
| `Surfaces/Default/Status/Solid/Info` | Информационная поверхность |
| `Surfaces/Default/Status/Solid/PositiveMinor` | Приглушённая успеха |
| `Surfaces/Default/Status/Solid/WarningMinor` | Приглушённая warning |
| `Surfaces/Default/Status/Solid/NegativeMinor` | Приглушённая negative |
| `Surfaces/Default/Status/Solid/InfoMinor` | Приглушённая info |

### Status/Transparent

| Токен | Роль |
|---|---|
| `Surfaces/Default/Status/Transparent/Positive` | Прозрачная успеха |
| `Surfaces/Default/Status/Transparent/Warning` | Прозрачная warning |
| `Surfaces/Default/Status/Transparent/Negative` | Прозрачная negative |
| `Surfaces/Default/Status/Transparent/Info` | Прозрачная info |

---

## Outlines

### General

| Токен | Роль |
|---|---|
| `Outlines/Default/General/Solid/Primary` | Основная обводка |
| `Outlines/Default/General/Solid/Secondary` | Вторичная обводка |
| `Outlines/Default/General/Solid/Tertiary` | Третичная обводка |
| `Outlines/Default/General/Transparent/Primary` | Слабая прозрачная |
| `Outlines/Default/General/Transparent/Secondary` | Стандартная прозрачная |
| `Outlines/Default/General/Transparent/Tertiary` | Заметная прозрачная |
| `Outlines/Default/General/Transparent/Clear` | Прозрачная (0%) |

### Accent

| Токен | Роль |
|---|---|
| `Outlines/Default/Accent/Solid/Accent` | Акцентная обводка |
| `Outlines/Default/Accent/Solid/AccentMinor` | Приглушённая акцентная |
| `Outlines/Default/Accent/Transparent/Accent` | Прозрачная акцентная |

### Status

| Токен | Роль |
|---|---|
| `Outlines/Default/Status/Solid/Positive` | Обводка успеха |
| `Outlines/Default/Status/Solid/Warning` | Обводка предупреждения |
| `Outlines/Default/Status/Solid/Negative` | Обводка ошибки |
| `Outlines/Default/Status/Solid/Info` | Информационная обводка |
| `Outlines/Default/Status/Solid/PositiveMinor` | Приглушённая успеха |
| `Outlines/Default/Status/Solid/WarningMinor` | Приглушённая warning |
| `Outlines/Default/Status/Solid/NegativeMinor` | Приглушённая negative |
| `Outlines/Default/Status/Solid/InfoMinor` | Приглушённая info |
| `Outlines/Default/Status/Transparent/Positive` | Прозрачная успеха |
| `Outlines/Default/Status/Transparent/Warning` | Прозрачная warning |
| `Outlines/Default/Status/Transparent/Negative` | Прозрачная negative |
| `Outlines/Default/Status/Transparent/Info` | Прозрачная info |

---

## Background

| Токен | Роль |
|---|---|
| `BG/Default/Primary` | Основной фон страницы |
| `BG/Inverse/Primary` | Инверсный фон |

---

## Overlay

| Токен | Роль |
|---|---|
| `Overlay/Default/Soft` | Лёгкое затемнение |
| `Overlay/Default/Hard` | Сильное затемнение |
| `Overlay/Default/Blur` | Размытое наложение |
| `Overlay/Inverse/Soft` | Наложение на инверсном фоне |
| `Overlay/onDark/Hard` | Затемнение поверх тёмного фона |

---

## Syntax (для CodeArea)

| Токен | Роль |
|---|---|
| `Syntax/Default/SyntaxYellow` | Ключевые слова, константы |
| `Syntax/Default/SyntaxOrange` | Строки, литералы |
| `Syntax/Default/SyntaxPink` | Операторы, пунктуация |
| `Syntax/Default/SyntaxSpring` | Числа, булевые значения |
| `Syntax/Default/SyntaxSkyBlue` | Функции, методы |
| `Syntax/Default/SyntaxRed` | Ошибки, невалидный код |

---

## Маппинг State → Token

| Состояние | Поверхность | Текст |
|---|---|---|
| `default` | `Surfaces/Default/General/Solid/Secondary` | `Text&Icons/Default/General/Primary` |
| `hover` | `Surfaces/Default/General/Solid/Tertiary` | без изменений |
| `pressed/active` | `Surfaces/Default/General/Transparent/Secondary` | без изменений |
| `focus` | без изменений | без изменений + кольцо фокуса |
| `disabled` | `Surfaces/Default/General/Solid/Tertiary` | `Text&Icons/Default/General/Tertiary` |

### Поля ввода — валидация

| `View` | Поверхность | Обводка | Текст hint |
|---|---|---|---|
| `Error` | `Surfaces/Default/Status/Transparent/Negative` | `Outlines/Default/Status/Solid/Negative` | `Text&Icons/Default/Status/Negative` |
| `Warning` | `Surfaces/Default/Status/Transparent/Warning` | `Outlines/Default/Status/Solid/Warning` | `Text&Icons/Default/Status/Warning` |
| `Success` | `Surfaces/Default/Status/Transparent/Positive` | `Outlines/Default/Status/Solid/Positive` | `Text&Icons/Default/Status/Positive` |
| `Info` | `Surfaces/Default/Status/Transparent/Info` | `Outlines/Default/Status/Solid/Info` | `Text&Icons/Default/Status/Info` |

### Компоненты — семантический View

| `View` | Поверхность | Текст |
|---|---|---|
| `Negative` | `Surfaces/Default/Status/Solid/Negative` | `Text&Icons/Default/Status/Negative` |
| `Warning` | `Surfaces/Default/Status/Solid/Warning` | `Text&Icons/Default/Status/Warning` |
| `Positive` | `Surfaces/Default/Status/Solid/Positive` | `Text&Icons/Default/Status/Positive` |
| `Info` | `Surfaces/Default/Status/Solid/Info` | `Text&Icons/Default/Status/Info` |

> Поля используют `Transparent`-варианты поверхности — фон с лёгким оттенком. Компоненты используют `Solid` — насыщенный фон. [Почему так →](../concepts/view-vs-validation.md)
