# Button

> **Category** · Data Entry → Actions
> **Figma page** · `8923:75680`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680

---

## 1. Key Principles of Use

### What it is

BasicButton — основной элемент взаимодействия с текстовой меткой. Инициирует действие: отправку формы, подтверждение, запуск процесса. В отличие от LinkButton, не ведёт к ресурсу.

### When to use

**Use** — для любого дискретного действия: сохранить, подтвердить, удалить, применить фильтр, перейти к следующему шагу.

**Don't use:**
- Для навигации к URL — используйте **LinkButton**
- Только с иконкой без текста — используйте **IconButton**
- Для встроенных действий внутри полей — используйте **EmbeddedButton**

### Core principles

- **Один Accent на контекст** — несколько Accent-кнопок конкурируют за внимание
- **Label — глагол** — «Сохранить», «Удалить», «Отправить»; избегайте «OK», «Да»
- **Stretching=Fixed** только для явного выравнивания в сетке, не по умолчанию

---

## 2. Anatomy

```
┌─────────────────────────────────────────┐
│  [ContentLeft]   Label   [ContentRight] │
└─────────────────────────────────────────┘
```

| Слот | Обязательность | Описание |
|---|---|---|
| `label` | required | Текст кнопки. Глагол или глагольная фраза |
| `contentLeft` | optional | Иконка слева от label |
| `contentRight` | optional | Иконка (`Icon`), текстовое значение (`Value`) или ничего (`None`) |
| `spinner` | conditional | Появляется при `Loading=True` |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | px | T-shirt |
|---|---|---|
| `Button 24 XXS` | 24 | XXS |
| ` BasicButton 32 XS` | 32 | XS |
| ` BasicButton 40 S` | 40 | S |
| ` BasicButton 48 M` | 48 | M |
| ` BasicButton 56 L` | 56 | L |
| `BasicButton 64 XL` | 64 | XL |

> Ведущий пробел в именах XS–L — известная проблема именования, не влияет на поведение.

### View (визуальный стиль)

| View | Назначение |
|---|---|
| `Default` | Нейтральный стиль, низкий визуальный вес |
| `Accent` | Основное действие на экране |
| `Secondary` | Второстепенное действие |
| `Clear` | Прозрачный фон, минимальный вес |
| `Positive` | Позитивное/подтверждающее действие |
| `Warning` | Действие с риском |
| `Negative` | Деструктивное/опасное действие |
| `Dark` | Тёмный стиль (для светлых поверхностей) |
| `Black` / `White` | Монохромные варианты |
| `AccentTransparent` | Только в XXS: Accent с прозрачным фоном |

> **Примечание:** В `Button 24 XXS` есть опечатка — `"Seccondary"` (лишняя 'c').

### Модификаторы

| Проп | Значения | Описание |
|---|---|---|
| `Stretching` | `Auto` / `Fixed` | Auto — по контенту; Fixed — на всю ширину контейнера |
| `Spacing` | `Packed` / `Space Between` | Packed — иконка вплотную к тексту; Space Between — по краям |
| `ContentLeft` | `True` / `False` | Включить/выключить левый контент |
| `ContentRight` | `None` / `Value` / `Icon` | Тип правого контента |

---

## 4. Sizes

| T-shirt | px | Padding H | Контекст |
|---------|-----|-----------|---------|
| `XXS` | 24 | 8px | Встроенные элементы, компактные тулбары |
| `XS` | 32 | 12px | Тулбары, таблицы, inline-действия |
| `S` | 40 | 12px | Вторичные формы, карточки |
| `M` | 48 | 16px | Стандартные формы — **дефолт** |
| `L` | 56 | 16px | Акцентные CTA |
| `XL` | 64 | 20px | Hero-секции, touch-first |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | — | Базовый вид |
| `hover` | — | Курсор над кнопкой |
| `active/pressed` | — | Момент нажатия |
| `focus` | — | Фокус клавиатуры (кольцо фокуса) |
| `loading` | `Loading=True` | Спиннер, кнопка неинтерактивна |
| `disabled` | `Disabled=True` | Недоступна |

### Допустимые комбинации

| Комбинация | Допустимо | Примечание |
|---|---|---|
| `hover` + `focus` | ✓ | Tab-навигация при наведении |
| `loading` + `disabled` | ✓ | Блокировка во время запроса |
| `hover` + `disabled` | ✗ | disabled отменяет все интерактивные |
| `loading` + `hover` | ✗ | В loading кнопка визуально недоступна |

---

## 6. Behavior

### Keyboard interaction

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Перемещение фокуса |
| `Enter` | Активация |
| `Space` | Активация |

### Loading state
При `Loading=True`: лейбл заменяется спиннером, `pointer-events: none`, `aria-busy="true"`. Ширина не меняется.

### Touch targets
Минимальная зона — 44×44px. Для XXS и XS расширяется невидимым padding.

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<button>` | — | Всегда. Не заменять на `<div>` |
| `aria-busy="true"` | — | `Loading=True` |
| `aria-disabled="true"` | — | `Loading=True` (остаётся в tab-order) |
| `disabled` | — | `Disabled=True` — нативный атрибут |

- Контрастность текста: минимум 4.5:1 (WCAG AA)
- Negative/Warning не передаются только цветом — нужна иконка или явный label

---

## 8. Design Tokens

### Accent (основное действие)

| Роль | SDDS Token |
|---|---|
| Фон default | `Surfaces/Default/Accent/Solid/Accent` |
| Текст / иконка | `Text&Icons/Default/General/Primary` (на акцентном фоне) |
| Фон disabled | `Surfaces/Default/General/Solid/Tertiary` |
| Текст disabled | `Text&Icons/Default/General/Tertiary` |

### Secondary

| Роль | SDDS Token |
|---|---|
| Фон default | `Surfaces/Default/General/Solid/Secondary` |
| Обводка | `Outlines/Default/General/Solid/Secondary` |
| Текст | `Text&Icons/Default/General/Primary` |

### Negative

> `View=Negative` в SDDS компонентах соответствует токенам группы `Status/Error` в коллекции Styles. Это разные уровни: Figma-проп называется `Negative`, путь токена содержит `Error`.

| Роль | SDDS Token |
|---|---|
| Фон default | `Surfaces/Default/Status/Solid/Error` |
| Текст | `Text&Icons/onDark/General/Primary` |
