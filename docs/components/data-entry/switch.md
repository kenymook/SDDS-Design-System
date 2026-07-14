# Switch

> **Category** · Data Entry
> **Figma page** · `9892:120083`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=9892-120083

---

## 1. Key Principles of Use

### What it is

Switch — переключатель бинарного состояния. Мгновенно применяет настройку без подтверждения.

### When to use

**Use** — для мгновенного включения/выключения настроек: тёмная тема, уведомления, доступ.

**Don't use** — если изменение требует подтверждения или отложенного применения (используйте **CheckBox** + Submit).

---

## 2. Anatomy

| Слот | Проп | Описание |
|---|---|---|
| `toggle` | — | Ползунок переключателя |
| `label` | `hasLabel=on` | Текстовая метка |
| `toggleTrack` | — | Дорожка переключателя |

### ToggleSize

| Значение | Описание |
|---|---|
| `28 L` | Крупный ползунок |
| `20 S` | Маленький ползунок |

---

## 3. Variants

### Figma Component Sets

| Имя | Размер |
|---|---|
| `SwitchS` | S |
| `SwitchM` | M |
| `SwitchL` | L |

### Turn On

| Значение | Состояние |
|---|---|
| `off` | Выключен |
| `on` | Включён |

> **Примечание:** Проп называется `Turn On` (с пробелом) — нестандартное именование.

> **Примечание:** Для `hasLabel` используется `on/off` вместо `True/False`.

---

## 4. Sizes

| T-shirt | Контекст |
|---------|---------|
| `S` | Компактные списки настроек |
| `M` | Стандартные настройки — **дефолт** |
| `L` | Touch-first |

---

## 5. States

| Состояние | Figma-проп | Описание |
|---|---|---|
| `off` | `Turn On=off` | Выключен |
| `on` | `Turn On=on` | Включён |
| `hover` | — | Курсор над переключателем |
| `focus` | — | Фокус клавиатуры |
| `disabled` | `Disabled=true` | Недоступен |

---

## 7. Accessibility

| Атрибут | Значение | Когда |
|---|---|---|
| `role="switch"` | — | Всегда |
| `aria-checked` | `"true"` / `"false"` | `Turn On=on/off` |
| `<label>` | — | `hasLabel=on` |
| `disabled` | — | `Disabled=true` |
