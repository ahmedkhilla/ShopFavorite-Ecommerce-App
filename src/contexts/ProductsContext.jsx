import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const productsContext = createContext();

const initialState = {
  products: [],
  sortedProducts: [],
  categories: [],
  product: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
  priceFilter: "",
  shippingFilter: "",
  ratingFilter: "",
  stockFilter: "",
  drawer: false,
  slug: "",
  categoryProducts: [],
  searchedProducts: [],
  searchQuery: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "products/dataArrive":
      return {
        ...state,
        products: action.payload.map((item) => {
          return { ...item, favoriteStatus: false };
        }),
        isLoading: false,
      };
    case "error":
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
        isLoading: false,
      };
    case "sortedProducts/update":
      return { ...state, sortedProducts: action.payload };
    case "sortedProducts/price":
      return { ...state, priceFilter: action.payload };
    case "sortedProducts/shipping":
      return { ...state, shippingFilter: action.payload };
    case "sortedProducts/rating":
      return { ...state, ratingFilter: action.payload };
    case "sortedProducts/stock":
      return { ...state, stockFilter: action.payload };
    case "sortedProducts/clear":
      return {
        ...state,
        sortedProducts: [],
        priceFilter: "",
        ratingFilter: "",
        stockFilter: "",
        shippingFilter: "",
      };
    case "product/toggleFavorite":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, favoriteStatus: !item.favoriteStatus }
            : item
        ),
      };
    case "product/dataArrive":
      return { ...state, product: action.payload, isLoading: false };
    case "drawer/toggle":
      return { ...state, drawer: action.payload };
    case "cateories/dataArrive":
      return { ...state, categories: action.payload };
    case "category/slug":
      return { ...state, slug: action.payload };
    case "cateoryProducts/dataArrive":
      return { ...state, categoryProducts: action.payload, isLoading: false };
    case "search/searchQuery":
      return { ...state, searchQuery: action.payload };
    case "searchProducts/dataArrive":
      return { ...state, searchedProducts: action.payload };
    default:
      throw new Error("Unknown Error");
  }
}

function ProductsProvider({ children }) {
  const [
    {
      products,
      isLoading,
      isError,
      errorMessage,
      sortedProducts,
      priceFilter,
      shippingFilter,
      ratingFilter,
      stockFilter,
      product,
      drawer,
      categories,
      slug,
      categoryProducts,
      searchQuery,
      searchedProducts,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getProducts() {
      try {
        dispatch({ type: "loading" });
        const { data } = await axios.get(`${API_URL}/products`);

        if (!data || data.length === 0)
          throw new Error(`There is problem in fetching data`);
        dispatch({ type: "products/dataArrive", payload: data.products });
      } catch (err) {
        dispatch({ type: "error", payload: err.message });
        console.error(err);
      }
    }
    getProducts();
  }, []);

  useEffect(function () {
    async function getCategories() {
      try {
        dispatch({ type: "loading" });
        const { data } = await axios.get(`${API_URL}/products/categories`);
        if (!data || data.length === 0)
          throw new Error(`There is problem in fetching data`);
        dispatch({ type: "cateories/dataArrive", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: err.message });
        console.error(err);
      }
    }
    getCategories();
  }, []);

  useEffect(
    function () {
      async function getSearchedProducts() {
        try {
          const { data } = await axios.get(
            `${API_URL}/products/search?q=${searchQuery}`
          );
          if (!data || data.length === 0)
            throw new Error(`There is problem in fetching data`);
          dispatch({
            type: "searchProducts/dataArrive",
            payload: data.products,
          });
        } catch (err) {
          dispatch({ type: "error", payload: err.message });
          console.error(err);
        }
      }
      getSearchedProducts();
    },
    [searchQuery]
  );

  return (
    <productsContext.Provider
      value={{
        products,
        isLoading,
        isError,
        errorMessage,
        dispatch,
        sortedProducts,
        priceFilter,
        shippingFilter,
        ratingFilter,
        stockFilter,
        product,
        drawer,
        categories,
        slug,
        categoryProducts,
        searchedProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(productsContext);
  if (context === undefined)
    throw new Error("useProducts must be used within a ProductsProvider");
  return context;
}
export { ProductsProvider, useProducts };
