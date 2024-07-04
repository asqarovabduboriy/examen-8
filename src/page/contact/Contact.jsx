import React from 'react'
import SimpleMap from '../../components/Karta/Karta'

const Contact = () => {
  return (
    <>
      <div className="container">
      <div className="contact_text_wrapper">
        <h1>Контакты</h1>
        <div className='contact_text'>
            <h3>8 (800) 890-46-56</h3>
            <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину</p>
        </div>
      </div>
      <SimpleMap />

      <div className="karta_div">
         <div className='contact_text_karta'>
            <h3>Адрес магазина</h3>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
         </div>
         <div className='contact_text_karta'>
            <h3>Почта</h3>
            <p>NORNLIGHT@mail.ru</p>
         </div>
         <div className='contact_text_karta'>
            <h3>Телефон</h3>
            <p>8 (800) 890-46-56</p>
         </div>
         <button>Оставить заявку</button>
      </div>
      </div>
    </>
  )
}

export default Contact