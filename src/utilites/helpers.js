export function handleAddToCart(e, product, cart, dispatch) {
  e.stopPropagation();
  const cartItem = {
    id: product.id,
    title: product.title,
    brand: product.brand,
    price: +product.price,
    image: product?.images[0],
    quantity: 1,
    total: +product.price,
  };
  const checkproductExistance = cart.find((item) => item.id === product.id);
  if (!checkproductExistance) {
    dispatch({ type: "cart/add", payload: cartItem });
    dispatch({ type: "snackbar/open" });
    dispatch({ type: "snackbar/severity", payload: "success" });
    dispatch({
      type: "snackbar/message",
      payload: "Product has been added successfully!",
    });
  } else {
    dispatch({ type: "snackbar/open" });
    dispatch({ type: "snackbar/severity", payload: "error" });
    dispatch({
      type: "snackbar/message",
      payload: "This product is already in the cart.",
    });
    return;
  }
}
