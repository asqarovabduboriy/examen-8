import React, { useState } from "react";
import { useGetProductsQuery } from "../../../context/products";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useEditProductMutation,
} from "../../../context/products";
import { toast } from "react-toastify";
import Modal from "../../../components/modal/Modal";

const Mange = () => {
  const { data } = useGetProductsQuery();
  const [edit, setEdit] = useState(null);

  const [deleteProduct] = useDeleteProductMutation();

  const [editProduct, { isSuccess }] = useEditProductMutation();

  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success("Товар был удален");
  };

  const handleEdit = (e) => {
    e.preventDefault();

    let edits = {
      title: edit.title,
      price: edit.price,
      oldPrice: edit.oldPrice,
      des: edit.des,
      category: edit.category,
    };

    editProduct({ id: edit.id, body: edits });

    if (isSuccess) {
      setEdit(null);
      toast.success("Товар был изменен");
    }
  };

  const products = data?.map((product) => (
    <div key={product.id} className="product">
      <div className="product_img">
        <Link to={`/product/${product.id}`}>
          {product.imgs && product.imgs[0] && (
            <img src={product.imgs[0]} alt={product.title} />
          )}
        </Link>
      </div>
      <div className="product_info">
        <h2>{product.title}</h2>
        <p className="old_price"> {product.oldPrice}₽</p>
        <div className="price">
          <p className="new_price">{product.price}₽</p>
          <div className="wrapper_pro_btn">
            <button className="delete" onClick={() => handleDelete(product.id)}>
              Удалить
            </button>
            <button onClick={() => setEdit(product)}>Изменить</button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="wrapper_products">
          {products && products.length > 0 ? products : <p>No products found</p>}
        </div>
      </div>

      {edit && (
        <Modal setEdit={setEdit}>
          <form onSubmit={handleEdit} className="form_edit">
            <label>Название</label>
            <input
              type="text"
              value={edit.title}
              onChange={(e) => setEdit({ ...edit, title: e.target.value })}
            />
            <label>Описание</label>
            <input
              type="text"
              value={edit.des}
              onChange={(e) => setEdit({ ...edit, des: e.target.value })}
            />

            <label>Категория</label>
            <input
              type="text"
              value={edit.category}
              onChange={(e) => setEdit({ ...edit, category: e.target.value })}
            />

            <label>Старая цена</label>
            <input
              type="number"
              value={edit.oldPrice}
              onChange={(e) => setEdit({ ...edit, oldPrice: e.target.value })}
            />
            <label>Новая цена</label>
            <input
              type="number"
              value={edit.price}
              onChange={(e) => setEdit({ ...edit, price: e.target.value })}
            />
            <button>Изменить</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Mange;
