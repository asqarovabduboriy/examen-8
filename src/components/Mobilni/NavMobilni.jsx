import React from "react";
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoStatsChart } from "react-icons/io5";
import Modal from "../modal/Modal";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavMobilni = ({ items, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const wishlist = useSelector((state) => state.wishslice);
  const cart = useSelector((state) => state.cart.value);

  const handle_active = () => {
    setIsMenuOpen((p) => !p) ? setIsOpen(p=>!p) : setIsOpen(true);
  }

  return (
    <>
      <div className="top_nav">
        <div className="container">
          <div className="flex_monilni">
            <button onClick={() => setIsOpen(false)} className="close_mobilni">
              <IoClose />
            </button>
            <div className="icons_wrapper">
              <div className="one_icons">
              <Link to="/like" style={{ textDecoration: "none" }}>
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
          <ul className="nav_list_mobilni">
            {items}
            <button className="navbar__btn_katolg">
              <RxHamburgerMenu /> Каталог
            </button>
          </ul>
          <div className="navbar__call mobilni">
            <p>8 (800) 890-46-56</p>
            <button onClick={handle_active}>
              Заказать звонок
            </button>
          </div>
        </div>

        {isMenuOpen ? (
        <Modal>
          <div className="modal_form" onClick={() => setIsMenuOpen((p) => !p)}>
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
      ) : (
        <></>
      )}
      </div>
    </>
  );
};

export default NavMobilni;
