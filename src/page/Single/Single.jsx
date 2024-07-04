import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../context/products";
import {
  FaHeart,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Loading from "../../components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { toogleLike } from "../../context/wishlistSlice";
import {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
} from "../../context/cartSlice";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);

  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishslice);
  const cart = useSelector((state) => state.cart);
  const quantity = cart.value?.find((el) => el.id === data?.id)?.quantity || 0;

  const total = data?.price * quantity;
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="single_big_flex">
            <div className="img_wrapper_single">
              <img src={data?.imgs} alt="" />
            </div>
            <div className="single_info">
              <h3>{data?.title}</h3>
              <p>Scott</p>
              <div className="singele_menjment">
                <p>Артикул : 7655-188</p>
                <div className="wrapper_single_icons">
                  <div>
                    <FaTelegramPlane />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <b>В наличии</b>
              <div className="single_price">
                <h2>{ cart.value.find((item) => item.id === data.id) ? total : data?.price }₽</h2>
                <h4>{data?.oldPrice}₽</h4>
              </div>
              <div className="des">
                <p>{data?.des}</p>
              </div>
              <div className="btn_single_warpper">
                {cart.value.find((item) => item.id === data.id) ? (
                  <div className="increment_btn">
                    <button disabled={quantity === 1}
                      onClick={() => dispatch(decrementCartQuantity(data))}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                    disabled={quantity === 5}
                      onClick={() => dispatch(incrementCartQuantity(data))}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                <div className="btn_single">
                  <button
                    disabled={cart.value.find((item) => item.id === data.id)}
                    className="button_korzinka"
                    onClick={() => dispatch(addToCart(data))}
                  >
                    В корзину
                  </button>
                  <button
                    className="button_heart"
                    onClick={() => dispatch(toogleLike(data))}
                  >
                    {wishlist.value.find((item) => item.id === data.id) ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <CiHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="haraktericheski">Характеристика</h1>
          <div className="wrapper_haraktericheski">
            <div className="one_harakter">
              <h2>Цвет</h2>
              <p>Жёлтый</p>
            </div>
            <div className="one_harakter one_harakter_two">
              <h2>Год</h2>
              <p>2016</p>
            </div>
            <div className="one_harakter">
              <h2>Диаметр колеса</h2>
              <p>27.5</p>
            </div>
            <div className="one_harakter one_harakter_two">
              <h2>Материал рамы</h2>
              <p>Карбон</p>
            </div>

            <div className="one_harakter ">
              <h2>Размер</h2>
              <p>L</p>
            </div>

            <div className="one_harakter one_harakter_two">
              <h2>Страна</h2>
              <p>Швейцария</p>
            </div>

            <div className="one_harakter ">
              <h2>Производитель</h2>
              <p>Scott</p>
            </div>

            <div className="one_harakter one_harakter_two">
              <h2>Покрышки</h2>
              <p>
                Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
                PaceStar compound
              </p>
            </div>

            <div className="one_harakter ">
              <h2>Рама</h2>
              <p>
                Scale Carbon / HMX-технология / технология IMP / Коническая
                рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
              </p>
            </div>

            <div className="one_harakter one_harakter_two ">
              <h2>Подседельный Штырь</h2>
              <p>
                Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm
                900 Series: Carbon 2B SDS / 34.9mm
              </p>
            </div>

            <div className="one_harakter ">
              <h2>Седло</h2>
              <p>Ritchey WCS Streem V3 Titanium rails</p>
            </div>

            <div className="one_harakter one_harakter_two">
              <h2>Вилка</h2>
              <p>
                Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
                коническая рулевая труба / Удалённая блокировка, регулировка
                отскока / ход 100mm
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
