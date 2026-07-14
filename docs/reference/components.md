# Reference: Components

Каталог компонентов SDDS. Сгруппированы по четырём категориям. Для выбора компонента под задачу — [how-to/choose-a-component.md](../guides/choose-a-component.md).

---

## Data Display

### Accordion

Сворачиваемые секции контента. Figma: `14329:69`

### Avatar

Аватар пользователя.

- Типы: `Image` · `Initials`
- Размеры: S(24) · M · L · XL · XXL
- Пропы: `View` · `Status`(`Default/Active/Inactive`) · `isCirculed`

Figma: `10404:127654`

### AvatarGroup

Группа аватаров. Figma: `11797:4088`

### Badge

Метка / счётчик / статус.

- Стили: `Solid` · `Transparent` · `Clear`
- Размеры: XS · S · M · L
- View: `Default` · `Accent` · `Positive` · `Negative` · `Warning` · `Custom` · `Black` · `White` · `Dark` · `Light`
- Пропы: `View` · `Shape`(`Pilled/Default`) · `ContentLeft` · `ContentRight` · `Label`

Figma: `9009:123537`

### Card

Контейнер для группировки. Figma: `16938:14178`

### Cell

Строка-ячейка. Figma: `11808:143419`

### Chip

Тег / фильтр / выбираемое значение.

- Размеры: XXS(20) · XS(24) · S(32) · M(40) · L(48)
- View: `Default` · `Secondary` · `Accent` · `Positive` · `Warning` · `Negative`
- Пропы: `View` · `Shape`(`Default/Pilled`) · `ContentBefore`(`Empty/Icon/Avatar`) · `ContentAfter` · `hasClose` · `Disabled`

Figma: `10405:93971`

### ChipGroup

Группа Chip. Figma: `14435:1220839`

### CodeArea

Область кода с подсветкой синтаксиса. Figma: `22921:4769`

### Counter

Числовой счётчик. Figma: `14419:166453`

### Divider

Разделитель. Figma: `14070:77781`

### Form

Контейнер формы. Figma: `19902:65657`

### Gallery

Галерея изображений. Figma: `18673:2`

### Image

Изображение. Figma: `17083:8906`

### Indicator

Точечный индикатор. Figma: `14419:169077`

### List

Список. Figma: `11824:177007`

### Loader

Индикатор определённой загрузки. Figma: `18680:1101971`

### Note

Информационная заметка. Figma: `16033:606126`

### Rating

Отображение рейтинга. Figma: `16130:82110`

### Spinner

Индикатор неопределённой загрузки. Figma: `15228:1221242`

---

## Data Entry

### Attach

Кнопка прикрепления файла. Figma: `15227:49808`

### Autocomplete

Поле с автодополнением. Figma: `12023:491345`

### BasicButton

Основная кнопка.

- Размеры: XXS(24) · XS(32) · S(40) · M(48) · L(56) · XL(64)
- View: `Default` · `Accent` · `Secondary` · `Clear` · `Positive` · `Warning` · `Negative` · `Dark` · `Black` · `White`
- Пропы: `View` · `Stretching`(`Auto/Fixed`) · `Spacing`(`Packed/Space Between`) · `ContentLeft` · `ContentRight`(`None/Value/Icon`) · `Loading` · `Disabled`

Figma: `8923:75680`

### LinkButton

Кнопка-ссылка.

- View: `Default` · `Accent` · `Secondary` · `Positive` · `Negative` · `Warning` · `Info`

### IconButton

Кнопка только с иконкой. Всегда требует `aria-label`.

- Shape: `Default` · `Pilled`

### EmbeddedButton

Кнопка внутри других компонентов.

- Размеры: S · M · L
- View: `Default` · `Secondary` · `Accent` · `Positive` · `Warning` · `Negative` · `Info`

### ButtonGroup

Группа кнопок. Figma: `13890:51346`

### CalendarGrid

Сетка календаря. Figma: `11972:76074`

### CheckBox

Флажок.

- Размеры: S · M · L
- Value: `Empty` · `Single`(checked) · `Multiple`(indeterminate)
- View: `Default` · `Negative`
- Пропы: `Value` · `hasLabel` · `hasDescription` · `View` · `Disabled`

Figma: `8806:63106`

⚠️ В CheckBox `hasLabel` и `hasDescription` принимают `Yes/No` вместо `True/False` — несоответствие конвенции.

### CheckBoxGroup

Группа CheckBox. Figma: `10560:111515`

### CodeField / CodeInput

Ввод OTP-кода. Figma: `20879:1550`, `15440:22743`

### ComboBox

Поле ввода + выбор из списка. Figma: `12021:400607`

### DatePicker / DatePickerClear / DateTimePicker / DateTimePickerClear

Выбор даты и времени. Варианты `*Clear` имеют кнопку очистки.

Figma: `14335:29312`, `21283:19364`, `21285:1744808`

### Dropzone

Drag-and-drop загрузка файлов. Figma: `15438:22619`

### File

Отображение прикреплённого файла. Figma: `17966:1076110`

### NumberInput

Числовое поле со стрелками. Figma: `15228:777`

### RadioBox

Радиокнопка. Figma: `8806:63107`

### Range / RangeClear

Диапазонный слайдер (два ползунка). Figma: `14306:687043`, `21279:1317135`

### RatingInput

Интерактивный ввод рейтинга. Figma: `17081:388`

### Segment

Сегментированный контрол (≤5 видимых вариантов). Figma: `13981:175805`

### Select

Выпадающий список.

- Режимы: Single · Multiple
- Размеры: XS(32) · S(40) · M(48) · L(56) · XL(64)
- Пропы: `LabelPlacement` · `Value`(`Empty/Filled`) · `Opened` · `EmptyState` · `Disabled` · `ReadOnly` · `Required` · `RequiredPlacement`

Figma: `12012:74693`

### Slider

Слайдер числового значения. Figma: `12019:322587`

### Switch

Переключатель.

- Размеры: S · M · L
- Пропы: `Turn On`(`on/off`) · `hasLabel` · `ToggleSize`(`28 L/20 S`) · `Disabled`

⚠️ Имя пропа `Turn On` содержит пробел — несоответствие конвенции.

Figma: `9892:120083`

### TextArea / TextAreaClear

Многострочное поле. Figma: `10639:112416`, `14493:1665102`

### TextField / TextFieldClear / TextFieldGroup / TextFieldSlider

Однострочное поле.

- Размеры: XS(32) · S(40) · M(48) · L(56) · XL(64)
- View: `Default` · `Error` · `Warning` · `Success`
- Пропы: `View` · `Value`(`Empty/Single/Multiple`) · `LabelPlacement` · `Focused` · `Disabled` · `ReadOnly` · `Required` · `RequiredPlacement` · `Optional` · `HintPlacement`

Figma: `8688:468`, `14446:247159`, `13943:164509`, `22919:4905`

### TimePicker

Выбор времени. Figma: `18365:52873`

### TreeSelect

Иерархический dropdown. Figma: `19570:2179`

---

## Overlay

### BottomSheet

Панель снизу (mobile). Figma: `14386:181790`

### Drawer

Боковая панель. Figma: `13890:4940`

### Modal

Блокирующий диалог. Figma: `14049:14588`

### Notification

Уведомление с действиями. Figma: `11703:10903`

### Popover

Интерактивный popup. Figma: `11798:72265`

### ProgressBar

Линейный прогресс. Figma: `11849:9057`

### Toast

Временное уведомление.

- View: `Default` · `Positive` · `Negative`
- Shape: `Cornered` · `Rounded`
- Пропы: `View` · `Shape` · `ContentBefore` · `hasClose`

Figma: `12026:494`

### ToolBar

Панель инструментов. Figma: `13894:584772`

### Tooltip

Подсказка при наведении / фокусе. Figma: `8785:62614`

---

## Navigation

### BreadCrumbs

Цепочка навигации. Figma: `14350:66468`

### Carousel

Горизонтальная карусель. Figma: `16130:1059083`

### DropdownMenu

Меню действий. Figma: `12023:497773`

### Pagination

Постраничная навигация. Figma: `14055:68492`

### PaginationDots

Точечная навигация (для каруселей). Figma: `15877:2004`

### ScrollBar

Полоса прокрутки. Figma: `11857:4269`

### Steps

Индикатор многошагового процесса. Figma: `15442:2026`

### TabBar

Нижняя навигация (mobile). Figma: `19907:1241269`

### Tabs

Переключатель секций.

- Типы: `Default` · `Headers` · `Icon`
- Направление: `Horizontal` · `Vertical`
- Размеры: XS · S · M · L (Headers: H1–H5)
- Пропы: `Clip`(`None/Show More/Scroll`) · `Strech` · `hasDivider` · `hasContentLeft` (только Vertical)

Figma: `11887:51`

⚠️ Проп `Strech` — опечатка в Figma.

### Tour

Онбординг-тур. Figma: `20888:105949`

### Tree

Иерархический список. Figma: `16042:266151`
