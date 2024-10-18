import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "./pages/home";
import AppLayout from "./components/AppLayout";
import Login from "./pages/auth/Login";
import { AuthLayout } from "./components/AuthLayout";

function App() {
  //take note change the elements
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
        <Route path={ROUTES.ACCOUNT} element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
{
  /* <Route path={ROUTES.SIGN_UP} element={<Signup />} /> 
             <Route path={ROUTES.AUTHENTICATE_USER} element={<Authentication />} /> */
}
