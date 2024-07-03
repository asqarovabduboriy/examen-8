import React, { useEffect } from "react";
import Product from "../../components/Pproduct/Product";

const AllProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
       <div className="container">
       </div>
      <Product/>
    </>
  );
};

export default AllProduct;
