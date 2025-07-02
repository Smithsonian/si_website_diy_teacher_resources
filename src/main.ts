import './assets/main.css';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createBootstrap } from 'bootstrap-vue-next';

library.add(faChevronUp, faChevronDown);

export const createApp = ViteSSG(App, ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
  app.use(createBootstrap());
});
