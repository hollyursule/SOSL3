import { createRouter, createWebHistory } from 'vue-router'
import Home from "../Views/home.vue"
import AboutView from "../Views/about.vue"
import ServicesView from "../Views/services.vue"
import ContactView from "../Views/contact.vue"

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/services",
        name: "services",
        component: ServicesView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
