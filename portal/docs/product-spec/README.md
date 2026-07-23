# Product & Business (продуктовые решения и бизнес-требования)

Слой «зачем и что требуется». Отвечает на бизнес-контекст, цели, требования и продуктовые решения — до того, как переходить к дизайну экранов.

## Содержание раздела

| Документ | Что внутри |
|---|---|
| [business-requirements.md](business-requirements.md) | Контекст, проблемы, бизнес-цели, аудитории, бизнес-правила, метрики, границы, ограничения, риски, maturity |
| [product-requirements.md](product-requirements.md) | Продуктовые принципы, функциональные требования (FR), нефункциональные требования (NFR), трассируемость |
| [decisions-log.md](decisions-log.md) | Принятые решения по темам + открытые вопросы (блокирующие и продуктовые) |
| [metrics-and-economics.md](metrics-and-economics.md) | Поведенческие метрики (воронка A0–R2, события, drop-off), discovery и рынок, модель экономики |
| [quality-ladder.md](quality-ladder.md) | Оценка качества по итогам юзертестов и путь от 7 к 10 |
| [roadmap.md](roadmap.md) | Роадмап: дорожки Дизайн/Продукт/Инженерия, фазы, критический путь, дизайн-производство |

## Карта всего пространства (для Confluence)

Три слоя документации по продукту:

```text
SDDS Portal & Builder — Documentation
├── 1. Product & Business  (зачем + что требуется)   → product-spec/
│     ├── Бизнес-требования
│     ├── Продуктовые требования (FR + NFR)
│     ├── Решения и открытые вопросы
│     ├── Метрики, discovery и экономика
│     └── Роадмап
├── 2. Deliverables  (спринт-решения)                → ../deliverables/
│     ├── Авторизация Builder
│     ├── DS Builder MVP Scope
│     ├── RBAC UI правила
│     ├── SDDS Portal MVP Scope
│     ├── Модель проектов и дизайн-систем
│     └── Поддержка градиентов в Builder
└── 3. Design Spec  (как выглядит — экраны/состояния) → ../design-spec/
      ├── Каталог состояний
      ├── Паттерны, Контент/глоссарий
      ├── Инвентарь экранов
      └── Спеки экранов
```

Порядок чтения на защите: **Product & Business → Deliverables → Design Spec**. Прототип — живое доказательство на всех уровнях: [portal-flow-prototype.vercel.app](https://portal-flow-prototype.vercel.app).

## Первоисточники в репозитории

- `docs/product/context.md` — продуктовая рамка, бизнес-проблемы, maturity
- `docs/product/target-state-and-scope.md` — целевая модель и scope
- `docs/decisions/open-questions.md` — журнал решений (даты)
- `docs/delivery/roadmap.md` — этапы и Jira-epics
- `docs/requirements/user-stories.md` — истории
