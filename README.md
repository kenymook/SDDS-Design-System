# SDDS — Sber Design System

Единое рабочее пространство документации SDDS, продуктовой модели SDDS Portal и интерактивного прототипа DS Builder.

[Открыть UX-прототип](https://portal-flow-prototype.vercel.app/) · [Документация SDDS](docs/README.md) · [Документация Portal и Builder](portal/docs/README.md)

## Что находится в репозитории

- [`docs/`](docs/README.md) — каноническая документация дизайн-системы: основы, руководства, справочники и спецификации компонентов.
- [`portal/docs/`](portal/docs/README.md) — продуктовая и UX-документация SDDS Portal и DS Builder.
- [`portal/apps/portal-flow-prototype/`](portal/apps/portal-flow-prototype/README.md) — интерактивный UX-прототип полного пути от входа в Portal до настройки и публикации темы.
- [`portal/apps/onboarding/`](portal/apps/onboarding/README.md) — прототип ролевого онбординга.

## Основные сценарии прототипа

- авторизация и запрос доступа;
- переход по иерархии `Project → Design System → Theme`;
- создание и настройка темы на основе шаблона;
- работа с палитрой, семантическими токенами и компонентами;
- проверка Accessibility и общего состояния системы;
- управление изменениями, версиями и публикацией.

Прототип нужен для проверки продуктовой логики и UX. Он не фиксирует финальный визуальный дизайн, API-контракт или CLI.

## Запуск UX-прототипа

Требуется Node.js.

```bash
cd portal/apps/portal-flow-prototype
npm start
```

После запуска откройте [http://127.0.0.1:4180](http://127.0.0.1:4180).

Тестовые данные для входа:

```text
anna / demo
ivan / demo
maria / demo
```

## Проверка изменений

```bash
cd portal/apps/portal-flow-prototype
npm run check
```

Команда проверяет JavaScript и запускает тесты модели Builder.

## Точки входа в документацию

- [Старт для дизайнера](docs/getting-started/01-getting-started-designer.md)
- [Старт для разработчика](docs/getting-started/02-getting-started-developer.md)
- [Основы SDDS](docs/foundations/introducing.md)
- [Каталог компонентов](docs/reference/components.md)
- [Спецификации компонентов](docs/components/)
- [Модель Portal и DS Builder](portal/docs/README.md)
- [Сценарий демонстрации и интервью](portal/docs/demo-scenario.md)

## Принцип разделения

`docs/` определяет правила самой дизайн-системы. `portal/` описывает продукт, пользовательские сценарии и приложения вокруг неё. При расхождении источником истины для foundations и компонентов считается документация в `docs/`.
