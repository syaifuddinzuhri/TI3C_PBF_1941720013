import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Transaction from "./pages/Transaction";
import Cart from "./pages/Cart";
import Authenticate from "./routes/Authenticate";
import MainLayout from "./pages/Layout";
import Loginlayout from "./pages/Layout/LoginLayout";
import Product from "./pages/Product";
import ListProduct from "./pages/Product/ListProduct";
import Detail from "./pages/Product/Detail";
import Guest from "./routes/Guest";

function App() {
  return (
    <Routes>
      <Route element={<Guest />}>
        <Route path="login" element={<Loginlayout />}></Route>
      </Route>
      <Route element={<MainLayout />}>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="product" element={<Product />}>
            <Route index element={<ListProduct />} />
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="transaction" element={<Transaction />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
