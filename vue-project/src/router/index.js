import { createWebHashHistory, createRouter} from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Create from "@/views/Create.vue"
import Edit from "@/views/Edit.vue"

const routes = [
    { path: '/', component: Home,},
    { path: '/about', component: About},
    { path: '/create', component: Create},
    { path: '/edit/:id', component: Edit},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router;