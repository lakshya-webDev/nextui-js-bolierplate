export function formatCurrency(value, currency = 'USD', locale = 'en-US') {
  if (isNaN(value)) {
    return '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}
