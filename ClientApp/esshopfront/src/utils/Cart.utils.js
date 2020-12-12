export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.productID === cartItemToAdd.productID
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.productID === cartItemToAdd.productID
        ? { ...cartItemToAdd, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.productID === cartItemToRemove.productID
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (item) => item.productID !== cartItemToRemove.productID
    );
  }
  return cartItems.map((item) =>
    item.productID === cartItemToRemove.productID
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
export const instaDeleteFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(
    (item) => item.productID !== cartItemToRemove.productID
  );
};
