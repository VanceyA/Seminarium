import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { fieldColorMap, seminarTypeColorMap } from './data/globalData';
import { globalUserData } from './data/globalUserData';

const app = createApp(App);

app.provide('fieldColorMap', fieldColorMap);
app.provide('seminarTypeColorMap', seminarTypeColorMap);
app.provide('globalUserData', globalUserData);


app.use(router);

app.mount('#app');
