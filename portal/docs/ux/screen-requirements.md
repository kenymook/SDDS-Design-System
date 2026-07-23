# Требования к экранам

Для каждого экрана при детализации определяются route, доступные роли, входные данные, primary action, loading/empty/error/read-only states, переходы, accessibility и acceptance criteria.

> Проверено прототипом: [portal/apps/portal-flow-prototype](../../apps/portal-flow-prototype/README.md).
> На экранах Theme workspace всегда отображается context header
> `Project / Design System / Theme · Version · Status · draft changes · роль`.

## Portal Home (главная)

Публичная, без авторизации. Hero: слоган, описание white-label подхода, CTA (изучение системы, онбординг), метрики (~80 компонентов, платформы, размерная шкала, WCAG 2.1 AA), анимированный фон из компонентов. Секции: social proof (16+ команд, витрина скриншотов/видео продуктов), принципы, архитектура токенов с визуализацией «путь цвета», интерактивное live demo (бренд/режим/размер), блок DS Builder (ссылка на страницу-презентацию), Developer handoff (CLI с пометкой «контракт в проработке»), ценность по ролям, финальный CTA. Адаптив: на узкой ширине навигация в бургер-меню, фоновая анимация не перекрывает заголовок.

## DS Builder About (презентация инструмента)

Публичная. Hero с CTA (открыть Builder / онбординг дизайнера), четыре шага «от черновика до Version», проверки качества с мок-интерфейсом, роли Owner/Editor/Viewer, Versions и откат, финальный CTA с запросом доступа.

## Documentation

Публичная. Боковая навигация: foundations и Components по группам; контентная область с хлебными крошками. Страница компонента: живое превью, перечень свойств (read-only), переход «Открыть в Builder».

## Onboarding

Публичная. Переключатель трека (Designer/Developer), список шагов со статусами (выполнен/текущий/предстоящий), контент шага со ссылками на разделы, прогресс сохраняется по трекам независимо.

## Releases (Portal)

Публичная. Опубликованные Versions проектов (номер, дата, changelog, связь с Published Configuration) и релизы SDDS Core; открытые решения (CLI contract) помечены явно.

## Support

Публичная. Форма: тип запроса (Запрос доступа / Консультация), команда / продукт (предзаполняется текущим Project, если есть), описание (предзаполняется при переходе из сценариев сбоя публикации → тип «Консультация»). Баги и запросы новых компонентов сюда не входят — они создаются в DS Builder у конкретной темы. Экран подтверждения с возвратом к исходному сценарию.

## Builder Home

Отдельной страницы Projects нет: после авторизации открывается последний доступный Project
(при первом входе — первый доступный), а переключение выполняется через иконки Projects в rail.
Личное пространство пользователя состоит из Owner-memberships («мои») и Editor/Viewer-memberships
(«доступные мне»); кнопка `+` в rail создаёт новый Project.

## Project Overview

Owner, Design Systems, members, active changes, health summary и latest publications.

## Create Project

Название, описание и необязательный список приглашений. Для каждого приглашённого указываются имя, email и права Editor или Viewer. Создатель автоматически становится Owner.

## Design System Overview

Component coverage, themes, current version, changes, health и CLI entry point. Все Design Systems поддерживают все платформы.

## Create Design System

Экран доступен Owner внутри конкретного Project. Содержит только название; после создания открывается новая Design System. Платформа не выбирается.

## Create Theme

Экран доступен Owner и Editor внутри конкретной Design System. Содержит название и стартовую палитру Base / Malachite / B2B / Custom. При выборе Custom в форме раскрываются готовые пресеты и ручной ввод HEX-значений; режимы Light и Dark создаются автоматически; после создания открывается Theme Editor.

## Theme Overview

Base theme, status, current version, modes, owner, changes summary и validation summary.

## Color Tokens Editor

Category navigation, search/filter, token table, value editor, mode switcher, inherited state, inspector, preview и changes indicator.

Дополнительно (проверено прототипом):

- severity-индикаторы у токенов в дереве (изменён / warning / error) и badge с числом issues на группе;
- color picker у свотча значения (Custom: SV/hue/alpha, форматы Hex/RGB/HSL, копирование; Library: пресеты палитр);
- gradient picker для градиентных значений: тип, preview, stop-значения, цвет, прозрачность, позиция;
- live preview реальных компонентов на draft-значениях;
- режим Accessibility с WCAG-расчётом контраста и «Fix it» при провале AA;
- Base value с меткой inherited/overridden;
- Impact / Component list из модели зависимостей с переходом к компонентам.

## Typography Editor

Typography groups, value editor, preview, inherited/overridden state, inspector и changes indicator.

## Rounding Editor

Rounding values, editor, scale validation, component preview, inspector и changes indicator.

## Components Editor

Catalog, support/editability filters, preview, size/view/state/mode controls, editable properties, constraints, linked tokens и issues.

Дополнительно (проверено прототипом): linked tokens с переходом к токену-источнику;
affected entities (themes, instances) считаются из модели зависимостей.

## Changes

Grouped draft changes, old/new, author/date, validation, affected entities и Revert. Review actions отсутствуют.
Каждая issue сопровождается fix suggestion, применяемым в один клик.
Черновики изолированы по пользователю (см. patterns → Draft isolation).

## Publish

Changes, validation snapshot, affected entities, version, changelog и risk confirmation. Доступен Editor и Owner.
Snapshot развёрнут: severity, old → new, сообщение и рекомендация по каждой issue.
Под risk confirmation — пояснение последствий публикации с issues.

## Publication Result

Publication status, Version, changelog, validation issues, Retry при failure и инструкция использования Version через CLI.
Failed-состояние включает error class, причину, request id, время и создание Support-запроса
с предзаполненным контекстом; draft-изменения не теряются.
Успешная публикация уведомляет участников Project (in-app + email).

## Health

Validation issues, contrast, component coverage, restricted changes и version health.

## Project Settings

Экран находится внутри выбранного Project и содержит только его Members, roles, Design Systems, settings и Audit Log. Приглашение пользователя создаёт membership только для текущего Project.
Здесь же обрабатываются запросы доступа (Request edit access → назначить Editor / отклонить).

## Versions

Version list, changelog, author, date, validation snapshot, CLI usage, compare и rollback.

Реализовано в прототипе:

- Details-модал с summary, changelog, configuration snapshot и CLI-командой;
- diff с предыдущей опубликованной Version по tokens и components;
- rollback через «Восстановить как draft»: значения выбранной Version добавляются в Changes
  с подтверждением и проходят стандартный цикл публикации.
