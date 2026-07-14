export const learningContracts = {
  designer: {
    outcomes: [
      "собирать макеты из SDDS-компонентов",
      "проверять white-label через темы",
      "передавать handoff через компоненты и пропы",
    ],
  },
  developer: {
    outcomes: [
      "подключать тему через ThemeProvider",
      "использовать токены вместо hex",
      "различать view, state и loading",
    ],
  },
  manager: {
    outcomes: [
      "видеть границу SDDS и Product DS",
      "понимать, когда нужна тема, а когда компонент",
      "не превращать продуктовый сценарий в foundation",
    ],
  },
  commonQuestions: [
    "что SDDS делает и чего не делает",
    "почему темы важнее локальных цветов",
    "где заканчивается foundation и начинается Product DS",
  ],
};

export const helpDocsContent = {
  title: "Справка: если хочется понять глубже",
  description: "Что делает SDDS, где границы foundation и почему нельзя хардкодить",
  sections: [
    {
      title: "Что делает SDDS",
      items: ["Даёт универсальные компоненты", "Определяет семантические токены", "Обеспечивает white-label"],
    },
    {
      title: "Правильно / неправильно",
      text: "Правильно: менять View, size и Product Theme. Неправильно: рисовать компонент вручную, хардкодить цвет или форкать кнопку под бренд.",
    },
  ],
};
