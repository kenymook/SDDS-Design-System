# Validation, Quality и Health

## Принцип

Validation помогает дизайнеру оценить риск, но не блокирует публикацию в MVP. Все issues видны до подтверждения и сохраняются в Publication/Version.

Ошибка сохранения Publication/Version не является validation issue и не позволяет считать публикацию завершённой. Ошибки получения конфигурации и генерации target files относятся к CLI.

## Уровни проверок

| Уровень | Где | Пример |
|---|---|---|
| Value | Рядом с полем | Некорректный формат значения |
| Entity | Inspector | Нарушение ограничения токена или компонента |
| Page | Summary | Issues текущего редактора |
| Theme | Theme Overview / Health | Проблемы темы |
| Publication | Publish | Snapshot всех issues |
| Design System | Health | Coverage и согласованность компонентов |

## Severity

`Info / Warning / Error / Critical`.

Severity влияет на заметность и подтверждение риска, но не на доступность Publish.

## Проверки tokens

- формат и пустое значение;
- invalid alias;
- contrast;
- context/mode mismatch;
- deprecated token;
- missing mode value;
- подозрительные дубли и нарушения шкалы.

## Проверки typography и rounding

- неподдерживаемое или пустое значение;
- нарушение шкалы;
- accessibility warning;
- риск для связанных компонентов.

## Проверки компонентов

- support и editability status;
- изменение locked/restricted property;
- missing sizes/views/states/modes;
- token usage и contrast issues;
- несоответствие системным constraints.

Конкретные editable properties и constraints остаются открытым решением.

## Publication policy

```text
Issues found
  → show summary and affected entities
  → Designer confirms known risks
  → Publish starts
  → issues are stored in Publication and Version
```

| Результат validation | Publish |
|---|---|
| Passed | Доступен |
| Warning | Доступен |
| Error | Доступен после явного подтверждения |
| Critical | Доступен после усиленного подтверждения |

## Health dashboard

Показывает validation issues, contrast, component coverage, restricted edits и version health. Issues можно открыть, игнорировать с причиной или отметить решёнными. CLI failures наблюдаются в CLI/CI и могут передаваться в Portal отдельной интеграцией позже.
