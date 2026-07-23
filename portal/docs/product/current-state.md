# Текущее состояние и ограничения

> Статус: требует подтверждения по фактической реализации.

## Current state

| Область | Статус | Следующий шаг |
|---|---|---|
| Color tokens editing | Реализовано | Добавить diff, validation и history |
| Gradient editing | Реализовано в прототипе/Builder | Перенести в финальный UI и handoff |
| Typography editing | Реализовано | Унифицировать UX и preview |
| Rounding editing | Реализовано | Добавить component preview |
| Components | Частично добавлены | Определить editable properties и ограничения |
| Changes | Не формализовано | Ввести единый список old/new |
| Direct Publish | Не формализовано | Спроектировать публикацию без review |
| CLI integration | Не определено | Уточнить получение Version, команды и target files |
| Project / Design System model | Не формализовано | Ввести иерархию и изоляцию данных |
| Access roles | Не формализовано | Owner / Editor / Viewer |
| Health | Не формализовано | Ввести advisory validation и dashboard |

## Текущий уровень зрелости

Builder соответствует `Level 1: Basic Editing` с расширением визуальных значений: пользователь может менять отдельные цвета, градиенты, типографику и скругления, но жизненный цикл изменений и результат для разработки ещё не формализованы.

## Покрытие UX-прототипом

Целевые механики проверены интерактивным прототипом
[portal/apps/portal-flow-prototype](../../apps/portal-flow-prototype/README.md):
иерархия Project → Design System → Theme, роли Owner/Editor/Viewer с per-project membership,
draft Changes с per-user изоляцией, advisory validation с fix suggestions, color picker и gradient picker,
direct Publish c immutable Versions, diff/rollback Versions, уведомления (доступ и публикация),
failed-publish flow и CLI handoff. Таблица Current state выше описывает фактическую
реализацию продукта и обновляется отдельно по результатам проверки у команды.

## Основные ограничения

### Изменение не равно опубликованный результат

Все правки должны сначала попадать в Draft Changes. Публикация выполняется дизайнером напрямую и создаёт Version и Published Configuration для CLI.

### Нет прозрачного diff и impact analysis

До публикации должны быть видны old/new, author, validation issues и affected components/themes.

### Компоненты поддержаны частично

Нужны статусы `Available / Partial / Planned / Deprecated`, а также отдельные признаки `Editable / Restricted / Locked`.

### Не определён CLI contract

Известно, что Builder не генерирует npm-пакеты: Developer применяет опубликованную Version через CLI. Пока не зафиксированы источник конфигурации, команды CLI, target files, авторизация и CI-сценарий.

### Не формализована граница проекта

Нужно обеспечить изоляцию `Project → Design System → Theme` и роли пользователя на уровне Project Membership. Design System и Theme наследуют доступы Project.

## Что нужно проверить у команды

- где и как сейчас сохраняются изменения;
- существует ли draft-state;
- какие компоненты и свойства уже редактируются;
- какие экспортные возможности реализованы;
- как Builder связан с Figma/Pixso и кодом;
- как сейчас пользователи получают результат изменений;
- существует ли CLI и какие сценарии он уже поддерживает.
