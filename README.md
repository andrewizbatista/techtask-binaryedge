# Tech Task: [BinaryEdge](https://www.binaryedge.io/)

Created by me ([@andrewizbatista](https://github.com/andrewizbatista)) and built with my [nextjs-boilerplate](https://github.com/andrewizbatista/nextjs-boilerplate).

This app consists of an authenticated portal that lets you check for data leaks on a specified domain or email address.

#### Technologies

- [TypeScript](https://www.typescriptlang.org/) - JavaScript Superset
- [Next.js](https://nextjs.org/) - Web Framework
- [Material UI](https://material-ui.com/) - UI Framework

#### Considerations

- The whole project was built on top of my own [nextjs-boilerplate](https://github.com/andrewizbatista/nextjs-boilerplate).
- The tables that show the data leaks are virtualized (using [react-window](https://github.com/bvaughn/react-window)) to accommodate big amounts of data without affecting the overall performance.
- The app stores your token locally (nothing fancy, on `localStorage`) so that your session is maintained (it will never expire).
- If you try to access a url that does not exist, the app will redirect you to the `/login` or `/data-leaks` (depending on if you have or not a token stored).
- The project does not use `Redux`, the fetching of data and management of state is done by a React hook `useFetch` (created by me), which uses `useReducer` internally.
- The color palette and typography were chosen based on the BinaryEdge brand.
- The project does not include any testing framework.

## Getting Started

### Prerequisites

- nodejs `v10.16+`
- npm `v6.12+`

### Installing

1. Install all the project dependencies:

```
npm install
```

2. Run the project on your machine:

```
npm run dev
```

### Folder Structure

- `.next` - [Next.js](https://nextjs.org/) auto-generated configs.
- `.plop` - [Plop](https://plopjs.com/) generators.
- `.storybook` - [Storybook](https://storybook.js.org/) configs.
- `components` - all the app components.
- `out` - production ready exported files.
- `pages` - all the app routes.
- `public` - static files that are served to the client.
- `src` - code that makes the app running (scripts, configs, helpers, etc...).
- `types` - [TypeScript](https://www.typescriptlang.org/) type declarations.

## Tooling

I use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain the code quality, [Plop](https://plopjs.com/) to quickly scaffold some of the project elements (components, pages, etc...) and [Storybook](https://storybook.js.org/) to test and quickly iterate the development of React Components.

### Plop Generators

Create a new **Component**:

```
npm run generate component
```

Create a new **Page**:

```
npm run generate page
```

### Storybook

```
npm run storybook
```

## Deployment

To create a production ready build, run:

```
npm run export
```

Then deploy the generated files from the `/out` folder.

## Authors

- **André Batista** - [andrewizbatista](https://github.com/andrewizbatista)
