# Tabs

> **Category** · Navigation
> **Figma page** · `11887:51`
> **Figma URL** · https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=11887-51

---

## 1. Key Principles of Use

Tabs — переключатель между секциями контента. Управляют полноценными view, в отличие от Segment.

**Use** — для переключения между разделами страницы: «Описание / Отзывы / Характеристики».

---

## 3. Variants

Именование: `Tabs/{Default|Headers|Icon}/{Horizontal|Vertical}/{size}`

| Тип | Описание |
|---|---|
| `Default` | Стандартные табы с текстом |
| `Headers` | Заголовочные табы (H1–H5) |
| `Icon` | Табы с иконками |

| Проп | Значения |
|---|---|
| `Clip` | `None` · `Show More` · `Scroll` |
| `Strech` | `true` · `false` |
| `hasDivider` | `false` · `true` |
| `hasContentLeft` | `true` · `false` (только Vertical) |

**Размеры:** XS · S · M · L (Headers: H1–H5)

---

## 7. Accessibility

`role="tablist"` на контейнере · `role="tab"` на вкладке · `role="tabpanel"` на панели · `aria-selected` · навигация стрелками между табами.
