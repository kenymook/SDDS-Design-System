# LinkButton

> **Category** · Data Entry → Actions
> **Figma page** · `8923:75680` (в составе страницы Button)
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680

---

## 1. Key Principles of Use

### What it is

LinkButton — кнопка-ссылка. Визуально похожа на текстовую ссылку, но может инициировать действие или навигацию. Отличается от BasicButton отсутствием фона и границы.

### When to use

**Use** — для вторичных действий в тексте, ссылок внутри форм, навигации с минимальным визуальным весом.

**Don't use** — как основное CTA (используйте BasicButton с View=Accent).

---

## 2. Anatomy

| Слот | Обязательность | Описание |
|---|---|---|
| `label` | required | Текст ссылки |
| `contentLeft` | optional | Иконка слева |
| `contentRight` | optional | Иконка справа |
| `spinner` | conditional | При `Loading=True` |

---

## 3. Variants

### Figma Component Sets

| Имя в Figma | px | T-shirt |
|---|---|---|
| `LinkButton 24 XXS` | 24 | XXS |
| ` LinkButton 32 XS` | 32 | XS |
| ` LinkButton 40 S` | 40 | S |
| ` LinkButton 48 M` | 48 | M |
| ` LinkButton 56 L` | 56 | L |
| `LinkButton 64 XL` | 64 | XL |

### View

| View | Назначение |
|---|---|
| `Default` | Стандартный цвет ссылки |
| `Accent` | Акцентный |
| `Secondary` | Вторичный, менее заметный |
| `Positive` | Позитивный |
| `Negative` | Деструктивный / опасный |
| `Warning` | Предупреждение |
| `Info` | Информационный |

---

## 4. Sizes

Аналогично BasicButton: XXS(24) · XS(32) · S(40) · M(48) · L(56) · XL(64).

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `default` | — | Базовый вид |
| `loading` | `Loading=True` | Спиннер |
| `disabled` | `Disabled=True` | Недоступна |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<a href>` | — | Для навигации к URL |
| `<button>` | — | Для действий без перехода |
| `aria-busy="true"` | — | `Loading=True` |
| `disabled` / `aria-disabled` | — | `Disabled=True` |
