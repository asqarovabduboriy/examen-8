import React, { useEffect } from "react";
import Return from "../../components/ReturnComponents/Return";
import img1 from "../../assets/imgs/jpg1.jpg";
import img2 from "../../assets/imgs/jpg2.jpg";
import img3 from "../../assets/imgs/jpeg3.jpg";
import { TfiArrowTopRight } from "react-icons/tfi";

const Blog = ({ count }) => {
  const data = [
    {
      id: 1,
      title: "Как правильно освещать дом снаружи?",
      img: img1,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "Как правильно освещать дом снаружи?",
      img: img2,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: "Как правильно освещать дом снаружи?",
      img: img3,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 4,
      title: "Как правильно освещать дом снаружи?",
      img: img1,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 5,
      title: "Как правильно освещать дом снаружи?",
      img: img2,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 6,
      title: "Как правильно освещать дом снаружи?",
      img: img3,
      data: new Date().toLocaleDateString(),
    },
  ];

  const blogs = data.slice(0, count).map((el) => (
    <div className="blog" key={el.id}>
      <div className="blog__img">
        <img src={el.img} alt="" />
      </div>
      <div className="blog_info">
        <h3>{el.title}</h3>
        <TfiArrowTopRight />
      </div>
      <p>{el.data}</p>

      <div className="line"></div>
    </div>
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Return title={" Блог "} btn={"Перейти в блог"} path={"/Блог"} />

      <div className="blogs_wrapper">{blogs}</div>
      <div className="blogs_text_wraper">
        <h2>Производство светильников</h2>
        <div className="div_blog">
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
