import React from 'react'

const Search = ({data}) => {

    const search = data?.slice(0,5).map((el)=>(
       <div key={el.id}>
         <div className="modal_serach">
         <p>{el.title}</p>
         <b>${el.price}</b>
         </div>
         <hr/>
       </div>
    ))

  return (
    <>
     <div className="container">
        <div className="search">
            {search}
        </div>
     </div>
    </>
  )
}

export default Search