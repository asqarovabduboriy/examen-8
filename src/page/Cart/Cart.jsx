import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeFromCart,
  removeAllItemsFromCart,
} from "../../context/cartSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import NoutFound from '../../page/notFound/NoutFound'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  const carts = cart?.map((product) => (
    <div key={product.id} className="product_cart">
      <div className="line_cart"></div>
      <div className="img_cart">
        <Link to={`/product/${product.id}`}>
          <img src={product.imgs} alt="" />
        </Link>
        <div className="wrapper_cart_info">
          <h3>{product.title}</h3>
          <p>{product.price * product.quantity} ₽</p>
        </div>
        <p title={product.des}>{product.des}</p>
        <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
        <div className="count_cart">
          <button
            disabled={product.quantity === 1}
            onClick={() => dispatch(decrementCartQuantity(product))}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            disabled={product.quantity === 5}
            onClick={() => dispatch(incrementCartQuantity(product))}
          >
            +
          </button>
          <button
            className="delete_btn"
            onClick={() => dispatch(removeFromCart(product))}
          >
            {" "}
            <MdOutlineDeleteOutline />{" "}
          </button>
        </div>
      </div>
    </div>
  ));

  const total = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
     {

      cart.length > 0 ? (

        <div className="container">
        <h1 className="cart_title">Корзина</h1>
        <div className="length_wishlist cart_page">
          <span>{cart.length}</span>
        </div>
        <div className="carts_wrapper_elment">
          <div className="tovar_cart">
            <p className="title_one">Фото</p>
            <p>Товары</p>
            <p>Описание</p>
            <p>Артикул</p>
            <p>Количество</p>
          </div>
          <div className="carts_wrapper">{carts}</div>
        </div>

        <div className="oformlena">
          <h2>Оформление</h2>
          <div className="wrapper_input">
            <input name="name" type="text" placeholder="ФИО" />
            <input name="phone" type="text" placeholder="Номер телефона" />
            <input name="email" type="text" placeholder="електронная почта" />
          </div>
          <div className="line_cart"></div>
          <div className="message_input_wrapper">
            <h2>Доставка</h2>
            <input name="adress" type="text" placeholder="Адрес" />
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              placeholder="Комментарии"
            ></textarea>
          </div>
        </div>

        <div className="total_price">
          <h2>Оплата</h2>
          <div className="total_dostavka">
            <p>Товары.............................................</p>
            <p>{total}₽</p>
            <p>Доставка..............................................</p>
            <p>580₽</p>
          </div>
          <h2>{total}₽</h2>

          <div className="btn_wrapper_cart">
            <button onClick={() => dispatch(removeAllItemsFromCart())} >Купить</button>
           <div>
           <input type="checkbox" name="" id="" />
           <p>Я согласен наобработку моих персональных данных</p>
           </div>
          </div>
        </div>
      </div>
      )
      :(
         
        <NoutFound img={"https://www.adasglobal.com/img/empty-cart.png"}/>
        
      )

     }
    </>
  );
};

export default Cart;
