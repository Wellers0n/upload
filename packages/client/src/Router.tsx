import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PrivateRouter from "./routes/PrivateRouter";

const Home = React.lazy(() => import("./routes/Home"));
const Transactions = React.lazy(() => import("./routes/Transactions"));
const Login = React.lazy(() => import("./routes/Login"));
const Register = React.lazy(() => import("./routes/Register"));
const PageNotFound = React.lazy(() => import("./routes/404"));

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        } />
        <Route path="/transactions" element={
          <PrivateRouter>
            <Transactions />
          </PrivateRouter>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;