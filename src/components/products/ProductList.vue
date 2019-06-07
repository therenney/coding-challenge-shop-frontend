<template>
    <div v-if="products && products.length === 0">
        <span class="uk-label uk-label-warning">No Data</span>
    </div>
    <div v-else>
        <table class="uk-table uk-table-small uk-table-responsive uk-table-striped">
            <thead>
                <tr>
                    <th class="sortable uk-width-small" @click="resortProducts('name')">
                        Name
                        <span v-show="sortBy == 'name' && sortDirection == 'ASC'" uk-icon="icon: chevron-down"></span>
                        <span v-show="sortBy == 'name' && sortDirection == 'DESC'" uk-icon="icon: chevron-up"></span>
                    </th>
                    <th>Details</th>
                    <th class="sortable" @click="resortProducts('packaging')">
                        Packaging
                        <span
                            v-show="sortBy == 'packaging' && sortDirection == 'ASC'"
                            uk-icon="icon: chevron-down"
                        ></span>
                        <span
                            v-show="sortBy == 'packaging' && sortDirection == 'DESC'"
                            uk-icon="icon: chevron-up"
                        ></span>
                    </th>
                    <th class="sortable" @click="resortProducts('price')">
                        Price
                        <span v-show="sortBy == 'price' && sortDirection == 'ASC'" uk-icon="icon: chevron-down"></span>
                        <span v-show="sortBy == 'price' && sortDirection == 'DESC'" uk-icon="icon: chevron-up"></span>
                    </th>
                    <th class="uk-width-small"></th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="{ id, name, description, manufacturer, listingPhotoUri, packaging, price } in sortedProducts"
                    :key="`product-${id}`"
                >
                    <td class="uk-text-bold">{{ name }}</td>
                    <td>
                        <div class="uk-grid-small uk-margin-bottom" uk-grid>
                            <div class="uk-width-1-1 uk-width-1-3@s">
                                <img
                                    class="product-image"
                                    :data-src="listingPhotoUri"
                                    width="100%"
                                    height="200"
                                    alt=""
                                    uk-img
                                />
                            </div>
                            <div class="uk-width-1-1 uk-width-2-3@s">
                                <dl class="uk-description-list">
                                    <dt>ID</dt>
                                    <dd>{{ id }}</dd>
                                    <dt>Manufacturer</dt>
                                    <dd>
                                        {{ manufacturer }}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </td>
                    <td>{{ packaging }}</td>
                    <td class="uk-text-bold">{{ price | currency }}</td>
                    <td>
                        <router-link class="uk-button uk-button-primary" :to="`products/${id}`">More</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    /**
     * Props definition
     * - products is required and needs to be an array
     */
    props: {
        products: {
            required: true,
            type: Array,
        },
    },

    data() {
        return {
            sortBy: 'name',
            sortDirection: 'ASC',
            sortedProducts: [],
        };
    },

    watch: {
        products: function(newProducts) {
            this.sortedProducts = newProducts.slice(0);
        },
    },

    methods: {
        /**
         * Sort by string.
         *
         * @param {string} type
         */
        sortProductsByString(type) {
            this.sortedProducts.sort(
                function(a, b) {
                    if (this.sortDirection == 'ASC') {
                        return a[type] == b[type] ? 0 : a[type] > b[type] ? 1 : -1;
                    }

                    if (this.sortDirection == 'DESC') {
                        return a[type] == b[type] ? 0 : a[type] < b[type] ? 1 : -1;
                    }
                }.bind(this)
            );
        },

        /**
         * Sort by number.
         *
         * @param {string} type
         */
        sortProductsByNumber(type) {
            this.sortedProducts.sort(
                function(a, b) {
                    if (this.sortDirection == 'ASC') {
                        return parseInt(a[type]) < parseInt(b[type]) ? 1 : -1;
                    }

                    if (this.sortDirection == 'DESC') {
                        return parseInt(a[type]) > parseInt(b[type]) ? 1 : -1;
                    }
                }.bind(this)
            );
        },

        /**
         * Define what we sort for.
         *
         * @param {string} order
         */
        resortProducts(order) {
            // Checks for change, otherwise swap order.
            if (order === this.sortBy) {
                if (this.sortDirection == 'ASC') {
                    this.sortDirection = 'DESC';
                } else {
                    this.sortDirection = 'ASC';
                }
            }

            // If order is different set sortBy to whats selected and default direction to 'ASC'
            if (order !== this.sortBy) {
                this.sortDirection = 'ASC';
                this.sortBy = order;
            }

            // Switch sortBy and run the method to sort that column
            switch (this.sortBy) {
                case 'price':
                    this.sortProductsByNumber(this.sortBy);
                    break;
                default:
                    this.sortProductsByString(this.sortBy);
            }
        },
    },

    /**
     * Filters - Add currency filter for Table
     * Should be made globally available but for this SPA i keep it in the component
     */
    filters: {
        currency: function(value, digits) {
            if (typeof value !== 'number') {
                return value;
            }

            const formatter = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: digits,
            });

            return formatter.format(value);
        },
    },
};
</script>

<style lang="less" scoped>
th.sortable {
    cursor: pointer;
}
</style>
