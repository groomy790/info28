import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Home from './pages/home.vue'
import Contact from './pages/contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount("#app")
