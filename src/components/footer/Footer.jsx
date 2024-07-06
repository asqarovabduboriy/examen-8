import React from "react";
import logo from "../../assets/imgs/Logo.svg";
import cart from "../../assets/imgs/cart (1).png";

import { useLocation } from "react-router-dom";

const Footer = () => {


  const { pathname } = useLocation();

  if (pathname.includes("login") || pathname.includes("admin")) {
    return <></>;
  }


  const item = [
    "О компании",
    "Доставка и оплата",
    "Возврат",
    "Контакты",
    "Гарантии",
    "Блог",
  ];

  const item_two = [
    "Люстры",
    "Светильники",
    "Бра",
    "Торшеры",
    "Комплектуюшие",
    "Настольные лампы",
  ];

  const itme_three = [
    'Споты',
"Трековые светильники",
"Уличные светильники",
"Технические светильники",
"Светодиодные ленты"
  ];

  const items = item.map((item, index) => <p key={index}>{item}</p>);

  const items_two = item_two.map((item, index) => <p key={index}>{item}</p>);

  const items_three = itme_three.map((item, index) => <p key={index}>{item}</p>);
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex_wrapper_big">
            <div className="warpper_one_div">
              <img src={logo} alt="" width={200} />
              <span>8 (800) 890-46-56</span>
              <img src={cart} alt="" width={200} />
              <p>Политика конфидециальности</p>
              <p>Политика конфидециальности</p>
              <div className="vk_wrapper">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="vk_div">
                    <span>VK</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="warpper_two_div">
              <h2>Покупателям</h2>
              {items}
            </div>

            <div className="warpper_two_div">
              <h2>Товары</h2>
              {items_two}
            </div>

            <div className="warpper_two_div there_div_footer"  >
              {items_three}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
