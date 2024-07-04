import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import img1 from "../../assets/imgs/grup1.svg";
import img2 from "../../assets/imgs/Frame .svg";
import img3 from "../../assets/imgs/grup2.svg";
import img4 from "../../assets/imgs/grup4.svg";
import Return from "../ReturnComponents/Return";

const Kampaniya = () => {
  const data = [
    {
      id: 1,
      title: "Только проверенные бренды",
      desc: "Бренды, проверенные временем и качеством",
      img: img1,
    },

    {
      id: 2,
      title: "Самые низкие цены",
      desc: "Ниже не будет нигде",
      img: img2,
    },

    {
      id: 3,
      title: "Быстрая доствка",
      desc: "Доставляем по всей РФза 1-10 дней",
      img: img3,
    },

    {
      id: 4,
      title: "Большой ассортимент",
      desc: "Более 1000 товаров",
      img: img4,
    },
  ];

  const datas = data.map((item) => (
        <div className="kampaniya_item" key={item.id}>
          <div className="kampaniya_img">
            <img src={item.img} alt="" />
          </div>
         <div className="kampaniya_text">
         <h3>{item.title}</h3>
         <p>{item.desc}</p>
         </div>
        </div>
  ))

  return (
    <>
      <div className="container">
       <Return  title='Почему NORNLIGHT?' btn='О компании' path={'/Окомпании'}/>
        <div className="kompaniya_wrapper">{datas}</div>
      </div>
    </>
  );
};

export default Kampaniya;
