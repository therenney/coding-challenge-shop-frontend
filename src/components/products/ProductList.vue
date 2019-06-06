<template>
    <div v-if="products && products.length === 0">
        <span class="uk-label uk-label-warning">No Data</span>
    </div>
    <div v-else>
        <table class="uk-table uk-table-small uk-table-responsive uk-table-striped">
            <thead>
                <tr>
                    <th class="uk-width-small">Name <span @click="sorter = 'name'"></span></th>
                    <th>Details</th>
                    <th>Price <span @click="sorter = 'price'"></span></th>
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
                                    <dt>Packaging</dt>
                                    <dd>
                                        {{ packaging }}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </td>
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
            search: '',
        };
    },

    computed: {
        sortedProducts() {
            return this.products;
            // const list = Object.assign({}, this.products);
            // return list.sort((a, b) => {
            //     a[this.sortBy].toLowerCase() < b[this.sortBy].toLowerCase();
            // });
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

<style></style>
