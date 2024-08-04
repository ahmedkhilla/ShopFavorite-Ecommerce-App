import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  snackOpen: false,
  snackMessage: "",
  snackSeverity: "success",
  dialog: false,
  currentId: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return { ...state, cart: [...state.cart, action.payload] };
    case "cart/quantityAdd":
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.total + item.price,
              }
            : { ...item };
        }),
      };
    case "cart/quantitySub":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            const newQuantity = Math.max(item.quantity - 1, 0);
            const newTotal = newQuantity > 0 ? item.total - item.price : 0;
            return {
              ...item,
              quantity: newQuantity,
              total: newTotal,
            };
          }
          return item;
        }),
      };

    case "snackbar/open":
      return {
        ...state,
        snackOpen: true,
      };
    case "snackbar/close":
      return {
        ...state,
        snackOpen: false,
      };
    case "snackbar/severity":
      return {
        ...state,
        snackSeverity: action.payload,
      };
    case "snackbar/message":
      return {
        ...state,
        snackMessage: action.payload,
      };
    case "cart/openDialog":
      return { ...state, dialog: true, currentId: action.payload };
    case "cart/closeDialog":
      return { ...state, dialog: false };
    case "cart/delete":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== state.currentId),
      };
    default:
      throw new Error("Unknown Error");
  }
}

function CartProvider({ children }) {
  const [{ cart, snackOpen, snackSeverity, snackMessage, dialog }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        cart,
        snackOpen,
        snackSeverity,
        snackMessage,
        dispatch,
        dialog,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("useCart must be used within a ProductsCart");
  return context;
}

export { CartProvider, useCart };
