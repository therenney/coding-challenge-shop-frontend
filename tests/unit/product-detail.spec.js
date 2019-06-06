import { shallowMount } from '@vue/test-utils';
import ProductDetail from '@components/products/ProductDetail.vue';

const productData = {
    "id": "ABC1234567800",
    "gtin": "0544900006170400",
    "manufacturer": "Beverages Ltd.",
    "name": "Beverage 23, 6x 0.75 L",
    "description": "Lorem ipsum usu amet dicat nullam ea. Nec detracto lucilius democritum in, ne usu delenit offendit deterruisset. Recusabo iracundia molestiae ea pro, suas dicta nemore an cum, erat dolorum nonummy mel ea. Iisque labores liberavisse in mei, dico laoreet elaboraret nam et, iudico verterem platonem est an. Te usu paulo vidisse epicuri, facilis mentitum liberavisse vel ut, movet iriure invidunt ut quo. Ad melius mnesarchum scribentur eum, mel at mundi impetus utroque.",
    "packaging": "CA",
    "baseProductPackaging": "BO",
    "baseProductUnit": "LT",
    "baseProductAmount": 0.75,
    "baseProductQuantity": 6,
    "price": 459,
    "logoUri": "https://dummyimage.com/200x200/eeeeee/2fd6ac.png&text=Beverages+Ltd.",
    "listingPhotoUri": "https://dummyimage.com/300x200/eeeeee/2fd6ac.png&text=Beverage+23,+6x0.75",
    "detailsPhotoUri": "https://dummyimage.com/600x400/eeeeee/2fd6ac.png&text=Beverage+23,+6x0.75"
};

describe('ProductDetail', () => {

    describe('Given there is no product data', () => {

        describe('When the ProductDetail component is rendered', () => {

            it('should render a no data message', () => {

                const wrapper = shallowMount(ProductDetail, {
                    propsData: {
                        product: {},
                    },
                });

                // Expect that a product-error is rendered
                expect(wrapper.find('.product-error').exists()).toBe(true);

                // Expect the message to equal a given string
                expect(wrapper.find('h2').text()).toMatch('Sorry, this product is currently not available!');
            });
        });
    });


    describe('Given there is product data', () => {

        describe('When the ProductDetail component is rendered', () => {

            it('should render a view with the product details', () => {

                const wrapper = shallowMount(ProductDetail, {
                    propsData: {
                        product: productData,
                    },
                    stubs: {
                        'router-link': true,
                    },
                });

                // Expect that the table is rendered
                expect(wrapper.find('.product-detail').exists()).toBe(true);

                // Expect the html to match the last testrun,
                // this is a little verbose though
                expect(wrapper.html()).toMatchSnapshot();
            });
        });
    });
});
