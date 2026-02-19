import React from 'react'
import img1 from '../images/img1.jpg'
import '../files/Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
          
            
        <img className='no' src ={img1} alt=""/>
        <div className='move'>
          <div>
            <select class="form-select" aria-label="Default select example" className='no3'>
  <option selected>All Categories</option>
  <option value="1">Groceries</option>
  <option value="2">Drinks</option>
  <option value="3">Chocolates</option>
</select>
          </div>
        
        <div>
          <input className='no4' type='text' placeholder='Search For More Than 20,000 products'/>
        </div>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>

        </div>
        <div>
          <p>For Support?</p>
       <h6 className='no5'>+980-<br></br>34984089</h6>
        </div>
        <div className='no6'>
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
        <div>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='no7'><p>You cart <br></br><h6>$1290.00</h6></p></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" >
    <h1>THANK YOU</h1>
  </div>
</div>
        </div>
       
        </div>
        <section>
          <div className='no12'>
            <div>
            <select class="form-select" aria-label="Default select example" className='no10'>
  <option selected>Shop by Departments</option>
  <option value="1">Groceries</option>
  <option value="2">Drinks</option>
  <option value="3">Chocolates</option>
</select>
</div>
<div>
<nav>
<Link to="/fruit"> <p className='cds'>Fruit</p>  </Link>
 <Link to ="/veg"> <p className='cds'>Vegetables</p> </Link>
 <Link to ="juice"> <p className='cds'>Juice</p> </Link>
  <p>Accessories</p>
  <p>
            <select class="form-select" aria-label="Default select example" className='no11'>
  <option selected>pages</option>
  <option value="1">About</option>
  <option value="2">Shop</option>
  <option value="3">Cart</option>
    <option value="4">Style</option>
      <option value="5">Contact</option>
        <option value="6">Thank you</option>
</select></p>
  <p>Brand</p>
  <p>Sale</p>
  <p>Blog</p>
  <br/><br></br><h5><i class="fa-solid fa-gift"></i> Get pro version</h5>
</nav>
</div>
          </div>
        </section>
       
   </div>
   
  )
}

export default Nav