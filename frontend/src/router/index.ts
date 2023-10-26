import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        // component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        component: () => import("@/layouts/default/Default.vue"),
        meta: {
            layout: "Default",
        },
        children: [
            {
                path: "",
                name: "Home",
                component: () =>
                    import(/* webpackChunkName: "home" */ "@/views/MyBooks.vue"),
            },
        ],
    },
    {
        path: "/lists",
        component: () => import("@/layouts/default/Default.vue"),
        children: [
            {
                path: "",
                name: "MyLists",
                component: () =>
                    import(/* webpackChunkName: "mylists" */ "@/views/MyLists.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
