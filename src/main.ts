import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; 
import store from './store/store';  // Importa tu store Vuex
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faLock, faUser)

const app = createApp(App);

app.use(router);
app.use(store);  
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
