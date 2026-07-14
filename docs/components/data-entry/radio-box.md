# RadioBox

> **Category** · Data Entry
> **Figma page** · `8806:63107`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8806-63107

---

## 1. Key Principles of Use

### What it is

RadioBox — элемент выбора одного значения из группы взаимоисключающих вариантов.

### When to use

**Use** — когда нужно выбрать ровно один вариант из 2–6: пол, тарифный план, способ доставки.

**Don't use:**
- Для множественного выбора — используйте **CheckBox**
- Для большого количества вариантов — используйте **Select**

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `<input type="radio">` | — | Всегда |
| `<fieldset>` + `<legend>` | — | Для группы RadioBox |
| Навигация стрелками | — | Между вариантами в группе |
