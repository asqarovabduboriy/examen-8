import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = ({ data, setSearch }) => {
  const navigate = useNavigate();

  const handlepage = (id) => {
    navigate(`/product/${id}`);
    setSearch("");
  };

  const search = data?.slice(0, 5).map((el) => (
    <div onClick={() => handlepage(el.id)} key={el.id}>
      <div className="modal_serach">
        <p>{el.title}</p>
        <b>${el.price}</b>
      </div>
      <hr />
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="search">{search}</div>
      </div>
    </>
  );
};

export default Search;
