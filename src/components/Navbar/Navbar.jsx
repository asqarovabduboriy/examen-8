import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useGetProductsQuery } from "../../context/products";
import Search from "../search/Search";
import NavMobilni from "../Mobilni/NavMobilni";
import { IoStatsChart } from "react-icons/io5";
import Modal from "../../components/modal/Modal";
import { MdArrowRightAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { data, isFetching, error } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);

  const wishlist = useSelector((state) => state.wishslice);
  const cart = useSelector((state) => state.cart.value);

  const { pathname } = useLocation();

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
    }
  }, [search, data]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.includes("login") || pathname.includes("admin")) {
    return null;
  }

  const item = [
    "Окомпании",
    "Доставкаиоплата",
    "Возврат",
    "Контакты",
    "Гарантии",
    "Блог",
  ];

  const items = item.map((item, index) => (
    <Link key={index} to={`/${item}`}>
      <li>{item}</li>
    </Link>
  ));

  return (
    <>
      <header>
        <div className="container">
          <nav className={active ? "navbar active" : "navbar"}>
            <ul className="navbar__list">{items}</ul>
            <div className="navbar__call">
              <p>8 (800) 890-46-56</p>
              <button onClick={() => setModal((p) => !p)}>
                Заказать звонок
              </button>
            </div>
          </nav>
          <div className="flex_div">
            <div className="logo_navbar">
              <div className="div_mobilni">
                <div className="navbar_mobilni">
                  <button
                    onClick={() => setIsOpen((p) => !p)}
                    className="navbar_mobilni_btn"
                  >
                    {" "}
                    <RxHamburgerMenu />{" "}
                  </button>
                  {isOpen && <NavMobilni setIsOpen={setIsOpen} items={items} />}
                </div>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="icons_wrapper one">
                <div className="one_icons">
                  <Link to="/like" style={{ textDecoration: "none" }}>
                    <div className="length_wishlist">
                      <span>{wishlist.value.length}</span>
                    </div>
                    <CiHeart />
                  </Link>
                  <p>Избранное</p>
                </div>
                <div className="one_icons display_none">
                  <IoStatsChart />
                  <p>Сравнение</p>
                </div>

                <div className="one_icons">
                  <Link to={"/cart"} style={{ textDecoration: "none" }}>
                    <div className="length_wishlist">
                      <span>{cart.length}</span>
                    </div>
                    <FaShoppingCart style={{ color: "black" }} />
                  </Link>
                  <p>Корзина</p>
                </div>
              </div>
            </div>
            <div className="form_search">
              <button>
                <Link to={"/katalok"}>
                  <RxHamburgerMenu /> Каталог
                </Link>
              </button>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Поиск по товарам "
              />
              <FaSearch className="search_iocns" />
            </div>
            <div className="icons_wrapper two">
              <div className="one_icons">
                <Link
                  to="/like"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="length_wishlist">
                    <span>{wishlist.value.length}</span>
                  </div>
                  <CiHeart />
                </Link>
                <p>Избранное</p>
              </div>
              <div className="one_icons">
                <IoStatsChart />
                <p>Сравнение</p>
              </div>

              <div className="one_icons">
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="length_wishlist">
                    <span>{cart.length}</span>
                  </div>
                  <FaShoppingCart style={{ color: "black" }} />
                </Link>
                <p>Корзина</p>
              </div>
            </div>
          </div>
          {search.trim() && <Search setSearch={setSearch} data={filteredData} />}
        </div>
      </header>
      {modal && (
        <Modal>
          <div className="modal_form" onClick={() => setModal((p) => !p)}>
            {" "}
          </div>
          <div className="modal_form_content">
            <h3>Заполните, и мы перезвоним</h3>
            <div className="modal_form_content_form">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер телефона" />
              <button>
                Весь каталог <MdArrowRightAlt />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
