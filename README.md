# Приложение для отображения спец предложений компании

## Описание проекта:

Web-приложение, при заходе в приложение появляется таймер и начинается обратный отсчет, указывающий на завершение акции. Дополнительно реализован всплывающий попап по спецпредложениям.

## Проект размещен на ресурсе Vercel по ссылке:

[https://sales-kzhm.vercel.app/](https://sales-kzhm.vercel.app/)

## Команды для сборки проекта:

склонировать реппозиторий

```bash
git clone https://github.com/TimurIsrafilov/sales.git
```

зайти в папку проекта

```bash
cd sales
```

установить зависимости

```bash
npm i
```

## Команды для запуска проекта:

запустить дев-режим

```bash
npm npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000)

запуск прод-режима

```bash
npm run build
```

## Использован стек технологий:

- <img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" title="nextjs" alt="nextjs" width="20" height="20"/> - **NextJS** - фреймворк для React [https://nextjs.org/](https://nextjs.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="reactjs" alt="reactjs" width="20" height="20"/> - **ReactJS** - библиотека JavaScript [https://react.dev/](https://react.dev/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="redux" alt="redux" width="20" height="20"/> - **Redux** - стейт-менеджер для ReactJS [https://redux.js.org/](https://redux.js.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="typescript" alt="typescript" width="20" height="20"/> - **TypeScript** - система статической типизации для JS [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## Реализованный функционал:

- Проект привязан к получаемой с бэкенда информации о скидках
- Отображение первичных предложений с привязкой к таймеру
- Отображение спецпредложений во всплывающем окне

## Что можно улучшить:

- Привести верстку в полное соответствие с макетом
- Рассмотреть возможность организации работы стейт менеджера на сервере
