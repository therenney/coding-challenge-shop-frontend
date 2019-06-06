import axios from 'axios';

const initialState = {
    products: [],
};

const state = JSON.parse(JSON.stringify(initialState));

const getters = {
    products: state => state.products,
    productById: state => {
        // declare a method to pass params into this getter
        return id => {
            return state.products.find(product => product.id === id);
        };
    },
};

const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
};

const actions = {
    setProducts({ commit }, data) {
        commit('SET_PRODUCT', data);
    },

    /**
     * Fetch all products from API
     */
    fetchProducts({ commit }) {
        return axios.get(`/products`).then(
            response => {
                // eslint-disable-next-line
                console.log('GET /products endpoint success', response.data);
                commit('SET_PRODUCTS', response.data);
            },
            () => {
                // eslint-disable-next-line
                console.log('GET /products endpoint error', error);
            }
        );
    },

    /**
     * Fetch a single products from API
     */
    fetchProduct({ commit }, data) {
        return axios.get(`/products/${data.id}`).then(
            response => {
                // eslint-disable-next-line
                console.info('Example call to get a single product:');
                console.log('GET /product/:id endpoint success', response.data, commit);
                // commit('SET_ACTIVE_PRODUCT', response.data);
            },
            () => {
                // eslint-disable-next-line
                console.log('GET /products/:id endpoint error', error);
            }
        );
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
