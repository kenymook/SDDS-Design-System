export const roles = [
  {
    id: "designer",
    title: "Designer",
    titleRu: "Дизайнер",
    promise: "Собирать интерфейсы из SDDS-компонентов, тем и пропов без локального хака.",
    levels: [
      {
        id: "junior",
        title: "Junior",
        description: "Понять foundation-роль SDDS и собрать первый экран.",
        tasks: [
          { id: "d-1-1", title: "Собрать первый экран", link: "tutorials/01-getting-started-designer.md" },
          { id: "d-1-2", title: "Выбрать компонент под задачу", link: "how-to/pick-a-component.md" },
        ],
      },
      {
        id: "middle",
        title: "Middle",
        description: "Работать с темами, размерами, отступами и состояниями.",
        tasks: [
          { id: "d-2-1", title: "Переключать темы в Figma", link: "how-to/use-themes-in-figma.md" },
          { id: "d-2-2", title: "Понять размеры и отступы", link: "reference/sizes-and-spacing.md" },
          { id: "d-2-3", title: "Понять состояния", link: "reference/states.md" },
        ],
      },
      {
        id: "senior",
        title: "Senior",
        description: "Готовить production-ready макеты и handoff.",
        tasks: [
          { id: "d-3-1", title: "Собрать полноценную форму", link: "how-to/build-a-form.md" },
          { id: "d-3-2", title: "Подготовить handoff", link: "how-to/handoff.md" },
        ],
      },
    ],
  },
  {
    id: "developer",
    title: "Developer",
    titleRu: "Разработчик",
    promise: "Подключать темы и компоненты без хардкода, сохраняя white-label.",
    levels: [
      {
        id: "junior",
        title: "Junior",
        description: "Подключить SDDS и собрать первую форму.",
        tasks: [
          { id: "dev-1-1", title: "Установить SDDS", link: "tutorials/01-getting-started-developer.md" },
          { id: "dev-1-2", title: "Подключить тему", link: "how-to/theme-a-product.md" },
        ],
      },
      {
        id: "middle",
        title: "Middle",
        description: "Понять токены, пропы и состояния компонентов.",
        tasks: [
          { id: "dev-2-1", title: "Компоненты и пропы", link: "reference/props.md" },
          { id: "dev-2-2", title: "Семантические токены", link: "concepts/why-semantic-tokens.md" },
        ],
      },
    ],
  },
  {
    id: "manager",
    title: "Manager",
    titleRu: "Менеджер",
    promise: "Понимать границы foundation и планировать продуктовую дизайн-систему поверх SDDS.",
    levels: [
      {
        id: "junior",
        title: "Junior",
        description: "Понять границы SDDS и продуктового слоя.",
        tasks: [
          { id: "m-1-1", title: "Архитектура SDDS", link: "concepts/architecture.md" },
          { id: "m-1-2", title: "Принцип white-label", link: "concepts/white-label.md" },
        ],
      },
    ],
  },
];
