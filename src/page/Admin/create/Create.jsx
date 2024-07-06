import React from "react";
import Mange from "../mange/Mange";
import getInputValue from "../../../hook/getInputValue";
import { useCreateProductMutation } from "../../../context/products";
import { toast } from "react-toastify";

const instalstate = {
  title: "",
  price: "",
  oldPrice: "",
  des: "",
  category: "",
  imgs: "",
};

const Create = () => {
  const { formdata, handlechange, setFormdata } = getInputValue(instalstate);
  const [createProduct,{isSuccess}] = useCreateProductMutation();

  const hamdleSubmit = (e) => {
    e.preventDefault();
    formdata.imgs = formdata.imgs.split("\n").filter((i) => i.trim());
    createProduct({
      title: formdata.title,
      price: formdata.price,
      oldPrice: formdata.oldPrice,
      des: formdata.des,
      category: formdata.category,
      imgs: formdata.imgs,
    });
    setFormdata(instalstate);
    toast.success("Товар был создан");

  };

  return (
    <>
      <div className="container">
        <form  onSubmit={hamdleSubmit} className="create_form">
          <h1>Create product</h1>
          <label> Title </label>
          <input
            required
            onChange={handlechange}
            name="title"
            value={formdata.title}
            type="text"
          />
          <label> Price </label>
          <input
            required
            onChange={handlechange}
            name="price"
            value={formdata.price}
            type="text"
          />
          <label> Old price </label>
          <input
            required
            onChange={handlechange}
            name="oldPrice"
            value={formdata.oldPrice}
            type="text"
          />
          <label> Description </label>
          <input
            required
            onChange={handlechange}
            name="des"
            value={formdata.des}
            type="text"
          />
          <label> Category </label>
          <input
            required
            onChange={handlechange}
            name="category"
            value={formdata.category}
            type="text"
          />
          <label> Image </label>
          <textarea
            required
            onChange={handlechange}
            name="imgs"
            value={formdata.imgs}
          ></textarea>
          <button>Create</button>
        </form>
        <Mange />
      </div>
    </>
  );
};

export default Create;
