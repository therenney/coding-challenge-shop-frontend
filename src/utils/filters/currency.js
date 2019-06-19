const currencies = {
    'de-DE': 'EUR',
    'en-UK': 'GBP',
    'en-US': 'USD',
};

export default function currency(value, locale = 'de-DE', digits = 2) {
    if (typeof value !== 'number') {
        return value;
    }

    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencies[locale],
        minimumFractionDigits: digits,
    });

    return formatter.format(value);
}
