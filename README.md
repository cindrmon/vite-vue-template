# Vue 3 + Typescript + Vite + ESLint + Prettier + Vuex + Vue Router + Tailwind + Sass + Yarn

This template should help get you started developing with Vue 3, Typescript, Vuex, Vue Router, Tailwind, and Sass in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

> NOTE: This uses yarn as its package manager.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Yarn](https://yarnpkg.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) + [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs) + [SASS](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## How to get this template

To get this template, all you have to do is to type this command:

```
npx degit cindrmon/vite-vue-template <project-name>
```

## How to setup this template

This uses yarn as its package manager, but you can also use npm as well. if you prefer npm, just delete the `yarn.lock` file and do your typical `npm install` and `npm run dev` to run the development server.

If you use yarn instead, you don't need to delete anything, and you just have to type `yarn` and `yarn dev` to start the development server.


