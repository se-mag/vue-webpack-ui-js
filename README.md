


### Quick Start
```bash
cd vueapp-js
yarn init -y

## vue related
yarn add vue@next vue-router@4 vuex@next --save
yarn add -D @vue/compiler-sfc vue-loader@next

## webpack related
yarn add -D webpack webpack-cli webpack-dev-server

## babel related
yarn add -D @babel/core @babel/preset-env babel-loader

## Load Sass/SCSS file and compiles it to CSS
yarn add -D style-loader css-loader postcss-loader sass-loader sass

## plugins
yarn add -D html-webpack-plugin mini-css-extract-plugin
```

## main.js
```bash
import { createApp } from 'vue';
import { store } from './store';
import { router } from './router';

import App from './App.vue';
import './assets/sass/main.scss';

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#root');
```

## package.json
```bash
"scripts": {
    "dev": "webpack serve",
    "build": "webpack --mode production",
    "watch": "webpack --watch --mode development"
},
```


## useful commands
```bash
npm show vue version
2.6.14
npm show vue-template-compiler version
2.6.14
```