import axios from 'axios';

const initialState = {
    products: [],
};

const state = JSON.parse(JSON.stringify(initialState));

const getters = {
    products: state => state.products,
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

    fetchProducts({ commit }) {
        return axios.get(`/products`).then(
            response => {
                // eslint-disable-next-line
                console.log('GET /products endpoint success', response);
                commit('SET_PRODUCTS', response.data);
            },
            () => {
                // eslint-disable-next-line
                console.log('GET /me endpoint error', error);
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
