const childrenRouter = [
    {
        path: '',
        name: 'Defaults',
        component: () => import('../views/Defaults.vue')
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: () => import('../views/Resume.vue')
    },
    {
        path: '/Prefile',
        name: 'Prefile',
        component: () => import('../views/Prefile.vue')
    },
    {
        path: '/About',
        name: 'About',
        component: () => import('../views/About.vue')
    }
];

export default childrenRouter;