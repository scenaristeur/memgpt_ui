import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
