import React, { useState } from "react";
import { useGetProductsQuery } from "../../context/products";
import Return from "../ReturnComponents/Return";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Loader from "../../components/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { toogleLike } from "../../context/wishlistSlice";
import { Link } from "react-router-dom";
import {addToCart} from '../../context/cartSlice'

const Product = () => {
  const { data, isLoading, error, isSuccess, isFetching } =
    useGetProductsQuery();
  const [limit, setLimit] = useState(+sessionStorage.getItem("limit") || 4);
  const len = data?.length;

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishslice);
  console.log(wishlist);

  const handleLimit = () => {
    setLimit(limit + 4);
    sessionStorage.setItem("limit", limit + 4);
  };

  const products = data?.slice(0, limit).map((product) => (
    <div key={product.id} className="product">
      <div className="like_product">
        <button onClick={() => dispatch(toogleLike(product))}>
          {wishlist.value.find((item) => item.id === product.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <CiHeart />
          )}
        </button>
      </div>
      <div className="product_img">
        <Link to={`/product/${product.id}`}>
          <img src={product.imgs[0]} alt="" />
        </Link>
      </div>
      <div className="product_info">
        <h2>{product.title}</h2>
        <p className="old_price"> {product.oldPrice}₽</p>
        <div className="price">
          <p className="new_price">{product.price}₽</p>
          <button onClick={() => dispatch(addToCart(product))}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <Return
          title={"Популярные товары"}
          btn={"Все товары"}
          path="/AllProduct"
        />
        {isFetching ? (
          <Loader count={limit} />
        ) : (
          <>
            <div className="product_wrapper">{products}</div>
            <div className="limit_wrapper">
              <button disabled={limit === len} onClick={() => handleLimit()}>
                Показать еще
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
