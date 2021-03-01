const routes =
[
    {
        path: '/',
        component: () => import('layouts/FrontLayout.vue'),
        children:
        [
            { name: 'front_landing', path: '', component: () => import('pages/Front/Landing.vue') },
            { name: 'front_register', path: 'register', component: () => import('pages/Front/Register.vue') },
        ]
    },
    {
        path: '/documentation',
        component: () => import('layouts/DocumentationLayout.vue'),
        children:
        [
            { name: 'documentation_landing', path: '', component: () => import('pages/Documentation/Landing.vue') },
            { name: 'documentation_login', path: 'login', component: () => import('pages/Documentation/Login.vue') },
            { name: 'documentation_registration', path: 'registration', component: () => import('pages/Documentation/Registration.vue') },
        ]
    },
    {
        path: '/member',
        component: () => import('layouts/HomeLayout.vue'),
        children:
        [
            { name: 'member_home', path: '', component: () => import('pages/Front/Landing.vue') },
            // { name: 'documentation_login', path: 'login', component: () => import('pages/Documentation/Login.vue') },
            // { name: 'documentation_registration', path: 'registration', component: () => import('pages/Documentation/Registration.vue') },
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
