import React from 'react'
import { useSelector } from 'react-redux'
import { CiHeart } from 'react-icons/ci'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toogleLike } from '../../context/wishlistSlice'

const Like = () => {
     const like = useSelector(state => state.wishslice)
     console.log(like);

     const dispatch = useDispatch()

     const products = like?.value?.map((product) => (
        <div key={product.id} className="product">
          <div className="like_product">
            <button onClick={() => dispatch(toogleLike(product))} >
              {
                like.value.find((item) => item.id === product.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <CiHeart />
                )
              }
            </button>
          </div>
          <div className="product_img">
            <img src={product.imgs[0]} alt="" />
          </div>
          <div className="product_info">
            <h2>{product.title}</h2>
            <p className="old_price"> {product.oldPrice}₽</p>
            <div className="price">
              <p className="new_price">{product.price}₽</p>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ));


  return (
    <>
    <div className="container">
    <div className="product_wrapper">{products}</div>
    </div>
    </>
  )
}

export default Like