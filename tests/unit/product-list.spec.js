import { shallowMount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises'
import VueRouter from 'vue-router'
import ProductList from '@components/products/ProductList.vue';

const productData = [{
            "id": "ABC1234567800",
            "gtin": "0544900006170400",
            "manufacturer": "Beverages Ltd.",
            "name": "Beverage 23, 6x 0.5 L",
            "description": "Lorem ipsum usu amet dicat nullam ea. Nec detracto lucilius democritum in, ne usu delenit offendit deterruisset. Recusabo iracundia molestiae ea pro, suas dicta nemore an cum, erat dolorum nonummy mel ea. Iisque labores liberavisse in mei, dico laoreet elaboraret nam et, iudico verterem platonem est an. Te usu paulo vidisse epicuri, facilis mentitum liberavisse vel ut, movet iriure invidunt ut quo. Ad melius mnesarchum scribentur eum, mel at mundi impetus utroque.",
            "packaging": "CA",
            "baseProductPackaging": "BO",
            "baseProductUnit": "LT",
            "baseProductAmount": 0.5,
            "baseProductQuantity": 6,
            "price": 459,
            "logoUri": "https://dummyimage.com/200x200/eeeeee/2fd6ac.png&text=Beverages+Ltd.",
            "listingPhotoUri": "https://dummyimage.com/300x200/eeeeee/2fd6ac.png&text=Beverage+23,+6x0.5",
            "detailsPhotoUri": "https://dummyimage.com/600x400/eeeeee/2fd6ac.png&text=Beverage+23,+6x0.5"
        }, {
            "id": "ABC1234541120",
            "gtin": "0467883300018852",
            "manufacturer": "Drinks Corp.",
            "name": "Orange Soda, 6 x 1.5 L",
            "description": "Lorem ipsum usu amet dicat nullam ea. Nec detracto lucilius democritum in, ne usu delenit offendit deterruisset. Recusabo iracundia molestiae ea pro, suas dicta nemore an cum, erat dolorum nonummy mel ea. Iisque labores liberavisse in mei, dico laoreet elaboraret nam et, iudico verterem platonem est an. Te usu paulo vidisse epicuri, facilis mentitum liberavisse vel ut, movet iriure invidunt ut quo. Ad melius mnesarchum scribentur eum, mel at mundi impetus utroque.",
            "packaging": "BX",
            "baseProductPackaging": "BO",
            "baseProductUnit": "LT",
            "baseProductAmount": 1.5,
            "baseProductQuantity": 6,
            "price": 479,
            "logoUri": "https://dummyimage.com/200x200/eeeeee/2fd6ac.png&text=Drinks+Corp.",
            "listingPhotoUri": "https://dummyimage.com/300x200/eeeeee/2fd6ac.png&text=Orange+Soda,+6+x+1.5L",
            "detailsPhotoUri": "https://dummyimage.com/600x400/eeeeee/2fd6ac.png&text=Orange+Soda,+6+x+1.5L"
        },
        {
            "id": "ABC1234541122",
            "gtin": "0467883300018854",
            "manufacturer": "Drinks Corp.",
            "name": "Mango Soda, 6 x 1.5 L",
            "description": "Ad mel causae virtute prodesset, aperiam percipitur in mei. An homero meliore dolorem usu, choro tempor democritum te mea, ei mucius aliquip accusam pri. In malorum dolorem recteque ius, ne vix graeco similique moderatius. Esse probo dicat quo eu, mei forensibus constituto philosophia ne, ea eum quot harum paulo. Ius elit aeque te, saperet luptatum elaboraret an quo, sonet audiam consectetuer at pro.",
            "packaging": "BX",
            "baseProductPackaging": "BO",
            "baseProductUnit": "LT",
            "baseProductAmount": 1.5,
            "baseProductQuantity": 12,
            "price": 499,
            "logoUri": "https://dummyimage.com/200x200/eeeeee/2fd6ac.png&text=Drinks+Corp.",
            "listingPhotoUri": "https://dummyimage.com/300x200/eeeeee/2fd6ac.png&text=Mango+Soda,+12+x+1.5L",
            "detailsPhotoUri": "https://dummyimage.com/600x400/eeeeee/2fd6ac.png&text=Mango+Soda,+12+x+1.5L"
        }];

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const routerPushSpy = jest.spyOn(router, 'push');

describe('ProductList', () => {

    let wrapper;


    describe('Given there is no product data', () => {

        beforeEach(() => {
            wrapper = shallowMount(ProductList, {
                propsData: {
                    products: [],
                }
            })
        });

        it('will mount without errors', () => {
            expect(wrapper.isVueInstance()).toBeTruthy();
        });

        describe('When the ProductList component is rendered', () => {
            it('should render a no data message', () => {
                expect(wrapper.find('span.uk-label').exists()).toBe(true);
            });
        });
    });

    describe('Given there is product data', () => {

        beforeEach(() => {
            wrapper = shallowMount(ProductList, {
                localVue,
                router,
                propsData: {
                    products:productData,
                },
                // mocks: {
                //     $router,
                // },
                // stubs: {
                //     'router-link': true,
                // },
            })
        });

        it('will mount without errors', () => {
            expect(wrapper.isVueInstance()).toBeTruthy();
        });

        describe('When the ProductList component is rendered', () => {
            it('should render a list with all products', () => {
                // Expect that the table is rendered
                expect(wrapper.find('table').exists()).toBe(true);

                // Expect that the table has 2 rows
                expect(wrapper.findAll('table tbody tr').length).toBe(productData.length);

                // Expect the html to match the last testrun,
                // this is a little verbose though
                expect(wrapper.html()).toMatchSnapshot();
            });

            it('should render prices with euro curreny', () => {
                // Expect that the table has 2 rows
                expect(wrapper.find('tbody > tr:first-child > td:nth-last-child(2)').text()).toBe("€459.00");
            });
        });

        describe('When the table header for name is sortable', () => {
            it('should order the ProductList by name', () => {

                wrapper.find('table th.sortable:first-child').trigger('click');

                // Expect that the table is sorted by product names and "Orange Soda, 6 x 1.5 L" is shown first
                expect(wrapper.find('tbody > tr:first-child > td').text()).toBe("Orange Soda, 6 x 1.5 L");
                expect(wrapper.find('tbody > tr:nth-child(2) > td').text()).toBe("Mango Soda, 6 x 1.5 L");
                expect(wrapper.find('tbody > tr:nth-child(3) > td').text()).toBe("Beverage 23, 6x 0.5 L");
            });
        });

        describe('When the table header for price is sortable', () => {
            it('should order the ProductList by price', () => {

                wrapper.find('table th[data-sortable="price"]').trigger('click');

                // Expect that the table is sorted by price and "€499.00" is shown first
                expect(wrapper.find('tbody > tr:first-child > td:nth-last-child(2)').text()).toBe("€499.00");
                expect(wrapper.find('tbody > tr:nth-child(2) > td:nth-last-child(2)').text()).toBe("€479.00");
                expect(wrapper.find('tbody > tr:nth-child(3) > td:nth-last-child(2)').text()).toBe("€459.00");
            });
        });

        describe.skip('When a products more link is clicked', () => {
            it('should navigate to the product detail page', () => {
                wrapper.find('table .uk-button').trigger('click');
                expect(pushSpy).toHaveBeenCalledWith('/products' + productData[0].id);
            });
        });
    });
});
