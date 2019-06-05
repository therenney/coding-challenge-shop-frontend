import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

// Adds routes
import routes from './routes';
// import cookies from '@utils/cookies';

Vue.use(VueRouter);
Vue.use(VueMeta, {
    // The component option name that vue-meta looks for meta info on.
    keyName: 'page',
});

const router = new VueRouter({
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',
    // Simulate native-like scroll behavior when navigating to a new
    // route and using back/forward buttons.
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    // UIKit classes for navigation
    linkActiveClass: '',
    linkExactActiveClass: 'uk-active',
});

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
    // Check if auth is required on this route
    // (including nested routes).
    // const authRequired = !routeTo.matched.some(route => route.meta.public);

    // store.SESSION should contain a valid v1 and v2 token, otherwise we are not logged in
    // TODO- we're currently only checking for the v1.
    // const v1token = cookies.getCookie('token');

    // store.SESSION not persistent though, so we need to check for v1 token in the cookie
    // and fetch the account if we have it
    // if (!store.state.SESSION.token && v1token) {
    //     await store.dispatch('SESSION/setToken', v1token);
    //     await store.dispatch('SESSION/fetchAccount');
    // }

    // public pages can proceed
    // if (!authRequired) {
    //     return next();
    // }

    // if auth "passes" we can check for not_activated state
    // if (authRequired && store.state.SESSION.token) {
    //     if (
    //         store.state.SESSION.state === 'not_activated' &&
    //         (routeTo.path !== '/auth/activate' && routeTo.path !== '/auth/log-out')
    //     ) {
    //         return next({ path: '/auth/activate' });
    //     } else {
    //         return next();
    //     }
    // }

    // if the user is redirected to login page, keep track of where they wanted to go to
    // if (authRequired && !store.state.SESSION.isLoggedIn) {
    //     let query;
    //     if (routeTo.query.redirectToPrevious) {
    //         query = { redirectToPrevious: routeTo.query.redirectToPrevious };
    //     } else if (routeTo.fullPath !== '/') {
    //         query = { redirectToPrevious: encodeURI(routeTo.fullPath) };
    //     }
    //     return (window.location.href = `https://${this.$LOOTS_BASE_HOSTNAME}/en/auth/login?return=${
    //         this.$LOOTS_APP_URL
    //     }${query.redirectToPrevious}`);
    //     // return next({
    //     //     path: '/auth/log-in',
    //     //     query: query,
    //     // });
    // }

    // return next({ path: '/auth/log-in' });
    //window.location.href = `https://${this.$LOOTS_BASE_HOSTNAME}/en/auth/login`;
    return next();
});

// After navigation is confirmed, but before resolving...
router.beforeResolve((routeTo, routeFrom, next) => {
    const matched = router.getMatchedComponents(routeTo);
    const prevMatched = router.getMatchedComponents(routeFrom);

    // we only care about non-previously-rendered components,
    // so we compare them until the two matched lists differ
    let diffed = false;
    const activated = matched.filter((c, i) => {
        return diffed || (diffed = prevMatched[i] !== c);
    });

    // console.log(matched, prevMatched, diffed);

    // If this isn't an initial page load...
    if (routeFrom.name) {
        // Start the route progress bar.
        // NProgress.start();
    }

    Promise.all(
        activated.map(c => {
            if (c && c.asyncData) {
                return c.asyncData({ route: routeTo });
            }
        })
    )
        .then(() => {
            // stop loading indicator
            // NProgress.stop();
            next();
        })
        .catch(next);
});

// When each route is finished evaluating...
router.afterEach(() => {
    // Complete the animation of the route progress bar.
    // NProgress.done();
});

export default router;
