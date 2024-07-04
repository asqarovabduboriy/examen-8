import React from "react";
import SimpleMap from "../../components/Karta/Karta";

const Dostavka = () => {
  return (
    <>
      <div className="container">
        <div className="text_wrapper_payment">
          <h1>Доставка и оплата</h1>
          <div className="text_oplata_wrapper">
            <h2>Доставка</h2>
            <p>
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ. <span>Сроки доставки: 4—6 недель</span>
            </p>
            <h2>Курьерская доставка</h2>
            <p>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
              <span>от 5 000 ₽</span>.Заказы свыше <span>30 000 ₽ </span> имеют
              бесплатную доставку, включительно 15 км от МКАД
            </p>
            <h2>Самовывоз</h2>
            <p>
              Любой заказ можно забрать самостоятельно по адресу: г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
        <SimpleMap/>
      </div>
    </>
  );
};

export default Dostavka;
