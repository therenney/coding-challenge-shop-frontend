<template>
    <div>
        <div v-if="product && product.name" class="product-detail">
            <h2>
                {{ product.name }}<br /><span class="uk-text-lead">{{ product.price | currency }}</span>
            </h2>
            <div class="uk-grid-small uk-margin-bottom" uk-grid>
                <div class="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m">
                    <img
                        class="product-image"
                        :data-src="product.detailsPhotoUri"
                        width="100%"
                        height="150"
                        alt=""
                        uk-img
                    />
                </div>
                <div class="uk-width-1-1 uk-width-1-2@s uk-width-2-3@m">
                    <p>{{ product.description }}</p>
                </div>
            </div>
            <div class="uk-column-1-3@m">
                <dl class="uk-description-list">
                    <dt>Manufacturer</dt>
                    <dd>
                        {{ product.manufacturer }}
                    </dd>
                    <dt>Packaging</dt>
                    <dd>
                        {{ product.packaging }}
                    </dd>
                    <dt>Base Product Packaging</dt>
                    <dd>
                        {{ product.baseProductPackaging }}
                    </dd>
                    <dt>Base Product Unit</dt>
                    <dd>
                        {{ product.baseProductUnit }}
                    </dd>
                    <dt>Base Product Amount</dt>
                    <dd>
                        {{ product.baseProductAmount }}
                    </dd>
                    <dt>Base Product Quantity</dt>
                    <dd>
                        {{ product.baseProductQuantity }}
                    </dd>
                </dl>
            </div>
        </div>
        <div v-else="" class="product-error">
            <h2>
                Sorry, this product is currently not available!
            </h2>
        </div>
    </div>
</template>

<script>
import currency from '@utils/filters/currency';

export default {
    /**
     * Props definition
     * - products is required and needs to be an array
     */
    props: {
        product: {
            type: Object,
            required: true,
        },
    },

    /**
     * Filters - Add currency filter for Table
     * Should be made globally available but for this SPA i keep it in the component
     */
    filters: {
        currency,
    },
};
</script>
