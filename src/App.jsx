import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./components/footer/Footer";
import AllProduct from "./page/AllProduct/AllProduct";
import "./sass/index.scss";
import Blog from "./components/Blog/Blog.jsx";
import Like from "./page/Like/Like.jsx";
import Catolg from "./page/catalog/Catolg.jsx";
import About from "./page/About/About.jsx";
import Single from "./page/Single/Single.jsx";
import Contact from "./page/contact/Contact.jsx";
import Dostavka from "./page/Dostavka/dastavka.jsx";
import Vozrat from "./page/vozrat/Vozrat.jsx";
import Garanti from "./page/Garanti/Garanti.jsx";
import Cart from "./page/Cart/Cart.jsx";
import Login from "./page/Login/Login.jsx";
import Auth from "./page/Auth/Auth.jsx";
import Admin from "./page/Admin/Admin.jsx";
import Create from "./page/Admin/create/Create.jsx";
import Mange from "./page/Admin/mange/Mange.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        <Route path="/Блог" element={<Blog count={6} />} />
        <Route path="/like" element={<Like />} />
        <Route path="/katalok" element={<Catolg />} />
        <Route path="/Окомпании" element={<About />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/Контакты" element={<Contact />} />
        <Route path="/Доставкаиоплата" element={<Dostavka />} />
        <Route path="/Возврат" element={<Vozrat />} />
        <Route path="/Гарантии" element={<Garanti />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="create" element={<Create />} />
            <Route path="mange" element={<Mange />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
