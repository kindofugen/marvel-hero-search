# Marvel Hero Search App

<img src="./client/src/components/Header/img/marvelLogo.png">

## Для запуска проекта:
---
В корневую директорию проекта неоходимо добавить файл `.env` с переменными: 
`REACT_APP_API_KEY_PUBLIC` и `REACT_APP_API_KEY_PRIVATE`
в них должны храниться ключи, которые можно получить [тут](https://developer.marvel.com/account)

---
### запуск сервера:
в директории `server` доступны команды:</br>

`npm i` - для установки зависимостей </br>
`npm start` - для запуска сервера

сервер запустится на [http://localhost:8080](http://localhost:8080)

---
### запуск приложения:

в директории `client` доступны команды:</br>

`npm i` - для установки зависимостей </br>
`npm start` - для запуска приложения

приложение запустится на [http://localhost:3000](http://localhost:3000)

---

## В проекте реализованы требования:

## 1 уровень (необходимый минимум):

## React:

* Пишем функциональные компоненты c хуками в приоритете над классовыми
* Есть четкое разделение на умные и глупые компоненты. [пример умного](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/containers/HomePage/HomePage.jsx), [пример глупого](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiButton/UiButton.jsx) 
* [Есть рендеринг списков](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/CharactersPage/CharactersList/CharactersList.jsx) 
* [Реализована хотя бы одна форма](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiForm/UiForm.jsx) 
* [Есть применение Контекст API](https://github.com/kindofugen/marvel-hero-search/tree/master/client/src/context)
* Есть применение предохранителя [withErrorBoundary](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/App.jsx), [errorApi](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/containers/CharactersPage/CharactersPage.jsx)
* [Есть хотя бы один кастомный хук](https://github.com/kindofugen/marvel-hero-search/tree/master/client/src/hooks)
* Хотя бы несколько компонентов используют PropTypes [CharactersList](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/CharactersPage/CharactersList/CharactersList.jsx), [CharacterImage](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/CharacterInfoPage/CharacterImage/CharacterImage.jsx), [UiButton](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiButton/UiButton.jsx)
* Поиск не должен триггерить много запросов к серверу [хук useDebounce](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/containers/HomePage/HomePage.jsx)
* [Есть применение lazy + Suspense](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/containers/CharacterInfoPage/CharacterInfoPage.jsx)

## Redux:

* [Используем Modern Redux with Redux Toolkit](https://github.com/kindofugen/marvel-hero-search/tree/master/client/src/store)
* [Используем слайсы](https://github.com/kindofugen/marvel-hero-search/tree/master/client/src/store/slice)
* [Есть хотя бы одна кастомная мидлвара](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/store/middleware/logger.js) 
* [Используется RTK Query](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/store/api/searchApi.js) 
* [Используется Transforming Responses](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/store/api/searchApi.js)

## 2 уровень (необязательный):

* Storybook. Подключен storybook и созданы несколько сторисов [UiButton](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiButton/UiButton.stories.js), [UiInput](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiInput/UiInput.stories.js), [UiLoading](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/UI/UiLoading/UiLoading.stories.js)
* Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом. [server](https://github.com/kindofugen/marvel-hero-search/blob/master/server/routes/telegram/telegram.routes.js), [TelegramContext](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/context/TelegramProvider.jsx), [Применение](https://github.com/kindofugen/marvel-hero-search/blob/master/client/src/components/CharacterInfoPage/CharacterInfo/CharacterInfo.jsx)