import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import store from "./store/index.js";
import App from './App.vue';


import HomePage from './pages/Home.vue';
import NewPage from './pages/New.vue';
import HotPage from './pages/Hot.vue';
import RisingPage from "./pages/Rising.vue";
import TopPage from './pages/Top.vue';

import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/hot",
      component: HotPage
    },
    {
      path: "/new",
      component: NewPage
    },
    {
      path: "/top",
      component: TopPage
    },
    {
      path: "/rising",
      component: RisingPage
    }
  ]
});

const app = createApp(App).use(Quasar, quasarUserOptions);
app.use(router);
app.use(store);

app.mount('#app');
