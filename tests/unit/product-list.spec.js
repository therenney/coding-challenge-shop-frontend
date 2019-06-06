import { shallowMount } from '@vue/test-utils';
import ProductList from '@components/products/ProductList.vue';

const productData = [{
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
},
{
    "id": "ABC1234567801",
    "gtin": "0544900006170401",
    "manufacturer": "Beverages Ltd.",
    "name": "Beverage 23, 12x 0.5 L",
    "description": "Viris imperdiet forensibus ius ei, ea mel modus fabellas complectitur, has decore repudiare ne. Mea graeci vivendo id, legere sententiae reprehendunt an pro. In dico quot scripta nec, pri ut ullum virtute dissentias, mel tritani officiis digniferumque at. Ad pri appareat tincidunt forensibus, cu vis omnium maluisset, nam ea dicat detraxit suavitate. Ius ei sumo aliquam takimata, mei odio graece voluptatum no, ad vel meis graecis corpora.",
    "packaging": "CA",
    "baseProductPackaging": "BO",
    "baseProductUnit": "LT",
    "baseProductAmount": 0.5,
    "baseProductQuantity": 12,
    "price": 829,
    "logoUri": "https://dummyimage.com/200x200/eeeeee/2fd6ac.png&text=Beverages+Ltd.",
    "listingPhotoUri": "https://dummyimage.com/300x200/eeeeee/2fd6ac.png&text=Beverage+23,+12x0.5",
    "detailsPhotoUri": "https://dummyimage.com/600x400/eeeeee/2fd6ac.png&text=Beverage+23,+12x0.5"
}];

describe('ProductList', () => {
    describe('Given there is no product data', () => {
        describe('When the ProductList component is rendered', () => {
            it('should render a no data message', () => {
                // Mount the ProductList
                const wrapper = shallowMount(ProductList, {
                    propsData: {
                        products: [],
                    },
                });
                expect(wrapper.find('span.uk-label').exists()).toBe(true);

            });
        });
    });

    describe('Given there is product data', () => {
        describe('When the ProductList component is rendered', () => {
            it('should render a list with all products', () => {
                // Mount the ProductList
                const wrapper = shallowMount(ProductList, {
                    propsData: {
                        products:productData,
                    },
                     stubs: {
                        'router-link': true,
                    },
                });

                // Expect that the table is rendered
                expect(wrapper.find('table').exists()).toBe(true);

                // Expect the html to match the last testrun,
                // this is a little verbose though
                expect(wrapper.html()).toMatchSnapshot();
            });
        });
    });
});
