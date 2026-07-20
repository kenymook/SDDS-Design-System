import { mountHero, unmountHero } from './hero.js';

const initialState = {
  route: 'portal-home',
  authenticated: false,
  authError: '',
  accessRequested: false,
  accountMenuOpen: false,
  notificationMenuOpen: false,
  toastMessage: '',
  cardMenuKey: '',
  editingCardKey: '',
  entityModal: null,
  versionModal: null,
  colorPicker: null,
  resetMenuOpen: false,
  landingDemo: { color: '#107f8c', mode: 'light', size: 'm' },
  releasesFilter: 'mine', // авторизованный участник проектов по умолчанию видит релизы своих проектов
  onboardingTrack: 'designer',
  onboardingStepId: 'start',
  onboardingTrackMenuOpen: false,
  onboardingDone: { designer: [], developer: [] },
  docPage: 'introducing',
  settingsError: '',
  settingsDirty: false,
  role: null,
  userName: 'Анна Дизайнер',
  userEmail: 'anna@sdds.local',
  userLogin: 'anna',
  projectId: null,
  lastProjectId: null,
  designSystemId: null,
  themeId: null,
  project: 'SberBusiness',
  designSystem: 'CRM Design System',
  theme: 'Light Theme',
  editorTab: 'colors',
  selectedTokenId: 'primary',
  tokenSearch: '',
  issueFilter: false,
  workspaceMode: 'overview',
  componentMode: 'properties',
  componentSearch: '',
  tokenSort: 'source',
  collectionFilter: 'all',
  collectionSort: 'modified',
  selectedComponentId: 'button',
  publicationFailed: false,
  publicationError: '',
  publicationFailure: null,
  activeWorkspaceThemeId: null,
  themeWorkspaces: {},
  themeDrafts: {},
  versions: [{ version: '1.4.0', changelog: 'Current published baseline.', status: 'Published', date: '2026-06-20', issueCount: 0 }],
  auditLog: [],
  notifications: [],
  accessRequests: [],
  components: [
    { id: 'button', name: 'Button', property: 'height', value: '40', policy: 'editable' },
    { id: 'icon-button', name: 'IconButton', property: 'size', value: '36', policy: 'editable' },
    { id: 'link', name: 'Link', property: 'underlineOffset', value: '2', policy: 'editable' },
    { id: 'card', name: 'Card', property: 'padding', value: '20', policy: 'editable' },
    { id: 'modal', name: 'Modal', property: 'width', value: '480', policy: 'editable' },
    { id: 'input', name: 'Input', property: 'radius', value: '8', policy: 'restricted' },
    { id: 'select', name: 'Select', property: 'radius', value: '8', policy: 'restricted' },
    { id: 'checkbox', name: 'Checkbox', property: 'size', value: '20', policy: 'restricted' },
    { id: 'tooltip', name: 'Tooltip', property: 'delay', value: '300', policy: 'locked' },
    { id: 'typography', name: 'Typography', property: 'fontFamily', value: 'SB Sans Text', policy: 'locked' },
  ],
  changes: [],
  undoStack: [],
  redoStack: [],
  draftBaseVersion: '',
  published: null,
  supportSent: false,
  supportPrefill: '',
  supportTypePrefill: '',
  supportReturnRoute: '',
  accounts: [
    { name: 'Анна Дизайнер', email: 'anna@sdds.local', login: 'anna', password: 'demo' },
    { name: 'Иван Редактор', email: 'ivan@sdds.local', login: 'ivan', password: 'demo' },
    { name: 'Мария Наблюдатель', email: 'maria@sdds.local', login: 'maria', password: 'demo' },
  ],
  createdProjects: [],
  projectOverrides: {},
  deletedProjectIds: [],
  systemOverrides: {},
  themeOverrides: {},
  additionalSystemsByProject: {},
  additionalThemesBySystem: {},
  membersByProject: {
    sberbusiness: [
      { name: 'Анна Дизайнер', email: 'anna@sdds.local', role: 'owner' },
      { name: 'Иван Редактор', email: 'ivan@sdds.local', role: 'editor' },
      { name: 'Мария Наблюдатель', email: 'maria@sdds.local', role: 'viewer' },
    ],
    demo: [{ name: 'Анна Дизайнер', email: 'anna@sdds.local', role: 'owner' }],
  },
  tokens: [
    { id: 'primary', group: 'colors', name: 'color.primary', value: '#000000', darkValue: '#fbffae', hint: 'Попробуйте #ffffff, чтобы увидеть validation issue' },
    { id: 'on-primary', group: 'colors', name: 'color.onPrimary', value: '#c9c9c9', darkValue: '#fbffae', hint: 'Текст и иконки на primary surface' },
    { id: 'text-primary', group: 'colors', name: 'color.textPrimary', value: '#a7a7a7', darkValue: '#fbffae', hint: 'Primary content color' },
    { id: 'text-secondary', group: 'colors', name: 'color.textSecondary', value: '#8f8f8f', darkValue: '#fbffae', hint: 'Secondary content color' },
    { id: 'text-tertiary', group: 'colors', name: 'color.textTertiary', value: '#158f96', darkValue: '#fbffae', hint: 'Muted content color' },
    { id: 'surface-default', group: 'colors', name: 'color.surfaceDefault', value: '#111111', darkValue: '#fbffae', hint: 'Default surface' },
    { id: 'surface-hover', group: 'colors', name: 'color.surfaceHover', value: '#cfcfcf', darkValue: '#fbffae', hint: 'Hovered surface' },
    { id: 'surface-active', group: 'colors', name: 'color.surfaceActive', value: '#9f9f9f', darkValue: '#fbffae', hint: 'Active surface' },
    { id: 'outline-default', group: 'colors', name: 'color.outlineDefault', value: '#111111', darkValue: '#fbffae', hint: 'Default outline' },
    { id: 'outline-focus', group: 'colors', name: 'color.outlineFocus', value: '#c9c9c9', darkValue: '#fbffae', hint: 'Focus outline' },
    { id: 'bg-default', group: 'colors', name: 'color.bgDefault', value: '#111111', darkValue: '#fbffae', hint: 'Canvas background' },
    { id: 'bg-elevated', group: 'colors', name: 'color.bgElevated', value: '#c9c9c9', darkValue: '#fbffae', hint: 'Elevated background' },
    { id: 'data-positive', group: 'colors', name: 'color.dataPositive', value: '#5a8dec', darkValue: '#fbffae', hint: 'Positive data color' },
    { id: 'data-warning', group: 'colors', name: 'color.dataWarning', value: '#f0ae00', darkValue: '#fbffae', hint: 'Warning data color' },
    { id: 'data-critical', group: 'colors', name: 'color.dataCritical', value: '#e34ed9', darkValue: '#fbffae', hint: 'Critical data color' },
    { id: 'control-size', group: 'sizes', name: 'size.control.md', value: '40', hint: 'Размер контрола, 32–64' },
    { id: 'rounding', group: 'sizes', name: 'rounding.md', value: '8', hint: 'Скругление, число от 0 до 24' },
    { id: 'font-family', group: 'fonts', name: 'typography.fontFamily.body', value: 'SB Sans Text', hint: 'Основной шрифт интерфейса' },
    { id: 'font-size', group: 'fonts', name: 'typography.fontSize.body.md', value: '16', hint: 'Размер основного текста' },
  ],
};

const catalog = [
  {
    id: 'sberbusiness', name: 'SberBusiness', description: 'Основной продуктовый проект',
    systems: [
      { id: 'crm', name: 'CRM Design System', themes: [{ id: 'light', name: 'Light Theme', version: '1.4.0', palette: 'sdds-base' }, { id: 'dark', name: 'Dark Theme', version: '1.2.0', palette: 'contrast' }] },
      { id: 'mobile', name: 'Mobile Design System', themes: [{ id: 'default', name: 'Default Theme', version: '2.0.0', palette: 'sdds-base' }] },
    ],
  },
  {
    id: 'demo', name: 'Demo Project', description: 'Песочница для проверки SDDS',
    systems: [{ id: 'demo-web', name: 'Demo Web DS', themes: [{ id: 'demo-light', name: 'Demo Light', version: '0.3.0', palette: 'custom' }] }],
  },
];

const tokenGroupLabels = { colors: 'Colors', sizes: 'Sizes', fonts: 'Fonts' };
const sizeConstraints = { 'control-size': { min: 32, max: 64, unit: 'px' }, rounding: { min: 0, max: 24, unit: 'px' } };
// Прототипная модель зависимостей: какие tokens/components ссылаются на token.
const tokenUsage = {
  primary: { tokens: ['on-primary'], components: [['Button', 4], ['IconButton', 3], ['Link', 8], ['Checkbox', 2]] },
  'on-primary': { tokens: ['primary'], components: [['Button', 4], ['IconButton', 3]] },
  'control-size': { tokens: [], components: [['Button', 4], ['IconButton', 3], ['Input', 6], ['Select', 3]] },
  rounding: { tokens: [], components: [['Button', 4], ['Input', 6], ['Select', 3], ['Checkbox', 2], ['Card', 4], ['Modal', 2]] },
  'font-family': { tokens: ['font-size'], components: [['Typography', 12], ['Button', 4], ['Input', 6]] },
  'font-size': { tokens: [], components: [['Typography', 12], ['Link', 8], ['Input', 6], ['Select', 3], ['Tooltip', 2]] },
};
const componentCatalogIds = { Button: 'button', IconButton: 'icon-button', Link: 'link', Card: 'card', Modal: 'modal', Input: 'input', Select: 'select', Checkbox: 'checkbox', Tooltip: 'tooltip', Typography: 'typography' };
const componentInstanceCounts = { button: 24, 'icon-button': 18, link: 32, card: 16, modal: 6, input: 12, select: 9, checkbox: 14, tooltip: 11, typography: 36 };
const componentLinkedTokens = {
  button: ['primary', 'on-primary', 'control-size', 'rounding'],
  'icon-button': ['primary', 'control-size', 'rounding'],
  link: ['primary', 'font-size'],
  card: ['rounding'],
  modal: ['rounding'],
  input: ['rounding', 'control-size', 'font-size'],
  select: ['rounding', 'control-size', 'font-size'],
  checkbox: ['primary', 'rounding'],
  tooltip: ['font-size'],
  typography: ['font-family', 'font-size'],
};

// Onboarding-треки (по макету DS-BUILDER | PLAYGROUND, node 277:7837).
const onboardingTracks = {
  designer: {
    label: 'Onboarding for a Designer',
    level: 'Junior',
    steps: [
      { id: 'start', title: 'Начало работы', subtitle: 'Понять, из чего состоит SDDS, и подготовить рабочее окружение.', tasks: ['Прочитай Introducing в Documentation: экосистема, роли, glossary.', 'Получи доступ к Figma-файлам SDDS | Styles и SDDS | Components.', 'Попроси Owner пригласить тебя в Project команды в DS Builder.'] },
      { id: 'first-screen', title: 'Собрать первый экран', subtitle: 'За 10 минут собрать форму регистрации из компонентов SDDS и увидеть первый рабочий результат.', tasks: ['Открой Figma-файл SDDS | Styles и подключи библиотеку.', 'Перетащи TextField 48 M для Email и Пароля.', 'Добавь Button Primary M «Зарегистрироваться» под полями.', 'Выровняй элементы по сетке и проверь отступы.'] },
      { id: 'pick-component', title: 'Выбрать компонент под задачу', subtitle: 'Научиться находить подходящий компонент в каталоге и понимать его назначение.', tasks: ['Открой каталог Components в Documentation.', 'Сравни Button и Link: действие против перехода к ресурсу.', 'Проверь anatomy и доступные размеры выбранного компонента.'] },
      { id: 'themes-figma', title: 'Переключать темы в Figma', subtitle: 'Работать с режимами Light и Dark без ручной перекраски.', tasks: ['Включи режим переменных в правой панели Figma.', 'Переключи фрейм с Light на Dark и проверь поверхности.', 'Найди токен, который не адаптировался, и сообщи команде SDDS.'] },
      { id: 'sizes', title: 'Понять размеры и отступы', subtitle: 'Шкалы размеров контролов и spacing-система SDDS.', tasks: ['Изучи размеры контролов 32–64 в разделе Sizes.', 'Собери одну форму в размерах S, M и L.', 'Проверь, что отступы кратны базовой сетке.'] },
      { id: 'states', title: 'Понять состояния', subtitle: 'Каждый интерактивный компонент имеет полный набор состояний.', tasks: ['Посмотри states у Button: default, hover, pressed, disabled, loading.', 'Проверь focus-состояние с клавиатуры.', 'Убедись, что error-state у TextField включает текст ошибки.'] },
      { id: 'full-form', title: 'Собрать полноценную форму', subtitle: 'Закрепить навыки на реальном сценарии из продукта.', tasks: ['Собери форму из 5+ полей с валидацией и кнопками действий.', 'Переключи форму между Light и Dark.', 'Покажи результат команде и собери обратную связь.'] },
      { id: 'handoff', title: 'Подготовить handoff', subtitle: 'Передать результат разработчику через опубликованную Version.', tasks: ['Проверь Changes своей Theme в DS Builder.', 'Опубликуй Version с понятным changelog.', 'Отправь разработчику CLI-команду со страницы Version.'] },
    ],
  },
  developer: {
    label: 'Onboarding for a Developer',
    level: 'Junior',
    steps: [
      { id: 'start', title: 'Начало работы', subtitle: 'Понять модель Version и Published Configuration.', tasks: ['Прочитай Publishing & CLI в Documentation.', 'Пойми связку Project → Design System → Theme → Version.', 'Получи доступ к Project команды как Viewer.'] },
      { id: 'find-version', title: 'Найти опубликованную Version', subtitle: 'Каждый релиз дизайн-системы — это immutable Version.', tasks: ['Открой Releases и найди последнюю Version своей Design System.', 'Посмотри changelog и validation snapshot.', 'Сравни diff с предыдущей Version в деталях.'] },
      { id: 'cli', title: 'Получить конфигурацию через CLI', subtitle: 'CLI забирает Published Configuration выбранной Version.', tasks: ['Скопируй CLI-команду со страницы Version.', 'Выполни sdds sync с параметрами project / design-system / theme / version.', 'Проверь полученную конфигурацию: tokens и components.'] },
      { id: 'targets', title: 'Сгенерировать target files', subtitle: 'Конфигурация превращается в файлы для платформы продукта.', tasks: ['Сгенерируй target files для своей платформы.', 'Подключи их в сборку продукта.', 'Проверь, что интерфейс использует значения Version.'] },
      { id: 'update', title: 'Обновиться на новую Version', subtitle: 'Обновление — это смена номера Version, а не ручной перенос значений.', tasks: ['Получи уведомление о новой Version или проверь Releases.', 'Изучи diff между текущей и новой Version.', 'Обнови номер Version в CLI и перегенерируй target files.'] },
    ],
  },
};

// Documentation-страницы (по макету DS-BUILDER | PLAYGROUND, node 184:8344).
const docPages = {
  developers: { section: 'Home', title: 'Для разработчиков', summary: 'Как подключить SDDS и получать опубликованные темы в код: платформы, установка, пример компонента и Version через CLI.', html: `
    <p class="lead">Как подключить SDDS и получать опубликованные темы в код. Имена пакетов и команды CLI — целевые плейсхолдеры; финал появится после фиксации контракта.</p>
    <section class="doc-section"><h3>1. С чего начать</h3>
      <p>Модель: <strong>Project → Design System → Theme → Version</strong>. Дизайнер публикует Version с неизменяемой Published Configuration (токены + компоненты). Разработчик забирает нужную Version через CLI — это и есть handoff, без ручного переноса макетов.</p></section>
    <section class="doc-section"><h3>2. Поддерживаемые платформы</h3>
      <table class="doc-table"><thead><tr><th>Платформа</th><th>Библиотека</th></tr></thead><tbody>
        <tr><td>Web</td><td>React</td></tr>
        <tr><td>Android</td><td>Compose UI, ViewSystem</td></tr>
        <tr><td>iOS</td><td>SwiftUI</td></tr>
      </tbody></table>
      <p>Единый словарь props и токенов на всех платформах.</p></section>
    <section class="doc-section"><h3>3. Установка <span class="doc-badge">имена целевые</span></h3>
      <p>Web (npm):</p><pre>npm install @sdds/react @sdds/tokens</pre>
      <p>Android (Gradle):</p><pre>implementation("ru.sber.sdds:compose:&lt;version&gt;")</pre>
      <p>iOS (SPM):</p><pre>.package(url: "https://github.com/sber/sdds-ios", from: "1.0.0")</pre>
      <p class="doc-note">Пакеты ещё не опубликованы — имена показывают целевую модель.</p></section>
    <section class="doc-section"><h3>4. Пример компонента</h3>
      <pre>import { Button } from '@sdds/react'

&lt;Button size="m" view="primary" onClick={pay}&gt;Оплатить&lt;/Button&gt;</pre>
      <table class="doc-table"><thead><tr><th>prop</th><th>значения</th><th>по умолчанию</th></tr></thead><tbody>
        <tr><td><code>view</code></td><td>primary / secondary / clear / accent</td><td>primary</td></tr>
        <tr><td><code>size</code></td><td>xs / s / m / l / xl</td><td>m</td></tr>
        <tr><td><code>disabled</code></td><td>boolean</td><td>false</td></tr>
        <tr><td><code>stretched</code></td><td>во всю ширину</td><td>false</td></tr>
        <tr><td><code>contentLeft / contentRight</code></td><td>иконка</td><td>—</td></tr>
      </tbody></table>
      <p>Полный словарь props — общий для всех компонентов (см. Guidelines).</p></section>
    <section class="doc-section"><h3>5. Получение Version через CLI <span class="doc-badge">контракт в проработке</span></h3>
      <pre>sdds sync --project &lt;project&gt; --design-system &lt;ds&gt; --theme &lt;theme&gt; --version &lt;version&gt;</pre>
      <p>CLI забирает Published Configuration выбранной Version и генерирует target-файлы под платформу. В прод автоматически ничего не раскатывается — вы забираете нужную версию сами.</p></section>
    <section class="doc-section"><h3>6. Ссылки</h3>
      <ul class="doc-links">
        <li>GitHub — <span class="doc-muted">появится</span></li>
        <li>npm / Maven / SPM — <span class="doc-muted">появится</span></li>
        <li><button class="link-like" data-action="set-doc-page" data-id="introducing">Introducing SDDS</button></li>
      </ul></section>
  ` },
  introducing: { section: 'Home', title: 'Introducing', body: [['What it is', 'SDDS — дизайн-система Сбера: единый источник токенов, компонентов и правил для дизайна и кода. Portal — точка входа в документацию, onboarding и DS Builder.'], ['Как устроен путь', 'Designer настраивает Theme в DS Builder и публикует Version; Developer применяет её через CLI. Изменения проходят цикл Changes → validation → Publish.']] },
  changelog: { section: 'Home', title: 'Changelog', body: [['SDDS Core 3.12.0', 'Новые размеры контролов, режим Contrast для палитр, исправления Typography.'], ['DS Builder', 'Color picker, diff и rollback Versions, per-user черновики, уведомления о публикации.']] },
  tokens: { section: 'Guidelines', title: 'Tokens', body: [['What it is', 'Семантические токены — именованные значения цвета, размеров и типографики. Компоненты ссылаются на токены, а не на литеральные значения.'], ['When to use', 'Используйте семантические токены вместо hex-значений: они адаптируются к режимам Light/Dark и темам проекта.']] },
  theming: { section: 'Guidelines', title: 'Theming', body: [['What it is', 'Theme — набор значений токенов поверх базовой SDDS: палитра, режимы Light/Dark и subthemes.'], ['When to use', 'Создавайте Theme на базе стартовой палитры SDDS Base, Contrast или Custom и настраивайте значения в DS Builder.']] },
  typography: { section: 'Guidelines', title: 'Typography', body: [['What it is', 'Типографическая шкала SDDS: семейства, размеры и высоты строк, связанные с токенами typography.*.'], ['When to use', 'Не переопределяйте шрифты внутри компонентов: меняйте значения токенов в Theme.']] },
  button: { section: 'Components', group: 'Actions', title: 'Button', component: 'button', properties: [['Variant', 'Primary'], ['Size', 'M'], ['State', 'Default'], ['Content', 'Primary Button']], body: [['What it is', 'Button — основной элемент взаимодействия. Инициирует действие: отправку формы, подтверждение операции, переход к следующему шагу. В отличие от Link, не ведёт к ресурсу — всегда запускает процесс.'], ['When to use', 'Use — когда нужно инициировать действие: отправить форму, подтвердить удаление, запустить процесс, сохранить изменения, перейти к следующему шагу мастера.'], ['Don’t use', 'Не используйте Button для навигации к ресурсу — для этого есть Link. Не размещайте два Primary-действия рядом.']] },
  textfield: { section: 'Components', group: 'Forms', title: 'Input', component: 'input', properties: [['Radius', '8'], ['Size', 'M 48'], ['State', 'Default'], ['Label', 'Email']], body: [['What it is', 'Input — поле ввода однострочного текста с label, placeholder, helper-текстом и состоянием ошибки.'], ['When to use', 'Use — для ввода коротких значений: email, имя, поисковый запрос. Для длинного текста используйте TextArea.'], ['Don’t use', 'Не используйте Input для выбора из фиксированного списка — для этого есть Select.']] },
  iconbutton: { section: 'Components', group: 'Actions', title: 'IconButton', component: 'icon-button', properties: [['Size', '36'], ['Icon', 'Plus'], ['State', 'Default']], body: [['What it is', 'IconButton запускает компактное действие и использует понятную иконку.'], ['When to use', 'Для повторяемых действий в toolbar и плотных интерфейсах.'], ['Accessibility', 'Всегда задавайте доступное имя через aria-label или tooltip.']] },
  link: { section: 'Components', group: 'Actions', title: 'Link', component: 'link', properties: [['Underline offset', '2'], ['State', 'Default'], ['Target', 'Current tab']], body: [['What it is', 'Link ведёт к ресурсу или меняет навигационный контекст.'], ['When to use', 'Для переходов, в отличие от Button, который запускает действие.']] },
  card: { section: 'Components', group: 'Layout', title: 'Card', component: 'card', properties: [['Padding', '20'], ['State', 'Default'], ['Surface', 'Primary']], body: [['What it is', 'Card группирует связанные данные и действия.'], ['When to use', 'Для каталогов Project, Design System, Theme и самостоятельных сущностей.']] },
  modal: { section: 'Components', group: 'Overlays', title: 'Modal', component: 'modal', properties: [['Width', '480'], ['Dismiss', 'Enabled'], ['State', 'Default']], body: [['What it is', 'Modal требует завершить локальное действие перед возвратом к основному контексту.'], ['When to use', 'Для подтверждений и коротких форм, не для длинных настроек.']] },
  select: { section: 'Components', group: 'Forms', title: 'Select', component: 'select', properties: [['Radius', '8'], ['State', 'Default'], ['Options', '3']], body: [['What it is', 'Select позволяет выбрать одно значение из ограниченного списка.'], ['When to use', 'Когда варианты известны заранее и их больше двух.']] },
  checkbox: { section: 'Components', group: 'Forms', title: 'Checkbox', component: 'checkbox', properties: [['Size', '20'], ['State', 'Checked'], ['Label', 'Visible']], body: [['What it is', 'Checkbox управляет независимым бинарным выбором.'], ['When to use', 'Для согласий, опций и множественного выбора.']] },
  tooltip: { section: 'Components', group: 'Feedback', title: 'Tooltip', component: 'tooltip', properties: [['Delay', '300'], ['Placement', 'Top'], ['State', 'Visible']], body: [['What it is', 'Tooltip кратко объясняет иконку или компактный элемент.'], ['Accessibility', 'Не помещайте в Tooltip обязательную информацию и интерактивный контент.']] },
  typographyComponent: { section: 'Components', group: 'Content', title: 'Typography', component: 'typography', properties: [['Font family', 'SB Sans Text'], ['Style', 'Body M'], ['State', 'Default']], body: [['What it is', 'Typography применяет системные текстовые стили и связанные tokens.'], ['When to use', 'Используйте готовые стили вместо локальных размеров и начертаний.']] },
};

const gatedRoutes = ['builder-home', 'create-project', 'project', 'project-settings', 'create-design-system', 'design-system', 'design-system-settings', 'create-theme', 'theme-settings', 'editor', 'changes', 'publish', 'result', 'components', 'health', 'versions', 'account-settings'];

let state = loadState();
initializeThemeWorkspaceState();
const app = document.querySelector('#app');
let pendingFocusSelector = '';
let pendingPickerFocusSelector = '';

// Vercel Web Analytics: кастомные события. SPA не меняет URL, поэтому воронку
// (просмотры разделов + ключевые действия) шлём событиями вручную.
let lastTrackedRoute = null;
function track(name, data) {
  try { window.va?.('event', data ? { name, data } : { name }); } catch { /* аналитика не критична */ }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('sdds-portal-flow-v6') || '{}');
    const merged = { ...structuredClone(initialState), ...saved };
    const savedTokenIds = new Set((merged.tokens || []).map((token) => token.id));
    merged.tokens = [
      ...(merged.tokens || []),
      ...initialState.tokens.filter((token) => !savedTokenIds.has(token.id)),
    ].map((token) => token.group === 'colors' ? { ...token, ...(initialState.tokens.find((item) => item.id === token.id && item.group === 'colors') || {}) } : token);
    Object.values(merged.themeWorkspaces || {}).forEach((workspace) => {
      const workspaceTokenIds = new Set((workspace.tokens || []).map((token) => token.id));
      workspace.tokens = [
        ...(workspace.tokens || []),
        ...initialState.tokens.filter((token) => !workspaceTokenIds.has(token.id)),
      ].map((token) => token.group === 'colors' ? { ...token, ...(initialState.tokens.find((item) => item.id === token.id && item.group === 'colors') || {}) } : token);
    });
    // Портал и Builder ведут себя по-разному:
    // — Builder (экраны за авторизацией) — рабочий инструмент: всегда возвращаемся на последний
    //   экран, как IDE открывает последний проект.
    // — Портал (публичные страницы) — новый заход (сайт закрывали → сессия завершилась) открываем
    //   на главной. sessionStorage живёт, только пока вкладка открыта; в пределах одной сессии
    //   (обновление страницы) страница Портала сохраняется.
    const inBuilder = gatedRoutes.includes(merged.route);
    if (!inBuilder && !sessionStorage.getItem('sdds-portal-session')) {
      merged.route = initialState.route;
    }
    sessionStorage.setItem('sdds-portal-session', '1');
    // Анонимный прогресс онбординга живёт в sessionStorage (см. persist).
    if (!merged.authenticated) {
      try {
        const anonProgress = JSON.parse(sessionStorage.getItem('sdds-onboarding-anon') || 'null');
        if (anonProgress) merged.onboardingDone = anonProgress;
      } catch { /* игнорируем битые данные */ }
    }
    return merged;
  } catch {
    return structuredClone(initialState);
  }
}

function persist() {
  syncActiveThemeWorkspace();
  // Прогресс онбординга — персональные данные: без авторизации живёт только в рамках
  // сессии (sessionStorage) и не сохраняется в localStorage (находка юзертеста).
  const payload = state.authenticated ? state : { ...state, onboardingDone: { designer: [], developer: [] } };
  if (!state.authenticated) {
    try { sessionStorage.setItem('sdds-onboarding-anon', JSON.stringify(state.onboardingDone)); } catch { /* не критично */ }
  }
  try { localStorage.setItem('sdds-portal-flow-v6', JSON.stringify(payload)); return true; }
  catch { state.settingsError = 'Не удалось сохранить данные: локальное хранилище переполнено. Удалите или уменьшите изображения.'; return false; }
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function routeButton(route, label, extra = '') {
  const active = state.route === route ? 'is-active' : '';
  return `<button class="nav-button ${active} ${extra}" data-route="${route}">${label}</button>`;
}

function portalShell(content) {
  const inBuilder = gatedRoutes.includes(state.route) || state.route === 'auth';
  const hasSidebar = inBuilder && state.route !== 'auth';
  const themeWorkspace = ['theme-settings', 'editor', 'components', 'health', 'versions', 'changes', 'publish', 'result'].includes(state.route);
  return `
    <div class="app-shell ${inBuilder ? 'builder-shell' : 'portal-shell'} ${hasSidebar ? 'has-sidebar' : 'no-sidebar'} ${themeWorkspace ? 'theme-workspace' : ''}">
      ${!inBuilder ? (() => {
        const navItems = [['portal-home', 'Главная'], ['documentation', 'Компоненты'], ['builder-about', 'DS Builder'], ['onboarding', 'Онбординг'], ['releases', 'Релизы'], ['support', 'Поддержка']];
        const navButtons = navItems.map(([route, label]) => `<button class="${state.route === route ? 'is-active' : ''}" data-route="${route}">${label}</button>`).join('');
        return `<header class="portal-header">
          <button class="portal-brand" data-route="portal-home">✣ <span>SDDS Portal</span></button>
          <nav>${navButtons}</nav>
          <div class="portal-header-actions">
            <button class="portal-builder-link" data-route="builder-home">Открыть DS Builder</button>
            <button class="portal-burger" data-action="toggle-mobile-nav" aria-label="Меню" aria-expanded="${state.mobileNavOpen ? 'true' : 'false'}">${state.mobileNavOpen ? '✕' : '☰'}</button>
          </div>
          ${state.mobileNavOpen ? `<div class="portal-mobile-nav">${navButtons}</div>` : ''}
        </header>`;
      })() : ''}
      ${hasSidebar ? builderSidebar() : ''}
      <section class="content-shell">
        ${themeWorkspace ? workspaceContextBar() : ''}
        <main id="main-content" class="page">${content}</main>
        ${inBuilder ? '' : `<footer><span>SDDS Portal</span><button class="link-button" data-action="reset">Сбросить прототип</button></footer>`}
      </section>
      ${entityModalView()}
      ${versionModalView()}
      ${state.toastMessage ? `<div class="app-toast" role="status"><div><strong>Новое уведомление</strong><span>${escapeHtml(state.toastMessage)}</span></div><button data-action="close-toast" aria-label="Закрыть">×</button></div>` : ''}
    </div>`;
}
function workspaceContextBar() {
  const project = selectedProject(), system = selectedSystem(), theme = selectedTheme();
  if (!project || !system || !theme) return '';
  const card = themeCardState(theme);
  const issues = issueCount();
  if (state.route === 'editor' && state.editorTab === 'colors') {
    const settingsIcon = 'https://www.figma.com/api/mcp/asset/3268525a-8eb3-4182-9ed7-cbf828bafee4';
    const caretIcon = 'https://www.figma.com/api/mcp/asset/287d01e6-80f2-4341-b281-ca24ab1670a3';
    return `<div class="workspace-context-bar workspace-context-bar-editor" aria-label="Theme editor context">
      <nav class="workspace-breadcrumb" aria-label="Editor breadcrumbs">
        <button data-route="design-system">Design System</button><span>/</span>
        <strong>Color tokens editor</strong>
      </nav>
      <div class="workspace-context-meta">
        <button class="context-icon-button figma-topbar-icon" title="Settings" aria-label="Settings"><img src="${settingsIcon}" alt=""></button>
        <div class="figma-topbar-reset ${state.resetMenuOpen ? 'is-open' : ''}">
          <button data-action="reset-all" ${state.changes.length && canEditTheme() ? '' : 'disabled'}>Reset</button>
          <button class="figma-topbar-caret" data-action="toggle-reset-menu" aria-label="Reset options" aria-expanded="${state.resetMenuOpen}" ${state.changes.length && canEditTheme() ? '' : 'disabled'}><img src="${caretIcon}" alt=""></button>
          ${state.resetMenuOpen ? `<div class="reset-dropdown figma-topbar-dropdown"><button data-action="reset-section" ${sectionTokenChanges().length ? '' : 'disabled'}>Reset section ${sectionTokenChanges().length ? `· ${sectionTokenChanges().length}` : ''}</button><button data-action="reset-all" ${state.changes.length ? '' : 'disabled'}>Reset all · ${state.changes.length}</button></div>` : ''}
        </div>
        <button class="figma-topbar-publish" data-route="publish" ${state.changes.length && canPublish() ? '' : 'disabled'}>Publish</button>
      </div>
    </div>`;
  }
  return `<div class="workspace-context-bar" aria-label="Контекст Theme">
    <nav class="workspace-breadcrumb" aria-label="Хлебные крошки">
      <button data-route="project">${escapeHtml(project.name)}</button><span>/</span>
      <button data-route="design-system">${escapeHtml(system.name)}</button><span>/</span>
      <strong>${escapeHtml(theme.name)}</strong>
    </nav>
    <div class="workspace-context-meta">
      <span class="context-version">v${escapeHtml(card.version)}</span>
      <span class="status ${card.status === 'draft' ? '' : 'passed'}">${card.status === 'draft' ? 'Draft' : 'Published'}</span>
      <button class="context-changes ${state.changes.length ? 'has-changes' : ''}" data-route="changes">${state.changes.length} changes${issues ? ` · ${issues} issues` : ''}</button>
      <span class="context-role">${roleLabel()}</span>
    </div>
  </div>`;
}

function railButton(route, icon, label, forceActive = false) {
  const active = state.route === route || forceActive ? 'is-active' : '';
  return `<button class="rail-button ${active}" data-route="${route}" title="${label}">${icon}</button>`;
}

function sidebarButton(route, label, options = {}) {
  const tabMatches = !options.tab || state.editorTab === options.tab;
  const active = state.route === route && tabMatches ? 'is-active' : '';
  const tab = options.tab ? ` data-tab="${options.tab}"` : '';
  return `<button class="sidebar-link ${active}" data-route="${route}"${tab}>${label}</button>`;
}

function contextSidebar(inBuilder) {
  if (inBuilder) return builderSidebar();
  const sections = {
    'portal-home': ['SDDS Portal', [sidebarButton('portal-home', 'Overview'), sidebarButton('documentation', 'Documentation'), sidebarButton('onboarding', 'Onboarding'), sidebarButton('builder-home', 'DS Builder'), sidebarButton('releases', 'Releases'), sidebarButton('support', 'Support')]],
    documentation: ['Documentation', [sidebarButton('documentation', 'Introducing'), sidebarButton('documentation', 'Guidelines'), sidebarButton('builder-home', 'Tokens & Theming'), sidebarButton('documentation', 'Components')]],
    onboarding: ['Onboarding', [sidebarButton('onboarding', 'Designer'), sidebarButton('onboarding', 'Developer'), sidebarButton('builder-home', 'Открыть Builder')]],
    releases: ['Releases', [sidebarButton('releases', 'Latest versions'), sidebarButton('releases', 'Changelog'), sidebarButton('documentation', 'CLI documentation')]],
    support: ['Support', [sidebarButton('support', 'Request access'), sidebarButton('support', 'Bug'), sidebarButton('support', 'Component request')]],
    result: ['Version details', [sidebarButton('releases', 'Все версии'), sidebarButton('result', 'Published Configuration'), sidebarButton('documentation', 'CLI documentation')]],
  };
  const [title, links] = sections[state.route] || sections['portal-home'];
  return `
    <aside class="context-sidebar">
      <div class="sidebar-title">${title}</div>
      <nav>${links.join('')}</nav>
      <div class="sidebar-meta">Public Portal</div>
    </aside>
  `;
}

function builderSidebar() {
  const project = selectedProject(), system = selectedSystem();
  const inTheme = ['theme-settings', 'editor', 'components', 'health', 'versions', 'changes', 'publish', 'result'].includes(state.route);
  const projects = allProjects().filter((entry) => membership(entry.id));
  const initials = state.userName.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  const notifications = currentNotifications();
  const unreadCount = notifications.filter((entry) => !entry.read).length;
  const railAssets = {
    mark: 'https://www.figma.com/api/mcp/asset/4d3fc357-326d-4f80-94de-4f5519283e8c',
    colors: 'https://www.figma.com/api/mcp/asset/a01b5fdd-7ca6-43aa-8944-193f57668d9b',
    fonts: 'https://www.figma.com/api/mcp/asset/f494c30b-563b-472e-bfee-c515c73b4bde',
    shape: 'https://www.figma.com/api/mcp/asset/8daba963-db4a-4833-bcc5-9f4298892594',
    components: 'https://www.figma.com/api/mcp/asset/003019af-2b31-4423-9c97-f7805be3657f',
    help: 'https://www.figma.com/api/mcp/asset/71af8463-d58a-42d7-b89e-554f24e26214',
  };
  const railIcon = (src) => `<img class="builder-rail-icon" src="${src}" alt="">`;
  // Иконки с внятными метафорами (итог аудита 07.2026): у Figma-ассетов Palette читался
  // как «стопка», Health — как «спидометр», Versions — как «нумерованный список»,
  // Changes носил стрелки «обмена». CSS-фильтр .builder-rail-icon красит и inline-SVG.
  const railInlineIcon = (paths) => `<svg class="builder-rail-icon" viewBox="0 0 24 24" fill="none" stroke="#c6cbd4" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const railSvg = {
    palette: railInlineIcon('<path d="M12 21a9 9 0 1 1 0-18 9 8 0 0 1 9 8 4.5 4.5 0 0 1-4.5 4.5h-2.5a2 2 0 0 0-1 3.75 1.3 1.3 0 0 1-1 1.75"/><circle cx="7.5" cy="10.5" r=".9" fill="#c6cbd4" stroke="none"/><circle cx="12" cy="7.5" r=".9" fill="#c6cbd4" stroke="none"/><circle cx="16.5" cy="10.5" r=".9" fill="#c6cbd4" stroke="none"/>'),
    health: railInlineIcon('<path d="M3 12h4l3 8 4-16 3 8h4"/>'),
    versions: railInlineIcon('<rect x="10" y="5" width="10" height="14" rx="2"/><path d="M7 7v10M4 8v8"/>'),
    changes: railInlineIcon('<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M12 10v4M10 12h4M10 17h4"/>'),
  };
  const item = (route, icon, label, tab = '', disabled = false) => {
    const active = state.route === route && (!tab || state.editorTab === tab) ? 'is-active' : '';
    const title = disabled ? `${label} - unavailable for Viewer` : label;
    return `<button class="builder-rail-button ${active}" data-route="${route}" ${tab ? `data-tab="${tab}"` : ''} data-tooltip="${escapeHtml(title)}" aria-label="${escapeHtml(title)}" ${disabled ? 'disabled aria-disabled="true"' : ''}><span>${icon}</span></button>`;
  };
  const projectItem = (entry) => {
    const isNew = notifications.some((notification) => notification.projectId === entry.id && !notification.read);
    return `<button class="builder-rail-button project-rail-item ${project?.id === entry.id ? 'is-active' : ''}" data-action="open-project" data-id="${entry.id}" data-tooltip="${escapeHtml(entry.name)}" aria-label="Open Project ${escapeHtml(entry.name)}"><span>${entry.sidebarIcon ? `<img src="${escapeHtml(entry.sidebarIcon)}" alt="">` : escapeHtml(entry.name.trim().charAt(0).toUpperCase() || 'P')}</span>${isNew ? '<i class="project-unread-dot" aria-label="New Project"></i>' : ''}</button>`;
  };
  return `<aside class="builder-icon-sidebar ${inTheme ? 'theme-rail' : ''}" aria-label="DS Builder navigation">
    ${inTheme
      ? `<div class="builder-rail-section builder-rail-section-head"><button class="builder-rail-logo rail-back-button theme-back-button" data-route="design-system" data-tooltip="Back to Themes" aria-label="Back to Themes"><span class="builder-mark">${railIcon(railAssets.mark)}</span><span class="builder-back-arrow">←</span></button></div>`
      : `<button class="builder-rail-logo rail-back-button" data-route="portal-home" data-tooltip="SDDS Portal" aria-label="Back to SDDS Portal"><span class="builder-mark">DS</span><span class="builder-back-arrow">←</span></button>`}
    <nav>
      ${inTheme
        ? `<div class="builder-rail-section builder-rail-section-main">${item('health', railSvg.health, 'Health')}<span class="builder-rail-divider"></span>${item('editor', railSvg.palette, 'Palette', 'palette')}${item('editor', railIcon(railAssets.colors), 'Colors', 'colors')}${item('editor', railIcon(railAssets.fonts), 'Typography', 'fonts')}${item('editor', railIcon(railAssets.shape), 'Corner radius', 'sizes')}${item('components', railIcon(railAssets.components), 'Components')}<span class="builder-rail-divider"></span>${item('changes', railSvg.changes, `Changes (${state.changes.length})`)}${item('versions', railSvg.versions, 'Versions')}</div>`
        : `<span class="builder-rail-divider"></span><div class="builder-project-list" aria-label="Projects">${projects.map(projectItem).join('')}</div><button class="builder-rail-button builder-add-project" data-route="create-project" data-tooltip="Create new Project" aria-label="Create new Project"><span>+</span></button>${system ? `<span class="builder-rail-divider"></span>${item('design-system', '◇', system.name)}` : ''}`}
    </nav>
    <div class="builder-account">
      ${inTheme ? `<div class="builder-rail-section builder-rail-section-foot"><button class="builder-rail-button" data-route="theme-settings" data-tooltip="Documentation" aria-label="Documentation"><span>${railIcon(railAssets.help)}</span></button></div>` : ''}
      <button class="builder-notification-button ${state.notificationMenuOpen ? 'is-open' : ''}" data-action="toggle-notifications" data-tooltip="Notifications" aria-label="Notifications${unreadCount ? `, unread: ${unreadCount}` : ''}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>${unreadCount ? `<b>${unreadCount > 9 ? '9+' : unreadCount}</b>` : ''}</button>
      ${state.notificationMenuOpen ? notificationPopover(notifications) : ''}
      <button class="builder-avatar ${state.accountMenuOpen ? 'is-open' : ''}" data-action="toggle-account" data-tooltip="${escapeHtml(state.userName)}" aria-label="${escapeHtml(state.userName)}">${initials}</button>
      ${state.accountMenuOpen ? `<div class="account-popover"><div class="account-popover-user"><strong>${escapeHtml(state.userName)}</strong><span>${escapeHtml(state.userEmail)}</span></div><button data-route="account-settings">Settings</button><button data-route="portal-home">Go to SDDS Portal</button><span class="account-popover-divider"></span><button class="danger-menu-item" data-action="logout">Log out</button></div>` : ''}
    </div>
  </aside>`;
}
function currentNotifications() {
  return (state.notifications || []).filter((entry) => entry.recipientEmail?.toLowerCase() === state.userEmail.toLowerCase()).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

function notificationPopover(notifications) {
  return `<section class="notification-popover" aria-label="Уведомления"><header><strong>Уведомления</strong>${notifications.some((entry) => !entry.read) ? '<button data-action="mark-all-notifications">Прочитать все</button>' : ''}</header><div class="notification-list">${notifications.length ? notifications.map((entry) => `<button class="notification-item ${entry.read ? '' : 'is-unread'}" data-action="open-notification" data-id="${entry.id}"><span>${escapeHtml(entry.message)}</span><small>${escapeHtml(entry.createdAt)}${entry.emailSent ? ' · email отправлен' : ''}</small></button>`).join('') : '<p>Новых уведомлений нет.</p>'}</div></section>`;
}

function createNotification({ recipientEmail, projectId, projectName, type, role = '', detail = '' }) {
  state.notifications ||= [];
  const roleLabel = role ? role.charAt(0).toUpperCase() + role.slice(1) : '';
  const messages = {
    invited: `Вас добавили в Project «${projectName}». Роль: ${roleLabel}. Инициатор: ${state.userName}.`,
    roleChanged: `В Project «${projectName}» ваша роль изменена на ${roleLabel}.`,
    removed: `Ваш доступ к Project «${projectName}» удалён.`,
    accessRequested: `${state.userName} запросил права Editor в Project «${projectName}».`,
    published: `В Project «${projectName}» опубликована ${detail || 'новая Version'}. Инициатор: ${state.userName}.`,
  };
  state.notifications.push({ id: `notification-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, recipientEmail: recipientEmail.toLowerCase(), projectId, type, role, message: messages[type], createdAt: new Date().toLocaleString('ru-RU'), read: false, emailSent: true });
}
function contentBreadcrumb() {
  const project = selectedProject();
  const system = selectedSystem();
  const theme = selectedTheme();
  if (gatedRoutes.includes(state.route)) return ['Builder', project?.name, system?.name, theme?.name].filter(Boolean).join(' / ');
  return {
    'portal-home': 'Home', 'builder-about': 'Home / DS Builder', auth: 'DS Builder / Login', documentation: 'Home / Documentation', onboarding: 'Home / Onboarding', releases: 'Home / Releases', result: 'Home / Releases / Version', support: 'Home / Support',
  }[state.route] || 'SDDS Portal';
}

function builderBar() {
  const project = selectedProject();
  const system = selectedSystem();
  const theme = selectedTheme();
  const context = [project?.name, system?.name, theme?.name].filter(Boolean).join(' / ') || 'Projects';
  return `
    <div class="builder-bar">
      <strong>DS Builder</strong>
      <span>${escapeHtml(context)}</span>
      <nav aria-label="Навигация Builder">
        ${routeButton('builder-home', 'Projects')}
        ${theme ? routeButton('editor', 'Theme Editor') : ''}
        ${theme ? routeButton('changes', `Changes (${state.changes.length})`) : ''}
        ${theme ? routeButton('publish', 'Publish') : ''}
      </nav>
    </div>
  `;
}

function render() {
  if (gatedRoutes.includes(state.route) && !state.authenticated) state.route = 'auth';
  if (state.route === 'builder-home' && state.authenticated) {
    const project = allProjects().find((entry) => entry.id === state.lastProjectId && membership(entry.id)) || allProjects().find((entry) => membership(entry.id));
    if (project) {
      state.projectId = project.id; state.project = project.name; state.role = membership(project.id).role;
      state.designSystemId = null; state.themeId = null; state.route = 'project';
    } else state.route = 'create-project';
  }
  if (['theme-settings', 'editor', 'components', 'health', 'versions', 'changes', 'publish', 'result'].includes(state.route) && !selectedTheme()) state.route = 'builder-home';
  const views = {
    'portal-home': portalHome,
    'builder-about': builderAboutView,
    auth: authView,
    documentation,
    onboarding,
    releases,
    support,
    'builder-home': builderHome,
    'create-project': createProjectView,
    project: projectView,
    'project-settings': projectSettingsView,
    'account-settings': accountSettingsView,
    'create-design-system': createDesignSystemView,
    'design-system': designSystemView,
    'design-system-settings': designSystemSettingsView,
    'create-theme': createThemeView,
    'theme-settings': themeSettingsView,
    editor,
    components: componentsEditor,
    health: healthView,
    versions: versionsView,
    changes,
    publish: publishView,
    result: publicationResult,
  };
  const view = views[state.route] || portalHome;
  if (state.route !== lastTrackedRoute) {
    lastTrackedRoute = state.route;
    track('view:' + state.route); // просмотр раздела (SPA-«страница»)
  }
  app.innerHTML = portalShell(view());
  if (state.route === 'portal-home' || state.route === 'builder-about') {
    // Эти страницы используют те же landing-секции (reveal); hero-canvas есть только на главной.
    mountHero(app.querySelector('#hero-canvas'));
    initLandingEnhancements();
  } else {
    unmountHero();
    landingObserver?.disconnect();
    landingObserver = null;
    landingAnimObserver?.disconnect();
    landingAnimObserver = null;
    landingPinCleanup?.();
    landingPinCleanup = null;
    landingIconFlowCleanup?.();
    landingIconFlowCleanup = null;
    if (landingScroll) { window.removeEventListener('scroll', landingScroll); window.removeEventListener('resize', landingScroll); landingScroll = null; }
    if (landingSlidesTimer) { clearInterval(landingSlidesTimer); landingSlidesTimer = null; }
    landingSetSlide = null;
  }
  if (state.entityModal || state.versionModal) {
    requestAnimationFrame(() => {
      const autofocus = app.querySelector('.entity-modal [data-autofocus]');
      const fallback = app.querySelector('.entity-modal button:not(:disabled), .entity-modal select:not(:disabled), .entity-modal input:not([type="hidden"]):not(:disabled), .entity-modal textarea:not(:disabled)');
      (autofocus || fallback)?.focus();
    });
  } else if (state.colorPicker) {
    const selector = pendingPickerFocusSelector;
    pendingPickerFocusSelector = '';
    requestAnimationFrame(() => (selector ? app.querySelector(selector) : app.querySelector('.color-picker-popover [data-autofocus], .color-picker-popover button, .color-picker-popover input'))?.focus());
  } else if (pendingFocusSelector) {
    const selector = pendingFocusSelector;
    pendingFocusSelector = '';
    requestAnimationFrame(() => app.querySelector(selector)?.focus());
  }
}

// Scroll-reveal секций landing и анимация счётчиков метрик.
let landingObserver = null;
let landingScroll = null;
let landingPinCleanup = null;
let landingIconFlowCleanup = null;
let landingSlidesTimer = null;
let landingAnimObserver = null;
let landingSetSlide = null;
let statsAnimated = false;
const revealedSections = new Set();

function initLandingEnhancements() {
  landingObserver?.disconnect();
  landingObserver = null;
  landingAnimObserver?.disconnect();
  landingAnimObserver = null;
  landingPinCleanup?.();
  landingPinCleanup = null;
  landingIconFlowCleanup?.();
  landingIconFlowCleanup = null;
  if (landingScroll) { window.removeEventListener('scroll', landingScroll); window.removeEventListener('resize', landingScroll); landingScroll = null; }
  const root = app.querySelector('.landing');
  if (!root) return;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const sections = [...root.querySelectorAll('.reveal')];
  if (reduced) {
    sections.forEach((section) => section.classList.add('is-visible'));
  } else {
    landingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealedSections.add(Number(entry.target.dataset.revealIndex));
        landingObserver?.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    sections.forEach((section, index) => {
      section.dataset.revealIndex = index;
      if (revealedSections.has(index) || section.getBoundingClientRect().top < window.innerHeight * 0.92) {
        section.classList.add('is-visible');
        revealedSections.add(index);
      } else landingObserver.observe(section);
    });
  }
  landingIconFlowCleanup = initIconFlow(root, reduced);
  // Морфинг «путь цвета» (много CSS-анимаций) ставим на паузу, когда он за экраном —
  // это снимает постоянную нагрузку на композитор на слабых машинах, не меняя вид.
  const morphWrap = root.querySelector('.morph-wrap');
  if (morphWrap && !reduced) {
    landingAnimObserver = new IntersectionObserver((entries) => {
      morphWrap.classList.toggle('anim-off', !entries[0].isIntersecting);
    }, { rootMargin: '15% 0px' });
    landingAnimObserver.observe(morphWrap);
  }
  // Pin + zoom: медиа-сцена закрепляется и вырастает во весь экран; заголовок остаётся обычной секцией.
  const pinWrap = root.querySelector('.showcase-pin-wrap');
  const stage = pinWrap?.querySelector('.showcase-stage');
  if (pinWrap && stage && !reduced) {
    pinWrap.classList.add('pin-active');
    // Прогресс: анимация начинается заранее (сцена показалась в нижней части экрана)
    // и завершается у самой точки, где пин отпускает блок — без холостого скролла после максимума.
    const computeTarget = () => {
      const rect = pinWrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, rect.height - vh);
      const start = vh * 0.45;    // рост начинается, когда сцена показалась в нижней части экрана
      const end = -0.92 * total;  // и завершается почти на выходе из пина (мёртвой зоны нет)
      return Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    };
    const applyVisual = (g) => {
      // Линейно к прогрессу: максимум наступает у самого выхода из пина (без «сатурации» раньше времени);
      // плавность даёт инерционный lerp displayed→target ниже.
      const eased = g;
      const vw = document.documentElement.clientWidth, vh = window.innerHeight;
      // Интерполируем сами размеры (scale не умеет менять пропорции):
      // старт — контентная колонка с соотношением 16:10, финал — 90% экрана.
      const startW = Math.min(1180, vw) - 64;
      const startH = startW / 1.6;
      const w = startW + (vw * 0.9 - startW) * eased;
      const h = startH + (vh * 0.9 - startH) * eased;
      stage.style.width = `${w.toFixed(1)}px`;
      stage.style.height = `${h.toFixed(1)}px`;
      // Вертикальная позиция — «док»: сцена прижата верхом к потоку (к тексту интро)
      // и скроллится вместе с ним, пока не доедет до уровня центра видимой области
      // (центр смещён вниз на полшапки — липкая шапка съедает верх экрана).
      // Дальше она стыкуется там и стоит с равными отступами сверху и снизу.
      const headerH = document.querySelector('.portal-header, .content-topbar')?.offsetHeight || 0;
      const pinRect = stage.parentElement.getBoundingClientRect();
      const layoutTop = pinRect.top + (vh - h) / 2;        // куда grid ставит сцену сам
      const centeredTop = headerH / 2 + (vh - h) / 2;      // центр видимой области
      // Едем с потоком, пока не докнулись в центре; на выходе из пина нижняя граница
      // контейнера выталкивает сцену вверх — она скроллится вместе со страницей
      // и не наезжает на следующую секцию.
      const desiredTop = Math.min(Math.max(pinRect.top, centeredTop), pinRect.bottom - h);
      stage.style.transform = `translateY(${(desiredTop - layoutTop).toFixed(1)}px)`;
      // Скругление растёт пропорционально размеру.
      stage.style.borderRadius = `${(20 * (w / startW)).toFixed(1)}px`;
      stage.style.opacity = (0.82 + 0.18 * eased).toFixed(3);
    };
    // Инерционное сглаживание: displayed догоняет target каждый кадр — движение плавное
    // даже при ступенчатом скролле колёсиком. Цикл живёт только рядом с вьюпортом.
    let displayed = null;
    let rafId = 0;
    const tick = () => {
      const target = computeTarget();
      if (displayed === null) displayed = target;
      // Скролл страницы уже сглажен (initSmoothScroll), поэтому здесь догоняем быстрее —
      // двойная инерция делала довод заметно запаздывающим.
      displayed += (target - displayed) * 0.3;
      if (Math.abs(target - displayed) < 0.0008) displayed = target;
      applyVisual(displayed);
      rafId = requestAnimationFrame(tick);
    };
    const pinObserver = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          const on = entries[0]?.isIntersecting ?? true;
          if (on && !rafId) rafId = requestAnimationFrame(tick);
          if (!on && rafId) { cancelAnimationFrame(rafId); rafId = 0; }
        }, { rootMargin: '40% 0px 40% 0px' })
      : null;
    pinObserver?.observe(pinWrap);
    if (!pinObserver) rafId = requestAnimationFrame(tick);
    landingPinCleanup = () => { if (rafId) cancelAnimationFrame(rafId); rafId = 0; pinObserver?.disconnect(); };
    applyVisual(computeTarget());
  }

  // Автосмена слайдов внутри сцены (пауза вне вьюпорта и на неактивной вкладке).
  if (landingSlidesTimer) { clearInterval(landingSlidesTimer); landingSlidesTimer = null; }
  landingSetSlide = null;
  const slides = [...root.querySelectorAll('.showcase-slide')];
  if (slides.length > 1) {
    const dots = [...root.querySelectorAll('.showcase-dots button')];
    let current = 0;
    let inView = true;
    landingSetSlide = (index) => {
      current = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('is-active', active);
        // Видео-лупы: играет только активный слайд (и повторный play() спасает,
        // если браузер не запустил autoplay).
        const video = slide.querySelector('video');
        if (video) { if (active) video.play().catch(() => {}); else video.pause(); }
      });
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    };
    landingSetSlide(0);
    if (typeof IntersectionObserver !== 'undefined' && stage) {
      new IntersectionObserver((entries) => { inView = entries[0]?.isIntersecting ?? true; }, { threshold: 0.25 }).observe(stage);
    }
    if (!reduced) landingSlidesTimer = setInterval(() => { if (inView && !document.hidden) landingSetSlide(current + 1); }, 2400);
  }
  if (!statsAnimated && !reduced) {
    const stats = [...root.querySelectorAll('.landing-stats dt[data-count]')];
    if (stats.length) {
      statsAnimated = true;
      const start = performance.now();
      const duration = 900;
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        stats.forEach((el) => {
          if (!el.isConnected) return;
          el.textContent = `${el.dataset.prefix || ''}${Math.round(Number(el.dataset.count) * eased)}`;
        });
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }
}

function initIconFlow(root, reduced) {
  const section = root.querySelector('.icon-flow-section');
  const pin = section?.querySelector('.icon-flow-pin');
  const copy = section?.querySelector('.icon-flow-copy');
  const track = section?.querySelector('.icon-flow-track');
  const cards = [...(section?.querySelectorAll('.icon-flow-card') || [])];
  if (!section || !pin || !copy || !track || !cards.length) return null;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const smoothstep = (value) => value * value * (3 - value * 2);
  const smootherstep = (value) => value * value * value * (value * (value * 6 - 15) + 10);
  const lanePattern = [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1];
  const laneClearances = [46, 66, 54, 74, 50, 70, 58, 78, 52, 68];
  const profiles = [
    { tilt: -5.5, swing: 3.2, ripple: 1.6, phase: 0.12, skew: -1.2, x: -3, y: -8 },
    { tilt: 3.8, swing: -4.4, ripple: 2.1, phase: 0.34, skew: 1.4, x: 4, y: 7 },
    { tilt: 6.4, swing: 2.2, ripple: -1.8, phase: 0.62, skew: -1, x: -1, y: -12 },
    { tilt: -4.6, swing: 4.8, ripple: 1.2, phase: 0.78, skew: 1.6, x: 3, y: 10 },
    { tilt: 5.2, swing: -3.4, ripple: -2.2, phase: 0.48, skew: -1.3, x: -4, y: 5 },
  ];

  if (reduced) {
    track.style.transform = 'none';
    cards.forEach((card) => { card.style.transform = 'none'; });
    return null;
  }

  const scaleTuning = () => window.innerWidth < 720
    ? { resting: 0.78, lift: 0.36, peak: 1.14 }
    : { resting: 0.76, lift: 0.42, peak: 1.18 };
  const getCenterScalePulse = (centerX, m) => {
    const range = m.vw < 720 ? m.vw * 0.7 : m.vw * 0.36;
    const distance = Math.abs(centerX - m.vw / 2);
    return smootherstep(clamp(1 - Math.pow(distance / range, 1.45), 0, 1));
  };
  const ribbonPath = (card, centerX, m) => {
    const halfWidth = card.offsetWidth * scaleTuning().peak / 2;
    const approach = m.vw < 720 ? 260 : 520;
    const left = m.copyRect.left - halfWidth - approach;
    const right = m.copyRect.right + halfWidth + approach;
    if (centerX <= left || centerX >= right) {
      return { t: centerX <= left ? 0 : 1, pulse: 0, sway: 0 };
    }
    const t = clamp((centerX - left) / Math.max(1, right - left), 0, 1);
    const arch = Math.sin(Math.PI * t);
    return {
      t,
      pulse: smoothstep(clamp(arch, 0, 1)),
      sway: Math.sin(Math.PI * 2 * t),
    };
  };
  const metrics = () => {
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;
    const sectionRect = section.getBoundingClientRect();
    const pinRect = pin.getBoundingClientRect();
    const copyRect = copy.getBoundingClientRect();
    const headerH = document.querySelector('.portal-header, .content-topbar')?.offsetHeight || 0;
    const sectionTop = window.scrollY + sectionRect.top;
    const copyOffset = Math.max(0, (pin.offsetHeight - copy.offsetHeight) / 2);
    const startScroll = sectionTop + copyOffset - vh * 0.86;
    const endScroll =
      sectionTop +
      section.offsetHeight -
      pin.offsetHeight +
      copyOffset +
      copy.offsetHeight -
      headerH;
    const progress = clamp((window.scrollY - startScroll) / Math.max(1, endScroll - startScroll), 0, 1);
    const startX = vw * 1.08;
    const endX = -(track.scrollWidth + vw * 0.08);
    return { vw, vh, pinRect, copyRect, progress, startX, endX, travel: endX - startX };
  };
  const liftFor = (card, direction, m, index) => {
    const peakHeight = card.offsetHeight * scaleTuning().peak;
    const baseTop = m.pinRect.top + m.pinRect.height / 2 - peakHeight / 2;
    const baseBottom = m.pinRect.top + m.pinRect.height / 2 + peakHeight / 2;
    const clearance = laneClearances[index % laneClearances.length] * (m.vw < 720 ? 0.66 : 0.82);
    const minimum = clamp(m.pinRect.height * 0.22, 140, 230);
    const contactPulse = m.vw < 720 ? 0.82 : 0.86;
    const requiredLift = direction < 0
      ? (m.copyRect.top - clearance - baseBottom) / contactPulse
      : (m.copyRect.bottom + clearance - baseTop) / contactPulse;
    const safeLift = direction < 0
      ? Math.min(-minimum, requiredLift)
      : Math.max(minimum, requiredLift);
    const edgeGutter = m.vw < 720 ? 10 : 16;
    const edgeLimit = direction < 0
      ? m.pinRect.top + edgeGutter - baseTop
      : m.pinRect.bottom - edgeGutter - baseBottom;
    return direction < 0 ? Math.max(safeLift, edgeLimit) : Math.min(safeLift, edgeLimit);
  };
  const apply = (progress) => {
    const m = metrics();
    const trackX = m.startX + m.travel * progress;
    track.style.transform = `translate3d(${trackX.toFixed(2)}px, -50%, 0)`;
    cards.forEach((card, index) => {
      const direction = lanePattern[index % lanePattern.length];
      const profile = profiles[index % profiles.length];
      const baseCenter = trackX + card.offsetLeft + card.offsetWidth / 2;
      const path = ribbonPath(card, baseCenter, m);
      const motionPulse = path.pulse;
      const stream = path.sway;
      const crowdPull = clamp((m.vw / 2 - baseCenter) * 0.05, m.vw < 720 ? -24 : -42, m.vw < 720 ? 24 : 42);
      const lift = liftFor(card, direction, m, index);
      const bob = Math.sin((path.t + index * 0.07) * Math.PI) * motionPulse * (m.vw < 720 ? 5 : 9);
      const x = stream * (m.vw < 720 ? 5 : 9) * direction + crowdPull * motionPulse;
      const scaleConfig = scaleTuning();
      const y = lift * motionPulse + bob;
      const centerPulse = getCenterScalePulse(baseCenter + x, m);
      const rotate = ((profile.tilt + Math.sin((path.t + profile.phase) * Math.PI * 2) * profile.swing) * motionPulse) + stream * profile.ripple;
      const skewY = stream * motionPulse * profile.skew;
      const scale = scaleConfig.resting + centerPulse * scaleConfig.lift + Math.sin((path.t + profile.phase) * Math.PI * 2) * 0.008 * centerPulse;
      card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg) skewY(${skewY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    });
  };

  let target = 0;
  let displayed = 0;
  let rafId = 0;
  const tick = () => {
    target = metrics().progress;
    displayed += (target - displayed) * 0.1;
    if (Math.abs(target - displayed) < 0.0006) displayed = target;
    apply(displayed);
    rafId = requestAnimationFrame(tick);
  };
  const observer = typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver((entries) => {
        const on = entries[0]?.isIntersecting ?? true;
        if (on && !rafId) rafId = requestAnimationFrame(tick);
        if (!on && rafId) { cancelAnimationFrame(rafId); rafId = 0; }
      }, { rootMargin: '35% 0px 35% 0px' })
    : null;
  observer?.observe(section);
  if (!observer) rafId = requestAnimationFrame(tick);
  apply(metrics().progress);
  return () => { if (rafId) cancelAnimationFrame(rafId); observer?.disconnect(); };
}

function accountSettingsView() {
  return `<p class="eyebrow">DS Builder / Account</p><h1>Настройки профиля</h1>
    <section class="form-card account-settings-card">
      <div class="account-settings-avatar">${state.userName.split(/\s+/).map((part) => part[0]).join('').slice(0,2).toUpperCase()}</div>
      <label>Имя<input value="${escapeHtml(state.userName)}" disabled></label>
      <label>Email<input value="${escapeHtml(state.userEmail)}" disabled></label>
      <label>Логин<input value="${escapeHtml(state.userLogin)}" disabled></label>
      <small>Редактирование профиля появится после подключения реального сервиса авторизации.</small>
    </section>`;
}

function authView() {
  return `
    <div class="auth-layout">
      <form id="auth-form" class="form-card">
        <p class="eyebrow">DS Builder</p>
        <h1>Авторизация</h1>
        <p>Documentation, Onboarding, Releases и Support доступны без входа. Авторизация требуется только для Builder.</p>
        ${state.authError ? `<div class="notice error-notice">${escapeHtml(state.authError)}</div>` : ''}
        <label>Email или логин<input name="identifier" value="anna" autocomplete="username" required /></label>
        <label>Пароль<input name="password" type="password" value="demo" autocomplete="current-password" required /></label>
        <small>Права загружаются из membership проекта. Тест: anna / demo, ivan / demo, maria / demo.</small>
        <div class="form-actions"><button type="button" class="secondary" data-route="portal-home">Отмена</button><button type="submit">Войти в DS Builder</button></div>
      </form>
    </div>
  `;
}

// Продукты на SDDS (social proof). Разные акцентные цвета обыгрывают white-label.
const sddsProducts = [
  ['GigaChat', 'GC'], ['HomeOS', 'HO'], ['SberDevices', 'SD'], ['FinAI', 'FA'],
  ['PlatformAI', 'PA'], ['SberScan', 'SS'], ['Sber Com', 'SC'], ['Sber Ring', 'SR'],
  ['Нетология', 'Н'], ['СберСтрахование', 'СС'], ['СберИндия', 'СИ'],
];
const productAccents = ['#107f8c', '#3b78ff', '#6d5dfc', '#24b23e', '#d45b35', '#e0518a', '#f7b733', '#0ea5b0'];

// Демонстрационная иконка (звезда) для секции про набор иконок.
// style: outline (тонкий контур), bold (жирный контур), fill (заливка); size — сторона в px.
function iconStar(style, size = 40) {
  const d = 'M12 3.6l2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 15.75 7.05 18.05l.9-5.23-3.8-3.7 5.25-.76z';
  const paint = style === 'fill'
    ? 'fill="currentColor"'
    : `fill="none" stroke="currentColor" stroke-width="${style === 'bold' ? 2.6 : 1.5}" stroke-linejoin="round" stroke-linecap="round"`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" ${paint}/></svg>`;
}

function iconFlowGlyph(type, size = 72) {
  const attrs = `width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true"`;
  const stroke = 'fill="none" stroke="currentColor" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    calendar: `<rect x="13" y="16" width="38" height="34" rx="8" ${stroke}/><path d="M20 10v10M44 10v10M14 27h36M24 40h.2" ${stroke}/>`,
    circles: `<circle cx="25" cy="37" r="11" ${stroke}/><circle cx="39" cy="37" r="11" ${stroke}/><circle cx="32" cy="25" r="11" ${stroke}/>`,
    palette: `<path d="M17 14h16c10 0 17 7 17 16 0 4-2 6-5 6h-6c-3 0-5 2-5 5s-2 6-6 6H17c-3 0-5-2-5-5V19c0-3 2-5 5-5Z" ${stroke}/><path d="M25 25l-7 7 7 7M39 25l7 7-7 7" ${stroke}/>`,
    check: `<circle cx="32" cy="32" r="21" ${stroke}/><path d="M21 33l8 8 16-17" ${stroke}/>`,
    hourglass: `<path d="M21 10h22M21 54h22M24 12c0 11 16 12 16 20S24 41 24 52M40 12c0 11-16 12-16 20s16 9 16 20" ${stroke}/>`,
    stack: `<path d="M18 20l14-8 14 8-14 8-14-8Z" ${stroke}/><path d="M18 32l14 8 14-8M18 44l14 8 14-8" ${stroke}/>`,
    sliders: `<path d="M14 22h36M14 42h36M25 16v12M40 36v12" ${stroke}/><circle cx="25" cy="22" r="5" ${stroke}/><circle cx="40" cy="42" r="5" ${stroke}/>`,
    spark: `<path d="M32 10l5 16 16 6-16 6-5 16-6-16-15-6 15-6 6-16Z" ${stroke}/>`,
    grid: `<rect x="14" y="14" width="14" height="14" rx="4" ${stroke}/><rect x="36" y="14" width="14" height="14" rx="4" ${stroke}/><rect x="14" y="36" width="14" height="14" rx="4" ${stroke}/><rect x="36" y="36" width="14" height="14" rx="4" ${stroke}/>`,
    bolt: `<path d="M36 8L16 36h16l-4 20 20-28H32l4-20Z" ${stroke}/>`,
    token: `<path d="M32 10l19 11v22L32 54 13 43V21l19-11Z" ${stroke}/><path d="M32 32l19-11M32 32L13 21M32 32v22" ${stroke}/>`,
    cursor: `<path d="M17 12l30 18-13 4-7 13-10-35Z" ${stroke}/>`
  };
  return `<svg ${attrs}>${icons[type] || icons.spark}</svg>`;
}

const landingIconFlowCards = [
  { label: 'Calendar', icon: 'calendar', bg: '#8846c8', ink: '#562199', depth: '#5b238f' },
  { label: 'Components', icon: 'circles', bg: '#43bf52', ink: '#168c2a', depth: '#178232' },
  { label: 'Palette', icon: 'palette', bg: '#3b60ff', ink: '#1640d9', depth: '#2246c8' },
  { label: 'Check', icon: 'check', bg: '#ffc34d', ink: '#df8b00', depth: '#b87812' },
  { label: 'Process', icon: 'hourglass', bg: '#ff644d', ink: '#cf351e', depth: '#bb3726', shape: 'round' },
  { label: 'Layers', icon: 'stack', bg: '#ad3fd0', ink: '#76219b', depth: '#78249c' },
  { label: 'Settings', icon: 'sliders', bg: '#25b8a8', ink: '#0b8177', depth: '#137a72' },
  { label: 'Spark', icon: 'spark', bg: '#7f63ff', ink: '#4d31c7', depth: '#4c35b3' },
  { label: 'Grid', icon: 'grid', bg: '#25c1e8', ink: '#06799a', depth: '#087488' },
  { label: 'Bolt', icon: 'bolt', bg: '#ffe05a', ink: '#d09200', depth: '#ad7b0c' },
];

function landingIconFlowCard(card, index) {
  return `<figure class="icon-flow-card ${card.shape === 'round' ? 'is-round' : ''}" style="--flow-bg:${card.bg};--flow-ink:${card.ink};--flow-depth:${card.depth};--flow-index:${index}" data-flow-card aria-label="${escapeHtml(card.label)}">
    <span class="icon-flow-card-visual" data-icon-animation-slot>
      <span class="icon-flow-icon">${iconFlowGlyph(card.icon)}</span>
    </span>
    <figcaption class="visually-hidden">${escapeHtml(card.label)}</figcaption>
  </figure>`;
}

function landingProofSection() {
  return `
      <section class="landing-section landing-proof reveal">
        <div class="proof-head">
          <div>
            <p class="eyebrow">Кто уже на SDDS</p>
            <h2>16+ команд Сбера строят продукты на SDDS</h2>
            <p class="proof-note">Библиотека одна, токены общие — а тема и бренд у каждого свои. Ниже — те, кого вы точно знаете.</p>
          </div>
        </div>
        <div class="proof-grid">
          ${sddsProducts.map(([name, mark], index) => `<div class="proof-item" style="--proof-accent:${productAccents[index % productAccents.length]}"><span class="proof-mark">${escapeHtml(mark)}</span><span class="proof-name">${escapeHtml(name)}</span></div>`).join('')}
          <div class="proof-item proof-more"><span class="proof-mark">＋</span><span class="proof-name">и другие</span></div>
        </div>
      </section>`;
}

// Витрина реальных продуктов на SDDS — горизонтальный слайдер (скриншоты в ./assets).
const showcaseShots = [
  { file: './assets/giga.webp', name: 'GigaChat', platform: 'Web · Desktop', accent: '#3b78ff', desc: 'ИИ-помощник: чат, боковая навигация, инструменты и голосовой режим — плотный продуктовый интерфейс.' },
  { file: './assets/homeos.webp', name: 'HomeOS', platform: 'Smart TV', accent: '#24b23e', desc: 'Медиа-витрина на большом экране: крупные размеры, десятифутовый интерфейс и навигация пультом.' },
  { file: './assets/sberdevices.jpg', name: 'SberDevices', platform: 'Web', accent: '#6d5dfc', desc: 'Портал устройств и сервисов: карточки, таблицы и настройки на общих токенах.' },
  { file: './assets/finai.webm', name: 'FinAI', platform: 'Web · Desktop', accent: '#0ea5b0', desc: 'Аналитический интерфейс с плотными данными, графиками и формами — размеры XS–M.' },
  { file: './assets/platformai.webm', name: 'PlatformAI', platform: 'Web', accent: '#e0518a', desc: 'Рабочее пространство ML-платформы: навигация, панели и статусы процессов.' },
  { file: './assets/sberscan.webp', name: 'SberScan', platform: 'Mobile', accent: '#f7b733', desc: 'Мобильный сценарий: touch-размеры L–XL, safe-area и платформенные паттерны.' },
  { file: './assets/showcase-netologiya.png', name: 'Нетология', platform: 'Web', accent: '#3b78ff', desc: 'Образовательная платформа: списки курсов, прогресс и формы на токенах SDDS.' },
  { file: './assets/showcase-sberstrahovanie.png', name: 'СберСтрахование', platform: 'Web · Mobile', accent: '#24b23e', desc: 'Клиентские сценарии страхования: формы, шаги и статусы на единой системе.' },
];

function landingShowcaseSection() {
  return `
      <section class="landing-section showcase-intro reveal">
        <p class="eyebrow">В реальных продуктах</p>
        <h2>Одна система — от чата до телевизора</h2>
        <p class="landing-demo-note">GigaChat в вебе, HomeOS на Smart TV и другие продукты собраны из компонентов SDDS. Разные платформы, размеры и бренды — общий набор токенов и правил.</p>
      </section>
      <div class="showcase-pin-wrap"><div class="showcase-pin">
        <div class="showcase-stage" role="group" aria-label="Продукты на SDDS">
          ${showcaseShots.map((shot, index) => `
          <figure class="showcase-slide ${index === 0 ? 'is-active' : ''}" style="--sc-accent:${shot.accent}">
            <div class="showcase-media">
              <div class="showcase-placeholder"><span>${escapeHtml(shot.name)}</span><small>реальный скриншот</small></div>
              ${/\.(webm|mp4)$/i.test(shot.file)
                ? `<video src="${shot.file}" autoplay muted loop playsinline disablepictureinpicture aria-label="Интерфейс ${escapeHtml(shot.name)}" onerror="this.remove()"></video>`
                : `<img src="${shot.file}" alt="Интерфейс ${escapeHtml(shot.name)}" loading="lazy" draggable="false" onerror="this.remove()">`}
            </div>
            <figcaption>
              <div class="showcase-cap-head"><strong>${escapeHtml(shot.name)}</strong><span class="showcase-badge">${escapeHtml(shot.platform)}</span></div>
              <p>${escapeHtml(shot.desc)}</p>
            </figcaption>
          </figure>`).join('')}
          <div class="showcase-dots" role="tablist" aria-label="Продукты">${showcaseShots.map((shot, index) => `<button class="${index === 0 ? 'is-active' : ''}" data-action="showcase-slide" data-index="${index}" aria-label="${escapeHtml(shot.name)}"></button>`).join('')}</div>
        </div>
      </div></div>`;
}

// Live-demo секция landing: white-label в действии (цвет бренда / Mode / Size).
const landingDemoSizes = {
  xs: { h: 32, r: 8, f: 12, label: 'XS' },
  s: { h: 40, r: 10, f: 14, label: 'S' },
  m: { h: 48, r: 12, f: 16, label: 'M' },
  l: { h: 56, r: 14, f: 16, label: 'L' },
  xl: { h: 64, r: 16, f: 18, label: 'XL' },
};
const landingDemoBrands = [
  ['#107f8c', 'SDDS Teal'],
  ['#3b78ff', 'Blue'],
  ['#6d5dfc', 'Purple'],
  ['#24b23e', 'Green'],
  ['#d45b35', 'Warm'],
];

function landingDemoSection() {
  const demo = { color: '#107f8c', mode: 'light', size: 'm', ...(state.landingDemo || {}) };
  const size = landingDemoSizes[demo.size] || landingDemoSizes.m;
  return `
      <section class="landing-section landing-demo reveal">
        <p class="eyebrow">Live demo</p>
        <h2>Смените бренд — код не меняется</h2>
        <p class="landing-demo-note">Компоненты ниже — один и тот же «код». Выберите цвет бренда, режим и размер: меняются только значения токенов, структура остаётся прежней.</p>
        <div class="lpd-controls">
          <div class="lpd-swatches" role="group" aria-label="Цвет бренда">${landingDemoBrands.map(([hex, name]) => `<button class="lpd-swatch ${demo.color.toLowerCase() === hex ? 'is-active' : ''}" style="background:${hex}" data-action="demo-color" data-value="${hex}" title="${name}" aria-label="${name}"></button>`).join('')}</div>
          <div class="lpd-toggle" role="group" aria-label="Режим отображения">
            <button class="${demo.mode === 'light' ? 'is-active' : ''}" data-action="demo-mode" data-value="light">🌕 Light</button>
            <button class="${demo.mode === 'dark' ? 'is-active' : ''}" data-action="demo-mode" data-value="dark">🌑 Dark</button>
          </div>
          <div class="lpd-toggle" role="group" aria-label="Размер">${Object.entries(landingDemoSizes).map(([key, entry]) => `<button class="${demo.size === key ? 'is-active' : ''}" data-action="demo-size" data-value="${key}">${entry.label}</button>`).join('')}</div>
        </div>
        <div class="lpd-stage ${demo.mode === 'dark' ? 'is-dark' : ''}" style="--demo-accent:${demo.color};--demo-h:${size.h}px;--demo-r:${size.r}px;--demo-f:${size.f}px">
          <div class="lpd-app" role="img" aria-label="Пример интерфейса, собранного на токенах SDDS">
            <div class="lpd-appbar">
              <span class="lpd-avatar">АД</span>
              <strong>SDDS Pay</strong>
              <span class="lpd-badge">Pro</span>
              <span class="lpd-appbar-spacer"></span>
              <button class="lpd-iconbutton" type="button" aria-label="Поиск">⌕</button>
            </div>
            <div class="lpd-tabs" role="group" aria-label="Разделы примера">
              <button type="button" class="is-active">Обзор</button>
              <button type="button">Платежи</button>
              <button type="button">Настройки</button>
            </div>
            <div class="lpd-app-grid">
              <div class="lpd-card">
                <span class="lpd-card-label">Баланс</span>
                <strong class="lpd-amount">124 500 ₽</strong>
                <div class="lpd-progress"><i style="width:64%"></i></div>
                <span class="lpd-card-hint">Лимит на месяц использован на 64%</span>
                <div class="lpd-row">
                  <button class="lpd-button" type="button">Оплатить</button>
                  <button class="lpd-button lpd-ghost" type="button">Пополнить</button>
                </div>
              </div>
              <div class="lpd-card">
                <span class="lpd-card-label">Быстрый перевод</span>
                <label class="lpd-field"><input placeholder="Email получателя" readonly></label>
                <div class="lpd-row lpd-between"><span>Уведомления</span><span class="lpd-switch" role="img" aria-label="Switch включён"><i></i></span></div>
                <div class="lpd-row"><span class="lpd-chip">Фильтр ✕</span><span class="lpd-chip">Активные</span></div>
              </div>
            </div>
            <div class="lpd-list">
              <div class="lpd-listitem"><span class="lpd-dot"></span>ГигаЧат Плюс<span class="lpd-sum">−499 ₽</span><span class="lpd-badge">Готово</span></div>
              <div class="lpd-listitem"><span class="lpd-dot"></span>Перевод: Аня Д.<span class="lpd-sum">−12 000 ₽</span><span class="lpd-badge">Готово</span></div>
              <div class="lpd-listitem"><span class="lpd-dot"></span>Кэшбэк за июнь<span class="lpd-sum">+1 250 ₽</span><span class="lpd-badge">Начислен</span></div>
            </div>
          </div>
          <div class="lpd-caption">Компоненты размера ${size.label} выровнены по высоте ${size.h}px; скругление CR${size.label} = ${size.r}px; карточки-обёртки — по правилу «+2»; зависимые (Chip, Switch, Badge) намеренно меньше</div>
        </div>
        <p class="lpd-chain"><code>Raw ${demo.color.toUpperCase()}</code> → <code>Base Token</code> → <code>${demo.mode === 'dark' ? '🌑' : '🌕'} SurfaceAccent</code> → <code>Button ${size.label}</code></p>
      </section>`;
}

function portalHome() {
  return `
    <div class="landing">
      <section class="landing-hero hero-ribbon-layout">
        <div class="hero-ribbon" aria-hidden="true"><canvas id="hero-canvas"></canvas></div>
        <div class="hero-ribbon-copy">
          <h1 class="hero-title"><span class="hero-green">SBER</span> DIGITAL<br>DESIGN SYSTEM</h1>
          <p class="hero-subtitle">SDDS помогает командам быстрее запускать продукты: готовая дизайн-система, темы в DS Builder и передача изменений в разработку через версии.</p>
          <div class="landing-cta-row">
            <button data-route="support" data-support-type="consult">Записаться на демо</button>
            <button class="secondary" data-action="scroll-to" data-target="principles">Узнать больше</button>
          </div>
          <dl class="landing-stats">
            <div><dt data-count="80" data-prefix="~">~80</dt><dd>готовых компонентов</dd></div>
            <div><dt>Web · Mobile · TV</dt><dd>платформы</dd></div>
            <div><dt>XS–XL + Scalable</dt><dd>размерная шкала</dd></div>
            <div><dt>WCAG 2.1 AA</dt><dd>доступность из коробки</dd></div>
          </dl>
        </div>
      </section>

      ${landingProofSection()}

      ${landingShowcaseSection()}

      <section class="landing-section reveal" id="principles">
        <p class="eyebrow">Core principles</p>
        <h2>Система задаёт структуру. Тема задаёт бренд.</h2>
        <div class="principle-grid">
          <article>
            <div class="pv" aria-hidden="true"><span class="pvb" style="--c:#107f8c"><i></i></span><span class="pvb" style="--c:#3b78ff"><i></i></span><span class="pvb" style="--c:#d45b35"><i></i></span></div>
            <h3>Одна система — разные бренды</h3><p>Компоненты нейтральны — бренд задаёт тема. Подключите свою, и библиотека выглядит как ваш продукт, без правок кода.</p>
          </article>
          <article>
            <div class="pv" aria-hidden="true"><span class="pvm pvm-light"><i></i><b></b></span><span class="pvm pvm-dark"><i></i><b></b></span></div>
            <h3>Light и Dark из коробки</h3><p>Каждая тема включает светлый и тёмный режимы. Тёмная версия — не отдельный проект, а встроенное свойство системы.</p>
          </article>
          <article>
            <div class="pv" aria-hidden="true">
              <span class="pvc" style="--bg:#242b35;--dot:#107f8c"><i></i><small>Default</small></span>
              <span class="pvc" style="--bg:#0b0e12;--dot:#65c8d0"><i></i><small>OnDark</small></span>
              <span class="pvc" style="--bg:#eef2f7;--dot:#0a5c66"><i></i><small>OnLight</small></span>
              <span class="pvc" style="--bg:#107f8c;--dot:#ffffff"><i></i><small>Inverse</small></span>
            </div>
            <h3>4 контекста темы</h3><p>Default, OnDark, OnLight, Inverse — токен знает своё значение в каждом контексте. На тёмной подложке компонент сам возьмёт правильный цвет.</p>
          </article>
          <article>
            <div class="pv pv-dict" aria-hidden="true"><span class="pvd">size · M</span><span class="pvd">view · primary</span><span class="pvd">disabled</span><span class="pvd">focused</span></div>
            <h3>Единые словари системы</h3><p>Свойства, состояния и размеры описаны один раз. Size M везде 48px, disabled везде одинаковый, props зовутся одинаково в макете и коде.</p>
          </article>
        </div>
      </section>

      <section class="landing-section icon-flow-section reveal">
        <div class="icon-flow-pin">
          <div class="icon-flow-stage" role="img" aria-label="Карточки с иконками плавно огибают текст раздела">
            <div class="icon-flow-track">
              ${landingIconFlowCards.map(landingIconFlowCard).join('')}
            </div>
          </div>
          <div class="icon-flow-copy">
            <p class="eyebrow">Иконки</p>
            <h2>Свой набор иконок – три стиля и три размера</h2>
            <div class="icon-flow-text">
              <p>GigaChat, HomeOS на SmartTV и другие продукты собраны из компонентов SDDS. Разные платформы, размеры и бренды – общие набор токенов и правил.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Архитектура</p>
        <h2>Токен — это роль, а не значение</h2>
        <div class="landing-split">
          <div class="morph-wrap">
            <div class="morph-scene" role="img" aria-label="Путь цвета: hex-значение #D45B35 становится токеном, кнопкой и темой продукта">
              <div class="morph-ui" aria-hidden="true">
                <div class="mui-bar"><i class="mui-avatar"></i><i class="mui-line" style="width:38%"></i><i class="mui-line mui-right" style="width:14%"></i></div>
                <div class="mui-card">
                  <i class="mui-line" style="width:26%"></i>
                  <i class="mui-line mui-dim" style="width:58%"></i>
                  <i class="mui-progress"><b></b></i>
                </div>
                <div class="mui-row"><i class="mui-dot"></i><i class="mui-line mui-dim" style="width:42%"></i><i class="mui-line mui-right" style="width:12%"></i></div>
                <div class="mui-row"><i class="mui-dot"></i><i class="mui-line mui-dim" style="width:30%"></i><i class="mui-line mui-right" style="width:12%"></i></div>
              </div>
              <div class="mp mp1" aria-hidden="true"></div>
              <div class="mp mp2" aria-hidden="true"></div>
              <div class="mp mp3" aria-hidden="true"></div>
              <div class="mp mp4" aria-hidden="true"></div>
              <div class="mp mp5" aria-hidden="true"></div>
              <div class="mp mp6" aria-hidden="true"></div>
              <div class="morph-el" aria-hidden="true">
                <span class="ml ml1">#D45B35</span>
                <span class="ml ml2">orange-500</span>
                <span class="ml ml3">SurfaceAccent</span>
                <span class="ml ml4">Оплатить</span>
              </div>
            </div>
            <div class="morph-chain" aria-hidden="true"><span class="mc1">Raw Value</span><span class="mc2">Base Token</span><span class="mc3">Semantic Token</span><span class="mc4">Component</span><span class="mc5">Theme</span></div>
          </div>
          <div class="landing-split-copy">
            <p>В SDDS у компонентов нет «зашитых» цветов. Кнопка ссылается на роль — SurfaceAccent, «поверхность акцента»; роль берёт значение из палитры базовых токенов, а та — из raw-значений. Между hex-кодом и интерфейсом всегда стоит эта цепочка.</p>
            <p>Набор значений для всех ролей — это и есть Theme, последнее звено цепочки. Поэтому ребрендинг, новая тема или тёмный режим — правка значений в одном месте, а не поиск всех экранов, где использован цвет. Библиотека компонентов при этом не меняется вовсе.</p>
          </div>
        </div>
      </section>

      ${landingDemoSection()}

      <section class="landing-section reveal">
        <p class="eyebrow">Инструмент</p>
        <h2>Настройте тему в DS Builder</h2>
        <div class="landing-split reverse">
          <div class="landing-split-copy">
            <p>Всё, что вы крутили в live demo выше, дизайнер делает сам — в DS Builder, рабочем инструменте внутри Portal. Настройка токенов с живым превью, проверки качества, публикация неизменяемых Versions.</p>
            <button data-route="builder-about">Подробнее о DS Builder</button>
          </div>
          <div class="builder-mock" aria-hidden="true">
            <div class="builder-mock-bar"><i></i><i></i><i></i></div>
            <div class="builder-mock-row"><span class="status passed">Passed</span><code>color.primary</code><small>#107f8c → #0a5c66</small></div>
            <div class="builder-mock-row"><span class="status warning">Warning</span><code>rounding.md</code><small>8 → 28 · вне scale</small></div>
            <div class="builder-mock-row is-action"><b>Publish · 2</b><small>→ Version 1.5.0</small></div>
          </div>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Developer handoff</p>
        <h2>Разработчик получает Version, а не макет</h2>
        <div class="landing-split">
          <pre class="landing-code"><span class="code-comment"># опубликованная конфигурация — одной командой</span>
sdds sync --project sberbusiness \\
  --design-system crm \\
  --theme light --version 1.5.0

<span class="code-ok">✓ tokens: 6 · components: 10 · schema 1.0</span></pre>
          <div class="landing-split-copy">
            <p>Каждая публикация — неизменяемая Published Configuration с номером Version, changelog и validation snapshot. CLI получает её и генерирует target files для платформы.</p>
            <p>Обновление — это смена номера Version, а не ручной перенос значений. Участники Project получают уведомление о каждой публикации.</p>
            <p class="wip-note">CLI-контракт — в проработке: команда и схема показаны концептуально и могут измениться.</p>
            <button class="secondary" data-route="releases">Смотреть Releases</button>
          </div>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">AI-ready</p>
        <h2>Систему читают не только люди, но и AI-агенты</h2>
        <div class="landing-split reverse">
          <div class="landing-split-copy">
            <p>Дизайнеры собирают тему, разработчики забирают Version через CLI — а AI-агент строит интерфейс через MCP. Подключённый к SDDS агент генерирует код, который сразу использует правильные компоненты, токены и props, а не выдумывает свой <code>div</code> с хардкод-цветом.</p>
            <ul class="landing-list ai-list">
              <li><strong>SDDS MCP <span class="badge-beta">бета</span></strong> — агент получает токены и их значения, спецификации компонентов (props и состояния), генерирует код под платформу и проверяет, что вёрстка соответствует системе.</li>
              <li><strong>ИИ-читаемая документация</strong> — спецификации структурированы так, что модель понимает их без дообучения.</li>
              <li><strong>Правила для агентов</strong> — готовые инструкции для ассистентов в коде (Cursor, Claude Code) и для Figma.</li>
              <li><strong>Генерация тем по промпту</strong> — в DS Builder тема собирается из текстового описания бренда.</li>
            </ul>
          </div>
          <div class="ai-mock" aria-hidden="true">
            <div class="ai-mock-bar"><span class="ai-mock-live"></span>SDDS MCP · connected</div>
            <div class="ai-mock-msg ai-mock-user">Собери форму оплаты на SDDS</div>
            <div class="ai-mock-msg ai-mock-agent">
              <code>&lt;Button size="M" view="primary"&gt;Оплатить&lt;/Button&gt;</code>
              <code class="ai-mock-dim">color → SurfaceAccent · radius → CRL</code>
              <div class="ai-mock-render"><span class="ai-mock-btn">Оплатить</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Для команд</p>
        <h2>Что SDDS даёт вашей роли</h2>
        <div class="value-grid">
          <article><h3>Дизайнерам</h3><p>Готовая библиотека в Figma и Pixso вместо рисования с нуля: слоты, 7 категорий состояний, режимы Light/Dark. Бренд переключается заменой значений токенов.</p><button class="link-like" data-route="onboarding">Onboarding for a Designer →</button></article>
          <article><h3>Разработчикам</h3><p>Никаких «а какой это цвет»: семантические токены, единый словарь props, библиотеки под React, Compose UI, ViewSystem и SwiftUI, стабильные Versions и CLI.</p><button class="link-like" data-route="onboarding">Onboarding for a Developer →</button></article>
          <article><h3>Продукту</h3><p>Быстрее запуск за счёт ~80 готовых компонентов, консистентность Web, Mobile и TV через общие токены, соответствие WCAG 2.1 AA — масштабирование темами без переделки интерфейсов.</p><button class="link-like" data-route="documentation">Introducing SDDS →</button></article>
        </div>
      </section>

      <section class="landing-final reveal">
        <h2>Начните с onboarding</h2>
        <p>Пошаговые маршруты для дизайнера и разработчика — от первого экрана до публикации Version.</p>
        <div class="landing-cta-row">
          <button data-route="onboarding">Начать знакомство</button>
          <button class="secondary" data-route="support">Запросить доступ</button>
        </div>
      </section>
    </div>
  `;
}

function builderAboutView() {
  return `
    <div class="landing">
      <section class="landing-section builder-about-hero reveal">
        <p class="eyebrow">DS Builder</p>
        <h1>Тема бренда — без кода и review</h1>
        <p class="landing-demo-note">DS Builder — рабочий инструмент дизайнера внутри SDDS Portal. Настройте Colors, Sizes и Fonts на семантических токенах, проверьте изменения и опубликуйте неизменяемую Version — разработчик получит её через CLI, а не макетом.</p>
        <div class="landing-cta-row">
          <button data-route="builder-home">Открыть DS Builder</button>
          <button class="secondary" data-route="onboarding">Онбординг дизайнера</button>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Как это работает</p>
        <h2>От черновика до Version — четыре шага</h2>
        <div class="principle-grid">
          <article><h3>1 · Выберите Theme</h3><p>Project → Design System → Theme. Каждая тема — свой набор значений токенов поверх общей библиотеки компонентов.</p></article>
          <article><h3>2 · Настройте токены</h3><p>Colors, Sizes и Fonts с живым превью компонентов: меняете значение — сразу видите Button, TextField и остальные в новом виде.</p></article>
          <article><h3>3 · Проверьте Changes</h3><p>Каждая правка попадает в Changes с diff old → new и impact-анализом: какие компоненты затронуты и есть ли validation issues.</p></article>
          <article><h3>4 · Опубликуйте</h3><p>Direct publish без review создаёт неизменяемую Version с changelog. Участники Project получают уведомление.</p></article>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Проверки</p>
        <h2>Builder следит за качеством темы</h2>
        <div class="landing-split reverse">
          <div class="landing-split-copy">
            <ul class="landing-list">
              <li>WCAG-проверка контраста пар «текст на поверхности» прямо при подборе цвета</li>
              <li>Advisory-валидация с готовыми исправлениями — предупреждает, но не блокирует публикацию</li>
              <li>Значения вне шкалы (например, скругление 28 при шаге 2px) помечаются как Warning</li>
              <li>Validation snapshot сохраняется в каждой Version — видно, с какими issues публиковали</li>
            </ul>
          </div>
          <div class="builder-mock" aria-hidden="true">
            <div class="builder-mock-bar"><i></i><i></i><i></i></div>
            <div class="builder-mock-row"><span class="status passed">Passed</span><code>color.primary</code><small>#107f8c → #0a5c66</small></div>
            <div class="builder-mock-row"><span class="status warning">Warning</span><code>rounding.md</code><small>8 → 28 · вне scale</small></div>
            <div class="builder-mock-row is-action"><b>Publish · 2</b><small>→ Version 1.5.0</small></div>
          </div>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">Совместная работа</p>
        <h2>Черновики личные, публикации общие</h2>
        <div class="value-grid">
          <article><h3>Owner</h3><p>Управляет Project: участники и роли, настройки Design Systems и Themes, публикация. Видит всё, включая историю Versions.</p></article>
          <article><h3>Editor</h3><p>Правит токены и публикует Versions. Черновики изолированы по пользователю — можно экспериментировать, не мешая коллегам.</p></article>
          <article><h3>Viewer</h3><p>Видит только опубликованное: конфигурации, Versions и changelog. Черновики других участников ему недоступны.</p></article>
        </div>
      </section>

      <section class="landing-section reveal">
        <p class="eyebrow">История</p>
        <h2>Versions: diff и откат без страха</h2>
        <div class="landing-split">
          <div class="landing-split-copy">
            <p>Каждая Version неизменяема: конфигурация, changelog, validation snapshot и список изменений фиксируются навсегда. Между любыми двумя Versions доступен diff.</p>
            <p>Ошиблись — откат возвращает значения любой Version в draft: правите и публикуете следующую версию. История не переписывается.</p>
            <button class="secondary" data-route="releases">Смотреть Releases</button>
          </div>
          <div class="landing-split-copy">
            <p>Разработчик получает опубликованную конфигурацию через CLI одной командой — по номеру Version, а не переносом значений из макета.</p>
            <p>Обновление темы в продукте — смена номера Version.</p>
            <p class="wip-note">CLI-контракт — в проработке: команды и схема конфигурации могут измениться.</p>
          </div>
        </div>
      </section>

      <section class="landing-final reveal">
        <h2>Попробуйте на своей теме</h2>
        <p>Войдите в DS Builder, выберите Project и настройте первую тему — черновик никому не помешает.</p>
        <div class="landing-cta-row">
          <button data-route="builder-home">Открыть DS Builder</button>
          <button class="secondary" data-route="support">Запросить доступ</button>
        </div>
      </section>
    </div>
  `;
}

function portalCard(title, text, route, action) {
  return `<article class="card"><h2>${title}</h2><p>${text}</p><button data-route="${route}">${action}</button></article>`;
}

function selectedProject() {
  return allProjects().find((project) => project.id === state.projectId);
}

function allProjects() {
  return [...catalog, ...state.createdProjects]
    .filter((project) => !state.deletedProjectIds.includes(project.id))
    .map((project) => ({ ...project, ...(state.projectOverrides[project.id] || {}) }));
}
function membership(projectId, email = state.userEmail) {
  return (state.membersByProject[projectId] || []).find((member) => member.email.toLowerCase() === email.toLowerCase());
}

function membersForCurrentProject() {
  return state.membersByProject[state.projectId] || [];
}

function ensurePrototypeAccount(name, email) {
  if (!state.accounts.some((account) => account.email === email)) {
    state.accounts.push({ name, email, login: email.split('@')[0], password: 'demo' });
  }
}

function selectedSystem() {
  const project = selectedProject();
  return project ? systemsForProject(project).find((system) => system.id === state.designSystemId) : undefined;
}

function selectedTheme() {
  const system = selectedSystem();
  return system ? themesForSystem(system).find((theme) => theme.id === state.themeId) : undefined;
}

function systemsForProject(project) {
  const catalogSystems = catalog.flatMap((entry) => entry.systems.map((system) => ({ system, originProjectId: entry.id })));
  const createdSystems = Object.entries(state.additionalSystemsByProject).flatMap(([projectId, systems]) => systems.map((system) => ({ system, originProjectId: projectId })));
  return [...catalogSystems, ...createdSystems]
    .filter(({ system, originProjectId }) => {
      const override = state.systemOverrides[system.id] || {};
      return !override.deleted && (override.projectId || originProjectId) === project.id;
    })
    .map(({ system }) => ({ ...system, ...(state.systemOverrides[system.id] || {}) }));
}
function themesForSystem(system) {
  const catalogThemes = catalog.flatMap((project) => project.systems.flatMap((entry) => entry.themes.map((theme) => ({ theme, originSystemId: entry.id }))));
  const createdThemes = Object.entries(state.additionalThemesBySystem).flatMap(([systemId, themes]) => themes.map((theme) => ({ theme, originSystemId: systemId })));
  return [...catalogThemes, ...createdThemes]
    .filter(({ theme, originSystemId }) => {
      const override = state.themeOverrides[theme.id] || {};
      return !override.deleted && (override.systemId || originSystemId) === system.id;
    })
    .map(({ theme }) => ({ ...theme, ...(state.themeOverrides[theme.id] || {}) }));
}

function baselineConfiguration(themeId) {
  return {
    schemaVersion: '1.0',
    themeId,
    tokens: structuredClone(initialState.tokens),
    components: structuredClone(initialState.components),
  };
}

function publicReleaseEntries() {
  const entries = [];
  allProjects().forEach((project) => {
    systemsForProject(project).forEach((system) => {
      themesForSystem(system).forEach((theme) => {
        const workspaceVersions = state.themeWorkspaces?.[theme.id]?.versions || [];
        const versions = workspaceVersions.length ? workspaceVersions : theme.version ? [{
          version: theme.version,
          changelog: 'Current published baseline.',
          status: 'Published',
          date: '2026-06-20',
          issueCount: 0,
          configuration: baselineConfiguration(theme.id),
        }] : [];
        versions.filter((version) => version.status === 'Published').forEach((version) => entries.push({
          ...version,
          projectId: version.projectId || project.id,
          designSystemId: version.designSystemId || system.id,
          themeId: version.themeId || theme.id,
          projectName: project.name,
          designSystemName: system.name,
          themeName: theme.name,
        }));
      });
    });
  });
  return entries.sort((a, b) => String(b.date).localeCompare(String(a.date)) || compareVersions(b.version, a.version));
}

// Shared-состояние темы (tokens, versions, published) видно всем участникам Project;
// черновики (changes, undo/redo) изолированы по ключу user::theme.
function draftKey(themeId, email = state.userEmail) {
  return `${String(email).toLowerCase()}::${themeId}`;
}

function latestPublishedVersion(workspace = state.themeWorkspaces?.[state.themeId]) {
  return (workspace?.versions || []).filter((item) => item.status === 'Published').map((item) => item.version).sort((a, b) => compareVersions(b, a))[0] || '0.0.0';
}

function createThemeWorkspace(theme, legacy = null) {
  if (legacy) return {
    tokens: structuredClone(legacy.tokens || initialState.tokens), components: structuredClone(legacy.components || initialState.components),
    versions: structuredClone(legacy.versions || []), published: structuredClone(legacy.published || null),
    publicationFailed: Boolean(legacy.publicationFailed), publicationError: legacy.publicationError || '',
  };
  return {
    tokens: structuredClone(initialState.tokens), components: structuredClone(initialState.components),
    versions: theme?.version && theme.status !== 'draft' && !theme.id?.startsWith('theme-') ? [{
      version: theme.version, changelog: 'Current published baseline.', status: 'Published', date: '2026-06-20', issueCount: 0,
      projectId: state.projectId, designSystemId: state.designSystemId, themeId: theme.id,
      configuration: baselineConfiguration(theme.id),
    }] : [],
    published: null, publicationFailed: false, publicationError: '',
  };
}

function bindThemeWorkspace(themeId) {
  const workspace = state.themeWorkspaces[themeId];
  if (!workspace) return;
  state.activeWorkspaceThemeId = themeId;
  state.tokens = workspace.tokens; state.components = workspace.components;
  state.versions = workspace.versions; state.published = workspace.published;
  state.publicationFailed = workspace.publicationFailed; state.publicationError = workspace.publicationError || '';
  state.themeDrafts ||= {};
  const draft = state.themeDrafts[draftKey(themeId)] ||= { changes: [], undoStack: [], redoStack: [], baseVersion: latestPublishedVersion(workspace) };
  state.changes = draft.changes; state.undoStack = draft.undoStack || []; state.redoStack = draft.redoStack || [];
  state.draftBaseVersion = draft.baseVersion || latestPublishedVersion(workspace);
}

function syncActiveThemeWorkspace() {
  const themeId = state.activeWorkspaceThemeId;
  if (!themeId || !state.themeWorkspaces?.[themeId]) return;
  state.themeWorkspaces[themeId] = {
    tokens: state.tokens, components: state.components, versions: state.versions,
    published: state.published, publicationFailed: state.publicationFailed, publicationError: state.publicationError || '',
  };
  state.themeDrafts ||= {};
  state.themeDrafts[draftKey(themeId)] = { changes: state.changes, undoStack: state.undoStack || [], redoStack: state.redoStack || [], baseVersion: state.draftBaseVersion || latestPublishedVersion() };
}

function resetDraftBinding() {
  state.activeWorkspaceThemeId = null;
  state.changes = [];
  state.undoStack = [];
  state.redoStack = [];
  state.draftBaseVersion = '';
}

function deleteThemeDrafts(themeId) {
  Object.keys(state.themeDrafts || {}).filter((key) => key.endsWith(`::${themeId}`)).forEach((key) => delete state.themeDrafts[key]);
}

function initializeThemeWorkspaceState() {
  state.themeWorkspaces ||= {};
  state.themeDrafts ||= {};
  if (!state.themeId) return;
  if (!state.themeWorkspaces[state.themeId]) {
    state.themeWorkspaces[state.themeId] = createThemeWorkspace(null, state);
    state.themeDrafts[draftKey(state.themeId)] ||= { changes: structuredClone(state.changes || []), undoStack: structuredClone(state.undoStack || []), redoStack: structuredClone(state.redoStack || []), baseVersion: latestPublishedVersion(state.themeWorkspaces[state.themeId]) };
  }
  bindThemeWorkspace(state.themeId);
}

function activateThemeWorkspace(themeId) {
  syncActiveThemeWorkspace();
  if (!state.themeWorkspaces[themeId]) {
    const theme = selectedTheme();
    state.themeWorkspaces[themeId] = createThemeWorkspace(theme);
  }
  bindThemeWorkspace(themeId);
}

function canEditTheme() { return state.role === 'owner' || state.role === 'editor'; }
function canPublish() { return canEditTheme(); }
function canManageProject() { return state.role === 'owner'; }
function themeCardState(theme) {
  const workspace = state.themeWorkspaces?.[theme.id];
  const latest = workspace?.versions?.filter((item)=>item.status==='Published').map((item)=>item.version).sort((a,b)=>compareVersions(b,a))[0];
  const status = theme.status || (theme.id.startsWith('theme-') ? 'draft' : 'published');
  return { status, version: theme.currentVersion || latest || theme.version || '0.1.0' };
}
function hasThemeChanges(themeId) { return Boolean(state.themeDrafts?.[draftKey(themeId)]?.changes?.length); }
function themeTeamDraftSummary(themeId) {
  const drafts = Object.entries(state.themeDrafts || {}).filter(([key, draft]) => key.endsWith(`::${themeId}`) && draft?.changes?.length);
  return { users: drafts.length, changes: drafts.reduce((sum, [, draft]) => sum + draft.changes.length, 0) };
}
function systemTeamDraftSummary(system) {
  return themesForSystem(system).reduce((total, theme) => {
    const summary = themeTeamDraftSummary(theme.id);
    return { users: total.users + summary.users, changes: total.changes + summary.changes };
  }, { users: 0, changes: 0 });
}
function draftIsStale() {
  return Boolean(state.changes.length && state.draftBaseVersion && state.draftBaseVersion !== latestPublishedVersion());
}
function draftStatusBanner() {
  if (!draftIsStale()) return '';
  return `<div class="stale-draft-banner"><div><strong>Published Version обновилась</strong><span>Draft основан на v${escapeHtml(state.draftBaseVersion)}, текущая Version — v${escapeHtml(latestPublishedVersion())}.</span></div><button data-action="rebase-draft" ${canEditTheme() ? '' : 'disabled'}>Обновить draft</button></div>`;
}
function rebaseDraft() {
  if (!draftIsStale() || !canEditTheme()) return 0;
  const rebased = state.changes.flatMap((change) => {
    const item = change.kind === 'token' ? state.tokens.find((entry) => entry.id === change.id) : state.components.find((entry) => entry.id === change.id);
    if (!item) return [];
    const baseline = change.kind === 'token' && (change.mode || 'light') === 'dark' ? (item.darkValue ?? item.value) : item.value;
    if (String(change.to) === String(baseline)) return [];
    return [{ ...change, from: baseline, ...validateChange(change.kind, item, change.to, change.mode || 'light'), date: new Date().toLocaleString('ru-RU') }];
  });
  replaceChanges(rebased);
  state.draftBaseVersion = latestPublishedVersion();
  return rebased.length;
}
function systemCardState(system) {
  const themes = themesForSystem(system), changed = themes.some((theme)=>hasThemeChanges(theme.id));
  return { status: changed ? 'Изменена' : themes.length ? 'Опубликована' : 'Пустая', changed };
}
function filterCollection(items, kind) {
  const me = state.userEmail.toLowerCase();
  const projectOwner = (membersForCurrentProject().find((member) => member.role === 'owner')?.email || '').toLowerCase();
  // createdBy есть у созданных в прототипе сущностей; для стартового каталога создателем считается Owner проекта.
  const creator = (item) => (item.createdBy || projectOwner).toLowerCase();
  const changed = (item) => (kind === 'theme' ? hasThemeChanges(item.id) : systemCardState(item).changed);
  const createdTs = (item) => { const ts = Number(String(item.id).split('-').pop()); return Number.isFinite(ts) ? ts : 0; };
  const result = items.filter((item) => state.collectionFilter === 'mine' ? creator(item) === me : state.collectionFilter === 'shared' ? creator(item) !== me : true);
  if (state.collectionSort === 'az') return result.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  if (state.collectionSort === 'za') return result.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
  if (state.collectionSort === 'created') return result.sort((a, b) => createdTs(b) - createdTs(a));
  return result.sort((a, b) => Number(changed(b)) - Number(changed(a)));
}
function pendingAccessRequest(projectId = state.projectId, email = state.userEmail) {
  return (state.accessRequests || []).find((request)=>request.projectId===projectId&&request.requesterEmail.toLowerCase()===email.toLowerCase()&&request.status==='pending');
}
function paletteLabel(value) {
  return { 'sdds-base': 'SDDS Base', contrast: 'Contrast', custom: 'Custom' }[value] || 'SDDS Base';
}

function applyPalette(value) {
  const palettes = {
    'sdds-base': { primary: '#3b78ff', 'on-primary': '#ffffff', 'primary:dark': '#8fb3ff', 'on-primary:dark': '#071226' },
    contrast: { primary: '#111827', 'on-primary': '#f8fafc', 'primary:dark': '#f8fafc', 'on-primary:dark': '#111827' },
    custom: state.customPaletteValues || { primary: '#556070', 'on-primary': '#f8fafc', background: '#ffffff', text: '#111827' },
  };
  const palette = palettes[value] || palettes['sdds-base'];
  state.tokens.forEach((token) => {
    if (palette[token.id]) token.value = palette[token.id];
    if (token.group === 'colors' && palette[`${token.id}:dark`]) token.darkValue = palette[`${token.id}:dark`];
  });
}

function documentationComponentVisual(component) {
  const visuals = {
    button: '<button class="doc-preview-button">Primary Button</button>',
    'icon-button': '<button class="doc-preview-button" aria-label="Добавить">＋</button>',
    link: '<a class="demo-link">Открыть документацию</a>',
    card: '<article class="demo-card"><strong>Карточка</strong><p>Связанный контент</p></article>',
    modal: '<div class="demo-modal"><strong>Modal title</strong><p>Короткое подтверждение действия.</p></div>',
    input: '<label class="doc-preview-field"><span>Email</span><input value="name@sdds.local" readonly></label>',
    select: '<label class="doc-preview-field"><span>Роль</span><select><option>Editor</option></select></label>',
    checkbox: '<label class="demo-checkbox"><input type="checkbox" checked> Получать уведомления</label>',
    tooltip: '<div class="demo-tooltip-wrap"><button class="secondary">Навести</button><span class="demo-tooltip">Tooltip</span></div>',
    typography: '<div class="demo-typography"><h3>Заголовок</h3><p>Основной текст</p></div>',
  };
  return visuals[component] || `<span>${escapeHtml(component)}</span>`;
}

// Разводящая страница раздела: компоненты и общая документация плитками.
// Props и пример кода для страниц компонентов — запрос юзертестов:
// «нет понимания, насколько гибкий компонент» (D), «где props и код» (F).
const docComponentProps = {
  button: { code: '<Button view="primary" size="m" onClick={submit}>Оплатить</Button>', props: [['view', 'primary / secondary / clear / accent', 'primary'], ['size', 'xs / s / m / l / xl', 'm'], ['disabled', 'boolean', 'false'], ['stretched', 'на всю ширину контейнера', 'false'], ['contentLeft / contentRight', 'иконка или элемент', '—']] },
  textfield: { code: '<TextField size="m" label="Email" placeholder="name@sber.ru" />', props: [['size', 'xs / s / m / l / xl', 'm'], ['view', 'default / error / success', 'default'], ['label / placeholder', 'string', '—'], ['helperText', 'подпись под полем', '—'], ['disabled', 'boolean', 'false']] },
  iconbutton: { code: '<IconButton view="clear" size="s" aria-label="Добавить"><IconPlus /></IconButton>', props: [['view', 'primary / secondary / clear', 'clear'], ['size', 'xs / s / m / l', 'm'], ['aria-label', 'string — обязателен', '—'], ['disabled', 'boolean', 'false']] },
  link: { code: '<Link href="/docs" view="primary">Документация</Link>', props: [['view', 'primary / secondary', 'primary'], ['underline', 'always / hover / none', 'hover'], ['target', '_self / _blank', '_self'], ['disabled', 'boolean', 'false']] },
  card: { code: '<Card roundness={12}><CardContent>…</CardContent></Card>', props: [['view', 'outlined / filled', 'outlined'], ['roundness', '8 / 12 / 16 / 20', '12'], ['size', 's / m / l', 'm']] },
  modal: { code: '<Modal opened={open} onClose={close} width={480}>…</Modal>', props: [['opened', 'boolean', 'false'], ['onClose', 'callback', '—'], ['width', 'число, px', '480'], ['closeOnOverlayClick', 'boolean', 'true']] },
  select: { code: '<Select size="m" items={themes} value={theme} onChangeValue={setTheme} />', props: [['items', 'массив опций', '—'], ['value / onChangeValue', 'управляемое значение', '—'], ['size', 'xs / s / m / l / xl', 'm'], ['placeholder', 'string', '—'], ['disabled', 'boolean', 'false']] },
  checkbox: { code: '<Checkbox size="m" label="Согласен" checked={ok} onChange={setOk} />', props: [['checked / onChange', 'управляемое значение', '—'], ['size', 's / m / l', 'm'], ['label', 'string', '—'], ['disabled', 'boolean', 'false']] },
  tooltip: { code: '<Tooltip text="Скопировать" placement="top"><IconButton … /></Tooltip>', props: [['text', 'string', '—'], ['placement', 'top / bottom / left / right', 'top'], ['trigger', 'hover / click', 'hover'], ['delay', 'мс', '300']] },
  typographyComponent: { code: '<Typography variant="body-m">Текст</Typography>', props: [['variant', 'body-s / body-m / body-l / display-…', 'body-m'], ['tag', 'p / span / h1…h6', 'p'], ['color', 'семантический токен', 'text.primary']] },
};

function componentPropsSection(key) {
  const spec = docComponentProps[key];
  if (!spec) return '';
  return `
    <section class="doc-section"><h3>Props</h3>
      <table class="doc-table"><thead><tr><th>prop</th><th>значения</th><th>по умолчанию</th></tr></thead><tbody>
        ${spec.props.map(([p, v, d]) => `<tr><td><code>${escapeHtml(p)}</code></td><td>${escapeHtml(v)}</td><td>${escapeHtml(d)}</td></tr>`).join('')}
      </tbody></table>
      <p class="doc-note">Единый словарь props — общий для React, Compose UI, ViewSystem и SwiftUI.</p></section>
    <section class="doc-section"><h3>Code</h3><pre>${escapeHtml(spec.code)}</pre></section>`;
}

// Витрина компонентов на стартовой странице доки (бывший хаб, ужатый до секции).
function introducingComponentsGrid() {
  const comps = Object.entries(docPages).filter(([, page]) => page.section === 'Components');
  return `
    <section class="doc-hub-section">
      <h2>Компоненты в системе</h2>
      <p class="doc-hub-note">В системе ~80 компонентов — в прототипе показаны ${comps.length} основных. Полная навигация — в дереве слева.</p>
      <div class="doc-hub-grid">
        ${comps.map(([key, page]) => `
        <article class="doc-tile clickable-card" data-action="set-doc-page" data-id="${key}">
          <span class="doc-tile-preview" aria-hidden="true">${documentationComponentVisual(page.component)}</span>
          <span class="doc-tile-meta"><strong>${escapeHtml(page.title)}</strong><small>${escapeHtml(page.group)}</small></span>
        </article>`).join('')}
      </div>
    </section>`;
}

function documentation() {
  // Разводящей страницы больше нет (Storybook-паттерн из юзертестов): всегда дока с деревом слева.
  if (!state.docPage || !docPages[state.docPage]) state.docPage = 'introducing';
  const page = docPages[state.docPage] || docPages.introducing;
  state.docPage = Object.keys(docPages).find((key) => docPages[key] === page);
  const navItem = (key) => `<button class="doc-nav-item ${state.docPage === key ? 'is-active' : ''}" data-action="set-doc-page" data-id="${key}">${escapeHtml(docPages[key].title)}</button>`;
  const crumbRoot = `<button class="doc-crumb-root" data-action="set-doc-page" data-id="introducing">Документация</button><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>`;
  const breadcrumb = page.section === 'Components'
    ? `${crumbRoot}<span>Components&nbsp;&nbsp;/&nbsp;&nbsp;${escapeHtml(page.group)}&nbsp;&nbsp;/&nbsp;&nbsp;</span><strong>${escapeHtml(page.title)}</strong>`
    : `${crumbRoot}<strong>${escapeHtml(page.title)}</strong>`;
  const componentPreview = page.component ? `
        <div class="doc-preview">
          <div class="doc-preview-canvas">${documentationComponentVisual(page.component)}</div>
          <aside class="doc-preview-props">
            <header><strong>Documentation</strong><button class="link-like" data-route="builder-home">Открыть в Builder</button></header>
            ${page.properties.map(([label, value]) => `<label>${escapeHtml(label)}<input value="${escapeHtml(value)}" readonly></label>`).join('')}
          </aside>
        </div>` : '';
  return `
    <section class="doc-layout">
      <aside class="doc-sidebar" aria-label="Навигация документации">
        <div class="doc-sidebar-header"><strong>Documentation</strong><span aria-hidden="true">⌕</span></div>
        <nav>
          ${navItem('developers')}
          ${navItem('introducing')}
          ${navItem('changelog')}
          <div class="doc-nav-group"><span>⌄ Guidelines</span>${navItem('tokens')}${navItem('theming')}${navItem('typography')}</div>
          <div class="doc-nav-group"><span>⌄ Actions</span>${navItem('button')}${navItem('iconbutton')}${navItem('link')}</div>
          <div class="doc-nav-group"><span>⌄ Forms</span>${navItem('textfield')}${navItem('select')}${navItem('checkbox')}</div>
          <div class="doc-nav-group"><span>⌄ Layout & Overlays</span>${navItem('card')}${navItem('modal')}${navItem('tooltip')}</div>
          <div class="doc-nav-group"><span>⌄ Content</span>${navItem('typographyComponent')}</div>
        </nav>
      </aside>
      <main class="doc-content">
        <p class="doc-breadcrumb">${breadcrumb}</p>
        <div class="doc-article">
          <h1>${escapeHtml(page.title)}</h1>
          ${componentPreview}
          ${page.component ? '<h2 class="doc-section-title">1. Key Principles of Use</h2>' : ''}
          ${page.html ? page.html : page.body.map(([heading, text]) => `<section class="doc-section"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p></section>`).join('')}
          ${page.component ? componentPropsSection(state.docPage) : ''}
          ${state.docPage === 'introducing' ? introducingComponentsGrid() : ''}
        </div>
      </main>
    </section>
  `;
}

function onboarding() {
  const track = onboardingTracks[state.onboardingTrack] || onboardingTracks.designer;
  const done = state.onboardingDone?.[state.onboardingTrack] || [];
  const step = track.steps.find((entry) => entry.id === state.onboardingStepId) || track.steps[0];
  state.onboardingStepId = step.id;
  const stepIndex = track.steps.indexOf(step);
  const stepIcon = (entry) => (done.includes(entry.id) ? '<i class="ob-status is-done" aria-label="Выполнен">✓</i>' : entry.id === step.id ? '<i class="ob-status is-active" aria-label="Текущий">◐</i>' : '<i class="ob-status" aria-hidden="true">○</i>');
  return `
    <section class="onboarding-layout">
      <aside class="onboarding-menu" aria-label="Шаги онбординга">
        <header class="onboarding-menu-header">
          <button class="onboarding-track-toggle" data-action="toggle-onboarding-track" aria-expanded="${state.onboardingTrackMenuOpen}">${escapeHtml(track.label)} <span>⌄</span></button>
          ${state.onboardingTrackMenuOpen ? `<div class="onboarding-track-dropdown">${Object.entries(onboardingTracks).map(([key, entry]) => `<button data-action="set-onboarding-track" data-track="${key}" class="${key === state.onboardingTrack ? 'is-active' : ''}">${escapeHtml(entry.label)}</button>`).join('')}</div>` : ''}
        </header>
        <nav>
          ${track.steps.map((entry) => `<button class="onboarding-step ${entry.id === step.id ? 'is-current' : ''}" data-action="set-onboarding-step" data-id="${entry.id}"><span>${escapeHtml(entry.title)}</span>${stepIcon(entry)}</button>`).join('')}
        </nav>
        <div class="onboarding-progress">Выполнено ${done.length} из ${track.steps.length}</div>
      </aside>
      <main class="onboarding-content">
        <p class="onboarding-breadcrumb"><span>Home&nbsp;&nbsp;/&nbsp;&nbsp;${escapeHtml(track.label)}&nbsp;&nbsp;/&nbsp;&nbsp;</span><strong>${escapeHtml(track.level)}</strong></p>
        <div class="onboarding-article">
          <h1>${escapeHtml(step.title)}</h1>
          <p class="onboarding-subtitle">${escapeHtml(step.subtitle)}</p>
          <hr class="onboarding-divider">
          <h2>Что делать</h2>
          <div class="onboarding-tasks">
            ${step.tasks.map((task, index) => `<article class="onboarding-task ${index === 0 ? 'is-first' : ''}"><div class="onboarding-task-head"><span class="onboarding-task-number">${index + 1}</span><p>${escapeHtml(task)}</p></div><div class="onboarding-task-media" aria-hidden="true"></div></article>`).join('')}
          </div>
          <div class="onboarding-actions">
            ${stepIndex > 0 ? `<button class="secondary" data-action="set-onboarding-step" data-id="${track.steps[stepIndex - 1].id}">Назад</button>` : ''}
            <button data-action="complete-onboarding-step" data-id="${step.id}">${done.includes(step.id) ? 'Выполнен ✓' : 'Шаг выполнен'}${stepIndex < track.steps.length - 1 ? ' · дальше' : ''}</button>
          </div>
        </div>
      </main>
    </section>
  `;
}

function releases() {
  // Участник проектов по умолчанию видит релизы своих систем, а не общий поток (находка юзертеста).
  const canFilterReleases = state.authenticated && allProjects().some((project) => membership(project.id));
  const releasesFilter = canFilterReleases ? (state.releasesFilter || 'mine') : 'all';
  const allEntries = publicReleaseEntries();
  const published = releasesFilter === 'mine' ? allEntries.filter((entry) => membership(entry.projectId)) : allEntries;
  const latest = published[0];
  return `
    <h1>Releases</h1>
    <p class="lead">Версии дизайн-систем проектов и релизы SDDS Core. Каждая Version содержит immutable Published Configuration для CLI.</p>
    ${canFilterReleases ? `<div class="releases-filter" role="group" aria-label="Фильтр релизов"><button class="${releasesFilter === 'mine' ? 'is-active' : ''}" data-action="set-releases-filter" data-value="mine">Мои проекты</button><button class="${releasesFilter === 'all' ? 'is-active' : ''}" data-action="set-releases-filter" data-value="all">Все проекты</button></div>` : ''}
    ${releasesFilter === 'mine' && !published.length ? '<div class="notice">В ваших проектах пока нет опубликованных версий — переключитесь на «Все проекты».</div>' : ''}
    <section class="list">
      ${latest ? `<article><span class="status passed">Latest</span><h2>${escapeHtml(latest.designSystemName)} · v${escapeHtml(latest.version)}</h2><p>${escapeHtml(latest.projectName)} · Theme: ${escapeHtml(latest.themeName)} · ${escapeHtml(latest.date)} · ${escapeHtml(latest.changelog)}</p><button data-action="open-version-details" data-version="${escapeHtml(latest.version)}" data-project-id="${escapeHtml(latest.projectId)}" data-design-system-id="${escapeHtml(latest.designSystemId)}" data-theme-id="${escapeHtml(latest.themeId)}">Version details</button></article>` : ''}
      ${published.slice(1).map((version) => `<article><h2>${escapeHtml(version.designSystemName)} · v${escapeHtml(version.version)}</h2><p>${escapeHtml(version.projectName)} · ${escapeHtml(version.themeName)} · ${escapeHtml(version.date)} · ${escapeHtml(version.changelog)} · ${version.issueCount} issues</p><button class="secondary" data-action="open-version-details" data-version="${escapeHtml(version.version)}" data-project-id="${escapeHtml(version.projectId)}" data-design-system-id="${escapeHtml(version.designSystemId)}" data-theme-id="${escapeHtml(version.themeId)}">Version details</button></article>`).join('')}
      <article><h2>SDDS Core · 3.12.0</h2><p>Обновление базовой библиотеки: новые размеры контролов, режим Contrast для палитр, исправления Typography.</p><button data-route="documentation">Что нового в документации</button></article>
      <article><h2>CLI contract</h2><p>Команды, авторизация, schema compatibility и CI остаются открытыми решениями — следите за обновлениями.</p><button data-route="documentation">Открыть документацию</button></article>
    </section>
  `;
}

function support() {
  if (state.supportSent) {
    return `<div class="success"><h1>Запрос создан</h1><p>Команда SDDS получила ваш запрос и ответит на email. Статус можно уточнить в этом разделе.</p><div class="actions"><button data-action="new-support">Создать ещё</button>${state.supportReturnRoute ? `<button class="secondary" data-route="${state.supportReturnRoute}">Вернуться к публикации</button>` : ''}</div></div>`;
  }
  return `
    <h1>Support / Requests</h1>
    <p class="lead">Демо и консультации по системе или запрос доступа к проекту. Баги и запросы новых компонентов создаются в DS Builder — у конкретной темы.</p>
    <form id="support-form" class="form-card">
      <label>Тип запроса<select name="type"><option ${(state.supportPrefill || state.supportTypePrefill === 'consult') ? 'selected' : ''}>Демо или консультация</option><option ${(state.supportPrefill || state.supportTypePrefill === 'consult') ? '' : 'selected'}>Запрос доступа</option></select></label>
      <label>Команда / продукт<input name="team" value="${escapeHtml(state.project || '')}" placeholder="Название команды или продукта" required></label>
      <label>Описание<textarea name="description" required placeholder="Что требуется?">${escapeHtml(state.supportPrefill || '')}</textarea></label>
      <div class="form-actions"><button type="button" class="secondary" data-route="${state.supportReturnRoute || 'portal-home'}">Отмена</button><button type="submit">Отправить</button></div>
    </form>
  `;
}

function builderHome() {
  const projects = allProjects().filter((project) => membership(project.id));
  const ownedProjects = projects.filter((project) => membership(project.id).role === 'owner');
  const invitedProjects = projects.filter((project) => membership(project.id).role !== 'owner');
  return `
    <p class="eyebrow">Builder / Personal Space</p>
    <h1>Пространство ${escapeHtml(state.userName)}</h1>
    <p class="lead">Здесь собраны ваши проекты и проекты, в которые вас пригласили.</p>
    <div class="actions"><button data-route="create-project">Создать Project</button></div>
    <section class="project-section">
      <h2>Мои проекты</h2>
      <p>Проекты, в которых вы Owner.</p>
      ${ownedProjects.length ? `<div class="card-grid">${ownedProjects.map((project) => projectCard(project)).join('')}</div>` : '<div class="empty compact"><p>У вас пока нет собственных Projects.</p></div>'}
    </section>
    <section class="project-section">
      <h2>Доступные мне</h2>
      <p>Проекты, куда вас пригласили как Editor или Viewer.</p>
      ${invitedProjects.length ? `<div class="card-grid">${invitedProjects.map((project) => projectCard(project)).join('')}</div>` : '<div class="empty compact"><p>Вас пока не приглашали в другие Projects.</p></div>'}
    </section>
    ${projects.length ? '' : '<div class="notice">Создайте первый Project или попросите Owner пригласить вас.</div>'}
  `;
}

function projectCard(project) {
  const access = membership(project.id).role;
  return `
      <article class="card">
        <span class="status">${access}</span>
        <h2>${escapeHtml(project.name)}</h2>
        <p>${escapeHtml(project.description)}<br/>Design Systems: ${systemsForProject(project).length}</p>
        <button data-action="open-project" data-id="${project.id}">Открыть проект</button>
      </article>
  `;
}

function entityCardMenu(kind, id, canManage = true) {
  if (!canManage) return '';
  const key = `${kind}:${id}`;
  return `<div class="card-menu-wrap"><button class="card-kebab" data-action="toggle-card-menu" data-kind="${kind}" data-id="${id}" aria-label="Действия">⋯</button>${state.cardMenuKey === key ? `<div class="card-dropdown"><button data-action="entity-menu" data-operation="rename" data-kind="${kind}" data-id="${id}">Переименовать</button><button data-action="entity-menu" data-operation="move" data-kind="${kind}" data-id="${id}">Перенести</button><button data-action="entity-menu" data-operation="duplicate" data-kind="${kind}" data-id="${id}">Дублировать</button><span></span><button class="danger-menu-item" data-action="entity-menu" data-operation="delete" data-kind="${kind}" data-id="${id}">Удалить</button></div>` : ''}</div>`;
}

function inlineCardTitle(kind, entity) {
  const key = `${kind}:${entity.id}`;
  if (state.editingCardKey !== key) return `<h2>${escapeHtml(entity.name)}</h2>`;
  return `<form id="inline-card-rename" class="inline-card-rename"><input type="hidden" name="kind" value="${kind}"><input type="hidden" name="id" value="${entity.id}"><input name="name" value="${escapeHtml(entity.name)}" required autofocus><button type="submit">✓</button><button type="button" class="secondary" data-action="cancel-card-rename">×</button></form>`;
}

function cardCover(entity) {
  return entity.cover ? `<div class="card-cover" style="background-image:url('${escapeHtml(entity.cover)}')" aria-hidden="true"></div>` : `<div class="card-cover card-cover-empty" aria-hidden="true"><span>DS</span></div>`;
}

function coverSettings(kind, entity) {
  return `<section class="form-card settings-section cover-settings"><div><h2>Обложка</h2><p>JPG, PNG или WebP до 2 МБ. Изображение будет обрезано по формату карточки.</p></div><div class="cover-settings-preview">${cardCover(entity)}</div><div class="form-actions"><label class="button-like" for="${kind}-cover-input">${entity.cover ? 'Заменить' : 'Загрузить'} изображение</label><input id="${kind}-cover-input" class="visually-hidden" type="file" accept="image/jpeg,image/png,image/webp" data-action="upload-cover" data-kind="${kind}" data-id="${entity.id}">${entity.cover ? `<button type="button" class="secondary" data-action="remove-cover" data-kind="${kind}" data-id="${entity.id}">Удалить</button>` : ''}</div></section>`;
}

function sidebarIconSettings(project) {
  const fallback = escapeHtml(project.name.trim().charAt(0).toUpperCase() || 'P');
  return `<section class="form-card settings-section sidebar-icon-settings"><div><h2>Иконка в сайдбаре</h2><p>Квадратное JPG, PNG или WebP до 2 МБ. Иконка отображается в списке Projects.</p></div><div class="sidebar-icon-preview">${project.sidebarIcon ? `<img src="${escapeHtml(project.sidebarIcon)}" alt="Текущая иконка Project">` : `<span>${fallback}</span>`}</div><div class="form-actions"><label class="button-like" for="project-sidebar-icon-input">${project.sidebarIcon ? 'Заменить' : 'Загрузить'} изображение</label><input id="project-sidebar-icon-input" class="visually-hidden" type="file" accept="image/jpeg,image/png,image/webp" data-action="upload-cover" data-kind="project" data-id="${project.id}" data-field="sidebarIcon">${project.sidebarIcon ? `<button type="button" class="secondary" data-action="remove-cover" data-kind="project" data-id="${project.id}" data-field="sidebarIcon">Удалить</button>` : ''}</div></section>`;
}
function entityModalView() {
  const modal = state.entityModal; if (!modal) return '';
  const isSystem = modal.kind === 'system';
  const entity = isSystem ? systemsForProject(selectedProject()).find((item)=>item.id===modal.id) : themesForSystem(selectedSystem()).find((item)=>item.id===modal.id);
  if (!entity) return '';
  if (modal.operation === 'delete') return `<div class="modal-backdrop"><section class="entity-modal" role="dialog" aria-modal="true" aria-labelledby="entity-modal-title"><h2 id="entity-modal-title">Удалить ${isSystem?'Design System':'Theme'}?</h2><p><strong>${escapeHtml(entity.name)}</strong> будет удалена.</p><form id="modal-delete-form"><input type="hidden" name="kind" value="${modal.kind}"><input type="hidden" name="id" value="${modal.id}"><div class="modal-actions"><button type="button" class="secondary" data-action="close-modal" data-autofocus>Отмена</button><button type="button" class="danger-button" data-action="confirm-modal-delete" data-kind="${modal.kind}" data-id="${modal.id}">Удалить</button></div></form></section></div>`;
  if (isSystem) { const targets=allProjects().filter((p)=>p.id!==state.projectId&&membership(p.id)?.role==='owner'); return `<div class="modal-backdrop"><section class="entity-modal" role="dialog" aria-modal="true" aria-labelledby="entity-modal-title"><h2 id="entity-modal-title">Перенести Design System</h2><p>${escapeHtml(entity.name)}</p><form id="modal-move-form"><input type="hidden" name="kind" value="system"><input type="hidden" name="id" value="${entity.id}"><label>Project<select name="target" required data-autofocus>${targets.map((p)=>`<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('')}</select></label><div class="modal-actions"><button type="button" class="secondary" data-action="close-modal">Отмена</button><button type="button" data-action="confirm-modal-move" ${targets.length?'':'disabled'}>Перенести</button></div></form></section></div>`; }
  const targets=allProjects().filter((p)=>['owner','editor'].includes(membership(p.id)?.role)).flatMap((p)=>systemsForProject(p).map((s)=>({p,s}))).filter((x)=>x.s.id!==state.designSystemId);
  return `<div class="modal-backdrop"><section class="entity-modal" role="dialog" aria-modal="true" aria-labelledby="entity-modal-title"><h2 id="entity-modal-title">Перенести Theme</h2><p>${escapeHtml(entity.name)}</p><form id="modal-move-form"><input type="hidden" name="kind" value="theme"><input type="hidden" name="id" value="${entity.id}"><label>Design System<select name="target" required data-autofocus>${targets.map((x)=>`<option value="${x.p.id}|${x.s.id}">${escapeHtml(x.p.name)} / ${escapeHtml(x.s.name)}</option>`).join('')}</select></label><div class="modal-actions"><button type="button" class="secondary" data-action="close-modal">Отмена</button><button type="button" data-action="confirm-modal-move" ${targets.length?'':'disabled'}>Перенести</button></div></form></section></div>`;
}

function versionDiff(version) {
  if (!version.configuration) return null;
  const source = version.themeId
    ? publicReleaseEntries().filter((item) => item.projectId === version.projectId && item.designSystemId === version.designSystemId && item.themeId === version.themeId)
    : state.versions;
  const published = source.filter((item) => item.configuration && item.status === 'Published').sort((a, b) => compareVersions(b.version, a.version));
  const index = published.findIndex((item) => item.version === version.version);
  const previous = index >= 0 ? published[index + 1] : undefined;
  if (!previous) return null;
  const diff = [];
  ['tokens', 'components'].forEach((kind) => {
    (version.configuration[kind] || []).forEach((entry) => {
      const before = (previous.configuration[kind] || []).find((item) => item.id === entry.id);
      if (before && String(before.value) !== String(entry.value)) diff.push({ label: kind === 'tokens' ? entry.name : `${entry.name} · ${entry.property}`, from: before.value, to: entry.value });
      if (kind === 'tokens' && entry.group === 'colors' && before && String(before.darkValue ?? before.value) !== String(entry.darkValue ?? entry.value)) diff.push({ label: `${entry.name} · Dark`, from: before.darkValue ?? before.value, to: entry.darkValue ?? entry.value });
    });
  });
  return { previous: previous.version, diff };
}

function restoreVersionAsDraft(versionNumber) {
  const version = state.versions.find((item) => item.version === versionNumber);
  if (!version?.configuration || !canEditTheme()) return -1;
  const before = structuredClone(state.changes);
  const undoBefore = structuredClone(state.undoStack || []);
  let touched = 0;
  (version.configuration.tokens || []).forEach((entry) => {
    if (!state.tokens.some((item) => item.id === entry.id)) return;
    if (String(tokenDraftValue(entry.id, 'light')) !== String(entry.value)) { addChange('token', entry.id, entry.value, 'light'); touched += 1; }
    if (entry.group === 'colors' && String(tokenDraftValue(entry.id, 'dark')) !== String(entry.darkValue ?? entry.value)) { addChange('token', entry.id, entry.darkValue ?? entry.value, 'dark'); touched += 1; }
  });
  (version.configuration.components || []).forEach((entry) => {
    if (!state.components.some((item) => item.id === entry.id)) return;
    if (String(componentDraftValue(entry.id)) !== String(entry.value)) { addChange('component', entry.id, entry.value); touched += 1; }
  });
  if (touched) {
    state.undoStack = [...undoBefore, before].slice(-50);
    state.redoStack = [];
  }
  return touched;
}

// Есть ли у Version отличия от текущих значений (та же логика сравнения, что в restoreVersionAsDraft).
// Если отличий нет — откат бессмыслен, и кнопку прячем (находка юзертеста: «значения уже совпадают»).
function versionHasDifferences(version) {
  if (!version?.configuration) return false;
  for (const entry of version.configuration.tokens || []) {
    if (!state.tokens.some((item) => item.id === entry.id)) continue;
    if (String(tokenDraftValue(entry.id, 'light')) !== String(entry.value)) return true;
    if (entry.group === 'colors' && String(tokenDraftValue(entry.id, 'dark')) !== String(entry.darkValue ?? entry.value)) return true;
  }
  for (const entry of version.configuration.components || []) {
    if (!state.components.some((item) => item.id === entry.id)) continue;
    if (String(componentDraftValue(entry.id)) !== String(entry.value)) return true;
  }
  return false;
}

function versionModalView() {
  if (!state.versionModal) return '';
  const modalContext = state.versionModal;
  const version = modalContext.projectId
    ? publicReleaseEntries().find((item) => item.version === modalContext.version && item.projectId === modalContext.projectId && item.designSystemId === modalContext.designSystemId && item.themeId === modalContext.themeId)
    : state.versions.find((item) => item.version === modalContext.version);
  if (!version) return '';
  const configuration = version.configuration;
  const diff = versionDiff(version);
  const projectId = version.projectId || state.projectId;
  const designSystemId = version.designSystemId || state.designSystemId;
  const themeId = version.themeId || state.themeId;
  const isCurrentTheme = state.authenticated && projectId === state.projectId && designSystemId === state.designSystemId && themeId === state.themeId;
  const command = `sdds sync --project ${projectId} --design-system ${designSystemId} --theme ${themeId} --version ${version.version}`;
  return `<div class="modal-backdrop"><section class="entity-modal version-details-modal" role="dialog" aria-modal="true" aria-labelledby="version-modal-title">
    <div class="modal-heading"><div><span class="status ${version.status === 'Failed' ? 'error' : 'passed'}">${escapeHtml(version.status)}</span><h2 id="version-modal-title">Version ${escapeHtml(version.version)}</h2></div><button class="modal-close-button" data-action="close-version-modal" aria-label="Закрыть" data-autofocus>×</button></div>
    <dl class="version-summary"><div><dt>Дата</dt><dd>${escapeHtml(version.date)}</dd></div><div><dt>Issues</dt><dd>${Number(version.issueCount) || 0}</dd></div><div><dt>Tokens</dt><dd>${configuration?.tokens?.length ?? '—'}</dd></div><div><dt>Components</dt><dd>${configuration?.components?.length ?? '—'}</dd></div></dl>
    <section class="version-changelog"><strong>Changelog</strong><p>${escapeHtml(version.changelog)}</p></section>
    ${configuration ? `<section class="version-configuration"><strong>Configuration snapshot</strong><div><span>${configuration.tokens.length} tokens</span><span>${configuration.components.length} components</span><span>schema ${escapeHtml(configuration.schemaVersion || '1.0')}</span></div></section>` : '<div class="notice">Для импортированной базовой версии snapshot ещё недоступен.</div>'}
    ${diff ? `<section class="version-diff"><strong>Diff с v${escapeHtml(diff.previous)}</strong>${diff.diff.length ? diff.diff.map((entry) => `<div class="version-diff-line"><span>${escapeHtml(entry.label)}</span><code>${escapeHtml(entry.from)}</code> → <code>${escapeHtml(entry.to)}</code></div>`).join('') : '<p>Значения tokens и components не изменялись.</p>'}</section>` : configuration ? '<section class="version-diff"><strong>Diff</strong><p>Нет предыдущей версии со snapshot для сравнения.</p></section>' : ''}
    <section class="version-cli"><strong>CLI</strong><pre>${escapeHtml(command)}</pre></section>
    ${configuration && isCurrentTheme && canEditTheme() ? (versionHasDifferences(version) ? '<p class="restore-note">Откат создаст draft со значениями этой Version — история не переписывается, результат публикуется как новая версия.</p>' : '<p class="restore-note">Текущие значения совпадают с этой Version — откат не требуется.</p>') : ''}
    <div class="modal-actions">${configuration && isCurrentTheme && canEditTheme() && versionHasDifferences(version) ? `<button class="secondary" data-action="restore-version" data-version="${escapeHtml(version.version)}">Откатиться к этой Version</button>` : ''}<button class="secondary" data-action="close-version-modal">Закрыть</button><button data-action="copy-version-cli" data-version="${escapeHtml(version.version)}" data-project-id="${escapeHtml(projectId)}" data-design-system-id="${escapeHtml(designSystemId)}" data-theme-id="${escapeHtml(themeId)}">Копировать CLI</button></div>
  </section></div>`;
}
function createProjectView() {
  return `
    <p class="eyebrow">Builder / Projects / Create</p>
    <h1>Создать Project</h1>
    ${state.settingsError ? `<div class="notice error-notice">${escapeHtml(state.settingsError)}</div>` : ''}
    <form id="create-project-form" class="form-card">
      <label>Название<input name="name" required placeholder="Название проекта" /></label>
      <label>Описание<textarea name="description" placeholder="Для какого продукта создаётся проект?"></textarea></label>
      <fieldset class="invite-fieldset">
        <legend>Пригласить пользователей</legend>
        <p>Необязательно. Owner создаётся автоматически; приглашённым можно назначить Editor или Viewer.</p>
        <div id="initial-invites"></div>
        <button type="button" class="secondary" data-action="add-initial-invite">Добавить пользователя</button>
      </fieldset>
      <div class="form-actions"><button type="button" class="secondary" data-route="builder-home">Отмена</button><button type="submit">Создать и стать Owner</button></div>
    </form>
  `;
}

function initialInviteRow() {
  return `
    <div class="invite-row">
      <label>Имя<input name="inviteName" required /></label>
      <label>Email<input name="inviteEmail" type="email" required /></label>
      <label>Права<select name="inviteRole"><option value="editor">Editor</option><option value="viewer">Viewer</option></select></label>
      <button type="button" class="secondary" data-action="remove-initial-invite">Удалить</button>
    </div>
  `;
}

function collectionHeader({ context, backRoute = '', title, createRoute = '', settingsRoute = '', canCreate = false, canSettings = false }) {
  return `<div class="collection-toolbar"><div class="collection-context">${backRoute ? `<button class="collection-icon-button" data-route="${backRoute}" aria-label="Назад">‹</button>` : ''}<strong>${escapeHtml(context)}</strong><span class="context-role">${roleLabel()}</span></div><div class="collection-actions">${canCreate ? `<button data-route="${createRoute}">Создать</button>` : ''}${canSettings ? `<button class="secondary" data-route="${settingsRoute}">Настройки</button>` : ''}</div></div><div class="collection-heading"><h1>${title}</h1><div class="collection-filters">
    <select class="collection-select" data-action="collection-filter-select" aria-label="Какие файлы показывать">
      <option value="all" ${state.collectionFilter === 'all' ? 'selected' : ''}>Все файлы</option>
      <option value="mine" ${state.collectionFilter === 'mine' ? 'selected' : ''}>Свои</option>
      <option value="shared" ${state.collectionFilter === 'shared' ? 'selected' : ''}>Добавленные</option>
    </select>
    <select class="collection-select" data-action="collection-sort-select" aria-label="Сортировка">
      <option value="modified" ${state.collectionSort === 'modified' ? 'selected' : ''}>Изменённые</option>
      <option value="created" ${state.collectionSort === 'created' ? 'selected' : ''}>Созданные</option>
      <option value="az" ${state.collectionSort === 'az' ? 'selected' : ''}>А-Я</option>
      <option value="za" ${state.collectionSort === 'za' ? 'selected' : ''}>Я-А</option>
    </select>
  </div></div>`;
}

function projectView() {
  const project = selectedProject();
  if (!project) return `<div class="empty"><h1>Project не выбран</h1><button data-route="builder-home">К списку Projects</button></div>`;
  const systems = filterCollection(systemsForProject(project), 'system');
  return `<section class="collection-view">
    ${collectionHeader({ context: project.name, title: 'Design Systems', createRoute: 'create-design-system', settingsRoute: 'project-settings', canCreate: state.role === 'owner', canSettings: state.role === 'owner' })}
    ${systems.length ? `<section class="card-grid">${systems.map((system) => `
      <article class="card entity-card clickable-card" data-action="open-system" data-id="${system.id}" tabindex="0">
        ${entityCardMenu('system', system.id, state.role === 'owner')}${cardCover(system)}<div class="card-body">
        ${inlineCardTitle('system', system)}
        <p>${systemCardState(system).status}&nbsp; | &nbsp;${themesForSystem(system).length} Themes</p>
        </div></article>`).join('')}</section>` : state.collectionFilter!=='all' ? `<div class="empty"><h2>Ничего не найдено</h2><p>${state.collectionFilter==='mine'?'Вы пока не создавали Design Systems в этом Project.':'Здесь нет Design Systems, созданных другими участниками.'}</p><button data-action="collection-filter-reset">Показать все</button></div>` : '<div class="empty"><h2>В Project пока нет Design Systems</h2><p>Owner может создать первую Design System.</p></div>'}
  </section>`;
}

function createDesignSystemView() {
  const project = selectedProject();
  if (!project) return `<div class="empty"><h1>Project не выбран</h1><button data-route="builder-home">К списку Projects</button></div>`;
  if (state.role !== 'owner') return `<div class="empty"><h1>Нет доступа</h1><p>Только Owner создаёт Design System.</p><button data-route="project">Назад к Project</button></div>`;
  return `
    <p class="eyebrow">Builder / ${escapeHtml(project.name)} / Create Design System</p>
    <h1>Создать Design System</h1>
    <form id="create-design-system-form" class="form-card">
      <label>Название<input name="name" required placeholder="Название дизайн-системы" /></label>
      <div class="form-actions"><button type="button" class="secondary" data-route="project">Отмена</button><button type="submit">Создать</button></div>
    </form>
  `;
}

function projectSettingsView() {
  const project = selectedProject();
  if (!project) return `<div class="empty"><h1>Project не выбран</h1></div>`;
  if (state.role !== 'owner') return `<div class="empty"><h1>Нет доступа</h1><p>Только Owner управляет Project.</p><button data-route="project">Назад</button></div>`;
  const members = membersForCurrentProject(), ownerCount = members.filter((member) => member.role === 'owner').length;
  const accessRequests = (state.accessRequests || []).filter((request)=>request.projectId===project.id&&request.status==='pending');
  return `<p class="eyebrow">Project / Settings</p><div class="workspace-page-header"><div><h1>Project Settings</h1><p>${escapeHtml(project.name)}</p></div><button data-route="project">Готово</button></div>${state.settingsError ? `<div class="notice error-notice">${escapeHtml(state.settingsError)}</div>` : ''}
    <form id="project-general-form" class="form-card settings-section"><h2>Основное</h2><label>Название<input name="name" value="${escapeHtml(project.name)}" required></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit">Сохранить</button></div></form>
    ${sidebarIconSettings(project)}
    <section class="settings-section"><h2>Members & Access</h2><p class="lead">Memberships действуют только внутри этого Project.</p><div class="table members-table">${members.map((member,index)=>{const protectedOwner=member.role==='owner'&&ownerCount===1;return `<div class="table-row"><div><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.email)}</small></div><span class="status">${member.status||'Active'}</span><select data-action="member-role" data-index="${index}" ${protectedOwner?'disabled':''}><option value="owner" ${member.role==='owner'?'selected':''}>Owner</option><option value="editor" ${member.role==='editor'?'selected':''}>Editor</option><option value="viewer" ${member.role==='viewer'?'selected':''}>Viewer</option></select><button class="secondary" data-action="remove-member" data-index="${index}" ${protectedOwner?'disabled':''}>${protectedOwner?'Последний Owner':'Удалить'}</button></div>`}).join('')}</div></section>
    ${accessRequests.length?`<section class="form-card access-requests"><h2>Запросы доступа</h2>${accessRequests.map((request)=>`<div class="access-request-row"><div><strong>${escapeHtml(request.requesterEmail)}</strong><small>Запрашивает роль Editor</small></div><button data-action="resolve-access-request" data-id="${request.id}" data-decision="approve">Назначить Editor</button><button class="secondary" data-action="resolve-access-request" data-id="${request.id}" data-decision="decline">Отклонить</button></div>`).join('')}</section>`:''}
    <form id="invite-form" class="form-card invite-form"><h2>Пригласить участника</h2><label>Имя<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Роль<select name="role"><option value="editor">Editor</option><option value="viewer">Viewer</option></select></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit">Пригласить</button></div></form>
    <section class="form-card"><h2>Audit log</h2>${state.auditLog.filter((item)=>item.projectId===state.projectId).length?state.auditLog.filter((item)=>item.projectId===state.projectId).map((item)=>`<p><strong>${escapeHtml(item.action)}</strong><br><small>${escapeHtml(item.actor)} · ${escapeHtml(item.date)}</small></p>`).join(''):'<p>Пока нет записей.</p>'}</section>
    <form id="delete-project-form" class="form-card danger-zone"><h2>Удалить Project</h2><p>Project, его Design Systems и memberships исчезнут из пространства. Введите <strong>${escapeHtml(project.name)}</strong>.</p><label>Подтверждение<input name="confirmation" required autocomplete="off"></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit" class="danger-button">Удалить Project</button></div></form>`;
}
function designSystemView() {
  const project = selectedProject(), system = selectedSystem();
  if (!project || !system) return `<div class="empty"><h1>Design System не выбрана</h1></div>`;
  const themes = filterCollection(themesForSystem(system), 'theme');
  return `<section class="collection-view">
    ${collectionHeader({ context: system.name, backRoute: 'project', title: 'Themes', createRoute: 'create-theme', settingsRoute: 'design-system-settings', canCreate: state.role !== 'viewer', canSettings: state.role === 'owner' })}
    ${themes.length ? `<section class="card-grid">${themes.map((theme) => { const card = themeCardState(theme); return `<article class="card entity-card clickable-card" data-action="open-theme" data-id="${theme.id}" tabindex="0">${entityCardMenu('theme', theme.id, state.role !== 'viewer')}${cardCover(theme)}<div class="card-body">${inlineCardTitle('theme', theme)}<p>${card.status==='draft'?'Черновик':'Опубликована'}&nbsp; | &nbsp;v${card.version}</p></div></article>`; }).join('')}</section>` : state.collectionFilter!=='all' ? `<div class="empty"><h2>Ничего не найдено</h2><p>${state.collectionFilter==='mine'?'Вы пока не создавали Themes в этой Design System.':'Здесь нет Themes, созданных другими участниками.'}</p><button data-action="collection-filter-reset">Показать все</button></div>` : '<div class="empty"><h2>В Design System пока нет Themes</h2></div>'}
  </section>`;
}

function designSystemSettingsView() {
  const project = selectedProject(), system = selectedSystem();
  if (!project || !system) return `<div class="empty"><h1>Design System не выбрана</h1></div>`;
  if (state.role !== 'owner') return `<div class="empty"><h1>Нет доступа</h1><p>Только Owner управляет Design System.</p></div>`;
  const targets = allProjects().filter((entry) => entry.id !== project.id && membership(entry.id)?.role === 'owner');
  return `<p class="eyebrow">Design System / Settings</p><div class="workspace-page-header"><div><h1>Design System Settings</h1><p>${escapeHtml(system.name)}</p></div><button data-route="design-system">Готово</button></div>${state.settingsError ? `<div class="notice error-notice">${escapeHtml(state.settingsError)}</div>` : ''}
    <form id="design-system-general-form" class="form-card settings-section"><h2>Основное</h2><label>Название<input name="name" value="${escapeHtml(system.name)}" required></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit">Сохранить</button></div></form>
    ${coverSettings('system', system)}
    <form id="move-design-system-form" class="form-card settings-section"><h2>Перенести в другой Project</h2><p>Доступны только Projects, где вы Owner. Themes, Versions и история перемещаются вместе с Design System.</p><label>Целевой Project<select name="targetProjectId" ${targets.length?'':'disabled'}>${targets.map((entry)=>`<option value="${entry.id}">${escapeHtml(entry.name)}</option>`).join('')}</select></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit" ${targets.length?'':'disabled'}>Перенести</button></div>${targets.length?'':'<small>Нет другого Project с ролью Owner.</small>'}</form>
    <form id="delete-design-system-form" class="form-card danger-zone"><h2>Удалить Design System</h2><p>Введите <strong>${escapeHtml(system.name)}</strong>. Themes и Versions будут удалены из Project.</p><label>Подтверждение<input name="confirmation" required autocomplete="off"></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit" class="danger-button">Удалить Design System</button></div></form>`;
}

function themeSettingsView() {
  const project = selectedProject(), system = selectedSystem(), theme = selectedTheme();
  if (!project || !system || !theme) return `<div class="empty"><h1>Theme не выбрана</h1></div>`;
  if (state.role === 'viewer') return `<div class="empty"><h1>Нет доступа</h1></div>`;
  const targets = allProjects().filter((entry) => ['owner','editor'].includes(membership(entry.id)?.role)).flatMap((entry) => systemsForProject(entry).map((target) => ({ project: entry, system: target }))).filter((entry) => entry.system.id !== system.id);
  return `<section class="workspace-page"><div class="workspace-page-header"><div><h1>Theme Settings</h1><p>${escapeHtml(theme.name)}</p></div><button data-route="design-system">Готово</button></div>${state.settingsError?`<div class="notice error-notice">${escapeHtml(state.settingsError)}</div>`:''}
    <form id="theme-general-form" class="form-card settings-section"><h2>Основное</h2><label>Название<input name="name" value="${escapeHtml(theme.name)}" required></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit">Сохранить</button></div></form>
    ${coverSettings('theme', theme)}
    <form id="move-theme-form" class="form-card settings-section"><h2>Перенести Theme</h2><label>Целевая Design System<select name="target"><option value="">Select…</option>${targets.map((entry)=>`<option value="${entry.project.id}|${entry.system.id}">${escapeHtml(entry.project.name)} / ${escapeHtml(entry.system.name)}</option>`).join('')}</select></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit" ${targets.length?'':'disabled'}>Перенести</button></div></form>
    <form id="delete-theme-form" class="form-card danger-zone"><h2>Удалить Theme</h2><p>Введите <strong>${escapeHtml(theme.name)}</strong>.</p><label>Подтверждение<input name="confirmation" required></label><div class="form-actions"><button type="reset" class="secondary">Отмена</button><button type="submit" class="danger-button">Удалить Theme</button></div></form></section>`;
}

function createThemeView() {
  const project = selectedProject();
  const system = selectedSystem();
  if (!project || !system) return `<div class="empty"><h1>Design System не выбрана</h1><button data-route="builder-home">К списку Projects</button></div>`;
  if (state.role === 'viewer') return `<div class="empty"><h1>Нет доступа</h1><p>Viewer не может создавать Theme.</p><button data-route="design-system">Назад к Design System</button></div>`;
  return `
    <p class="eyebrow">Builder / ${escapeHtml(project.name)} / ${escapeHtml(system.name)} / Create Theme</p>
    <h1>Создать Theme</h1>
    <form id="create-theme-form" class="form-card">
      <label>Название<input name="name" required placeholder="Например, Light Theme" /></label>
      <fieldset class="invite-fieldset">
        <legend>Стартовая палитра</legend>
        <p>Палитра задаёт начальные Colors. После создания значения редактируются внутри Theme.</p>
        <div class="palette-options">
          <label class="palette-option"><input type="radio" name="palette" value="sdds-base" checked /><span class="swatches"><i class="blue"></i><i class="dark"></i><i class="light"></i></span><strong>SDDS Base</strong><small>Базовая палитра</small></label>
          <label class="palette-option"><input type="radio" name="palette" value="contrast" /><span class="swatches"><i class="light"></i><i class="dark"></i><i class="yellow"></i><i class="red"></i></span><strong>Contrast</strong><small>Контрастная</small></label>
          <label class="palette-option"><input type="radio" name="palette" value="custom" /><span class="swatches"><i class="gray"></i><i class="muted"></i><i class="light"></i></span><strong>Custom</strong><small>Нейтральная база</small></label>
        </div>
        <section class="custom-palette-editor">
          <div><h2>Custom palette</h2><p>Выберите основу или задайте HEX-значения вручную. Они применятся к режимам Light и Dark.</p></div>
          <div class="custom-preset-options">
            <label><input type="radio" name="customPreset" value="neutral" data-action="custom-preset" checked><span class="preset-swatches"><i style="background:#556070"></i><i style="background:#f8fafc"></i></span><strong>Neutral</strong></label>
            <label><input type="radio" name="customPreset" value="brand" data-action="custom-preset"><span class="preset-swatches"><i style="background:#6d5dfc"></i><i style="background:#ffffff"></i></span><strong>Brand</strong></label>
            <label><input type="radio" name="customPreset" value="warm" data-action="custom-preset"><span class="preset-swatches"><i style="background:#d45b35"></i><i style="background:#fffaf5"></i></span><strong>Warm</strong></label>
          </div>
          <div class="custom-color-grid">
            <label>Primary<input name="customPrimary" value="#556070" pattern="#[0-9A-Fa-f]{6}" required></label>
            <label>On primary<input name="customOnPrimary" value="#f8fafc" pattern="#[0-9A-Fa-f]{6}" required></label>
            <label>Background<input name="customBackground" value="#ffffff" pattern="#[0-9A-Fa-f]{6}" required></label>
            <label>Text<input name="customText" value="#111827" pattern="#[0-9A-Fa-f]{6}" required></label>
          </div>
        </section>
      </fieldset>
      <div class="form-actions"><button type="button" class="secondary" data-route="design-system">Отмена</button><button type="submit">Создать и открыть Theme</button></div>
    </form>
  `;
}

function baseTokenValue(id, mode = 'light') {
  const token = initialState.tokens.find((entry) => entry.id === id);
  return mode === 'dark' ? (token?.darkValue ?? token?.value ?? '') : (token?.value ?? '');
}

function tokenSeverityClass(id) {
  const change = findChange('token', id);
  if (!change) return '';
  if (change.severity === 'Warning') return 'is-warning';
  if (change.severity === 'Passed') return 'is-edited';
  return 'is-error';
}

function componentDraftValue(id) {
  const item = state.components.find((entry) => entry.id === id);
  return findChange('component', id)?.to ?? item?.value ?? '';
}

function baseValueLine(selected, draft, mode = 'light') {
  const base = baseTokenValue(selected.id, mode);
  const overridden = String(draft) !== String(base);
  return `<div class="property-line ${overridden ? 'is-edited' : ''}"><span>Base ${mode === 'dark' ? 'Dark' : 'Light'}</span><strong>${escapeHtml(base)}</strong><small>${overridden ? 'overridden' : 'inherited'}</small></div>`;
}

function colorTokenDisplayName(token) {
  return linkedColorTokenLabels[token.id] || token.name.replace(/^color\./, '');
}

function colorTokenDescription(token) {
  const descriptions = {
    primary: 'Применяется для выделения текста и иконок. Он предназначен для обозначения основного, базового текста и иконок в пользовательском интерфейсе (UI). Этот токен определяет цвета, которые используются для текста и иконок по умолчанию, чтобы создать единообразие и консистентность в дизайне.',
  };
  return descriptions[token.id] || token.hint || 'Значение токена используется в связанных состояниях темы и наследуется компонентами дизайн-системы.';
}

function colorValueLabel(value, fallback = '') {
  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === '#000000' || normalized === '#000') return 'black100';
  if (normalized === '#ffffff' || normalized === '#fff') return 'white100';
  if (normalized === '#fbffae') return 'FBFFAE';
  if (normalized === '#c9c9c9') return 'gray300';
  if (normalized === '#a7a7a7') return 'textGeneralPrimary';
  return fallback || String(value || '').replace(/^#/, '').toUpperCase();
}

function colorInspectorField({ tokenId, mode, label, value, editable = false, disabled = '' }) {
  const isOpen = state.colorPicker?.tokenId === tokenId && state.colorPicker?.mode === mode;
  const pickerAttrs = editable ? `data-action="open-color-picker" data-id="${tokenId}" data-mode="${mode}" aria-label="Open color picker for ${label}" aria-expanded="${isOpen}"` : '';
  const inputAttrs = editable ? `data-action="edit-token" data-id="${tokenId}" data-mode="${mode}"` : 'readonly';
  return `<div class="figma-inspector-field">
    <span class="figma-inspector-field-label">${label}</span>
    <div class="figma-value-control">
      <div class="figma-value-main">
        <button type="button" class="swatch-button ${isOpen ? 'is-open' : ''}" ${pickerAttrs} style="background:${escapeHtml(value)}" ${editable ? disabled : 'disabled'}></button>
        <input ${inputAttrs} value="${escapeHtml(colorValueLabel(value))}" ${editable ? disabled : ''}>
      </div>
      <div class="figma-value-alpha"><span>100</span><i>%</i></div>
    </div>
  </div>`;
}
function tokenImpactSections(id) {
  const usage = tokenUsage[id] || { tokens: [], components: [] };
  const system = selectedSystem();
  const themeCount = system ? themesForSystem(system).length : 1;
  const instanceTotal = usage.components.reduce((sum, [, count]) => sum + count, 0);
  const componentLine = ([name, count]) => componentCatalogIds[name]
    ? `<button class="impact-component" data-action="jump-component" data-id="${componentCatalogIds[name]}">↪ ${name} <b>${count}</b></button>`
    : `<div>↪ ${name} <b>${count}</b></div>`;
  return `
      <section class="inspector-section"><span class="inspector-heading">⌄ Impact</span><div class="impact-line">↗ Themes <b>${themeCount}</b></div><div class="impact-line">↗ Tokens <b>${usage.tokens.length}</b></div><div class="impact-line">↗ Components <b>${usage.components.length}</b></div></section>
      <section class="inspector-section component-impact"><span class="inspector-heading">⌄ Component list · ${instanceTotal} instances</span>${usage.components.length ? usage.components.map(componentLine).join('') : '<p class="inspector-hint">Token не используется компонентами.</p>'}</section>`;
}

function tokenInspector(selected, draft, viewer) {
  const disabled = viewer ? 'disabled' : '';
  if (selected.group === 'colors') {
    const darkDraft = tokenDraftValue(selected.id, 'dark');
    const onDark = linkedColorContextValues[selected.id]?.onDark || darkDraft;
    const onLight = linkedColorContextValues[selected.id]?.onLight || draft;
    const inverse = linkedColorContextValues[selected.id]?.inverse || darkDraft;
    return `
      <section class="inspector-section figma-inspector-copy"><p>${escapeHtml(colorTokenDescription(selected))}</p></section>
      <section class="inspector-section figma-inspector-group">
        <span class="inspector-heading">Default Themes</span>
        ${colorInspectorField({ tokenId: selected.id, mode: 'light', label: 'Light', value: draft, editable: true, disabled })}
        ${colorInspectorField({ tokenId: selected.id, mode: 'dark', label: 'Dark', value: darkDraft, editable: true, disabled })}
      </section>
      <section class="inspector-section figma-inspector-group figma-subthemes">
        <span class="inspector-heading">› Subthemes <i>ⓘ</i></span>
        <div class="figma-subtheme-title"><span>OnDark</span><b>⌁</b></div>
        ${colorInspectorField({ tokenId: selected.id, mode: 'ondark-light', label: 'Light', value: onDark })}
        ${colorInspectorField({ tokenId: selected.id, mode: 'ondark-dark', label: 'Dark', value: onDark })}
        <div class="figma-subtheme-title"><span>OnLight</span><b>⌁</b></div>
        ${colorInspectorField({ tokenId: selected.id, mode: 'onlight-light', label: 'Light', value: onLight })}
        ${colorInspectorField({ tokenId: selected.id, mode: 'onlight-dark', label: 'Dark', value: onLight })}
        <div class="figma-subtheme-title"><span>Inverse</span><b>⌁</b></div>
        ${colorInspectorField({ tokenId: selected.id, mode: 'inverse-light', label: 'Light', value: inverse })}
        ${colorInspectorField({ tokenId: selected.id, mode: 'inverse-dark', label: 'Dark', value: draft })}
      </section>
      ${tokenImpactSections(selected.id)}`;
  }
  if (selected.group === 'sizes') {
    const rule = sizeConstraints[selected.id];
    const numeric = Number(draft);
    const inRange = rule ? numeric >= rule.min && numeric <= rule.max : true;
    return `
      <section class="inspector-section"><span class="inspector-heading">Value</span><label>${rule ? rule.unit : 'px'}<div class="value-control"><input data-action="edit-token" data-id="${selected.id}" value="${escapeHtml(draft)}" ${disabled}></div></label>${baseValueLine(selected, draft)}</section>
      <section class="inspector-section"><span class="inspector-heading">⌄ Constraints</span>${rule ? `<div class="property-line ${inRange ? '' : 'error'}"><span>Range</span><strong>${rule.min}–${rule.max} ${rule.unit}</strong><small>${inRange ? 'в пределах' : 'вне диапазона'}</small></div>` : ''}<p class="inspector-hint">${escapeHtml(selected.hint)}</p></section>
      ${tokenImpactSections(selected.id)}`;
  }
  const family = tokenDraftValue('font-family') || 'Inter';
  const size = Number(tokenDraftValue('font-size')) || 16;
  return `
      <section class="inspector-section"><span class="inspector-heading">Value</span><label>${selected.id === 'font-size' ? 'px' : 'family'}<div class="value-control"><input data-action="edit-token" data-id="${selected.id}" value="${escapeHtml(draft)}" ${disabled}></div></label>${baseValueLine(selected, draft)}</section>
      <section class="inspector-section"><span class="inspector-heading">⌄ Preview</span><div class="font-preview" style="font-family:'${escapeHtml(family)}',Inter,sans-serif;font-size:${size}px">Съешь ещё этих мягких французских булок</div><p class="inspector-hint">${escapeHtml(selected.hint)}</p></section>
      ${tokenImpactSections(selected.id)}`;
}
function hexToRgba(hex) {
  let value = String(hex).trim().replace('#', '');
  if (/^[0-9a-f]{3}$/i.test(value)) value = value.split('').map((char) => char + char).join('');
  if (/^[0-9a-f]{6}$/i.test(value)) value += 'ff';
  if (!/^[0-9a-f]{8}$/i.test(value)) return null;
  return { r: parseInt(value.slice(0, 2), 16), g: parseInt(value.slice(2, 4), 16), b: parseInt(value.slice(4, 6), 16), a: parseInt(value.slice(6, 8), 16) / 255 };
}
function rgbaToHex({ r, g, b, a = 1 }) {
  const channel = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0');
  const base = `#${channel(r)}${channel(g)}${channel(b)}`;
  return a >= 1 ? base : base + channel(a * 255);
}
function rgbToHsv({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
  let h = 0;
  if (delta) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h *= 60; if (h < 0) h += 360;
  }
  return { h, s: max ? delta / max : 0, v: max };
}
function hsvToRgb({ h, s, v }) {
  const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}
function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min, l = (max + min) / 2;
  let h = 0, s = 0;
  if (delta) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h *= 60; if (h < 0) h += 360;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function hslToRgb({ h, s, l }) {
  s /= 100; l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}

function openColorPickerFor(tokenId, mode = 'light') {
  const rgba = hexToRgba(tokenDraftValue(tokenId, mode)) || { r: 128, g: 128, b: 128, a: 1 };
  const hsv = rgbToHsv(rgba);
  state.colorPicker = { tokenId, mode, h: hsv.h, s: hsv.s, v: hsv.v, a: rgba.a, tab: state.colorPicker?.tab || 'custom', format: state.colorPicker?.format || 'hex' };
}

function commitColorPicker() {
  const picker = state.colorPicker;
  if (!picker || !canEditTheme()) return;
  const next = rgbaToHex({ ...hsvToRgb(picker), a: picker.a });
  addChange('token', picker.tokenId, next, picker.mode || 'light');
  // Каскад палитры: правка базы (brand-500 = color.primary · Light) с вкладки Palette
  // автоматически пересчитывает Dark-значение — обе правки попадают в Changes.
  if (state.editorTab === 'palette' && picker.tokenId === 'primary' && (picker.mode || 'light') === 'light') {
    addChange('token', 'primary', paletteDarkFromBase(next), 'dark');
  }
}

const colorPickerPresets = ['#107f8c', '#3b78ff', '#111827', '#f8fafc', '#6d5dfc', '#d45b35', '#556070', '#f7b733', '#ef5b5b', '#48d184', '#ffffff', '#000000'];

function colorPickerView() {
  const picker = state.colorPicker;
  if (!picker) return '';
  const token = state.tokens.find((item) => item.id === picker.tokenId);
  if (!token || token.group !== 'colors') return '';
  const rgb = hsvToRgb(picker);
  const hex = rgbaToHex({ ...rgb, a: picker.a });
  const hsl = rgbToHsl(rgb);
  const hueColor = rgbaToHex({ ...hsvToRgb({ h: picker.h, s: 1, v: 1 }), a: 1 });
  const format = picker.format || 'hex';
  const formatInputs = format === 'hex'
    ? `<input class="cp-field cp-hex-field" data-action="cp-input" data-field="hex" value="${hex.toUpperCase()}" aria-label="Hex">`
    : format === 'rgb'
      ? ['r', 'g', 'b'].map((field) => `<input class="cp-field" data-action="cp-input" data-field="${field}" value="${Math.round(rgb[field])}" aria-label="${field.toUpperCase()}">`).join('')
      : ['h', 's', 'l'].map((field) => `<input class="cp-field" data-action="cp-input" data-field="${field}" value="${hsl[field]}" aria-label="${field.toUpperCase()}">`).join('');
  return `<section class="color-picker-popover" role="dialog" aria-modal="false" aria-label="Color picker: ${escapeHtml(token.name)}, ${picker.mode === 'dark' ? 'Dark' : 'Light'}">
    <header><div class="cp-tabs"><button type="button" class="${picker.tab === 'library' ? '' : 'is-active'}" data-action="cp-tab" data-tab="custom" data-autofocus>Custom</button><button type="button" class="${picker.tab === 'library' ? 'is-active' : ''}" data-action="cp-tab" data-tab="library">Library</button></div><button type="button" class="cp-close" data-action="close-color-picker" aria-label="Закрыть">×</button></header>
    ${picker.tab === 'library' ? `
    <div class="cp-library">${colorPickerPresets.map((color) => `<button type="button" class="cp-preset ${color === hex ? 'is-active' : ''}" data-action="cp-preset" data-value="${color}" style="background:${color}" title="${color}" aria-label="${color}"></button>`).join('')}</div>` : `
    <div class="cp-sv" data-cp-sv data-action="cp-key-slider" data-kind="sv" role="slider" tabindex="0" aria-label="Насыщенность и яркость" aria-valuetext="${Math.round(picker.s * 100)}%, ${Math.round(picker.v * 100)}%" style="background-color:${hueColor}"><i class="cp-cursor" style="left:${picker.s * 100}%;top:${(1 - picker.v) * 100}%"></i></div>
    <div class="cp-slider cp-hue" data-cp-hue data-action="cp-key-slider" data-kind="hue" role="slider" tabindex="0" aria-label="Hue" aria-valuemin="0" aria-valuemax="360" aria-valuenow="${Math.round(picker.h)}"><i style="left:${picker.h / 360 * 100}%"></i></div>
    <div class="cp-slider cp-alpha" data-cp-alpha data-action="cp-key-slider" data-kind="alpha" role="slider" tabindex="0" aria-label="Opacity" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(picker.a * 100)}" style="--cp-current:${rgbaToHex({ ...rgb, a: 1 })}"><i style="left:${picker.a * 100}%"></i></div>
    <div class="cp-format-row">
      <select data-action="cp-format" aria-label="Формат цвета"><option value="hex" ${format === 'hex' ? 'selected' : ''}>Hex</option><option value="rgb" ${format === 'rgb' ? 'selected' : ''}>RGB</option><option value="hsl" ${format === 'hsl' ? 'selected' : ''}>HSL</option></select>
      ${formatInputs}
      <input class="cp-field cp-alpha-field" data-action="cp-input" data-field="a" value="${Math.round(picker.a * 100)}%" aria-label="Opacity">
    </div>
    <dl class="cp-info">
      <div><dt>Hex</dt><dd>${hex.toUpperCase()} <button type="button" class="cp-copy" data-action="cp-copy" data-value="${hex}" aria-label="Скопировать hex">⧉</button></dd></div>
      <div><dt>RGB</dt><dd>${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}</dd></div>
      <div><dt>HSL</dt><dd>${hsl.h}, ${hsl.s}%, ${hsl.l}%</dd></div>
    </dl>`}
  </section>`;
}

function sectionTokenChanges() {
  return state.changes.filter((entry) => entry.kind === 'token' && state.tokens.find((token) => token.id === entry.id)?.group === state.editorTab);
}

function resetSplitButton(token, change) {
  const sectionCount = sectionTokenChanges().length;
  const sectionLabel = tokenGroupLabels[state.editorTab] || state.editorTab;
  return `<div class="reset-split ${state.resetMenuOpen ? 'is-open' : ''}">
    <button class="secondary" data-action="reset-token" data-id="${token.id}" title="Сбросить Light и Dark изменения выбранного token" ${change && canEditTheme() ? '' : 'disabled'}>Сбросить</button>
    <button class="secondary reset-caret" data-action="toggle-reset-menu" aria-label="Варианты сброса" aria-expanded="${state.resetMenuOpen}" ${state.changes.length && canEditTheme() ? '' : 'disabled'}>⌄</button>
    ${state.resetMenuOpen ? `<div class="reset-dropdown">
      <button data-action="reset-section" ${sectionCount ? '' : 'disabled'}>Сбросить раздел ${sectionLabel}${sectionCount ? ` · ${sectionCount}` : ''}</button>
      <button data-action="reset-all" ${state.changes.length ? '' : 'disabled'}>Сбросить все изменения · ${state.changes.length}</button>
    </div>` : ''}
  </div>`;
}

// ---------- Palette view (запрос юзертестов: «палитра бренда» с каскадом в семантические токены) ----------

// Ступень рампы: hue/sat базового цвета, лестница светлоты. Упрощённая генерация прототипа.
const PALETTE_STEPS = [[50, 97], [100, 92], [200, 84], [300, 72], [400, 60], [500, null], [600, 40], [700, 32], [800, 24], [900, 16]];
function paletteShade(baseHex, lightness) {
  const rgb = hexToRgba(baseHex) || { r: 16, g: 127, b: 140, a: 1 };
  const hsl = rgbToHsl(rgb);
  return rgbaToHex({ ...hslToRgb({ h: hsl.h, s: Math.min(96, hsl.s + 4), l: lightness }), a: 1 });
}
// Dark-значение из новой базы: светлее и спокойнее — читается на тёмной поверхности.
function paletteDarkFromBase(baseHex) {
  const rgb = hexToRgba(baseHex) || { r: 16, g: 127, b: 140, a: 1 };
  const hsl = rgbToHsl(rgb);
  return rgbaToHex({ ...hslToRgb({ h: hsl.h, s: Math.round(hsl.s * 0.55), l: 62 }), a: 1 });
}

function paletteEditor() {
  const viewer = state.role === 'viewer';
  const base = tokenDraftValue('primary', 'light');
  const dark = tokenDraftValue('primary', 'dark');
  const usage = tokenUsage.primary;
  const instances = usage.components.reduce((sum, [, count]) => sum + count, 0);
  const brandSteps = PALETTE_STEPS.map(([step, l]) => {
    const hex = step === 500 ? base : paletteShade(base, l);
    return step === 500
      ? `<button class="pal-step pal-base" data-action="open-color-picker" data-id="primary" data-mode="light" ${viewer ? 'disabled' : ''} title="База палитры — клик открывает пипетку; Dark пересчитается автоматически"><span class="pal-sw" style="background:${hex}"></span><b>${step} · база</b><small>${hex.toUpperCase()}</small></button>`
      : `<div class="pal-step" title="Расчётная ступень — следует за базой"><span class="pal-sw" style="background:${hex}"></span><b>${step}</b><small>${hex.toUpperCase()}</small></div>`;
  }).join('');
  const neutralSteps = PALETTE_STEPS.map(([step, l]) => {
    const hex = rgbaToHex({ ...hslToRgb({ h: 215, s: 10, l: l ?? 48 }), a: 1 });
    return `<div class="pal-step"><span class="pal-sw" style="background:${hex}"></span><b>${step}</b><small>${hex.toUpperCase()}</small></div>`;
  }).join('');
  const statusRow = [['Success', '#24b23e'], ['Warning', '#f5a623'], ['Error', '#ef4444']].map(([label, hex]) => `<div class="pal-step"><span class="pal-sw" style="background:${hex}"></span><b>${label}</b><small>${hex}</small></div>`).join('');
  return `<section class="workspace-page palette-page">
    ${draftStatusBanner()}
    <div class="workspace-page-header"><div><h1>Palette</h1><p>Палитра бренда: правите базу — семантические токены пересчитываются каскадом</p></div><span class="mode-chip" title="Каскад обновляет и Light, и Dark значения. Точечная правка режимов — во вкладке Colors.">☼ Light + ● Dark — каскадом</span></div>
    ${viewer ? `<div class="viewer-banner">Read-only access ${state.accessRequested ? '· запрос отправлен' : '<button data-action="request-access">Request edit access</button>'}</div>` : ''}
    <section class="form-card">
      <h2>Brand</h2>
      <p class="pal-note">Кликните базовую ступень <b>500</b>, чтобы сменить бренд-цвет — остальные ступени и Dark-режим пересчитаются.</p>
      <div class="pal-ramp">${brandSteps}</div>
    </section>
    <section class="form-card pal-links">
      <h2>Куда дотянется каскад</h2>
      <div class="pal-link-line"><span class="pal-chip"><i class="pal-dot" style="background:${base}"></i>brand-500</span><span class="pal-arrow">→</span><code>color.primary</code><span class="pal-modes">Light ${escapeHtml(String(base).toUpperCase())} · Dark ${escapeHtml(String(dark).toUpperCase())}</span></div>
      <div class="pal-link-line pal-link-components"><span class="pal-arrow">→</span>${usage.components.map(([name, count]) => `<span class="pal-chip">${escapeHtml(name)} · ${count}</span>`).join('')}<span class="pal-modes">${usage.components.length} компонента · ${instances} вхождений</span></div>
    </section>
    <section class="form-card">
      <h2>Neutral</h2>
      <div class="pal-ramp">${neutralSteps}</div>
      <h2 class="pal-h2-gap">Status</h2>
      <div class="pal-ramp">${statusRow}</div>
      <p class="pal-note">Neutral и Status фиксированы системой — темы меняют бренд, а не смысловые цвета статусов.</p>
    </section>
    ${colorPickerView()}
  </section>`;
}

function editor() {
  if (state.editorTab === 'palette') return paletteEditor();
  // Предохранитель: сессия могла сохранить вкладку, которой больше нет (например,
  // убранную swatches) — без отката рендер падал и оставлял чёрный экран.
  if (!state.tokens.some((token) => token.group === state.editorTab)) state.editorTab = 'colors';
  const viewer = state.role === 'viewer';
  const allTokens = state.tokens.filter((token) => token.group === state.editorTab);
  const tokens = allTokens.filter((token) => token.name.toLowerCase().includes(state.tokenSearch.toLowerCase()) && (!state.issueFilter || (findChange('token', token.id) && findChange('token', token.id).severity !== 'Passed'))).sort((a, b) => state.tokenSort === 'az' ? a.name.localeCompare(b.name) : 0);
  const selected = allTokens.find((token) => token.id === state.selectedTokenId) || tokens[0] || allTokens[0];
  state.selectedTokenId = selected.id;
  const draft = tokenDraftValue(selected.id), change = findChange('token', selected.id);
  const groupLabel = state.editorTab === 'colors' ? 'Text & Icons' : tokenGroupLabels[state.editorTab] || state.editorTab;
  const groupIssues = allTokens.filter((token) => { const entry = findChange('token', token.id); return entry && entry.severity !== 'Passed'; }).length;
  const inspectorTitle = state.editorTab === 'colors' ? colorTokenDisplayName(selected) : selected.name;
  const tokenBrowserHeader = state.editorTab === 'colors'
    ? `<div class="token-panel-header token-menu-header"><strong>Plumbus Design System</strong><div class="token-menu-controls"><button data-action="token-search-focus" aria-label="Search"><span>⌕</span></button><button data-action="toggle-issue-filter" class="${state.issueFilter ? 'is-active' : ''}" aria-label="Filters"><span>≛</span></button></div></div>`
    : `<div class="token-panel-header"><strong>${tokenGroupLabels[state.editorTab] || 'Tokens'}</strong><input class="token-search" data-action="token-search" value="${escapeHtml(state.tokenSearch)}" placeholder="Search"></div>`;
  const tokenFilters = state.editorTab === 'colors' ? '' : `<div class="token-filters"><button data-action="toggle-token-sort" class="${state.tokenSort === 'az' ? 'is-active' : ''}">A-Z</button><button data-action="toggle-issue-filter" class="${state.issueFilter ? 'is-active' : ''}">Issues ${issueCount()}</button></div>`;
  const tokenTree = state.editorTab === 'colors'
    ? linkedColorTokenTree(tokens, selected)
    : `<div class="token-tree-group is-open"><span>⌄ ${groupLabel}${groupIssues ? ` <b class="tree-issue-badge">${groupIssues}</b>` : ''}</span>${tokens.map((token) => `<button class="token-row ${selected.id === token.id ? 'is-selected' : ''}" data-action="select-token" data-id="${token.id}"><i class="token-status ${tokenSeverityClass(token.id)}"></i><span>${escapeHtml(token.name.replace(/^[^.]+\./, ''))}</span></button>`).join('')}</div>`;
  return `<section class="editor-workbench playground-workbench">
    <aside class="token-browser">
      ${tokenBrowserHeader}
      ${tokenFilters}
      <div class="token-tree">${tokenTree}</div>
    </aside>
    <header class="editor-toolbar">
      <div class="inspector-toolbar"><div class="selected-token-title"><i class="${tokenSeverityClass(selected.id)}"></i><strong>${escapeHtml(inspectorTitle)}</strong></div><div class="history-actions"><button data-action="undo-change" title="Undo" aria-label="Undo" ${state.undoStack?.length && canEditTheme() ? '' : 'disabled'}>↶</button><button data-action="redo-change" title="Redo" aria-label="Redo" ${state.redoStack?.length && canEditTheme() ? '' : 'disabled'}>↷</button></div></div>
      <div class="preview-toolbar"><div class="workspace-tabs"><button data-action="workspace-tab" data-mode="overview" class="${state.workspaceMode === 'overview' ? 'is-active' : ''}">Overview</button><button data-action="workspace-tab" data-mode="accessibility" class="${state.workspaceMode === 'accessibility' ? 'is-active' : ''}">Accessibility</button></div><span class="mode-chip" title="Preview shows Light mode. Dark values are edited from the token picker or Palette cascade.">Preview: Light</span><div class="publish-actions"><span>System status: <b>${issueCount() ? `${issueCount()} issue` : 'No issues'}</b></span>${resetSplitButton(selected, change)}<button data-route="publish" ${state.changes.length && canPublish() ? '' : 'disabled'}>Publish · ${state.changes.length}</button></div></div>
    </header>
    <aside class="properties-panel">
      ${draftStatusBanner()}
      ${viewer ? `<div class="viewer-banner">Read-only access ${state.accessRequested ? '· request sent' : '<button data-action="request-access">Request edit access</button>'}</div>` : ''}
      ${tokenInspector(selected, draft, viewer)}
    </aside>
    <main class="preview-canvas">
      <div class="canvas-toolbar"><button>Typography</button><div>Light · Dark · Default</div></div>
      ${state.workspaceMode === 'accessibility' ? themePreview(viewer) : themeOverviewPreview()}
    </main>
    ${colorPickerView()}
  </section>`;
}
function tokenDraftValue(id, mode = 'light') {
  const token = state.tokens.find((item) => item.id === id);
  const baseline = mode === 'dark' ? (token?.darkValue ?? token?.value ?? '') : (token?.value ?? '');
  return findChange('token', id, mode)?.to ?? baseline;
}
function colorTokenCanvas() {
  const groups = [
    ['Text & Icon', ['primary', 'on-primary', 'text-primary', 'text-secondary', 'text-tertiary', 'outline-focus', 'text-primary']],
    ['Surface', ['surface-default', 'surface-hover', 'surface-active']],
    ['Outline', ['outline-default', 'outline-focus', 'text-tertiary', 'surface-active']],
    ['BG', ['bg-default', 'bg-elevated']],
    ['Data', ['data-positive', 'data-warning', 'data-critical', 'primary', 'outline-focus', 'data-positive', 'data-warning', 'data-critical']],
  ];
  const tokenById = new Map(state.tokens.map((token) => [token.id, token]));
  return `<div class="token-canvas">
    <div class="token-swatch-board">
      ${groups.map(([label, ids]) => `<section class="token-swatch-group">
        <div class="token-swatch-head"><h3>${label}</h3><span>onDark</span><span>onLight</span><span>Inverse</span></div>
        <div class="token-swatch-grid">
          ${ids.map((id, index) => {
            const token = tokenById.get(id);
            if (!token) return '';
            const value = index % 3 === 1 ? tokenDraftValue(id, 'dark') : tokenDraftValue(id, 'light');
            const darkValue = tokenDraftValue(id, 'dark');
            const selected = state.selectedTokenId === id ? 'is-selected' : '';
            return `<button class="token-swatch-card ${selected}" data-action="select-token" data-id="${id}" title="${escapeHtml(token.name)} · ${escapeHtml(value)}">
              <span class="token-swatch-fill" style="background:${escapeHtml(value)}"></span>
              <span class="token-swatch-dark" style="background:${escapeHtml(darkValue)}"></span>
            </button>`;
          }).join('')}
        </div>
      </section>`).join('')}
    </div>
  </div>`;
}
function colorTokenTree(tokens, selected) {
  const groups = [
    ['Text & Icon', ['primary', 'on-primary', 'text-primary', 'text-secondary', 'text-tertiary']],
    ['Surface', ['surface-default', 'surface-hover', 'surface-active']],
    ['Outlines', ['outline-default', 'outline-focus']],
    ['BG', ['bg-default', 'bg-elevated']],
    ['Data', ['data-positive', 'data-warning', 'data-critical']],
  ];
  const visible = new Set(tokens.map((token) => token.id));
  const tokenById = new Map(tokens.map((token) => [token.id, token]));
  return groups.map(([label, ids]) => {
    const rows = ids.filter((id) => visible.has(id)).map((id) => {
      const token = tokenById.get(id);
      return `<button class="token-row ${selected.id === token.id ? 'is-selected' : ''}" data-action="select-token" data-id="${token.id}"><i class="token-status ${tokenSeverityClass(token.id)}"></i><span>${escapeHtml(token.name.replace(/^color\./, ''))}</span></button>`;
    }).join('');
    if (!rows) return '';
    const issueCount = ids.filter((id) => {
      const entry = findChange('token', id);
      return entry && entry.severity !== 'Passed';
    }).length;
    return `<div class="token-tree-group is-open"><span>⌄ ${label}${issueCount ? ` <b class="tree-issue-badge">${issueCount}</b>` : ''}</span>${rows}</div>`;
  }).join('');
}

const linkedColorTokenGroups = [
  ['Text & Icons', ['primary', 'on-primary', 'text-primary', 'text-secondary', 'text-tertiary', '__text-gradient', '__text-promo', 'data-warning']],
  ['Surfaces', ['surface-default', 'surface-hover']],
  ['Outlines', ['outline-default', 'outline-focus']],
  ['BG', ['bg-default', 'bg-elevated']],
  ['Overlays', []],
  ['Data', ['data-positive', 'data-critical']],
  ['Syntax', []],
];
const linkedColorTokenLabels = {
  primary: 'textPrimary',
  'on-primary': 'textSecondary',
  'text-primary': 'textTertiary',
  'text-secondary': 'textParagraph',
  'text-tertiary': 'textAccent',
  '__text-gradient': 'textGradient',
  '__text-promo': 'textPromo',
  'data-warning': 'textWarning',
  'surface-default': 'surfacePrimary',
  'surface-hover': 'surfaceSecondary',
  'outline-default': 'outlinePrimary',
  'outline-focus': 'outlineFocus',
  'bg-default': 'bgPrimary',
  'bg-elevated': 'bgSecondary',
  'data-positive': 'dataPositive',
  'data-critical': 'dataCritical',
};
const linkedColorContextLabels = [
  ['default', 'Default'],
  ['onDark', 'onDark'],
  ['onLight', 'onLight'],
  ['inverse', 'Inverse'],
];
const linkedColorContextValues = {
  primary: { onDark: '#fbffae', onLight: '#000000', inverse: '#fbffae' },
  'on-primary': { onDark: '#fbffae', onLight: '#c9c9c9', inverse: '#347cff' },
  'text-primary': { onDark: '#000000', onLight: '#bcbcbc', inverse: '#5a8dec' },
  'text-secondary': { onDark: '#fbffae', onLight: '#9d9d9d', inverse: '#fbffae' },
  'text-tertiary': { onDark: '#fbffae', onLight: '#158f96', inverse: '#5a8dec' },
  'surface-default': { onDark: '#fbffae', onLight: '#111111', inverse: '#fbffae' },
  'surface-hover': { onDark: '#fbffae', onLight: '#d6d6d6', inverse: '#c9c9c9' },
  'surface-active': { onDark: '#fbffae', onLight: '#9f9f9f', inverse: '#b5b5b5' },
  'outline-default': { onDark: '#fbffae', onLight: '#111111', inverse: '#fbffae' },
  'outline-focus': { onDark: '#fbffae', onLight: '#a7a7a7', inverse: '#008f24' },
  'bg-default': { onDark: '#fbffae', onLight: '#f7f7f7', inverse: '#fbffae' },
  'bg-elevated': { onDark: '#fbffae', onLight: '#c9c9c9', inverse: '#fbffae' },
  'data-positive': { onDark: '#fbffae', onLight: '#d748d3', inverse: '#158f96' },
  'data-warning': { onDark: '#fbffae', onLight: '#f0ae00', inverse: '#fbffae' },
  'data-critical': { onDark: '#fbffae', onLight: '#5a8dec', inverse: '#5a8dec' },
};
function linkedColorContextValue(id, context) {
  if (context === 'default') return tokenDraftValue(id, 'light');
  return linkedColorContextValues[id]?.[context] || tokenDraftValue(id, 'light');
}
function linkedColorTokenCanvas() {
  const tokenById = new Map(state.tokens.map((token) => [token.id, token]));
  return `<div class="token-canvas">
    <div class="token-swatch-board">
      ${linkedColorTokenGroups.map(([label, ids]) => `<section class="token-swatch-group">
        <div class="token-swatch-head token-swatch-head-default"><h3>${label}</h3></div>
        <div class="token-default-grid">
          ${ids.map((id) => {
            const token = tokenById.get(id);
            if (!token) return '';
            const value = tokenDraftValue(id, 'light');
            const selected = state.selectedTokenId === id ? 'is-selected' : '';
            return `<button class="token-swatch-card ${selected}" data-action="select-token" data-id="${id}" title="${escapeHtml(token.name)} - Default - ${escapeHtml(value)}"><span class="token-swatch-fill" style="background:${escapeHtml(value)}"></span></button>`;
          }).join('')}
        </div>
      </section>`).join('')}
    </div>
  </div>`;
}

function linkedColorTokenTree(tokens, selected) {
  const visible = new Set(tokens.map((token) => token.id));
  const tokenById = new Map(tokens.map((token) => [token.id, token]));
  return linkedColorTokenGroups.map(([label, ids]) => {
    const rows = ids.filter((id) => visible.has(id) || id.startsWith('__')).map((id) => {
      if (id.startsWith('__')) {
        const labelText = linkedColorTokenLabels[id];
        const preview = id === '__text-gradient'
          ? 'linear-gradient(135deg, #8a16bf 0%, #4197e2 50%, #c347fd 51%, #79befb 100%)'
          : 'linear-gradient(180deg, rgba(30,34,40,.7) 0 50%, rgba(255,255,255,.7) 50% 100%)';
        const promo = id === '__text-promo' ? ' is-muted' : '';
        return `<div class="token-row token-row-ghost${promo}"><i class="token-status token-color-preview" style="background:${preview}"></i><span>${escapeHtml(labelText)}</span></div>`;
      }
      const token = tokenById.get(id);
      const light = tokenDraftValue(token.id, 'light');
      const dark = tokenDraftValue(token.id, 'dark');
      const preview = dark && dark !== light ? `linear-gradient(180deg, ${escapeHtml(light)} 0 50%, ${escapeHtml(dark)} 50% 100%)` : escapeHtml(light);
      const labelText = linkedColorTokenLabels[token.id] || token.name.replace(/^color\./, '');
      return `<button class="token-row ${selected.id === token.id ? 'is-selected' : ''}" data-action="select-token" data-id="${token.id}"><i class="token-status token-color-preview ${tokenSeverityClass(token.id)}" style="background:${preview}"></i><span>${escapeHtml(labelText)}</span>${selected.id === token.id ? '<b class="token-row-eye">◌</b>' : ''}</button>`;
    }).join('');
    return `<div class="token-tree-group ${rows ? 'is-open' : 'is-collapsed'}"><span>${rows ? '⌄' : '›'} ${label}</span>${rows}</div>`;
  }).join('');
}
function themeOverviewPreview() {
  if (state.editorTab === 'colors') return linkedColorTokenCanvas();
  const primary = escapeHtml(tokenDraftValue('primary')), onPrimary = escapeHtml(tokenDraftValue('on-primary'));
  const rounding = Number(tokenDraftValue('rounding')) || 8;
  const fontFamily = escapeHtml(tokenDraftValue('font-family') || 'Inter');
  const fontSize = Number(tokenDraftValue('font-size')) || 16;
  const buttonHeight = Number(componentDraftValue('button')) || Number(tokenDraftValue('control-size')) || 40;
  const inputRadius = Number(componentDraftValue('input')) || rounding;
  return `<div class="theme-overview-preview live-preview" style="--preview-primary:${primary};--preview-on-primary:${onPrimary};--preview-size:${buttonHeight}px;--preview-radius:${rounding}px;--preview-input-radius:${inputRadius}px;--preview-font:'${fontFamily}',Inter,sans-serif;--preview-font-size:${fontSize}px">
    <article>
      <small>Live preview · draft-значения</small>
      <h2>Интерфейс продукта</h2>
      <p>Компоненты ниже используют текущие draft-значения tokens и components.</p>
      <div><button class="lp-button">Основное действие</button><button class="lp-button lp-secondary">Вторичное</button></div>
      <label>Название<input class="lp-input" value="Пример поля" readonly></label>
      <div class="live-preview-tokens"><span>Button ${buttonHeight}px</span><span>Radius ${rounding}px</span><span>Input radius ${inputRadius}px</span><span>${fontFamily} ${fontSize}px</span></div>
    </article>
  </div>`;
}
function hexLuminance(hex) {
  let value = String(hex).trim().replace('#', '');
  if (/^[0-9a-f]{3}$/i.test(value)) value = value.split('').map((char) => char + char).join('');
  if (/^[0-9a-f]{8}$/i.test(value)) value = value.slice(0, 6);
  if (!/^[0-9a-f]{6}$/i.test(value)) return null;
  const [r, g, b] = [0, 2, 4]
    .map((index) => parseInt(value.slice(index, index + 2), 16) / 255)
    .map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrastRatio(a, b) {
  const first = hexLuminance(a), second = hexLuminance(b);
  if (first === null || second === null) return null;
  const [high, low] = first >= second ? [first, second] : [second, first];
  return (high + 0.05) / (low + 0.05);
}
function themePreview(viewer = false) {
  const primary = tokenDraftValue('primary', 'light'), onPrimary = tokenDraftValue('on-primary', 'light');
  const darkPrimary = tokenDraftValue('primary', 'dark'), darkOnPrimary = tokenDraftValue('on-primary', 'dark');
  const cards = [
    ['Light', primary, onPrimary],
    ['Dark', darkPrimary, darkOnPrimary],
    ['OnLight', '#ffffff', primary],
    ['OnDark', '#0c1015', darkPrimary],
    ['Inverse', onPrimary, primary],
  ].map(([name, background, foreground]) => {
    const ratio = contrastRatio(background, foreground);
    const grade = ratio === null ? '?' : ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'A' : 'Fail';
    return { name, background, foreground, ratio, grade, ok: ratio !== null && ratio >= 4.5 };
  });
  return `<div class="contrast-preview">${cards.map((card) => `<article class="contrast-card"><header><div><span>SubTheme</span><strong>${card.name}</strong><span>Contrast</span><b class="${card.ok ? '' : 'is-bad'}">${card.ratio ? card.ratio.toFixed(2) : '—'}</b><b class="${card.ok ? '' : 'is-bad'}">${card.grade}</b>${card.ok ? '' : '<em>⚠ Контраст ниже AA 4.5 — исправьте color.primary</em>'}</div>${card.ok ? '' : `<button data-action="fix-contrast" data-token-id="primary" data-value="#107f8c" ${viewer ? 'disabled title="Недоступно для Viewer"' : ''}>Fix it</button>`}<button>…　⌃</button></header><div style="background:${escapeHtml(card.background)};color:${escapeHtml(card.foreground)}"><h2>Заголовок для проверки контраста</h2><p>Основной текст помогает оценить доступность пары цветов</p></div></article>`).join('')}</div>`;
}

function componentPreviewMarkup(item, draft, mode) {
  const numeric = Number.isFinite(Number(draft)) ? Number(draft) : Number(item.value) || 8;
  const states = mode === 'states';
  const stateCaption = states ? '<span class="demo-state-label">Default · Hover · Disabled</span>' : `<span class="demo-state-label">${escapeHtml(item.property)}: ${escapeHtml(draft)}</span>`;
  const demos = {
    button: `<div class="demo-row"><button class="demo-button" style="height:${Math.max(24, Math.min(72, numeric))}px">Primary action</button>${states ? '<button class="demo-button is-hover">Hover</button><button class="demo-button" disabled>Disabled</button>' : ''}</div>`,
    'icon-button': `<div class="demo-row"><button class="demo-icon-button" style="width:${Math.max(24, Math.min(72, numeric))}px;height:${Math.max(24, Math.min(72, numeric))}px" aria-label="Добавить">＋</button>${states ? '<button class="demo-icon-button is-hover">＋</button><button class="demo-icon-button" disabled>＋</button>' : ''}</div>`,
    link: `<p>Откройте <a class="demo-link" style="text-underline-offset:${Math.max(0, Math.min(12, numeric))}px">документацию компонента</a>, чтобы узнать больше.</p>`,
    card: `<article class="demo-card" style="padding:${Math.max(8, Math.min(64, numeric))}px"><strong>Карточка продукта</strong><p>Контент использует настраиваемый внутренний отступ.</p></article>`,
    modal: `<div class="demo-modal" style="width:min(${Math.max(240, Math.min(640, numeric))}px,100%)"><strong>Заголовок модального окна</strong><p>Подтвердите действие или закройте окно.</p><div class="demo-row"><button class="demo-button">Подтвердить</button><button class="secondary">Отмена</button></div></div>`,
    input: `<label class="demo-field">Email<input style="border-radius:${Math.max(0, Math.min(24, numeric))}px" value="name@sdds.local" readonly></label>`,
    select: `<label class="demo-field">Роль<select style="border-radius:${Math.max(0, Math.min(24, numeric))}px"><option>Editor</option></select></label>`,
    checkbox: `<label class="demo-checkbox"><input type="checkbox" checked style="width:${Math.max(12, Math.min(32, numeric))}px;height:${Math.max(12, Math.min(32, numeric))}px"> Получать уведомления</label>`,
    tooltip: `<div class="demo-tooltip-wrap"><button class="secondary">Навести курсор</button><span class="demo-tooltip">Tooltip · delay ${escapeHtml(draft)} ms</span></div>`,
    typography: `<div class="demo-typography" style="font-family:'${escapeHtml(draft)}',Inter,sans-serif"><h3>Заголовок интерфейса</h3><p>Основной текст компонента Typography.</p></div>`,
  };
  return `<article class="component-demo"><h2>${escapeHtml(item.name)}</h2>${stateCaption}${demos[item.id] || `<p>${escapeHtml(item.property)}: <code>${escapeHtml(draft)}</code></p>`}</article>`;
}

function componentsEditor() {
  const visibleComponents = state.components.filter((item) => item.name.toLowerCase().includes(state.componentSearch.toLowerCase()));
  const selected = visibleComponents.find((item) => item.id === state.selectedComponentId) || visibleComponents[0] || null;
  if (selected) state.selectedComponentId = selected.id;
  const change = selected ? findChange('component', selected.id) : null;
  const draft = selected ? change?.to ?? selected.value : '';
  const viewer = state.role === 'viewer';
  return `<section class="editor-workbench playground-workbench component-workbench">
    <aside class="token-browser"><div class="token-panel-header"><strong>Components</strong><input class="token-search component-search" data-action="component-search" value="${escapeHtml(state.componentSearch)}" placeholder="Поиск"></div><div class="token-filters"><button disabled>${visibleComponents.length} components</button></div><div class="token-tree">${visibleComponents.length ? visibleComponents.map((item) => `<button class="token-row ${item.id === selected?.id ? 'is-selected' : ''}" data-action="select-component" data-id="${item.id}"><i class="token-status ${item.policy}"></i><span>${escapeHtml(item.name)}</span><small>${escapeHtml(item.policy)}</small></button>`).join('') : '<p class="browser-empty">Ничего не найдено</p>'}</div></aside>
    <header class="editor-toolbar"><div class="inspector-toolbar"><div class="selected-token-title"><i></i><strong>${selected ? escapeHtml(selected.name) : 'Нет результатов'}</strong></div><div class="history-actions"><button data-action="undo-change" title="Undo" aria-label="Undo" ${state.undoStack?.length && canEditTheme() ? '' : 'disabled'}>↶</button><button data-action="redo-change" title="Redo" aria-label="Redo" ${state.redoStack?.length && canEditTheme() ? '' : 'disabled'}>↷</button></div></div><div class="preview-toolbar"><div class="workspace-tabs"><button data-action="component-tab" data-mode="properties" class="${state.componentMode==='properties'?'is-active':''}">Properties</button><button data-action="component-tab" data-mode="states" class="${state.componentMode==='states'?'is-active':''}">States</button></div><div class="publish-actions"><button data-route="changes">Changes ${state.changes.length}</button><button data-route="publish" ${state.changes.length && canPublish() ? '' : 'disabled'}>Publish</button></div></div></header>
    <aside class="properties-panel">${selected ? `${viewer ? `<div class="viewer-banner">Read-only access ${state.accessRequested ? '· запрос отправлен' : '<button data-action="request-access">Request edit access</button>'}</div>` : ''}<section class="inspector-section"><span class="inspector-heading">Property policy</span><strong class="policy-badge ${selected.policy}">${selected.policy}</strong><p>${selected.policy === 'editable' ? 'Можно изменять без ограничений.' : selected.policy === 'restricted' ? 'Допустимый диапазон: 0–24.' : 'Свойство управляется SDDS и доступно только для просмотра.'}</p></section><section class="inspector-section"><label>${escapeHtml(selected.property)}<input data-action="edit-component" data-id="${selected.id}" value="${escapeHtml(draft)}" ${viewer || selected.policy === 'locked' ? 'disabled' : ''}></label>${change ? `<button data-action="revert" data-key="${change.key}" ${viewer ? 'disabled' : ''}>Сбросить</button>` : ''}</section><section class="inspector-section"><span class="inspector-heading">Affected entities</span><div class="impact-line">↗ Themes <b>${selectedSystem() ? themesForSystem(selectedSystem()).length : 1}</b></div><div class="impact-line">↗ Instances <b>${componentInstanceCounts[selected.id] ?? 12}</b></div></section><section class="inspector-section component-impact"><span class="inspector-heading">Linked tokens</span>${(componentLinkedTokens[selected.id] || []).map((tokenId) => { const token = state.tokens.find((entry) => entry.id === tokenId); return token ? `<button class="impact-component" data-action="jump-token" data-id="${token.id}">↪ ${escapeHtml(token.name)}</button>` : ''; }).join('') || '<p class="inspector-hint">Нет связанных tokens.</p>'}</section>` : '<div class="browser-empty">Измените запрос поиска.</div>'}</aside>
    <main class="preview-canvas"><div class="canvas-toolbar"><span>Превью компонента</span><span>${state.componentMode==='states'?'Интерактивные состояния':'Текущие свойства'}</span></div>${selected ? `<div class="component-preview-stage">${componentPreviewMarkup(selected, draft, state.componentMode)}</div>` : '<div class="component-preview-stage"><div class="empty compact"><h2>Компоненты не найдены</h2><p>Попробуйте другой запрос.</p></div></div>'}</main>
  </section>`;
}

function healthView() {
  const issues = state.changes.filter((item) => item.severity !== 'Passed');
  const tokenCoverage=Math.round(state.tokens.filter((item)=>String(item.value).trim()).length/state.tokens.length*100), componentCoverage=Math.round(state.components.filter((item)=>item.policy!=='locked').length/state.components.length*100);
  const score=Math.max(0,Math.round((tokenCoverage+componentCoverage)/2)-issues.length*10);
  return `<section class="workspace-page"><div class="workspace-page-header"><div><h1>Health</h1><p>Срез качества Theme и components</p></div><span class="health-score">${score}%</span></div><div class="summary-grid"><article><span>Critical</span><strong>${issues.filter(i=>i.severity==='Critical').length}</strong></article><article><span>Errors</span><strong>${issues.filter(i=>i.severity==='Error').length}</strong></article><article><span>Warnings</span><strong>${issues.filter(i=>i.severity==='Warning').length}</strong></article><article><span>Component coverage</span><strong>${componentCoverage}%</strong></article></div><section class="form-card"><h2>Issues по источникам</h2>${issues.length ? issues.map(i=>`<div class="health-issue"><span class="status ${i.severity.toLowerCase()}">${i.severity}</span><div><strong>${i.label}</strong><p>${i.message}</p></div><button data-action="jump-source" data-kind="${i.kind}" data-id="${i.id}">К источнику</button></div>`).join('') : '<div class="success compact">Validation issues нет</div>'}</section><section class="form-card"><h2>Coverage</h2><div class="coverage-row"><span>Tokens со значениями</span><progress value="${tokenCoverage}" max="100"></progress><b>${tokenCoverage}%</b></div><div class="coverage-row"><span>Configurable components</span><progress value="${componentCoverage}" max="100"></progress><b>${componentCoverage}%</b></div></section></section>`;
}

function versionsView() {
  return `<section class="workspace-page"><div class="workspace-page-header"><div><h1>Versions</h1><p>Неизменяемые Published Configurations</p></div><button data-route="publish" ${state.changes.length && canPublish() ? '' : 'disabled'}>Опубликовать draft</button></div><section class="table versions-table">${state.versions.map((v,index)=>`<div class="table-row"><div><strong>v${escapeHtml(v.version)}</strong><small>${escapeHtml(v.date)} · ${escapeHtml(v.changelog)}</small></div><span class="status ${v.status==='Failed'?'error':'passed'}">${v.status}</span><span>${v.issueCount} issues</span><button class="secondary" data-action="open-version-details" data-version="${escapeHtml(v.version)}">Детали</button>${v.configuration&&v.status==='Published'&&canEditTheme()?(versionHasDifferences(v)?`<button class="secondary" data-action="restore-version" data-version="${escapeHtml(v.version)}" title="Создаст draft со значениями этой Version. История не переписывается — опубликуете как новую версию.">Откатиться к этой Version</button>`:`<span class="status" title="Значения этой Version совпадают с текущими — откатываться не к чему">Текущая</span>`):''}<button data-action="copy-version-cli" data-version="${v.version}">Копировать CLI</button>${v.status==='Failed'&&canPublish()?'<button data-action="retry-publication" data-index="'+index+'">Повторить</button>':''}</div>`).join('')}</section></section>`;
}

// Визуальный diff: превью значения «по направлению» (цвет/скругление/размер/шрифт) + текст.
function changeVisualType(change) {
  if (change.kind === 'token') {
    const token = state.tokens.find((t) => t.id === change.id);
    const group = token?.group;
    const name = token?.name || change.label || '';
    if (group === 'colors') return 'color';
    if (group === 'sizes') return /round/i.test(name) ? 'rounding' : 'size';
    if (group === 'fonts') return /family/i.test(name) ? 'fontFamily' : 'fontSize';
  }
  return 'component';
}
function diffChip(change, value) {
  const v = String(value);
  const type = changeVisualType(change);
  const isColor = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v) || /^rgba?\(/i.test(v);
  let preview = '';
  if (type === 'color' || (type === 'component' && isColor)) {
    if (isColor) preview = `<i class="diff-sw diff-sw-color" style="background:${v}"></i>`;
  } else if (type === 'rounding') {
    const n = Number(v); if (!Number.isNaN(n)) preview = `<i class="diff-sw diff-sw-round" style="border-radius:${Math.max(0, Math.min(9, n / 2))}px"></i>`;
  } else if (type === 'size') {
    const n = Number(v); if (!Number.isNaN(n)) preview = `<i class="diff-sw diff-sw-bar" style="width:${Math.max(4, Math.min(34, n))}px"></i>`;
  } else if (type === 'fontFamily') {
    preview = `<i class="diff-sw diff-sw-font" style="font-family:'${v.replace(/[^\w\s\-]/g, '')}'">Aa</i>`;
  } else if (type === 'fontSize') {
    const n = Number(v); preview = `<i class="diff-sw diff-sw-fsize" style="font-size:${Math.max(9, Math.min(20, Number.isNaN(n) ? 12 : n))}px">Aa</i>`;
  }
  return `<span class="diff-chip">${preview}<code>${escapeHtml(v)}</code></span>`;
}
function diffPair(change) {
  return `${diffChip(change, change.from)}<span class="diff-arrow" aria-hidden="true">→</span>${diffChip(change, change.to)}`;
}

function changes() {
  if (!state.changes.length) return `<section class="workspace-page"><div class="empty"><h1>Нет черновых изменений</h1><p>Измените token или component.</p><button data-route="editor">Открыть Editor</button></div></section>`;
  const groups = ['token','component'];
  return `<section class="workspace-page">${draftStatusBanner()}<div class="workspace-page-header"><div><h1>Changes</h1><p>${state.changes.length} draft-изменений · validation не блокирует Publish</p></div><button data-route="publish" ${canPublish()?'':'disabled'}>Перейти к Publish</button></div>${groups.map(kind=>{const items=state.changes.filter(i=>i.kind===kind);return items.length?`<section class="change-group"><h2>${kind==='token'?'Tokens':'Components'} · ${items.length}</h2><div class="change-list">${items.map(change=>`<article><div><span class="status ${change.severity.toLowerCase()}">${change.severity}</span><strong>${change.label}</strong><p class="diff-line">${diffPair(change)}</p><small>${escapeHtml(change.author||state.userName)} · ${escapeHtml(change.date||'just now')} · ${change.affected||'2 affected entities'}</small>${change.message?`<p>${escapeHtml(change.message)}</p>`:''}</div><div class="change-actions">${change.suggestion?`<button data-action="apply-suggestion" data-kind="${change.kind}" data-id="${change.id}" data-mode="${change.mode || 'light'}" data-value="${escapeHtml(change.suggestion.value)}" ${canEditTheme()?'':'disabled'}>Fix: ${escapeHtml(change.suggestion.label)}</button>`:''}<button data-action="jump-source" data-kind="${change.kind}" data-id="${change.id}">К источнику</button><button class="secondary" data-action="revert" data-key="${change.key}" ${canEditTheme()?'':'disabled'}>Revert</button></div></article>`).join('')}</div></section>`:''}).join('')}</section>`;
}

function publishView() {
  if (!canPublish()) return `<section class="workspace-page"><div class="empty"><h1>Publish недоступен</h1><p>Viewer может просматривать Theme и Versions, но не публиковать изменения.</p><div class="actions">${state.accessRequested ? '<span class="status">Запрос Editor отправлен</span>' : '<button data-action="request-access">Request edit access</button>'}<button class="secondary" data-route="versions">Открыть Versions</button></div></div></section>`;
  if (draftIsStale()) return `<section class="workspace-page">${draftStatusBanner()}<div class="empty"><h1>Сначала обновите draft</h1><p>Перед Publish нужно применить текущую Published Version как новую базу.</p><button data-action="rebase-draft">Обновить draft</button><button class="secondary" data-route="changes">Открыть Changes</button></div></section>`;
  if (!state.changes.length) return `<section class="workspace-page"><div class="empty"><h1>Публиковать нечего</h1><button data-route="editor">Открыть Editor</button></div></section>`;
  const hasIssues = issueCount() > 0;
  return `<section class="workspace-page"><div class="workspace-page-header"><div><h1>Publish Version</h1><p>Прямая публикация · review и approve не требуются</p></div></div>${state.publicationError?`<div class="notice error-notice">${escapeHtml(state.publicationError)}</div>`:''}${canPublish()?'':'<div class="viewer-banner">Publish недоступен для Viewer. Запросите доступ Editor.</div>'}<div class="summary-grid"><article><span>Theme</span><strong>${escapeHtml(selectedTheme()?.name||'')}</strong></article><article><span>Changes</span><strong>${state.changes.length}</strong></article><article><span>Issues</span><strong>${issueCount()}</strong></article></div><form id="publish-form" class="form-card"><label>Version<input name="version" value="${nextVersion()}" required pattern="\\d+\\.\\d+\\.\\d+"></label><label>Changelog<textarea name="changelog" required>Theme configuration updated.</textarea></label>${hasIssues?`<label class="checkbox"><input type="checkbox" name="confirmIssues" required> Я понимаю риски и публикую с ${issueCount()} validation issues</label><p class="risk-note">Issues не блокируют публикацию: они сохранятся в Version snapshot и будут видны разработчикам при получении конфигурации через CLI.</p>`:''}<details class="prototype-debug"><summary>Отладка прототипа</summary><label class="checkbox prototype-control"><input type="checkbox" name="simulateFailure"> Симулировать сбой сохранения конфигурации — для демонстрации сценария ошибки публикации</label></details><div class="publication-snapshot"><strong>Validation snapshot</strong>${state.changes.map((c)=>`<div class="snapshot-line"><span class="status ${c.severity.toLowerCase()}">${c.severity}</span><span class="snapshot-body">${escapeHtml(c.label)}: <span class="diff-pair">${diffPair(c)}</span></span>${c.message?`<small>${escapeHtml(c.message)}</small>`:''}${c.suggestion?`<small class="snapshot-hint">Рекомендация: ${escapeHtml(c.suggestion.label)}</small>`:''}</div>`).join('')}</div><div class="form-actions"><button type="button" class="secondary" data-route="changes">Отмена</button><button type="submit" ${canPublish()?'':'disabled'}>Publish Version</button></div></form></section>`;
}
function nextVersion() {
  const latest = state.versions.filter(v=>v.status==='Published').map(v=>v.version).sort((a,b)=>compareVersions(b,a))[0] || '1.0.0';
  const parts = latest.split('.').map(Number); parts[1] += 1; parts[2] = 0; return parts.join('.');
}
function compareVersions(a, b) {
  const left = String(a).split('.').map(Number), right = String(b).split('.').map(Number);
  for (let index = 0; index < 3; index += 1) { const diff = (left[index] || 0) - (right[index] || 0); if (diff) return diff; }
  return 0;
}
function configurationSnapshot() {
  const tokenChanges = new Map(state.changes.filter((change)=>change.kind==='token').map((change)=>[`${change.id}:${change.mode || 'light'}`,change.to]));
  const componentChanges = new Map(state.changes.filter((change)=>change.kind==='component').map((change)=>[change.id,change.to]));
  return {
    schemaVersion: '1.0', themeId: state.themeId,
    tokens: state.tokens.map((item)=>({
      ...item,
      value: tokenChanges.has(`${item.id}:light`) ? tokenChanges.get(`${item.id}:light`) : item.value,
      ...(item.group === 'colors' ? { darkValue: tokenChanges.has(`${item.id}:dark`) ? tokenChanges.get(`${item.id}:dark`) : (item.darkValue ?? item.value) } : {}),
    })),
    components: state.components.map((item)=>({ ...item, value: componentChanges.has(item.id) ? componentChanges.get(item.id) : item.value })),
  };
}
function applyPublishedSnapshot(release) {
  state.tokens = structuredClone(release.configuration.tokens);
  state.components = structuredClone(release.configuration.components);
  const publishedChanges = new Map((release.changesSnapshot || []).map((change)=>[change.key,change.to]));
  state.changes = state.changes.filter((change)=>!publishedChanges.has(change.key) || publishedChanges.get(change.key) !== change.to);
}
function completePublication(release) {
  release.status = 'Published';
  release.publishedAt = new Date().toISOString();
  release.configuration ||= configurationSnapshot();
  if (!state.versions.some((item)=>item.version===release.version)) {
    state.versions.unshift({ version: release.version, changelog: release.changelog, status: 'Published', date: release.date, issueCount: release.issueCount, projectId: release.projectId, designSystemId: release.designSystemId, themeId: release.themeId, configuration: structuredClone(release.configuration) });
  }
  applyPublishedSnapshot(release);
  state.undoStack = [];
  state.redoStack = [];
  state.draftBaseVersion = release.version;
  state.themeOverrides[state.themeId] = { ...(state.themeOverrides[state.themeId] || {}), status: 'published', currentVersion: release.version };
  state.auditLog.unshift({ projectId: state.projectId, action: `Published Theme ${selectedTheme()?.name || state.themeId} v${release.version}`, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
  const project = selectedProject();
  membersForCurrentProject()
    .filter((member) => member.email.toLowerCase() !== state.userEmail.toLowerCase())
    .forEach((member) => createNotification({ recipientEmail: member.email, projectId: state.projectId, projectName: project?.name || state.project, type: 'published', detail: `Version ${release.version} (${selectedTheme()?.name || 'Theme'})` }));
  state.publicationFailed = false; state.publicationError = ''; state.publicationFailure = null; state.published = release;
}
function publicationResult() {
  const release = state.published || { version: selectedTheme()?.version || '1.0.0', changelog: 'Current published baseline.', changeCount: 0, issueCount: 0, projectId: state.projectId, designSystemId: state.designSystemId, themeId: state.themeId, status: 'Published' };
  if (state.publicationFailed || release?.status === 'Failed') {
    const failure = state.publicationFailure || {};
    return `<section class="workspace-page"><div class="error-notice publication-failed"><span class="status error">Failed</span><h1>Configuration не сохранена</h1><p>Version не опубликована. Draft-изменения сохранены и не потеряны.</p>
      <dl class="failure-meta">
        <div><dt>Error class</dt><dd>${escapeHtml(failure.code || 'UNKNOWN')}</dd></div>
        <div><dt>Причина</dt><dd>${escapeHtml(failure.reason || 'Не удалось записать Published Configuration.')}</dd></div>
        <div><dt>Request ID</dt><dd>${escapeHtml(failure.requestId || '—')}</dd></div>
        <div><dt>Время</dt><dd>${escapeHtml(failure.at || '—')}</dd></div>
      </dl>
      <div class="actions"><button data-action="retry-current-publication">Повторить публикацию</button><button class="secondary" data-route="publish">Назад к настройкам</button><button class="secondary" data-action="support-from-failure">Создать Support запрос</button></div></div></section>`;
  }
  const command = `sdds sync --project ${release.projectId} --design-system ${release.designSystemId} --theme ${release.themeId} --version ${release.version}`;
  return `<section class="workspace-page"><div class="success"><span class="status passed">Published</span><h1>Version ${escapeHtml(release.version)}</h1><p>Immutable Published Configuration сохранена.</p></div><section class="form-card publish-summary"><h2>Что произошло</h2><ul class="publish-checklist"><li class="ok">Создана <strong>Version ${escapeHtml(release.version)}</strong> — неизменяемая</li><li class="ok">Сохранена конфигурация темы (Published Configuration)</li><li class="ok">Участникам проекта ушло уведомление</li><li class="neutral">В прод ничего не раскатилось автоматически</li><li class="next">Разработчик забирает версию через CLI <span class="muted">(контракт CLI — в проработке)</span></li><li class="ok">Снимок проверок сохранён в версии</li></ul></section><section class="form-card"><h2>Developer handoff</h2><pre id="cli-command">${command}</pre><button data-action="copy-cli">Скопировать CLI-команду</button></section><section class="form-card"><h2>Validation snapshot</h2><p>${release.changeCount} changes · ${release.issueCount} issues acknowledged</p><p>${escapeHtml(release.changelog)}</p></section><div class="actions"><button data-route="editor">Продолжить редактирование</button><button data-route="versions">Все Versions</button></div></section>`;
}

function findChange(kind, id, mode = '') {
  return state.changes.find((change) => change.kind === kind && change.id === id && (!mode || (change.mode || 'light') === mode));
}

function replaceChanges(nextChanges, recordHistory = true) {
  const before = structuredClone(state.changes);
  const after = structuredClone(nextChanges);
  if (JSON.stringify(before) === JSON.stringify(after)) return false;
  if (recordHistory) {
    state.undoStack ||= [];
    state.undoStack.push(before);
    if (state.undoStack.length > 50) state.undoStack.shift();
    state.redoStack = [];
  }
  state.changes = after;
  return true;
}

function undoChange() {
  if (!state.undoStack?.length || !canEditTheme()) return;
  state.redoStack ||= [];
  state.redoStack.push(structuredClone(state.changes));
  state.changes = state.undoStack.pop();
}

function redoChange() {
  if (!state.redoStack?.length || !canEditTheme()) return;
  state.undoStack ||= [];
  state.undoStack.push(structuredClone(state.changes));
  state.changes = state.redoStack.pop();
}

function addChange(kind, id, value, mode = 'light') {
  const item = kind === 'token' ? state.tokens.find((entry) => entry.id === id) : state.components.find((entry) => entry.id === id);
  const changeMode = kind === 'token' ? mode : '';
  const key = kind === 'token' ? `${kind}:${id}:${changeMode}` : `${kind}:${id}`;
  if (!item) return;
  const nextChanges = state.changes.filter((change) => change.key !== key);
  const baseline = kind === 'token' && changeMode === 'dark' ? (item.darkValue ?? item.value) : item.value;
  if (String(value) === String(baseline)) {
    replaceChanges(nextChanges);
    return;
  }
  const validation = validateChange(kind, item, value, changeMode || 'light');
  const themeCount = selectedSystem() ? themesForSystem(selectedSystem()).length : 1;
  const usage = kind === 'token' ? tokenUsage[id] : null;
  const affected = kind === 'token'
    ? `${themeCount} themes · ${usage?.components.length ?? 0} components · ${usage ? usage.components.reduce((sum, [, count]) => sum + count, 0) : 0} instances`
    : `${themeCount} themes · ${componentInstanceCounts[id] ?? 12} instances`;
  const label = kind === 'token' ? (item.group === 'colors' ? `${item.name} · ${changeMode === 'dark' ? 'Dark' : 'Light'}` : item.name) : `${item.name} · ${item.property}`;
  nextChanges.push({ key, kind, id, mode: changeMode, label, from: baseline, to: value, author: state.userName, date: new Date().toLocaleString('ru-RU'), affected, ...validation });
  replaceChanges(nextChanges);
}

function validateChange(kind, item, value, mode = 'light') {
  const text = String(value ?? '').trim();
  const fallback = kind === 'token' && mode === 'dark' ? (item.darkValue ?? item.value) : item.value;
  if (!text) return { severity: 'Error', message: 'Значение не может быть пустым.', suggestion: { label: `Вернуть ${fallback}`, value: String(fallback) } };
  if (kind === 'token' && item.group === 'colors' && !hexToRgba(text)) {
    return { severity: 'Error', message: 'Введите цвет в формате Hex: #RGB, #RRGGBB или #RRGGBBAA.', suggestion: { label: `Вернуть ${fallback}`, value: String(fallback) } };
  }
  if (kind === 'token' && item.group === 'sizes' && !Number.isFinite(Number(text))) {
    return { severity: 'Error', message: 'Размер должен быть числом.', suggestion: { label: `Вернуть ${item.value}`, value: String(item.value) } };
  }
  if (kind === 'token' && item.id === 'font-size' && (!Number.isFinite(Number(text)) || Number(text) <= 0)) {
    return { severity: 'Error', message: 'Размер шрифта должен быть положительным числом.', suggestion: { label: `Вернуть ${item.value}`, value: String(item.value) } };
  }
  if (kind === 'component' && item.policy !== 'locked' && !Number.isFinite(Number(text))) {
    return { severity: 'Error', message: `${item.property} должно быть числом.`, suggestion: { label: `Вернуть ${item.value}`, value: String(item.value) } };
  }
  if (kind === 'component' && item.policy === 'restricted' && (Number(value) < 0 || Number(value) > 24)) {
    const clamped = Math.min(24, Math.max(0, Number(value) || 0));
    return { severity: 'Error', message: 'Значение выходит за разрешённый диапазон 0–24.', suggestion: { label: `Установить ${clamped}`, value: String(clamped) } };
  }
  if (kind === 'token' && item.id === 'primary' && value.toLowerCase() === '#ffffff') return { severity: 'Error', message: 'Возможен недостаточный контраст с color.onPrimary.', suggestion: { label: `Вернуть контрастный ${fallback}`, value: String(fallback) } };
  if (kind === 'token' && item.id === 'control-size' && (Number(value) < 32 || Number(value) > 64)) {
    const clamped = Math.min(64, Math.max(32, Number(value) || 32));
    return { severity: 'Error', message: 'Размер выходит за рекомендуемый диапазон 32–64.', suggestion: { label: `Установить ${clamped}`, value: String(clamped) } };
  }
  if (kind === 'token' && item.id === 'rounding' && (Number(value) < 0 || Number(value) > 24)) {
    const clamped = Math.min(24, Math.max(0, Number(value)));
    return { severity: 'Warning', message: 'Значение выходит за текущую rounding scale 0–24.', suggestion: { label: `Установить ${clamped}`, value: String(clamped) } };
  }
  if (kind === 'token' && item.group === 'fonts' && !value.trim()) return { severity: 'Error', message: 'Значение шрифта не заполнено.', suggestion: { label: `Вернуть ${baseTokenValue(item.id)}`, value: baseTokenValue(item.id) } };
  return { severity: 'Passed', message: '' };
}

function issueCount() {
  return state.changes.filter((change) => change.severity !== 'Passed').length;
}

function roleLabel() {
  return { owner: 'Owner', editor: 'Editor', viewer: 'Viewer' }[state.role];
}

app.addEventListener('click', async (event) => {
  if (event.target.matches('.modal-backdrop')) {
    state.entityModal = null;
    state.versionModal = null;
    persist();
    render();
    return;
  }
  if (event.target.closest('.inline-card-rename') && !event.target.closest('button')) return;
  const target = event.target.closest('button, .clickable-card');
  if (!target) {
    const insidePicker = event.target.closest('.color-picker-popover');
    const shouldClosePicker = state.colorPicker && !insidePicker;
    if (state.cardMenuKey || state.accountMenuOpen || state.notificationMenuOpen || state.resetMenuOpen || shouldClosePicker) {
      state.cardMenuKey=''; state.accountMenuOpen=false; state.notificationMenuOpen=false; state.resetMenuOpen=false;
      if (shouldClosePicker) state.colorPicker = null;
      persist(); render();
    }
    return;
  }
  if (state.colorPicker && !target.closest('.color-picker-popover') && target.dataset.action !== 'open-color-picker') {
    state.colorPicker = null;
    pendingFocusSelector = '';
  }
  if (target.type === 'submit' && target.form) return;
  if (['fix-contrast', 'save-token', 'revert', 'reset-token', 'apply-suggestion', 'restore-version', 'open-color-picker', 'cp-preset', 'toggle-reset-menu', 'reset-section', 'reset-all', 'rebase-draft'].includes(target.dataset.action) && !canEditTheme()) return;
  if (target.dataset.action === 'toggle-reset-menu') {
    state.resetMenuOpen = !state.resetMenuOpen;
    state.accountMenuOpen = false;
    state.notificationMenuOpen = false;
  }
  if (target.dataset.action === 'reset-section') {
    const section = sectionTokenChanges();
    const label = tokenGroupLabels[state.editorTab] || state.editorTab;
    if (section.length && window.confirm(`Сбросить ${section.length} изменений раздела ${label}? Действие можно отменить через Undo.`)) {
      const keys = new Set(section.map((entry) => entry.key));
      replaceChanges(state.changes.filter((entry) => !keys.has(entry.key)));
    }
    state.resetMenuOpen = false;
  }
  if (target.dataset.action === 'reset-all') {
    if (state.changes.length && window.confirm(`Сбросить все изменения (${state.changes.length})? Действие можно отменить через Undo.`)) replaceChanges([]);
    state.resetMenuOpen = false;
  }
  if (target.dataset.action === 'reset-token') replaceChanges(state.changes.filter((entry) => !(entry.kind === 'token' && entry.id === target.dataset.id)));
  if (target.dataset.action === 'rebase-draft') {
    const count = rebaseDraft();
    state.toastMessage = `Draft обновлён до v${latestPublishedVersion()}. Осталось изменений: ${count}.`;
  }
  if (['retry-publication', 'retry-current-publication'].includes(target.dataset.action) && !canPublish()) return;
  if (target.dataset.action === 'add-initial-invite') {
    document.querySelector('#initial-invites').insertAdjacentHTML('beforeend', initialInviteRow());
    return;
  }
  if (target.dataset.action === 'remove-initial-invite') {
    target.closest('.invite-row').remove();
    return;
  }

  if (target.dataset.action === 'toggle-card-menu') {
    const key = `${target.dataset.kind}:${target.dataset.id}`;
    state.cardMenuKey = state.cardMenuKey === key ? '' : key;
  }
  if (target.dataset.action === 'collection-filter-reset') state.collectionFilter = 'all';
  if (target.dataset.action === 'entity-menu') {
    const { kind, id, operation } = target.dataset;
    if ((kind === 'system' && !canManageProject()) || (kind === 'theme' && !canEditTheme())) return;
    if (kind === 'system' && ['move','delete'].includes(operation)) {
      const system = systemsForProject(selectedProject()).find((entry) => entry.id === id);
      const teamDrafts = system ? systemTeamDraftSummary(system) : { users: 0, changes: 0 };
      if (teamDrafts.changes && !window.confirm(`В Design System есть ${teamDrafts.changes} draft-изменений у ${teamDrafts.users} пользователей. Продолжить?`)) return;
    }
    if (kind === 'theme' && ['move','delete'].includes(operation)) {
      const teamDrafts = themeTeamDraftSummary(id);
      if (teamDrafts.changes && !window.confirm(`У Theme есть ${teamDrafts.changes} неопубликованных изменений у ${teamDrafts.users} пользователей. Продолжить?`)) return;
    }
    state.cardMenuKey = '';
    if (operation === 'rename') { state.editingCardKey = `${kind}:${id}`; }
    if (operation === 'move' || operation === 'delete') {
      pendingFocusSelector = `[data-action="toggle-card-menu"][data-kind="${kind}"][data-id="${id}"]`;
      state.entityModal = { kind, id, operation };
    }
    if (operation === 'duplicate' && kind === 'system') {
      const system = systemsForProject(selectedProject()).find((item) => item.id === id);
      const copyId = 'design-system-' + Date.now();
      const copy = { ...structuredClone(system), id: copyId, name: system.name + ' (копия)', themes: [], createdBy: state.userEmail };
      state.additionalSystemsByProject[state.projectId] ||= []; state.additionalSystemsByProject[state.projectId].push(copy);
      const sourceThemes = themesForSystem(system);
      state.additionalThemesBySystem[copyId] = sourceThemes.map((theme,index) => {
        const themeId = `${copyId}-theme-${index}`;
        const themeCopy = { ...structuredClone(theme), id: themeId, name: `${theme.name} (копия)`, version: '0.1.0', status: 'draft', currentVersion: '', createdBy: state.userEmail };
        const sourceWorkspace = state.themeWorkspaces[theme.id];
        state.themeWorkspaces[themeId] = createThemeWorkspace(themeCopy, sourceWorkspace ? { ...sourceWorkspace, versions: [], published: null, publicationFailed: false, publicationError: '' } : null);
        return themeCopy;
      });
      state.auditLog.unshift({ projectId: state.projectId, action: `Duplicated Design System ${system.name}`, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.toastMessage = 'Design System продублирована.';
    }
    if (operation === 'duplicate' && kind === 'theme') {
      const theme = themesForSystem(selectedSystem()).find((item) => item.id === id);
      const copyId = 'theme-' + Date.now();
      const copy = { ...structuredClone(theme), id: copyId, name: theme.name + ' (копия)', version: '0.1.0', status: 'draft', currentVersion: '', createdBy: state.userEmail };
      state.additionalThemesBySystem[state.designSystemId] ||= []; state.additionalThemesBySystem[state.designSystemId].push(copy);
      const source = state.themeWorkspaces[id];
      state.themeWorkspaces[copyId] = createThemeWorkspace(copy, source ? { ...source, versions: [], published: null, publicationFailed: false, publicationError: '' } : null);
      state.toastMessage = 'Theme продублирована.';
    }
  }
  if (target.dataset.action === 'confirm-modal-delete') {
    const kind = target.dataset.kind, id = target.dataset.id;
    if ((kind === 'system' && !canManageProject()) || (kind === 'theme' && !canEditTheme())) return;
    if (kind === 'system') {
      const system = systemsForProject(selectedProject()).find((entry) => entry.id === id);
      if (system) themesForSystem(system).forEach((theme) => { delete state.themeWorkspaces[theme.id]; deleteThemeDrafts(theme.id); });
      state.systemOverrides[id] = { ...(state.systemOverrides[id] || {}), deleted: true }; state.designSystemId = null; state.themeId = null; state.route = 'project';
    }
    else { state.themeOverrides[id] = { ...(state.themeOverrides[id] || {}), deleted: true }; delete state.themeWorkspaces[id]; deleteThemeDrafts(id); state.themeId = null; state.activeWorkspaceThemeId = null; state.route = 'design-system'; }
    state.entityModal = null;
  }
  if (target.dataset.action === 'confirm-modal-move') {
    const form = target.closest('form'), data = new FormData(form), kind = data.get('kind'), id = data.get('id'), destination = data.get('target');
    if (kind === 'system') {
      const system = systemsForProject(selectedProject()).find((item)=>item.id===id), project = allProjects().find((item)=>item.id===destination);
      state.systemOverrides[id] = { ...(state.systemOverrides[id] || {}), projectId: destination };
      state.auditLog.unshift({ projectId: state.projectId, action: `Moved Design System ${system.name} to ${project.name}`, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.toastMessage = `Design System перенесена в ${project.name}.`;
      state.projectId=project.id; state.lastProjectId=project.id; state.project=project.name; state.role=membership(project.id).role; state.designSystemId=id; state.designSystem=system.name; state.themeId=null; state.route='design-system';
    } else {
      const [projectId, systemId] = destination.split('|'), project = allProjects().find((item)=>item.id===projectId), system = systemsForProject(project).find((item)=>item.id===systemId);
      state.themeOverrides[id] = { ...(state.themeOverrides[id] || {}), systemId };
      state.projectId=projectId; state.lastProjectId=projectId; state.project=project.name; state.role=membership(projectId).role; state.designSystemId=systemId; state.designSystem=system.name; state.themeId=null; state.route='design-system';
    }
    state.entityModal=null;
  }
  if (target.dataset.action === 'remove-cover') {
    const { kind, id } = target.dataset;
    const field = target.dataset.field || 'cover';
    const overrides = kind === 'project' ? state.projectOverrides : kind === 'system' ? state.systemOverrides : state.themeOverrides;
    overrides[id] = { ...(overrides[id] || {}), [field]: '' };
  }
  if (target.dataset.action === 'toggle-notifications') {
    state.notificationMenuOpen = !state.notificationMenuOpen;
    state.accountMenuOpen = false;
  }
  if (target.dataset.action === 'mark-all-notifications') {
    currentNotifications().forEach((notification) => { notification.read = true; });
  }
  if (target.dataset.action === 'open-notification') {
    const notification = (state.notifications || []).find((entry) => entry.id === target.dataset.id && entry.recipientEmail.toLowerCase() === state.userEmail.toLowerCase());
    if (notification) {
      notification.read = true;
      const project = allProjects().find((entry) => entry.id === notification.projectId);
      if (project && membership(project.id)) {
        state.projectId = project.id; state.lastProjectId = project.id; state.project = project.name; state.role = membership(project.id).role;
        state.designSystemId = null; state.themeId = null;
        state.route = notification.type === 'accessRequested' && state.role === 'owner' ? 'project-settings' : 'project';
        state.notificationMenuOpen = false;
      }
    }
  }
  if (target.dataset.action === 'toggle-mobile-nav') state.mobileNavOpen = !state.mobileNavOpen;
  if (target.dataset.action === 'doc-hub') state.docPage = 'introducing'; // хаба больше нет
  if (target.dataset.action === 'close-toast') state.toastMessage = '';
  if (target.dataset.action === 'cancel-card-rename') state.editingCardKey = '';
  if (target.dataset.action === 'close-modal') state.entityModal = null;
  if (target.dataset.action === 'close-version-modal') state.versionModal = null;
  if (target.dataset.route) {
    // Ключевые CTA воронки — отдельными событиями (route-view придёт следом).
    if (target.dataset.supportType === 'consult') track('cta:записаться-на-демо');
    if (target.classList.contains('portal-builder-link')) track('cta:открыть-ds-builder');
    if (state.settingsDirty && ['project-settings','design-system-settings','theme-settings'].includes(state.route)) {
      if (!window.confirm('Есть несохранённые изменения. Покинуть страницу?')) return;
      state.settingsDirty = false;
    }
    state.accountMenuOpen = false;
    state.notificationMenuOpen = false;
    state.resetMenuOpen = false;
    state.mobileNavOpen = false;
    state.settingsError = '';
    if (target.dataset.route === 'support') { state.supportReturnRoute = ''; state.supportPrefill = ''; state.supportTypePrefill = target.dataset.supportType || ''; }
    // Заход в раздел из навигации всегда открывает разводящую страницу документации.
    if (target.dataset.route === 'documentation' && !target.dataset.id) state.docPage = '';
    state.route = target.dataset.route;
    if (target.dataset.route === 'builder-home') {
      state.projectId = null;
      state.designSystemId = null;
      state.themeId = null;
      state.role = null;
    }
    if (target.dataset.tab) state.editorTab = target.dataset.tab;
  }
  if (target.dataset.action === 'open-project') {
    const project = allProjects().find((item) => item.id === target.dataset.id);
    state.projectId = project.id;
    state.lastProjectId = project.id;
    state.project = project.name;
    state.role = membership(project.id)?.role || null;
    state.accessRequested = Boolean(pendingAccessRequest(project.id, state.userEmail));
    state.designSystemId = null;
    state.themeId = null;
    state.route = 'project';
    currentNotifications().filter((notification) => notification.projectId === project.id).forEach((notification) => { notification.read = true; });
  }
  if (target.dataset.action === 'open-system') {
    const system = systemsForProject(selectedProject()).find((item) => item.id === target.dataset.id);
    state.designSystemId = system.id;
    state.designSystem = system.name;
    state.themeId = null;
    state.route = 'design-system';
  }
  if (target.dataset.action === 'open-theme') {
    const theme = themesForSystem(selectedSystem()).find((item) => item.id === target.dataset.id);
    state.themeId = theme.id;
    state.theme = theme.name;
    activateThemeWorkspace(theme.id);
    state.editorTab = 'colors';
    state.route = 'editor';
  }
  if (target.dataset.action === 'tab') state.editorTab = target.dataset.tab;
  if (target.dataset.action === 'select-token') {
    state.selectedTokenId = target.dataset.id;
    if (state.colorPicker) {
      const token = state.tokens.find((item) => item.id === target.dataset.id);
      if (token?.group === 'colors') openColorPickerFor(token.id);
      else state.colorPicker = null;
    }
  }
  if (target.dataset.action === 'open-color-picker') {
    const mode = target.dataset.mode || 'light';
    if (state.colorPicker?.tokenId === target.dataset.id && state.colorPicker?.mode === mode) state.colorPicker = null;
    else {
      pendingFocusSelector = `[data-action="open-color-picker"][data-id="${target.dataset.id}"][data-mode="${mode}"]`;
      openColorPickerFor(target.dataset.id, mode);
    }
  }
  if (target.dataset.action === 'close-color-picker') {
    if (state.editorTab === 'palette' && state.colorPicker?.tokenId === 'primary' && findChange('token', 'primary', 'light')) {
      state.toastMessage = `Палитра обновила color.primary: Light и Dark · ${tokenUsage.primary.components.length} компонента затронуто`;
    }
    state.colorPicker = null;
  }
  if (target.dataset.action === 'cp-tab' && state.colorPicker) state.colorPicker.tab = target.dataset.tab;
  if (target.dataset.action === 'cp-preset' && state.colorPicker) {
    const rgba = hexToRgba(target.dataset.value);
    if (rgba) {
      const hsv = rgbToHsv(rgba);
      Object.assign(state.colorPicker, { h: hsv.h, s: hsv.s, v: hsv.v, a: rgba.a });
      commitColorPicker();
    }
  }
  if (target.dataset.action === 'cp-copy') {
    await navigator.clipboard?.writeText(target.dataset.value);
    state.toastMessage = `${target.dataset.value} скопирован.`;
  }
  if (target.dataset.action === 'toggle-issue-filter') state.issueFilter = !state.issueFilter;
  if (target.dataset.action === 'toggle-token-sort') state.tokenSort = state.tokenSort === 'az' ? 'source' : 'az';
  if (target.dataset.action === 'workspace-tab') state.workspaceMode = target.dataset.mode;
  if (target.dataset.action === 'component-tab') state.componentMode = target.dataset.mode;
  if (target.dataset.action === 'undo-change') undoChange();
  if (target.dataset.action === 'redo-change') redoChange();
  if (target.dataset.action === 'fix-contrast') addChange('token', target.dataset.tokenId || state.selectedTokenId, target.dataset.value);
  if (target.dataset.action === 'apply-suggestion') addChange(target.dataset.kind === 'component' ? 'component' : 'token', target.dataset.id, target.dataset.value, target.dataset.mode || 'light');
  if (target.dataset.action === 'select-component') state.selectedComponentId = target.dataset.id;
  if (target.dataset.action === 'jump-component') { state.route = 'components'; state.selectedComponentId = target.dataset.id; }
  if (target.dataset.action === 'jump-token') {
    const token = state.tokens.find((entry) => entry.id === target.dataset.id);
    if (token) { state.editorTab = token.group; state.selectedTokenId = token.id; state.route = 'editor'; }
  }
  if (target.dataset.action === 'support-from-failure') {
    const failure = state.publicationFailure || {};
    state.supportPrefill = `Publish failed: ${failure.code || 'UNKNOWN'} · ${failure.requestId || ''}\nКонтекст: ${state.project} / ${state.designSystem} / ${state.theme}\n${failure.reason || ''}`;
    state.supportSent = false;
    state.supportReturnRoute = 'result';
    state.route = 'support';
  }
  if (target.dataset.action === 'jump-source') {
    state.route = target.dataset.kind === 'component' ? 'components' : 'editor';
    if (target.dataset.kind === 'component') state.selectedComponentId = target.dataset.id;
    else state.selectedTokenId = target.dataset.id;
  }
  if (target.dataset.action === 'copy-version-cli') {
    const cmd = 'sdds sync --project ' + (target.dataset.projectId || state.projectId) + ' --design-system ' + (target.dataset.designSystemId || state.designSystemId) + ' --theme ' + (target.dataset.themeId || state.themeId) + ' --version ' + target.dataset.version;
    await navigator.clipboard?.writeText(cmd);
    state.toastMessage = `CLI для Version ${target.dataset.version} скопирован.`;
  }
  if (target.dataset.action === 'open-version-details') {
    pendingFocusSelector = `[data-action="open-version-details"][data-version="${target.dataset.version}"]${target.dataset.themeId ? `[data-theme-id="${target.dataset.themeId}"]` : ''}`;
    state.versionModal = {
      version: target.dataset.version,
      projectId: target.dataset.projectId || '',
      designSystemId: target.dataset.designSystemId || '',
      themeId: target.dataset.themeId || '',
    };
  }
  if (target.dataset.action === 'restore-version') {
    const versionNumber = target.dataset.version;
    if (!window.confirm(`Значения Version ${versionNumber} будут добавлены в Changes как draft. Продолжить?`)) return;
    const touched = restoreVersionAsDraft(versionNumber);
    if (touched > 0) {
      state.versionModal = null;
      state.toastMessage = `Version ${versionNumber}: ${touched} значений добавлено в Changes.`;
      state.route = 'changes';
    } else if (touched === 0) state.toastMessage = 'Текущие значения уже совпадают с этой Version.';
  }
  if (target.dataset.action === 'retry-publication') { const version = state.versions[Number(target.dataset.index)]; if (version) version.status = 'Published'; }
  if (target.dataset.action === 'retry-current-publication') {
    if (state.published) {
      if (state.versions.some((item)=>item.version===state.published.version)) {
        state.publicationError = `Version ${state.published.version} уже существует.`; state.route = 'publish';
      } else completePublication(state.published);
    }
    if (!state.publicationError) state.route = 'result';
  }
  if (target.dataset.action === 'save-token') addChange('token', target.dataset.id, document.querySelector(`#token-${target.dataset.id}`).value.trim());
  if (target.dataset.action === 'revert') replaceChanges(state.changes.filter((change) => change.key !== target.dataset.key));
  if (target.dataset.action === 'remove-member') {
    if (!canManageProject()) return;
    const index = Number(target.dataset.index), member = state.membersByProject[state.projectId][index];
    if (!window.confirm(`Удалить ${member.email} из Project?`)) return;
    const project = selectedProject();
    state.membersByProject[state.projectId].splice(index, 1);
    createNotification({ recipientEmail: member.email, projectId: project.id, projectName: project.name, type: 'removed' });
    state.auditLog.unshift({ projectId: state.projectId, action: 'Removed ' + member.email, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    if (member.email.toLowerCase() === state.userEmail.toLowerCase()) {
      state.role = null; state.projectId = null; state.designSystemId = null; state.themeId = null; state.route = 'builder-home';
    }
  }
  if (target.dataset.action === 'resolve-access-request') {
    if (!canManageProject()) return;
    const request = (state.accessRequests || []).find((item)=>item.id===target.dataset.id);
    if (request) {
      request.status = target.dataset.decision === 'approve' ? 'approved' : 'declined';
      const member = (state.membersByProject[request.projectId] || []).find((item)=>item.email.toLowerCase()===request.requesterEmail.toLowerCase());
      if (member && request.status === 'approved') member.role = 'editor';
      const project = allProjects().find((item)=>item.id===request.projectId);
      if (request.status === 'approved') createNotification({ recipientEmail:request.requesterEmail, projectId:project.id, projectName:project.name, type:'roleChanged', role:'editor' });
      state.auditLog.unshift({ projectId:request.projectId, action:`Access request ${request.status}: ${request.requesterEmail}`, actor:state.userName, date:new Date().toLocaleString('ru-RU') });
      state.toastMessage = request.status === 'approved' ? 'Пользователю назначена роль Editor.' : 'Запрос доступа отклонён.';
    }
  }
  if (target.dataset.action === 'showcase-slide') {
    landingSetSlide?.(Number(target.dataset.index));
    return;
  }
  if (target.dataset.action === 'scroll-to') {
    track('cta:узнать-больше');
    const el = document.getElementById(target.dataset.target);
    if (el) {
      el.classList.add('is-visible'); // снять reveal-трансформ (translateY 26px) до замера
      const offset = (document.querySelector('.portal-header')?.offsetHeight || 0) + 12;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
    return; // без re-render — скролл по текущему DOM
  }
  if (target.dataset.action === 'new-support') state.supportSent = false;
  if (target.dataset.action === 'set-releases-filter') { state.releasesFilter = target.dataset.value; persist(); render(); return; }
  if (target.dataset.action === 'demo-color') state.landingDemo = { ...(state.landingDemo || {}), color: target.dataset.value };
  if (target.dataset.action === 'demo-mode') state.landingDemo = { ...(state.landingDemo || {}), mode: target.dataset.value };
  if (target.dataset.action === 'demo-size') state.landingDemo = { ...(state.landingDemo || {}), size: target.dataset.value };
  if (target.dataset.action === 'toggle-onboarding-track') state.onboardingTrackMenuOpen = !state.onboardingTrackMenuOpen;
  if (target.dataset.action === 'set-onboarding-track') {
    state.onboardingTrack = target.dataset.track;
    state.onboardingStepId = onboardingTracks[state.onboardingTrack]?.steps[0]?.id || 'start';
    state.onboardingTrackMenuOpen = false;
  }
  if (target.dataset.action === 'set-onboarding-step') {
    state.onboardingStepId = target.dataset.id;
    state.onboardingTrackMenuOpen = false;
  }
  if (target.dataset.action === 'complete-onboarding-step') {
    state.onboardingDone ||= { designer: [], developer: [] };
    const done = state.onboardingDone[state.onboardingTrack] ||= [];
    if (!done.includes(target.dataset.id)) done.push(target.dataset.id);
    const steps = onboardingTracks[state.onboardingTrack].steps;
    const index = steps.findIndex((entry) => entry.id === target.dataset.id);
    if (index >= 0 && index < steps.length - 1) state.onboardingStepId = steps[index + 1].id;
  }
  if (target.dataset.action === 'set-doc-page') state.docPage = target.dataset.id;
  if (target.dataset.action === 'toggle-account') { state.accountMenuOpen = !state.accountMenuOpen; state.notificationMenuOpen = false; }
  if (target.dataset.action === 'request-access') {
    const project = selectedProject();
    const existing = (state.accessRequests || []).some((request)=>request.projectId===project?.id&&request.requesterEmail===state.userEmail&&request.status==='pending');
    if (!existing && project) {
      state.accessRequests ||= [];
      state.accessRequests.push({ id:`access-${Date.now()}`, projectId:project.id, requesterEmail:state.userEmail, status:'pending', createdAt:new Date().toISOString() });
      membersForCurrentProject().filter((member)=>member.role==='owner'&&member.email.toLowerCase()!==state.userEmail.toLowerCase()).forEach((owner)=>createNotification({ recipientEmail:owner.email, projectId:project.id, projectName:project.name, type:'accessRequested' }));
    }
    state.accessRequested = true;
  }
  if (target.dataset.action === 'copy-cli') await navigator.clipboard?.writeText(document.querySelector('#cli-command').textContent);
  if (target.dataset.action === 'logout') {
    syncActiveThemeWorkspace();
    resetDraftBinding();
    state.authenticated = false;
    state.authError = '';
    state.accessRequested = false;
    state.notificationMenuOpen = false;
    state.toastMessage = '';
    state.role = null;
    state.route = 'portal-home';
  }
  if (target.dataset.action === 'reset') state = structuredClone(initialState);

  persist();
  render();
});

app.addEventListener('keydown', (event) => {
  const pickerSlider = event.target.closest('[data-action="cp-key-slider"]');
  if (pickerSlider && state.colorPicker && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowUp'].includes(event.key) ? 1 : -1;
    if (pickerSlider.dataset.kind === 'hue') state.colorPicker.h = (state.colorPicker.h + direction + 360) % 360;
    if (pickerSlider.dataset.kind === 'alpha') state.colorPicker.a = Math.max(0, Math.min(1, state.colorPicker.a + direction * 0.01));
    if (pickerSlider.dataset.kind === 'sv') {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) state.colorPicker.s = Math.max(0, Math.min(1, state.colorPicker.s + direction * 0.01));
      else state.colorPicker.v = Math.max(0, Math.min(1, state.colorPicker.v + direction * 0.01));
    }
    commitColorPicker();
    pendingPickerFocusSelector = `[data-action="cp-key-slider"][data-kind="${pickerSlider.dataset.kind}"]`;
    persist(); render(); return;
  }
  const activeModal = app.querySelector('.entity-modal, .color-picker-popover');
  if (activeModal && event.key === 'Tab') {
    const focusable = [...activeModal.querySelectorAll('button:not(:disabled), input:not([type="hidden"]):not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')];
    if (focusable.length) {
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (!activeModal.contains(document.activeElement)) { event.preventDefault(); first.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return;
  }
  if (event.key === 'Escape' && (state.entityModal || state.versionModal || state.cardMenuKey || state.accountMenuOpen || state.notificationMenuOpen || state.colorPicker || state.resetMenuOpen)) {
    state.entityModal=null; state.versionModal=null; state.cardMenuKey=''; state.accountMenuOpen=false; state.notificationMenuOpen=false; state.colorPicker=null; state.resetMenuOpen=false; persist(); render(); return;
  }
  const isFormField = event.target.matches('input, textarea, select, [contenteditable="true"]');
  if (!isFormField && canEditTheme() && ['editor', 'components'].includes(state.route) && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
    event.preventDefault();
    if (event.shiftKey) redoChange(); else undoChange();
    persist(); render(); return;
  }
  if (!isFormField && canEditTheme() && ['editor', 'components'].includes(state.route) && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'y') {
    event.preventDefault();
    redoChange();
    persist(); render(); return;
  }
  const card = event.target.closest('.clickable-card');
  if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); card.click(); }
});

app.addEventListener('input', (event) => {
  if (event.target.closest('#project-general-form, #design-system-general-form, #theme-general-form')) state.settingsDirty = true;
  if (!['token-search', 'component-search'].includes(event.target.dataset.action)) return;
  const isComponentSearch = event.target.dataset.action === 'component-search';
  if (isComponentSearch) state.componentSearch = event.target.value;
  else state.tokenSearch = event.target.value;
  persist(); render();
  const search = document.querySelector(`[data-action=${isComponentSearch ? 'component-search' : 'token-search'}]`);
  if (search) { search.focus(); search.setSelectionRange(search.value.length, search.value.length); }
});

function resizeImageToDataUrl(file, maxSize) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/webp', 0.85));
    };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Не удалось прочитать изображение.')); };
    image.src = url;
  });
}

function applyPickerField(field, raw) {
  const picker = state.colorPicker;
  if (!picker) return;
  if (field === 'hex') {
    const rgba = hexToRgba(raw);
    if (rgba) { const hsv = rgbToHsv(rgba); Object.assign(picker, { h: hsv.h, s: hsv.s, v: hsv.v, a: rgba.a }); }
  } else if (field === 'a') {
    const numeric = parseFloat(raw);
    if (!Number.isNaN(numeric)) picker.a = Math.max(0, Math.min(100, numeric)) / 100;
  } else if (['r', 'g', 'b'].includes(field)) {
    const rgb = hsvToRgb(picker);
    rgb[field] = Math.max(0, Math.min(255, Number(raw) || 0));
    const hsv = rgbToHsv(rgb);
    Object.assign(picker, { h: hsv.h, s: hsv.s, v: hsv.v });
  } else if (['h', 's', 'l'].includes(field)) {
    const hsl = rgbToHsl(hsvToRgb(picker));
    hsl[field] = Number(raw) || 0;
    const hsv = rgbToHsv(hslToRgb(hsl));
    Object.assign(picker, { h: hsv.h, s: hsv.s, v: hsv.v });
  }
  commitColorPicker();
  persist(); render();
}

app.addEventListener('change', (event) => {
  const collectionFilterSelect = event.target.closest('[data-action=collection-filter-select]');
  if (collectionFilterSelect) { state.collectionFilter = collectionFilterSelect.value; persist(); render(); return; }
  const collectionSortSelect = event.target.closest('[data-action=collection-sort-select]');
  if (collectionSortSelect) { state.collectionSort = collectionSortSelect.value; persist(); render(); return; }
  const formatSelect = event.target.closest('[data-action=cp-format]');
  if (formatSelect && state.colorPicker) { state.colorPicker.format = formatSelect.value; persist(); render(); return; }
  const pickerField = event.target.closest('[data-action=cp-input]');
  if (pickerField && state.colorPicker) { if (canEditTheme()) applyPickerField(pickerField.dataset.field, pickerField.value); return; }
  const coverInput = event.target.closest('[data-action=upload-cover]');
  if (coverInput) {
    const file = coverInput.files?.[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2 * 1024 * 1024) {
      state.settingsError = 'Выберите JPG, PNG или WebP размером не более 2 МБ.';
      persist(); render(); return;
    }
    const { kind, id } = coverInput.dataset;
    const field = coverInput.dataset.field || 'cover';
    resizeImageToDataUrl(file, field === 'sidebarIcon' ? 128 : 800).then((dataUrl) => {
      const overrides = kind === 'project' ? state.projectOverrides : kind === 'system' ? state.systemOverrides : state.themeOverrides;
      const previous = overrides[id]?.[field] || '';
      overrides[id] = { ...(overrides[id] || {}), [field]: dataUrl };
      state.settingsError = '';
      state.toastMessage = field === 'sidebarIcon' ? 'Иконка Project сохранена.' : 'Обложка сохранена.';
      if (!persist()) overrides[id] = { ...(overrides[id] || {}), [field]: previous };
      render();
    }).catch((error) => {
      state.settingsError = error.message || 'Не удалось обработать изображение.';
      persist(); render();
    });
    return;
  }
  const preset = event.target.closest('[data-action=custom-preset]');
  if (preset) {
    const values = {
      neutral: ['#556070','#f8fafc','#ffffff','#111827'],
      brand: ['#6d5dfc','#ffffff','#f7f6ff','#19162d'],
      warm: ['#d45b35','#fffaf5','#fff8f2','#2e1710']
    }[preset.value];
    ['customPrimary','customOnPrimary','customBackground','customText'].forEach((name,index) => {
      const input = document.querySelector(`[name="${name}"]`); if (input) input.value = values[index];
    });
    return;
  }
  const roleSelect = event.target.closest('[data-action=member-role]');
  if (roleSelect) {
    if (!canManageProject()) return;
    const member = state.membersByProject[state.projectId][Number(roleSelect.dataset.index)];
    const previous = member.role;
    member.role = roleSelect.value;
    if (member.email.toLowerCase() === state.userEmail.toLowerCase()) state.role = member.role;
    const project = selectedProject();
    if (member.email.toLowerCase() !== state.userEmail.toLowerCase()) createNotification({ recipientEmail: member.email, projectId: project.id, projectName: project.name, type: 'roleChanged', role: member.role });
    state.auditLog.unshift({ projectId: state.projectId, action: `${member.email}: ${previous} → ${member.role}`, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    persist(); render(); return;
  }
  const input = event.target.closest('[data-action=edit-token], [data-action=edit-component]');
  if (!input) return;
  if (!canEditTheme()) { render(); return; }
  addChange(input.dataset.action === 'edit-component' ? 'component' : 'token', input.dataset.id, input.value.trim(), input.dataset.mode || 'light');
  persist(); render();
});

let pickerDrag = null;

function paintPickerPreview() {
  const picker = state.colorPicker;
  if (!picker) return;
  const rgb = hsvToRgb(picker);
  const hex = rgbaToHex({ ...rgb, a: picker.a });
  const popover = app.querySelector('.color-picker-popover');
  if (popover) {
    const sv = popover.querySelector('[data-cp-sv]');
    if (sv) {
      sv.style.backgroundColor = rgbaToHex({ ...hsvToRgb({ h: picker.h, s: 1, v: 1 }), a: 1 });
      const cursor = sv.querySelector('.cp-cursor');
      if (cursor) { cursor.style.left = `${picker.s * 100}%`; cursor.style.top = `${(1 - picker.v) * 100}%`; }
    }
    const hueCursor = popover.querySelector('[data-cp-hue] i');
    if (hueCursor) hueCursor.style.left = `${picker.h / 360 * 100}%`;
    const alphaTrack = popover.querySelector('[data-cp-alpha]');
    if (alphaTrack) {
      alphaTrack.style.setProperty('--cp-current', rgbaToHex({ ...rgb, a: 1 }));
      const alphaCursor = alphaTrack.querySelector('i');
      if (alphaCursor) alphaCursor.style.left = `${picker.a * 100}%`;
    }
  }
  const swatch = app.querySelector(`[data-action=open-color-picker][data-id="${picker.tokenId}"][data-mode="${picker.mode || 'light'}"]`);
  if (swatch) swatch.style.background = hex;
  const tokenInput = app.querySelector(`[data-action=edit-token][data-id="${picker.tokenId}"][data-mode="${picker.mode || 'light'}"]`);
  if (tokenInput) tokenInput.value = hex;
}

function updatePickerFromPointer(event) {
  if (!pickerDrag || !state.colorPicker) return;
  const rect = pickerDrag.el.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  const picker = state.colorPicker;
  if (pickerDrag.kind === 'sv') { picker.s = x; picker.v = 1 - y; }
  if (pickerDrag.kind === 'hue') picker.h = x * 360;
  if (pickerDrag.kind === 'alpha') picker.a = x;
  paintPickerPreview();
}

app.addEventListener('pointerdown', (event) => {
  if (!state.colorPicker || !canEditTheme()) return;
  const sv = event.target.closest('[data-cp-sv]');
  const hue = event.target.closest('[data-cp-hue]');
  const alpha = event.target.closest('[data-cp-alpha]');
  if (!sv && !hue && !alpha) return;
  event.preventDefault();
  pickerDrag = { kind: sv ? 'sv' : hue ? 'hue' : 'alpha', el: sv || hue || alpha };
  updatePickerFromPointer(event);
});
window.addEventListener('pointermove', (event) => { if (pickerDrag) updatePickerFromPointer(event); });
window.addEventListener('pointerup', () => {
  if (!pickerDrag) return;
  pickerDrag = null;
  commitColorPicker();
  persist(); render();
});

app.addEventListener('reset', (event) => {
  if (event.target.matches('#project-general-form, #design-system-general-form, #theme-general-form')) {
    queueMicrotask(() => { state.settingsDirty = false; });
  }
});

app.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  if (event.target.id === 'auth-form') {
    const identifier = data.get('identifier').trim().toLowerCase();
    const account = state.accounts.find((item) => item.email.toLowerCase() === identifier || item.login.toLowerCase() === identifier);
    if (!account || account.password !== data.get('password')) {
      state.authenticated = false;
      state.authError = 'Неверный email/логин или пароль.';
      state.route = 'auth';
    } else {
      state.authenticated = true;
      state.authError = '';
      state.userName = account.name;
      state.userEmail = account.email;
      state.userLogin = account.login;
      state.role = null;
      // Сессионный прогресс онбординга анонима переносим в аккаунт при входе.
      try {
        const anonProgress = JSON.parse(sessionStorage.getItem('sdds-onboarding-anon') || 'null');
        if (anonProgress) {
          for (const track of Object.keys(anonProgress)) {
            state.onboardingDone[track] = [...new Set([...(state.onboardingDone[track] || []), ...anonProgress[track]])];
          }
          sessionStorage.removeItem('sdds-onboarding-anon');
        }
      } catch { /* игнорируем битые данные */ }
      resetDraftBinding();
      const unread = currentNotifications().find((entry) => !entry.read);
      state.toastMessage = unread?.message || '';
      state.route = 'builder-home';
    }
  }
  if (event.target.id === 'create-project-form') {
    const projectName = String(data.get('name') || '').trim();
    const normalizedInvites = data.getAll('inviteEmail').map((email) => String(email).trim().toLowerCase()).filter(Boolean);
    const duplicateInvite = normalizedInvites.find((email, index) => normalizedInvites.indexOf(email) !== index);
    if (!projectName || duplicateInvite || normalizedInvites.includes(state.userEmail.toLowerCase())) {
      state.settingsError = !projectName ? 'Введите название Project.' : duplicateInvite ? `Email ${duplicateInvite} указан несколько раз.` : 'Нельзя пригласить самого себя.';
      persist(); render(); return;
    }
    const id = `project-${Date.now()}`;
    const project = { id, name: projectName, description: String(data.get('description') || '').trim() || 'Новый проект', systems: [] };
    state.settingsError = '';
    state.createdProjects.push(project);
    state.auditLog.unshift({ projectId: id, action: 'Created Project', actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    state.membersByProject[id] = [{ name: state.userName, email: state.userEmail, role: 'owner' }];
    const inviteNames = data.getAll('inviteName');
    const inviteEmails = data.getAll('inviteEmail');
    const inviteRoles = data.getAll('inviteRole');
    inviteEmails.forEach((rawEmail, index) => {
      const email = rawEmail.toLowerCase();
      if (!email || email === state.userEmail.toLowerCase() || state.membersByProject[id].some((member) => member.email.toLowerCase() === email)) return;
      const name = inviteNames[index] || email;
      state.membersByProject[id].push({ name, email, role: inviteRoles[index] || 'viewer', status: 'Active' });
      createNotification({ recipientEmail: email, projectId: id, projectName: project.name, type: 'invited', role: inviteRoles[index] || 'viewer' });
      state.auditLog.unshift({ projectId: id, action: 'Invited ' + email, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      ensurePrototypeAccount(name, email);
    });
    state.projectId = id;
    state.lastProjectId = id;
    state.project = project.name;
    state.designSystemId = null;
    state.themeId = null;
    state.role = 'owner';
    state.route = 'project';
  }
  if (event.target.id === 'create-design-system-form') {
    if (!canManageProject()) { persist(); render(); return; }
    const id = `design-system-${Date.now()}`;
    const system = { id, name: data.get('name'), themes: [], createdBy: state.userEmail };
    state.additionalSystemsByProject[state.projectId] ||= [];
    state.additionalSystemsByProject[state.projectId].push(system);
    state.auditLog.unshift({ projectId: state.projectId, action: 'Created Design System ' + system.name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    state.designSystemId = id;
    state.designSystem = system.name;
    state.themeId = null;
    state.route = 'design-system';
  }
  if (event.target.id === 'create-theme-form') {
    if (!canEditTheme()) { persist(); render(); return; }
    const id = `theme-${Date.now()}`;
    const palette = data.get('palette');
    const customPalette = palette === 'custom' ? { primary: data.get('customPrimary'), 'on-primary': data.get('customOnPrimary'), background: data.get('customBackground'), text: data.get('customText') } : null;
    const theme = { id, name: data.get('name'), modes: ['Light', 'Dark'], palette, customPalette, version: '0.1.0', status: 'draft', currentVersion: '', createdBy: state.userEmail };
    if (customPalette) state.customPaletteValues = customPalette;
    state.additionalThemesBySystem[state.designSystemId] ||= [];
    state.additionalThemesBySystem[state.designSystemId].push(theme);
    state.auditLog.unshift({ projectId: state.projectId, action: 'Created Theme ' + theme.name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    state.themeId = id;
    state.theme = theme.name;
    activateThemeWorkspace(id);
    state.editorTab = 'colors';
    applyPalette(palette);
    state.changes = [];
    state.route = 'editor';
  }
  if (event.target.id === 'invite-form') {
    if (!canManageProject()) { persist(); render(); return; }
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim().toLowerCase();
    const role = ['editor', 'viewer'].includes(data.get('role')) ? data.get('role') : 'viewer';
    if (email === state.userEmail.toLowerCase() || membersForCurrentProject().some((member) => member.email.toLowerCase() === email)) {
      state.settingsError = email === state.userEmail.toLowerCase() ? 'Нельзя пригласить самого себя.' : 'Пользователь с таким email уже добавлен в Project.';
      state.route = 'project-settings'; persist(); render(); return;
    }
    state.settingsError = '';
    state.membersByProject[state.projectId].push({ name, email, role, status: 'Active' });
    createNotification({ recipientEmail: email, projectId: state.projectId, projectName: selectedProject().name, type: 'invited', role });
    state.auditLog.unshift({ projectId: state.projectId, action: 'Invited ' + email + ' as ' + role, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    ensurePrototypeAccount(name, email);
    state.route = 'project-settings';
  }
  if (event.target.id === 'project-general-form') {
    const project = selectedProject(), name = data.get('name').trim();
    state.projectOverrides[project.id] = { ...(state.projectOverrides[project.id] || {}), name };
    state.project = name;
    state.settingsDirty = false;
    state.toastMessage = 'Настройки Project сохранены.';
    state.auditLog.unshift({ projectId: project.id, action: 'Renamed Project to ' + name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    state.route = 'project-settings';
  }
  if (event.target.id === 'delete-project-form') {
    const project = selectedProject();
    if (data.get('confirmation') !== project.name) {
      state.settingsError = 'Название Project не совпадает.';
      state.route = 'project-settings';
    } else {
      state.deletedProjectIds.push(project.id);
      state.auditLog.unshift({ projectId: project.id, action: 'Deleted Project', actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.projectId = null; state.designSystemId = null; state.themeId = null; state.role = null; state.route = 'builder-home';
    }
  }
  if (event.target.id === 'design-system-general-form') {
    const system = selectedSystem(), name = data.get('name').trim();
    state.systemOverrides[system.id] = { ...(state.systemOverrides[system.id] || {}), name };
    state.designSystem = name;
    state.settingsDirty = false;
    state.toastMessage = 'Настройки Design System сохранены.';
    state.auditLog.unshift({ projectId: state.projectId, action: 'Renamed Design System to ' + name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
    state.route = 'design-system-settings';
  }
  if (event.target.id === 'move-design-system-form') {
    const system = selectedSystem(), targetId = data.get('targetProjectId'), target = allProjects().find((entry) => entry.id === targetId);
    if (target && membership(targetId)?.role === 'owner') {
      const teamDrafts = systemTeamDraftSummary(system);
      if (teamDrafts.changes && !window.confirm(`В Design System есть ${teamDrafts.changes} draft-изменений у ${teamDrafts.users} пользователей. Перенести?`)) { persist(); render(); return; }
      const sourceId = state.projectId;
      state.systemOverrides[system.id] = { ...(state.systemOverrides[system.id] || {}), projectId: targetId };
      state.auditLog.unshift({ projectId: sourceId, action: 'Moved ' + system.name + ' to ' + target.name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.projectId = targetId; state.lastProjectId = targetId; state.project = target.name; state.role = membership(targetId).role; state.route = 'design-system';
    }
  }
  if (event.target.id === 'delete-design-system-form') {
    const system = selectedSystem();
    if (data.get('confirmation') !== system.name) {
      state.settingsError = 'Название Design System не совпадает.';
      state.route = 'design-system-settings';
    } else {
      const teamDrafts = systemTeamDraftSummary(system);
      if (teamDrafts.changes && !window.confirm(`Будут удалены ${teamDrafts.changes} draft-изменений у ${teamDrafts.users} пользователей. Продолжить?`)) { persist(); render(); return; }
      themesForSystem(system).forEach((theme) => { delete state.themeWorkspaces[theme.id]; deleteThemeDrafts(theme.id); });
      state.systemOverrides[system.id] = { ...(state.systemOverrides[system.id] || {}), deleted: true };
      state.auditLog.unshift({ projectId: state.projectId, action: 'Deleted Design System ' + system.name, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.designSystemId = null; state.themeId = null; state.route = 'project';
    }
  }
  if (event.target.id === 'inline-card-rename') {
    const kind = data.get('kind'), id = data.get('id'), name = data.get('name').trim();
    if (kind === 'system') state.systemOverrides[id] = { ...(state.systemOverrides[id] || {}), name };
    if (kind === 'theme') state.themeOverrides[id] = { ...(state.themeOverrides[id] || {}), name };
    state.editingCardKey = '';
  }
  if (event.target.id === 'modal-move-form') {
    const kind = data.get('kind'), id = data.get('id'), target = data.get('target');
    if (kind === 'system') {
      const system = systemsForProject(selectedProject()).find((item)=>item.id===id);
      state.systemOverrides[id] = { ...(state.systemOverrides[id] || {}), projectId: target };
      const project = allProjects().find((item)=>item.id===target);
      state.auditLog.unshift({ projectId: state.projectId, action: `Moved Design System ${system.name} to ${project.name}`, actor: state.userName, date: new Date().toLocaleString('ru-RU') });
      state.projectId=project.id; state.lastProjectId=project.id; state.project=project.name; state.role=membership(project.id).role;
      state.designSystemId=id; state.designSystem=system.name; state.themeId=null; state.route='design-system';
    } else {
      const [projectId, systemId] = target.split('|');
      state.themeOverrides[id] = { ...(state.themeOverrides[id] || {}), systemId };
      const project = allProjects().find((item)=>item.id===projectId), system = systemsForProject(project).find((item)=>item.id===systemId);
      state.projectId=projectId; state.lastProjectId=projectId; state.project=project.name; state.role=membership(projectId).role; state.designSystemId=systemId; state.designSystem=system.name; state.themeId=null; state.route='design-system';
    }
    state.entityModal = null;
  }
  if (event.target.id === 'modal-delete-form') {
    const kind = data.get('kind'), id = data.get('id');
    if (kind === 'system') { state.systemOverrides[id] = { ...(state.systemOverrides[id] || {}), deleted: true }; state.designSystemId=null; state.themeId=null; state.route='project'; }
    else { state.themeOverrides[id] = { ...(state.themeOverrides[id] || {}), deleted: true }; state.themeId=null; state.route='design-system'; }
    state.entityModal = null;
  }
  if (event.target.id === 'theme-general-form') {
    const theme = selectedTheme(), name = data.get('name').trim();
    state.themeOverrides[theme.id] = { ...(state.themeOverrides[theme.id] || {}), name };
    state.theme = name; state.route = 'theme-settings';
    state.settingsDirty = false;
    state.toastMessage = 'Настройки Theme сохранены.';
  }
  if (event.target.id === 'move-theme-form') {
    const theme = selectedTheme(), target = (data.get('target') || '').split('|');
    if (target.length === 2) {
      state.themeOverrides[theme.id] = { ...(state.themeOverrides[theme.id] || {}), systemId: target[1] };
      const project = allProjects().find((entry) => entry.id === target[0]), system = systemsForProject(project).find((entry) => entry.id === target[1]);
      state.projectId = project.id; state.lastProjectId = project.id; state.project = project.name; state.role = membership(project.id).role;
      state.designSystemId = system.id; state.designSystem = system.name; state.route = 'design-system';
    }
  }
  if (event.target.id === 'delete-theme-form') {
    const theme = selectedTheme();
    if (data.get('confirmation') !== theme.name) {
      state.settingsError = 'Название Theme не совпадает.'; state.route = 'theme-settings';
    } else {
      const teamDrafts = themeTeamDraftSummary(theme.id);
      if (teamDrafts.changes && !window.confirm(`Будут удалены ${teamDrafts.changes} draft-изменений у ${teamDrafts.users} пользователей. Продолжить?`)) { persist(); render(); return; }
      state.themeOverrides[theme.id] = { ...(state.themeOverrides[theme.id] || {}), deleted: true };
      delete state.themeWorkspaces[theme.id]; deleteThemeDrafts(theme.id); state.themeId = null; state.activeWorkspaceThemeId = null; state.route = 'design-system';
    }
  }
  if (event.target.id === 'support-form') {
    track('заявка-отправлена', { type: event.target.querySelector('select')?.value || '' }); // конверсия
    state.supportSent = true;
    state.supportPrefill = '';
    state.route = 'support';
  }
  if (event.target.id === 'publish-form') {
    if (!canPublish() || !state.changes.length) { persist(); render(); return; }
    const failed = data.get('simulateFailure') === 'on';
    const version = String(data.get('version') || '').trim();
    if (state.versions.some((item)=>item.version===version)) {
      state.publicationError = `Version ${version} уже существует и не может быть перезаписана.`;
      state.route = 'publish'; persist(); render(); return;
    }
    const release = {
      version, changelog: data.get('changelog'), changeCount: state.changes.length,
      issueCount: issueCount(), projectId: state.projectId, designSystemId: state.designSystemId,
      themeId: state.themeId, status: failed ? 'Failed' : 'Published',
      date: new Date().toISOString().slice(0, 10),
      validationSnapshot: state.changes.map((item) => ({ label: item.label, severity: item.severity, message: item.message, entityType: item.kind, entityId: item.id })),
      changesSnapshot: structuredClone(state.changes), configuration: configurationSnapshot(),
    };
    state.published = release;
    state.publicationFailed = failed;
    state.publicationError = '';
    state.publicationFailure = failed ? { code: 'CFG-STORE-503', reason: 'Configuration Store отклонил запись snapshot (симуляция прототипа).', requestId: `req-${Date.now().toString(36)}`, at: new Date().toLocaleString('ru-RU') } : null;
    if (!failed) completePublication(release);
    state.route = 'result';
  }
  persist();
  render();
});

// Плавный инерционный скролл страницы колесом. Колесо над внутренними
// скролл-контейнерами (sidebar, token-browser и т.д.) не перехватываем.
function initSmoothScroll() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  let target = window.scrollY, current = window.scrollY, raf = 0, lastT = 0;
  const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
  const step = (now) => {
    // Сглаживание через exp(-λ·dt) — скорость скольжения одинакова на 60 и 144 Гц.
    const dt = Math.min(0.05, (now - lastT) / 1000 || 0.016);
    lastT = now;
    current += (target - current) * (1 - Math.exp(-5.5 * dt));
    if (Math.abs(target - current) < 0.5) {
      current = target;
      raf = 0;
    } else {
      raf = requestAnimationFrame(step);
    }
    window.scrollTo(0, current);
  };
  const scrollsInside = (event) => {
    let el = event.target instanceof Element ? event.target : null;
    for (; el && el !== document.body; el = el.parentElement) {
      if (el.scrollHeight <= el.clientHeight + 1) continue;
      const overflowY = getComputedStyle(el).overflowY;
      if (overflowY !== 'auto' && overflowY !== 'scroll') continue;
      const up = event.deltaY < 0;
      if ((up && el.scrollTop > 0) || (!up && el.scrollTop + el.clientHeight < el.scrollHeight - 1)) return true;
    }
    return false;
  };
  window.addEventListener('wheel', (event) => {
    if (event.ctrlKey || event.defaultPrevented || scrollsInside(event)) return; // ctrl+колесо — зум браузера
    event.preventDefault();
    const delta = event.deltaMode === 1 ? event.deltaY * 16
      : event.deltaMode === 2 ? event.deltaY * window.innerHeight
      : event.deltaY;
    if (!raf) { current = window.scrollY; target = current; lastT = performance.now(); }
    target = Math.max(0, Math.min(maxScroll(), target + delta));
    if (!raf) raf = requestAnimationFrame(step);
  }, { passive: false });
  // Скролл не от колеса (скроллбар, клавиатура, переход по якорю) — синхронизируемся.
  window.addEventListener('scroll', () => {
    if (!raf) { current = window.scrollY; target = current; }
  }, { passive: true });
}
initSmoothScroll();

render();

