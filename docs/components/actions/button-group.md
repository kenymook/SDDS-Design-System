# ButtonGroup

> **Category** · Data Entry → Actions
> **Figma page** · `13890:51346`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=13890-51346

---

## 1. Key Principles of Use

### What it is

ButtonGroup — группа связанных кнопок, объединённых в единый контрол. Используется для переключения режимов, фильтрации или выбора одного из взаимоисключающих вариантов.

### When to use

**Use** — для переключения между режимами просмотра, выбора временного диапазона, фильтрации по категориям.

**Don't use** — если варианты не взаимоисключающие (используйте отдельные CheckBox).

---

## 3. Variants

Компонент использует BasicButton как основу. Размеры и View наследуются от BasicButton.

---

## 5. States

Состояния наследуются от BasicButton. Активная кнопка группы имеет состояние `Checked`/`selected`.

---

## 6. Behavior

### Keyboard interaction

| Клавиша | Действие |
|---|---|
| `Tab` / `Shift+Tab` | Переход между кнопками |
| `Enter` / `Space` | Активация кнопки |
