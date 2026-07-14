# Toast

> **Category** · Overlay
> **Figma page** · `12026:494`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=12026-494

---

## 1. Key Principles of Use

Toast — временное уведомление поверх интерфейса. Исчезает автоматически или по действию пользователя.

**Use** — для обратной связи на действие: «Сохранено», «Ошибка отправки», «Скопировано».

**Don't use** — для критичных сообщений, требующих подтверждения (используйте **Modal**).

---

## 3. Variants

### Figma Component Set: `Toast`

| Проп | Значения |
|---|---|
| `View` | `Default` · `Positive` · `Negative` |
| `Shape` | `Cornered` · `Rounded` |
| `ContentBefore` | `False` · `True` |
| `hasClose` | `False` · `True` |

### View

| View | Семантика |
|---|---|
| `Default` | Информационное |
| `Positive` | Успех |
| `Negative` | Ошибка |

---

## 7. Accessibility

| Атрибут | Значение |
|---|---|
| `role="status"` | Для Default/Positive |
| `role="alert"` | Для Negative |
| `aria-live="polite"` | Для Default/Positive |
| `aria-live="assertive"` | Для Negative |
