function transformShippingText(text) {
  return text.split(" ").slice(-1).join("");
}

export const sortPricehighToLow = (products) =>
  products.slice().sort((a, b) => b.price - a.price);

export const sortPriceLowToHigh = (products) =>
  products.slice().sort((a, b) => a.price - b.price);

export const sortRatingHighToLow = (products) =>
  products.slice().sort((a, b) => b.rating - a.rating);

export const sortRatingLowToHigh = (products) =>
  products.slice().sort((a, b) => a.rating - b.rating);

export const sortStockHighToLow = (products) =>
  products.slice().sort((a, b) => b.stock - a.stock);

export const sortStockLowToHigh = (products) =>
  products.slice().sort((a, b) => a.stock - b.stock);

export const sortMonthShipping = (products) => {
  return products.filter((product) => {
    const time = transformShippingText(product.shippingInformation);
    return time === "month" || time === "months";
  });
};

export const sortWeeksShipping = (products) => {
  return products.filter((product) => {
    const time = transformShippingText(product.shippingInformation);
    return time === "weeks";
  });
};
export const sortLessThanWeekShipping = (products) => {
  return products.filter((product) => {
    const time = transformShippingText(product.shippingInformation);
    return time !== "month" && time !== "months" && time !== "weeks";
  });
};
