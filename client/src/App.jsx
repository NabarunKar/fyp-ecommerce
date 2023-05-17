import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
// import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/"> */}
        <Route path="/" element = {<Home />}>
        </Route>
        <Route path="/products/:category" element = {<ProductList />}>
        </Route>
        <Route path="/product/:id" element = {<Product />}>
        </Route>
        <Route path="/cart" element = {<Cart />}>
        </Route>
        <Route path="/success" element = {<Success />}>
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;