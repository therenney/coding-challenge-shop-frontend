import currency from '@utils/filters/currency';

describe('Currency Filter', () => {

    describe('Given price is 90000.99 and the locale is not set', () => {
        it('should return the correct formatting with price in EUR', () => {
            expect(currency(90000.99)).toBe('€90,000.99');
        });
    });

    describe('Given price is 90000.99 and the locale set to "en-UK"', () => {
        it('should return the correct formatting with price in GBP', () => {
            expect(currency(90000.99, 'en-UK')).toBe('£90,000.99');
        });
    });

    describe('Given price is 90000.99 and the locale set to "en-US"', () => {
        it('should return the correct formatting with price in USD', () => {
            expect(currency(90000.99, 'en-US')).toBe('$90,000.99');
        });
    });
});
