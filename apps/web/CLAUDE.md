@AGENTS.md

# apps/web

Next.js (App Router, `src/app`), React, Tailwind CSS v4, компоненты HeroUI v3 (`@heroui/react`). Пакет: `@video-meetings/web`, порт 3000.

## Команды

Из корня: `pnpm dev:web`, `pnpm --filter @video-meetings/web build | lint | typecheck`.

## Правила

- Для UI используйте скилл `heroui-react`. Документацию компонентов берите из установленного пакета (`node_modules/@heroui/react/docs`), а не из памяти: API v3 отличается от v2.
- Сначала проверяйте, есть ли нужный компонент в HeroUI, и только потом пишите свой.
- Сервер и клиент разделяйте явно: `"use client"` только там, где нужны состояние или обработчики.
- Адрес API берите из переменной окружения, не хардкодьте.
