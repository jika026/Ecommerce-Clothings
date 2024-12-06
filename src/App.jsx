import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "./pages/home";
import AppLayout from "./components/AppLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import { AuthRoutes } from "./pages/auth";
import NewPassword from "./pages/auth/NewPassword";
import Verification from "./pages/auth/Verification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { UserEmailProvider } from "./components/AuthContextAPI";
import Products from "./pages/products";
import Cart from "./pages/cart";
import SingleProductDetails from "./pages/products/components/SIngleProductDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <UserEmailProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route
              path={ROUTES.SINGLE_PRODUCTS}
              element={<SingleProductDetails />}
            />
            <Route path={ROUTES.SHOPPING_CART} element={<Cart />} />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.CHANGE_PASSWORD} element={<NewPassword />} />
            <Route path={ROUTES.VERIFY_USER} element={<Verification />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserEmailProvider>
  );
}

export default App;
