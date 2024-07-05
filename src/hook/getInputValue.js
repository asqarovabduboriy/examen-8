import { useState } from "react";

const getInputValue = (initialValue) => {
  const [formdata, setFormdata] = useState(initialValue);
  const handlechange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return { formdata, handlechange, setFormdata };
};

export default getInputValue;
