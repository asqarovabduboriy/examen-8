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
        <Route path="/Доставкаиоплата" element={<Dostavka/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
