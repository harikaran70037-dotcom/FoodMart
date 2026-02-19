import React, { useState } from 'react'
import '../files/Pro.css'
import it1 from '../images/it1.jpg'
import it2 from '../images/it2.jpg'

import it3 from '../images/it3.jpg'
import it5 from '../images/it5.jpg'
import it6 from '../images/it6.jpg'
import it7 from '../images/it7.jpg'
import it8 from '../images/it8.jpg'
import im1 from '../images/im1.jpg'
import im2 from '../images/im2.jpg'


import it4 from '../images/it4.jpg'



const Pro = () => {
    const[count ,setCount] = useState(1)
  return (
    <div>
        <section >
           <div className='ic'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
           <i class="fa-regular fa-heart go5"></i></div>
            <div className='ic2'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
           <i class="fa-regular fa-heart go5"></i></div>
            <h2 className='dd'>Trending Products</h2>
             
        <div className='overs'>
     
        <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p> 
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it4} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
        </div>
        </section>
        <br></br>
        <br></br>
        <section>
            <div className='overz'>

                 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it7} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
    <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
    <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
    <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
   
   

            </div>
        </section>

        <br></br>
        <section>
            <div className='mains'>
                <div className='do31'>
                    <img  className='do33' src={im1} alt=""/>
                </div>
                <div className='do32'>
                  <img className='do34' src={im2} alt=""/>

                </div>
            </div>
            <div className='roll'>
            <div>
                <h2 className='do38'>Upto 25% Off</h2>
                <h2>Luxa Dark Chocolate</h2>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='bt1'>Shop now</button>
            </div>
             <div>
                <h2 className='do39'>Upto 25% Off</h2>
                <h2>Creamy Muffins</h2>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='bt2'>Shop now</button>
            </div>
            </div>
        </section>
      









        <section>
            <div className='ic5'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
           <i class="fa-regular fa-heart go5"></i></div>
            <h2 className='do40'>Best selling products</h2>
              <div className='overrr'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it4} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

</div>
        </section><br></br><br></br>
        <section>
          <div className='ovr'>
            <div>
              <h1 className='sp1'>Get <span className='sp'> 25% </span> <br></br> <span className='sp'>Discount </span>on your <br></br> first purchase</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
              Dictumst amet, metus, sit massa posuere maecenas. <br></br>At tellus ut nunc amet vel egestas.</p>
            </div>
            <div>
              <label>Name</label><br></br>
              <input className='bgp1' type='text' placeholder='Name'/>
              <br></br><br></br>
              <label>Email</label><br></br>
              <input className='bgp2' type='text' placeholder='abc@mail.com'/>
              <br></br><br></br>

              <input type='checkbox'/>
              <label> Subscribe to the newsletter</label>
              <br></br>
              <br></br>
              <button className='but101'>Submit</button>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section>
           <div className='ic6'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            {/* <i class="fa-regular fa-heart go4"></i> */}
           <i class="fa-regular fa-heart go5"></i></div>
           <h2 className='do324'>
            Most popular products
           </h2>
          <div className='or'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        
          <section>
           <div className='ic6'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            {/* <i class="fa-regular fa-heart go4"></i> */}
           <i class="fa-regular fa-heart go5"></i></div>
           <h2 className='do324'>
            Just arrived
           </h2>
          <div className='or'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it5} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it7} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it4} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

          </div>
        </section>

    </div>
  )
}

export default Pro