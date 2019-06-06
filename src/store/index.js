import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        PRODUCTS: products,
    },
    // eslint-disable-next-line
    strict: process.env.NODE_ENV !== 'production',
});

export default store;
