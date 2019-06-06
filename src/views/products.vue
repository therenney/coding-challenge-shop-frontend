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

    /**
     * Get namespaced store for products
     */
    computed: {
        ...mapGetters('PRODUCTS', ['products']),
    },

    /**
     * Created Hook - Invoke API products call through stores fetchProduct action
     * TODO: discuss if it is worth getting the latest store or not,
     * what if we deeplink into a details page, etc!?
     */
    created() {
        // PRODUCTS/fetchProducts
        this.$store.dispatch(`PRODUCTS/fetchProducts`);
    },
};
</script>

<style lang="less" scoped></style>
