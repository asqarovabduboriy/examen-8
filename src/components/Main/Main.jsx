import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

import img1 from "../../assets/imgs/rasm1 (1).png";
import img2 from "../../assets/imgs/rasm2 (1).png";
import img3 from "../../assets/imgs/rasm3 (1).png";
import img4 from "../../assets/imgs/rasm4 (1).png";
import img5 from "../../assets/imgs/rasm5 (1).png";
import img6 from "../../assets/imgs/rasm6 (1).png";
import img7 from "../../assets/imgs/svet001.png";
import img8 from "../../assets/imgs/svet002.png";
import img9 from "../../assets/imgs/svet003.png";
import img10 from '../../assets/imgs/svet004.png'
import img11 from '../../assets/imgs/svetoo5.png'
import Return from "../ReturnComponents/Return";

const Main = ({ count}) => {
  const [limit, setLimit] = useState(6);
  const data = [
    {
      id: 1,
      title: "Люстры",
      price: 540,
      imgs: img1,
    },
    {
      id: 2,
      title: "Светильники",
      price: 540,
      imgs: img2,
    },
    {
      id: 3,
      title: "Бра",
      price: 540,
      imgs: img3,
    },

    {
      id: 4,
      title: "Торшеры",
      price: 540,
      imgs: img4,
    },
    {
      id: 5,
      title: "Настольные лампы",
      price: 540,
      imgs: img5,
    },
    {
      id: 6,
      title: "Споты",
      price: 540,
      imgs: img6,
    },
    {
      id: 7,
      title: "Трековые светильники",
      price: 540,
      imgs: img7,
    },
    {
      id: 8,
      title: "Уличные светильники",
      price: 540,
      imgs: img8,
    },
    {
      id: 9,
      title: "Технические светильники",
      price: 540,
      imgs: img9,
    },
    {
      id: 10,
      title: "Светодиодные ленты",
      price: 540,
      imgs: img10,
      class: "with",
    },
    {
      id: 11,
      title: "Комплектуюшие ",
      price: 540,
      imgs: img11,
    },
    {
      id: 12,
      title: "Комплектуюшие ",
      price: 540,
      imgs: img11,
    }
  ];

  const length = data.length;

  const cards = data.slice(0, count).map((item) => (
    <div className="card" key={item.id}  >
      <div className="card_flex">
        <div className="card_text_content">
          <h3>{item.title}</h3>
          <p>
            От{item.price}₽ <MdArrowRightAlt />{" "}
          </p>
        </div>
        <div className="card_img">
          <img src={item.imgs} alt="" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <Return title="Каталог" btn="Весь каталог" path="/katalok" />

        <div className="card_wrapper">{cards}</div>
      </div>
    </>
  );
};

export default Main;
