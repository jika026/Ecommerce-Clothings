import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  //take note change the elements
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.AUTHENTICATE_USER} element={<Authentication />} />
        </Route>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
