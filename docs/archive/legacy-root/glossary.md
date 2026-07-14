# Glossary

Незнакомый термин — ищите здесь. По каждому есть ссылка на документ с подробностями.

---

**camelCase** — стиль написания: первое слово со строчной, каждое следующее с заглавной (`contentLeft`, `hasClose`). В SDDS применяется ко всем пропам, токенам и состояниям в коде.

**Component Library** — набор ~60 компонентов SDDS, сгруппированных по функции (Data Display / Data Entry / Overlay / Navigation). → [reference/components.md](../../reference/components.md)

**Context (Контекст)** — второй сегмент в имени токена, описывающий поверхность компонента: `Default`, `Inverse`, `onDark`, `onLight`. → [concepts/why-tokens.md](../../concepts/why-tokens.md)

**Figma Variables** — механизм хранения токенов в Figma. SDDS использует четыре коллекции: `01. Theme`, `02. SubTheme`, `03. Typography`, `04. Numbers`. → [concepts/architecture.md](../../concepts/architecture.md)

**Foundation** — нижний слой архитектуры: Variables + семантические токены. Содержит правила и значения, не компоненты. → [concepts/architecture.md](../../concepts/architecture.md)

**Product Theme** — набор значений токенов для конкретного продукта или бренда. Несколько продуктов могут использовать одну Component Library с разными темами. → [how-to/theme-a-product.md](../../guides/theme-a-product.md)

**Semantic Token (Семантический токен)** — токен с осмысленным именем, описывающим роль (`Surfaces/Default/Status/Solid/Negative`), а не значение (`#FF0000`). → [concepts/why-tokens.md](../../concepts/why-tokens.md)

**Semantic View** — семантическая вариация `View` для компонентов: `Negative`, `Warning`, `Positive`. Передаёт смысл действия, не состояние данных. Не путать с `View=Error/Warning/Success` для полей ввода. → [concepts/view-vs-validation.md](../../concepts/view-vs-validation.md)

**Slot (Слот)** — именованная позиция внутри компонента: `contentLeft`, `label`, `contentRight`, `hint`. Управляется пропами. → [concepts/slots.md](../../concepts/slots.md)

**State (Состояние)** — визуальное или функциональное условие компонента: `hover`, `focus`, `disabled`, `error`. → [reference/states.md](../../reference/states.md)

**SubTheme** — альтернативный набор токенов внутри одной темы (коллекция `02. SubTheme`). Для компонентов, которые должны выглядеть иначе на специфичных поверхностях.

**Theme (Тема)** — набор значений токенов. Подключается подменой коллекции Figma Variables. → [how-to/theme-a-product.md](../../guides/theme-a-product.md)

**Token (Токен)** — именованная переменная для визуального значения. Компоненты обращаются к токенам, а не к конкретным цветам или числам. → [concepts/why-tokens.md](../../concepts/why-tokens.md)

**T-shirt size** — буквенное обозначение размера: `XXS`, `XS`, `S`, `M`, `L`, `XL`. В Figma сочетается с числом высоты: `BasicButton 48 M`. M — дефолт. → [reference/sizes.md](../../reference/sizes.md)

**View** — проп компонента, задающий его семантическую вариацию. Допустимые значения зависят от типа: для компонентов `Default/Accent/Negative...`, для полей ввода `Default/Error/Warning/Success`. → [concepts/view-vs-validation.md](../../concepts/view-vs-validation.md)

**White-label** — принцип, при котором компоненты не содержат захардкоженных цветов и стилей. Внешний вид определяется темой. Один компонент — любой бренд. → [concepts/architecture.md](../../concepts/architecture.md)
