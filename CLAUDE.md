# video-meetings

Монорепозиторий на pnpm workspaces. Подробности по каждому приложению лежат в его `CLAUDE.md`.

| Проект | Путь        | Стек                | Порт |
| ------ | ----------- | ------------------- | ---- |
| API    | `apps/api`  | NestJS              | 3001 |
| Веб    | `apps/web`  | Next.js + HeroUI v3 | 3000 |
| Общее  | `packages/` | пока пусто          | —    |

## Команды (из корня)

- `pnpm install`: установка зависимостей.
- `pnpm dev`: api и web вместе; `pnpm dev:api`, `pnpm dev:web`: по отдельности.
- `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test`.
- `pnpm format` и `pnpm format:check`: Prettier.

Команду для одного приложения запускайте через `pnpm --filter @video-meetings/<api|web> <script>`.

## Правила

- Менеджер пакетов только `pnpm`. Node 22 (`.nvmrc`).
- Перед завершением задачи прогоните `pnpm typecheck` и `pnpm lint` для затронутого приложения.
- Не коммитьте `.env*`, `dist/`, `.next/`.
- При изменении архитектуры (структура приложений и модулей, стек, порты, команды, границы между `apps/*` и `packages/`) актуализируйте документацию в той же задаче: этот `CLAUDE.md`, `CLAUDE.md` затронутого приложения и `README.md`.
- Скиллы лежат в `.agents/skills/`, в `.claude/skills/` на них симлинки. Версии зафиксированы в `skills-lock.json`. Обновление: `npx skills update`.
