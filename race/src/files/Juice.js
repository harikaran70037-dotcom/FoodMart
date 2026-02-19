import React from 'react'
import Page3 from '../files/Page3'
const Juice = () => {
  return (
     <div>
    <div className="row">
  {Page3.map((itm) => (
    <div className="col" key={itm.id}>
      <div className="card">
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

    </div>
  )
}

export default Juice