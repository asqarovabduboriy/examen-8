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

function App() {  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        <Route path="/Блог" element={<Blog count={6} />} />
        <Route path="/like" element={<Like/>} />
        <Route path="/katalok" element={<Catolg/>}/>
        <Route path="/Окомпании"   element={<About/>} />   
        </Routes>
      <Footer />
    </>
  );
}

export default App;
