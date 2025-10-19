# js_base_4_students

Набор учебных примеров по JavaScript/TypeScript, Node.js (разные мини-сервисы), NestJS, React, Vue. Ниже — краткое описание структуры и команды запуска.

## Требования

- Node.js LTS (рекомендуется 20+)
- Yarn или npm (на ваш выбор)

## Структура

- `backend/`
  - `nodejs/` — набор изолированных демо-серверов (HTTP, чат, эхо, статика, env и т.д.)
  - `nestjs/nest-blog/` — шаблон NestJS-приложения
- `frontend/`
  - `react/` — коллекция примеров (в т.ч. CRA)
  - `vue/vue3-project/` — проект на Vite + Vue 3 + TS
- `typescript/` — примеры TS и конфиг для компиляции
- `vanila/` — чистый JS (ES5/ES6) примеры по темам

## Быстрый старт по разделам

### Backend — Node.js демо

Каждый подкаталог — отдельный сервер, запускать из соответствующей папки:

- `backend/nodejs/echo-server/`
  - старт: `node server.js`
  - проверка: запрос `GET http://127.0.0.1:3000/echo?message=hi` вернёт `hi`

- `backend/nodejs/chat/`
  - старт: `node server.js`
  - открывайте `index.html` в том же каталоге для проверки long-poll чата

- `backend/nodejs/path/`
  - старт: `node server.js`
  - доступ к статике: `http://127.0.0.1:3000/?secret=o_O` с путями из `public/`

- `backend/nodejs/env-param/`
  - пример с переменными окружения
  - запуск: `PORT=3000 IP=127.0.0.1 NODE_ENV=dev node server.js`

- `backend/nodejs/server/`
  - старт: `node server.js`
  - простой счётчик запросов на `http://127.0.0.1:3000`

Дополнительно смотрите другие подпапки (`pipe/`, `streams/`, `timers_refs/`, и т.п.) — запуск аналогично: `node <file>.js`.

### Backend — NestJS (nest-blog)

Каталог: `backend/nestjs/nest-blog/`

- установка: `yarn` или `npm i`
- dev: `yarn start:dev` или `npm run start:dev`
- prod build: `yarn build` → запуск: `yarn start:prod`
- тесты: `yarn test`

По умолчанию приложение слушает порт, заданный в `main.ts`/конфиге (смотрите `src/`).

### Frontend — React (CRA пример)

Каталог: `frontend/react/06-create-react-app/`

- установка: `yarn` или `npm i`
- dev: `yarn start` или `npm run start` (откроется `http://localhost:3000`)
- prod build: `yarn build`

Остальные подпроекты React — статические примеры с `index.html` или мелкие CRA-шаблоны; заходите в нужную папку и используйте аналогичные команды.

### Frontend — Vue 3 (Vite)

Каталог: `frontend/vue/vue3-project/`

- установка: `yarn` или `npm i`
- dev: `yarn dev` (по умолчанию `http://localhost:5173` или порт, указанный Vite)
- prod build: `yarn build`
- preview: `yarn preview`

### TypeScript примеры

Каталог: `typescript/`

- установка зависимостей (если нужны): `npm i` или `yarn`
- компиляция примера из `typescript/tsconfig/`:
  - перейти: `cd typescript/tsconfig`
  - скомпилировать: `npx tsc` (вывод в `build/`)
  - запустить скомпилированное: `node build/index.js`

Также есть отдельные `.ts`/`.js` файлы в корне `typescript/` — запускайте напрямую Node.js (для `.ts` сначала транскомпиляция).

## Полезное

- Узлы запускаютcя на 3000 порту по умолчанию (если не указано иное)
- Если порт занят — поменяйте порт или остановите конфликтующий процесс
- Для Windows PowerShell используйте `set`/`$env:` или `cross-env` для переменных окружения
