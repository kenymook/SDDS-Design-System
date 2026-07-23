# Список всех экранов

Полный перечень экранов прототипа под финальную отрисовку. Колонка «Спека» — готово ли подробное описание в папке `screens/`. Колонка «Варианты по ролям» — нужны ли отдельные фреймы под разные роли.

## Публичная часть (без входа)

| Экран | Путь | Зачем | Главные состояния | Варианты по ролям | Спека |
|---|---|---|---|---|---|
| Главная | `portal-home` | Ценность, доказательства, демо, заявка | Обычное; телефон | нет | ✅ [public-home](screens/public-home.md) |
| Компоненты (развилка) | `documentation` | Общая документация + компоненты плитками | Обычное | нет | ✅ [public-components-hub](screens/public-components-hub.md) |
| Страница компонента | `documentation` | Описание: превью + свойства | Обычное | нет | ✅ [public-component-page](screens/public-component-page.md) |
| Про DS Builder | `builder-about` | Рассказ об инструменте | Обычное | нет | ✅ [public-builder-about](screens/public-builder-about.md) |
| Онбординг | `onboarding` | Маршруты дизайнера и разработчика, шаги, прогресс | Обычное; прогресс/выполнено | нет | ✅ [public-onboarding](screens/public-onboarding.md) |
| Релизы | `releases` | Версии проектов + обновления SDDS | Обычное; пусто | нет | ✅ [public-releases](screens/public-releases.md) |
| Поддержка | `support` | Заявка: демо/консультация, доступ | Обычное; проверка; успех | нет | ✅ [public-support](screens/public-support.md) |

## Вход

| Экран | Путь | Зачем | Главные состояния | Варианты по ролям | Спека |
|---|---|---|---|---|---|
| Экран входа | `auth` | Вход в Builder | Обычное; ошибка | нет | ✅ [auth-login](screens/auth-login.md) |

## DS Builder (после входа)

| Экран | Путь | Зачем | Главные состояния | Варианты по ролям | Спека |
|---|---|---|---|---|---|
| Стартовый экран | `builder-home` | Своё пространство, панель проектов | Обычное; пусто (нет проектов) | да | ✅ [builder-home](screens/builder-home.md) |
| Создать проект | `create-project` | Новый проект + приглашения | Обычное; проверка | действие Owner | ✅ [builder-create-project](screens/builder-create-project.md) |
| Обзор проекта | `project` | Список Design System | Обычное; пусто; только просмотр | да | ✅ [builder-project](screens/builder-project.md) |
| Настройки проекта | `project-settings` | Участники и роли, приглашения, журнал, удаление | Обычное; нет доступа; проверка; опасная зона | только Owner | ✅ [builder-project-settings](screens/builder-project-settings.md) |
| Профиль | `account-settings` | Данные пользователя | Обычное | все | ✅ [builder-account-settings](screens/builder-account-settings.md) |
| Создать Design System | `create-design-system` | Новая система | Обычное; нет доступа; проверка | только Owner | ✅ [builder-create-design-system](screens/builder-create-design-system.md) |
| Обзор Design System | `design-system` | Список тем | Обычное; пусто; только просмотр | да | ✅ [builder-design-system](screens/builder-design-system.md) |
| Настройки Design System | `design-system-settings` | Название, обложка, перенос, удаление | Обычное; нет доступа; проверка; опасная зона | только Owner | ✅ [builder-design-system-settings](screens/builder-design-system-settings.md) |
| Создать тему | `create-theme` | Новая тема + палитра | Обычное; нет доступа; проверка | Owner или Editor | ✅ [builder-create-theme](screens/builder-create-theme.md) |
| Настройки темы | `theme-settings` | Название, обложка, перенос, удаление темы | Обычное; нет доступа (Viewer); проверка; опасная зона | Owner/Editor; Viewer нет доступа | ✅ [builder-theme-settings](screens/builder-theme-settings.md) |
| Редактор темы | `editor` | Токены (цвет/градиенты/шрифты/скругления), предпросмотр, проверки | Обычное; только просмотр; унаследовано/переопределено; проверка; пипетка; gradient picker | да | ✅ [builder-editor](screens/builder-editor.md) |
| Редактор компонентов | `components` | Свойства компонентов (можно/ограничено/закрыто) | Обычное; только просмотр; проверка | да | ✅ [builder-components](screens/builder-components.md) |
| Изменения | `changes` | Различия, влияние, откат, отмена/повтор | Обычное; пусто (нет изменений); только просмотр | да | ✅ [builder-changes](screens/builder-changes.md) |
| Публикация | `publish` | Версия + описание, замечания, риск | Обычное; черновик устарел; замечания; только просмотр (Viewer) | Editor/Owner vs Viewer | ✅ [builder-publish](screens/builder-publish.md) |
| Итог публикации | `result` | Результат публикации | Успех; ошибка + повтор | Editor/Owner | ✅ [builder-result](screens/builder-result.md) |
| Версии | `versions` | История, различия, восстановление | Обычное; пусто; строка с ошибкой | да (восстановление — Editor/Owner) | ✅ [builder-versions](screens/builder-versions.md) |
| Качество | `health` | Замечания и покрытие | Обычное; пусто (нет замечаний) | да | ✅ [builder-health](screens/builder-health.md) |

## Всплывающие окна (общие для многих экранов)

Модалка сущности, детали версии, пипетка цвета, gradient picker, уведомления, профиль, меню сброса, всплывашки — описаны в [паттернах](patterns.md); где вызываются — в спецификациях экранов.

## Сколько сделано

- Всего экранов: **25** (7 публичных + 1 вход + 17 в Builder).
- Спеки готовы: **25 из 25** ✅ — все экраны описаны.

## Готово

Все экраны прототипа описаны по единому шаблону: назначение, зоны, состояния, роли, входы/выходы, тексты, телефон, доступность, чек-лист макетов, открытые вопросы. Дальше — сборка финальных макетов в Figma по этим спецификациям.
