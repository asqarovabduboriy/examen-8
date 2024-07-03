import React from 'react'
import Return from '../../components/ReturnComponents/Return'
import img1 from '../../assets/imgs/brand1.svg'
import img2 from '../../assets/imgs/barnd2.svg'
import img3 from '../../assets/imgs/brand3.svg'
import img4 from '../../assets/imgs/brand1.svg'

const Brand = () => {
    const imgs = [img1, img2, img3, img4]

    const img = imgs.map((img, index) => (
        <div className='img_wrapper' key={index}><img src={img} alt="" /></div>
    ))
  return (
    <>
     <div className="container">
       <Return title={"Только проверенные бренды"}/>
       <div className="imgs_wrapper">
        {img}
       </div>
     </div>
    </>
  )
}

export default Brand