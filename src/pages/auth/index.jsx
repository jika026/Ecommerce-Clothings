import { Outlet, useLocation } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import { ROUTES } from "../../routes";

// TODO: Localize the entire Auth Routes

export const AuthRoutes = () => {
  // Get the current route location
  // Define which routes should hide the left layout
  // Check if the current route is in the list of routes that hide the left layout

  const location = useLocation();
  const hideLeftLayoutRoutes = [
    ROUTES.CHANGE_PASSWORD,
    ROUTES.FORGOT_PASSWORD,
    ROUTES.VERIFY_USER,
  ];
  const hideLeftLayout = hideLeftLayoutRoutes.includes(location.pathname);

  const SignUp = location.pathname.includes(ROUTES.SIGN_UP);

  return (
    <AuthLayout hideLeftLayout={hideLeftLayout} SignUp={SignUp}>
      <Outlet />
    </AuthLayout>
  );
};
