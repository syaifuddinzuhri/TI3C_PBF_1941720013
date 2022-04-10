import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import MainLayout from "./layouts/MainLayout";
import Transaction from "./pages/Transaction/Transaction";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product";
import Detail from "./pages/Product/Detail";
import ListProduct from "./pages/Product/ListProduct";
import NotFound from "./pages/NotFound";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      {/* <Route path="login" element={<Login />}></Route> */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="product" element={<Product />}>
            <Route index element={<ListProduct />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
