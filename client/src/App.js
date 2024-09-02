import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import UserHome from "./components/User/Home/UserHome";
import Filter from "./components/User/Filter/Filter";
import SellerHome from "./components/Seller/Home/SellerHome";
import AdminHome from "./components/Admin/Home/AdminHome";
import Footer from "./components/Footer/Footer";
import SellerDashboard from "./components/Seller/Home/SellerDashboard";
import SellerStockInfo from "./components/Seller/Home/SellerStockInfo";
import SellerNewProduct from "./components/Seller/Home/SellerNewProduct";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname == "/" ? (
        <Header opacity="0" />
      ) : (
        <Header opacity="1" />
      )}

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home/user" element={<UserHome />} />
        <Route path="/home/seller" element={<SellerHome />}>
          <Route index element={<SellerDashboard />} />
          <Route path="stockInfo" element={<SellerStockInfo />} />
          <Route path="addNewProduct" element={<SellerNewProduct />} />
        </Route>
        <Route path="/home/admin" element={<AdminHome />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
