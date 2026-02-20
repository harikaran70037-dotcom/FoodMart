import React from 'react'
import Page2 from '../files/Page2'
import Ext from './Ext'

const Veg = () => {
  return (
    <div>
    <div className="row">
  {Page2.map((itm) => (
    <div className="col" key={itm.id}>
      <div className="card animate__animated animate__fadeInUp">
        <img
          src={itm.img}
          className="card-img-top"
          alt={itm.title}
        />
        <div className="card-body">
          <h5 className="card-title">{itm.title}</h5>
          <p className="card-text">${itm.price}<i class="fa-solid fa-star"></i></p>
          <p className="card-text">{itm.loc}</p>
        </div>
      </div>
    </div>
  ))}
</div>
<br></br>
<br></br>

<Ext/>
    </div>
  
  )
}

export default Veg