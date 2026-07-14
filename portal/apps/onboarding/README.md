# SDDS Portal Onboarding

Интерактивный onboarding внутри SDDS Portal и DS Builder shell.

## Запуск

```bash
npm install
npm run dev
```

## Структура

```txt
src/
  content/       # роли, уровни, задания, тексты
  styles/        # SDDS-like token layer
  utils/         # вычисления прогресса, поиск задач, self-tests
  components/
    layout/      # Builder shell: nav, topbar, sidebar
    onboarding/  # главная страница онбординга
    task/         # страница задания
    ui/           # базовые UI-блоки
```

## Важно

Контент отделён от UI. Чтобы редактировать тексты онбординга, меняйте файлы в `src/content`.
