/* eslint-disable prettier/prettier */
export default [
    {
        path: '/',
        name: 'index',
        component: require('@views/index').default,
    },
    // {
    //     path: '/detail',
    //     name: 'detail',
    //     // route level code-splitting
    //     // this generates a separate chunk (detail.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => lazyLoadView(import(/* webpackChunkName: "detail" */ '@views/detail.vue')),
    // },
    {
        path: '/404',
        name: '404',
        // eslint-disable-next-line
        component: require('@views/404').default,
        // Allows props to be passed to the 404 page through route
        // params, such as `resource` to define what wasn't found.
        props: true,
        meta: {
            public: true,
        },
    },
    // Redirect any unmatched routes to the 404 page. This may
    // require some server configuration to work in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    {
        path: '*',
        redirect: '404',
    },
];

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
// function lazyLoadView(AsyncView) {
//     const AsyncHandler = () => ({
//         component: AsyncView,
//         // A component to use while the component is loading.
//         // eslint-disable-next-line
//         loading: require('@views/loading').default,
//         // A fallback component in case the timeout is exceeded
//         // when loading the component.
//         // eslint-disable-next-line
//         error: require('@views/timeout').default,
//         // Delay before showing the loading component.
//         // Default: 200 (milliseconds).
//         delay: 400,
//         // Time before giving up trying to load the component.
//         // Default: Infinity (milliseconds).
//         timeout: 10000,
//     });

//     return Promise.resolve({
//         functional: true,
//         render(h, { data, children }) {
//             // Transparently pass any props or children
//             // to the view component.
//             return h(AsyncHandler, data, children);
//         },
//     });
// }
