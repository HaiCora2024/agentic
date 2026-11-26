# video-meetings

Монорепозиторий на pnpm workspaces.

| Проект       | Путь        | Стек       | Порт |
| ------------ | ----------- | ---------- | ---- |
| API          | `apps/api`  | NestJS     | 3001 |
| Веб          | `apps/web`  | Next.js    | 3000 |
| Общие пакеты | `packages/` | пока пусто | —    |

## Запуск

```bash
pnpm install
pnpm dev        # api + web
pnpm dev:api
pnpm dev:web
```

## Скрипты

`pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm format`, `pnpm format:check`.
