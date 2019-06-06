<template>
    <div class="uk-section">
        <div class="uk-container">
            <h2>Products</h2>
            <product-list :products="products"></product-list>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductList from '@components/products/ProductList.vue';

export default {
    components: {
        'product-list': ProductList,
    },
    data() {
        return {};
    },

    /**
     * Get namespaced store for products
     */
    computed: {
        ...mapGetters('PRODUCTS', ['products']),
    },

    /**
     * Created Hook - Invoke API products call through stores fetchProduct action
     */
    created() {
        // PRODUCTS/fetchProducts
        this.$store.dispatch(`PRODUCTS/fetchProducts`).then(ff => {
            console.log(ff);
        });
    },
};
</script>

<style lang="less" scoped></style>
