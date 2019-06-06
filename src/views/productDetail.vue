<template>
    <div class="uk-section">
        <div class="uk-container">
            <router-link class="uk-link-muted" to="/products">Back</router-link>
            <hr />
            <product-detail :product="product"></product-detail>
            <hr />
            <router-link class="uk-link-muted" to="/products">Back</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductDetail from '@components/products/ProductDetail.vue';

export default {
    components: {
        'product-detail': ProductDetail,
    },

    /**
     * Get namespaced store for products
     */
    computed: {
        ...mapGetters('PRODUCTS', ['productById']),
        product() {
            // grab id from $route
            const id = this.$route.params.id || 0;
            return this.productById(id);
        },
    },

    /**
     * Created Hook - Invoke API products call through stores fetchProduct action
     * TODO: discuss if it is worth getting the latest store or not,
     * what if we deeplink into a details page, etc!?
     */
    created() {
        // PRODUCTS/fetchProducts
        this.$store.dispatch(`PRODUCTS/fetchProducts`);

        // OR get single product via PRODUCTS/fetchProduct Action
        // and set a data property to the API response
        this.$store.dispatch(`PRODUCTS/fetchProduct`, { id: this.$route.params.id });
    },
};
</script>

<style lang="less" scoped></style>
