# Старт для разработчика

После этого туториала вы:

- понимаете, как токены связывают Figma и код
- собрали форму с валидацией из готовых компонентов
- знаете, какой проп в макете соответствует какому атрибуту в DOM
- знаете, куда смотреть дальше

Время: 20 минут.

---

## Шаг 1. Модель в одном абзаце

SDDS — это библиотека React-компонентов и набор CSS-переменных. Дизайнер выбирает компоненты и их пропы в Figma. Вы используете те же компоненты с теми же пропами в коде. Цвета и размеры берутся из CSS-переменных, сгенерированных из Figma Variables.

Никаких хардкоженных цветов в коде — только переменные. Смена темы = подмена набора переменных, без правки компонентов.

---

## Шаг 2. Подключите библиотеку

```bash
npm install @sdds/ui @sdds/themes
```

В корне приложения подключите тему:

```jsx
import { ThemeProvider } from '@sdds/themes';
import { defaultTheme } from '@sdds/themes/default';

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <YourApp />
  </ThemeProvider>
);
```

`ThemeProvider` устанавливает CSS-переменные на корневом элементе. Все компоненты ниже автоматически возьмут цвета и шрифты из них.

---

## Шаг 3. Соберите форму

```jsx
import { TextField, BasicButton } from '@sdds/ui';
import { useState } from 'react';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isInvalid = touched && !email.includes('@');

  return (
    <form>
      <TextField
        label="Email"
        size="m"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        view={isInvalid ? 'error' : 'default'}
        hint={isInvalid ? 'Введите корректный email' : ''}
      />
      <BasicButton view="accent" size="m" type="submit">
        Зарегистрироваться
      </BasicButton>
    </form>
  );
};
```

Что здесь важно:

- `size="m"` соответствует `48 M` в Figma. Размеры — `xxs`, `xs`, `s`, `m`, `l`, `xl`.
- `view="error"` соответствует `View=Error` в макете.
- `required` — атрибут данных, **не триггер валидации**. Ошибку показывает `view`.
- Ошибка появляется только после `onBlur` — не при загрузке формы.

> **Правило:** не показывайте `view="error"` на пустом нетронутом поле. [Полные правила валидации →](../guides/build-a-form.md)

---

## Шаг 4. Соответствие пропов и DOM

Каждый Figma-проп имеет точное соответствие в DOM:

| Figma | React-проп | DOM-атрибут |
|---|---|---|
| `View=Error` | `view="error"` | `aria-invalid="true"` |
| `Required=True` | `required` | `aria-required="true"` |
| `Disabled=True` | `disabled` | нативный `disabled` |
| `ReadOnly=True` | `readOnly` | нативный `readonly` |
| `Loading=True` | `loading` | `aria-busy="true"` |
| `Opened=True` | `opened` | `aria-expanded="true"` |
| `Value=Multiple` (CheckBox) | `indeterminate` | `aria-checked="mixed"` |

Эти соответствия делает сама библиотека — но если вы пишете компонент с нуля или оборачиваете нативный, держите таблицу под рукой. [Полная карта →](../reference/aria.md)

---

## Шаг 5. Disabled vs ReadOnly

Это не одно и то же — у них разное поведение в tab-order:

| | `disabled` | `readOnly` |
|---|---|---|
| Принимает ввод | ✗ | ✗ |
| В tab-order | ✗ | **✓** |
| Значение копируется | — | ✓ |

`disabled` исключает элемент из навигации клавиатурой. `readOnly` оставляет — пользователь может протабиться, скопировать значение, прочитать его скринридером. Используйте `readOnly` для значений, которые нужно показать, но не дать редактировать. [Подробнее →](../concepts/disabled-vs-readonly.md)

---

## Шаг 6. Состояние loading

Async-операция — отдельный паттерн. У кнопки есть `loading`:

```jsx
<BasicButton
  view="accent"
  loading={isSubmitting}
  onClick={handleSubmit}
>
  Сохранить
</BasicButton>
```

Что делает `loading`:

- Заменяет содержимое кнопки на спиннер.
- Блокирует повторные клики.
- Фиксирует ширину кнопки — она не схлопывается.
- Устанавливает `aria-busy="true"` — скринридер объявляет состояние.

`loading` ≠ `disabled`. Семантически кнопка активна — операция выполняется. [Когда использовать что →](../guides/handle-loading.md)

---

## Шаг 7. Переключите тему

```jsx
import { darkTheme } from '@sdds/themes/dark';

<ThemeProvider theme={darkTheme}>
  <YourApp />
</ThemeProvider>
```

Меняется только провайдер. Компоненты и их пропы — те же. CSS-переменные перезаписываются на корневом элементе, цвета подтягиваются автоматически.

Если компонент не сменил цвет — где-то в нём захардкожен цвет вместо переменной. Это баг компонента. [Как темы устроены →](../guides/theme-a-product.md)

---

## Что вы узнали

- Компоненты импортируются из `@sdds/ui`, темы — из `@sdds/themes`.
- Размеры — `xxs/xs/s/m/l/xl`. M — дефолт.
- `view` управляет семантикой. Для кнопок: `accent/negative/positive/warning`. Для полей: `error/warning/success`.
- Figma-пропы и React-пропы совпадают по именам и значениям.
- `disabled` исключает из tab-order, `readOnly` — нет.
- `loading` ≠ `disabled` — это активная операция, не недоступность.
- Тема меняется подменой провайдера.

---

## Дальше

| Хочу | Документ |
|---|---|
| Собрать форму с валидацией | [how-to/build-a-form.md](../guides/build-a-form.md) |
| Подключить тему продукта | [how-to/theme-a-product.md](../guides/theme-a-product.md) |
| Сделать компонент доступным | [how-to/make-it-accessible.md](../guides/make-it-accessible.md) |
| Полный список пропов | [reference/props.md](../reference/props.md) |
| Клавиатурные паттерны | [reference/keyboard.md](../reference/keyboard.md) |
| Архитектура системы | [concepts/architecture.md](../concepts/architecture.md) |
