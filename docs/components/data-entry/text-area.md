# TextArea

> **Category** · Data Entry
> **Figma page** · `10639:112416`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=10639-112416

Связанный компонент: TextAreaClear (`14493:1665102`)

---

## 1. Key Principles of Use

### What it is

TextArea — многострочное поле ввода. Для комментариев, описаний, длинных текстов.

### When to use

**Use** — когда ввод занимает более одной строки: отзыв, описание, сообщение.

**Don't use** — для коротких однострочных данных (используйте **TextField**).

---

## 3. Variants

Пропы аналогичны TextField: View · Value · LabelPlacement · Focused · Disabled · ReadOnly · Required · RequiredPlacement · Optional · HintPlacement.

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<textarea>` с `<label>` | — | Всегда |
| `aria-invalid="true"` | — | `View=Error` |
| `aria-describedby` | — | При наличии hint |
