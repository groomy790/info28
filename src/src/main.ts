import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Home from './pages/home.vue'
import Suhang from "./pages/suhang.vue"
import Internal from './pages/internal.vue'
import Emergency from './pages/emergency.vue'
import Contact from './pages/contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/suhang', component: Suhang },
    { path: '/internal', component: Internal },
    { path: '/emergency', component: Emergency },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount("#app")
