# Целевое состояние и scope

## Целевая модель

```text
Open Project / Design System / Theme
  → Edit tokens and components
  → Preview
  → Validate
  → Publish
  → Create Published Configuration
  → Developer applies Version through CLI
  → Monitor health
  → Version / Rollback
```

Review и approve не входят в MVP. Дизайнер может самостоятельно опубликовать собственные изменения.

## Продуктовые принципы

### Designer-first

Основной рабочий сценарий оптимизируется под дизайнера, который создаёт готовый результат для разработки.

### Project-aware

Любое действие выполняется в контексте `Project / Design System / Theme`.

Project является границей данных и доступа; Design System и Theme наследуют роли проекта.

### Safe but non-blocking

Изменения видимы, обратимы и проверяемы. Ошибки validation не блокируют публикацию, но остаются видимыми и сохраняются в истории. Ошибка сохранения Publication/Version блокирует Publish; ошибки генерации файлов обрабатывает CLI.

### Token-first

Кастомизация выполняется через управляемые токены, градиенты и разрешённые настройки компонентов.

### Design-code parity

Дизайнер и разработчик используют один опубликованный результат и одну версию.

## MVP scope

### Must have

| Область | Требование |
|---|---|
| Builder Home | Вход в доступные проекты и последние дизайн-системы |
| Project model | Project → Design System → Theme |
| Access basics | Owner / Editor / Viewer |
| Theme Overview | Статус, версия, changes и health |
| Token editing | Color, gradients, typography и rounding |
| Component editing | Редактируемые компоненты с системными ограничениями |
| Preview | Проверка темы и компонентов |
| Changes | Old/new, affected entities и revert |
| Validation | Неблокирующие проверки и предупреждения |
| Direct Publish | Публикация дизайнером без review/approve |
| CLI handoff | Published Configuration доступна CLI по выбранной Version |
| History | Версии, changelog и история публикаций |

### Out of MVP

| Область | Причина |
|---|---|
| Review / approval workflow | На текущем этапе не требуется |
| Полный rollback | После базового versioning |
| Advanced analytics | После базового health |
| Cross-project inheritance | Высокая сложность |
| Автоматическая доставка сгенерированных файлов | Ответственность CLI/CI, не Builder |

## Критерии успеха MVP

Дизайнер может:

1. выбрать проект, дизайн-систему и тему;
2. отредактировать токены, градиенты и разрешённые свойства компонентов;
3. увидеть diff, preview и влияние изменений;
4. увидеть validation issues без блокировки работы;
5. опубликовать изменения без review;
6. получить Version и Published Configuration, доступную разработчику через CLI;
7. определить, кто и когда опубликовал результат.
