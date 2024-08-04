import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import SupportPage from "./pages/SupportPage";
import FavoritePage from "./pages/FavoritePage";
import AddingProductPage from "./pages/AddingProductPage";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import AllProductsPage from "./pages/AllProductsPage";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import MenuDrawer from "./features/menu/MenuDrawer";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <MenuDrawer />
            <Routes>
              <Route index path="/" element={<Homepage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products" element={<AllProductsPage />} />

              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route
                path="favorite"
                element={
                  <ProtectedRoute>
                    <FavoritePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/add-product-form" element={<AddingProductPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
