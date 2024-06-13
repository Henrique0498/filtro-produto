export function convertCurrency(value: number | string) {
  return value.toLocaleString("br", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "symbol",
  });
}
