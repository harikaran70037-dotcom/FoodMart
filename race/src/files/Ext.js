import React from 'react'
import '../files/Ext.css'
import pto1 from '../images/pto1.jpg'
import pto2 from '../images/pto2.jpg'
import pto3 from '../images/pto3.jpg'
import phone from '../images/phone.jpg'
import app from '../images/app.jpg'
import google from '../images/google.jpg'
import mart from '../images/mart.jpg'






const Ext = () => {
  return (
    <div>
        <section>
            <h2 className='do35'> Our Recent Blog</h2>
        <div className='heads'>
            <div>
                <img className='pto1' src={pto1} alt=''/> <br></br>
             <p> <i class="fa-regular fa-calendar"></i>22 aug 2021  <i class="fa-regular fa-folder"></i>Tips & Tricks</p> 
                <h2  className='clr'>Top 10 casual look ideas <br></br>to dress up your kids</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
            </div>
            <div>
                <img className='pto1' src={pto2} alt=''/> <br></br>
             <p> <i class="fa-regular fa-calendar"></i>25 aug 2021  <i class="fa-regular fa-folder"></i>Trending</p> 
                <h2 className='clr'>Latest trends of wearing <br></br>street wears supremely</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
            </div>
             <div>
                <img className='pto1' src={pto3} alt=''/> <br></br>
             <p> <i class="fa-regular fa-calendar"></i>28 aug 2021  <i class="fa-regular fa-folder"></i>Inspiration</p> 
                <h2 className='clr'>10 Different Types of <br></br>comfortable clothes ideas <br></br>for women</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
            </div>
            
        </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <div>
                <div className='raf'>
                    <div>
                        <img className='up' src={phone} alt=''/>
                    </div>
                    <div className='zero'>
                        <h1>Shop faster with foodmart App</h1><br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus<br></br>
                        nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper<br></br>
                        erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi<br></br>
                        senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
                        <div className='apps'>
                            <img src={app} alt=''/>
                            <img src={google} alt=' '/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <h2 className='do36'>People are also looking for</h2>
            <div className='flxx'>
                <div className='flx'>
                    <button className='bts1'>Blue diamon almonds</button>
                    <button className='bts2'>Angie's Boomchickapop Corn</button>
                    <button className='bts3'>Salty kettle Corn</button>
                    <button className='bts4'>Chobani Greek Yogurt</button>
                    <button className='bts5'>Sweet Vanilla Yogurt</button>
                </div>
                <div className='flx1'>
                    <button className='bts1'>Foster Farms Takeout Crispy wings</button>
                    <button className='bts2'>Warrior Blend Organic</button>
                    <button className='bts3'>Chao Cheese Creamy</button>
                    <button className='bts4'>Chicken meatballs</button>
                    <button className='bts5'>Chicken meatballs</button>
                </div>
                <div className='flx2'>
                    <button className='bts1'>Angie's Boomchickapop Corn</button>
                    <button className='bts2'>Salty kettle Corn</button>
                    <button className='bts3'>Chobani Greek Yogurty</button>
                    <button className='bts4'>Sweet Vanilla Yogurt</button>
                    <button className='bts5'>Foster Farms Takeout Crispy wings</button>
                </div>
                <div className='flx3'>
                    <button className='bts1'>Warrior Blend Organic</button>
                    <button className='bts2'>Chao Cheese Creamy</button>
                    <button className='bts3'>Chicken meatballs</button>
                   
                </div>
            </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <div className='overall'>
                <div>
                   <h3><i class="fa-solid fa-cart-shopping"></i></h3> 
                   <h4>Free delivery</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div>
                    <h3><i class="fa-solid fa-shield"></i></h3>
                    <h4>100% secure <br></br>payment</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div>
                    <h3><i class="fa-solid fa-building-columns"></i></h3>
                    <h4>Quality guarantee</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div>
                    <h3><i class="fa-solid fa-heart"></i></h3>
                    <h4>guaranteed savings</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div>
                  
                    <h4>  <i class="fa-solid fa-gift"></i></h4>
                    <h3>Daily offers</h3>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
            </div>


        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <div className='overall2'>
                <div>
                    <img src={mart} alt=''/>
                    <h3 className='ii'><i class="fa-brands fa-facebook g1"></i><i class="fa-brands fa-instagram g2"></i><i class="fa-brands fa-youtube g3"></i><i class="fa-brands fa-amazon g4"></i><i class="fa-brands fa-square-twitter g5"></i></h3>
                </div>
                <div>
                    <h5>Ultras</h5>
                    <p>About us</p>
                    <p>Conditions</p>
                    <p>Our Journals</p>
                    <p>Careers</p>
                    <p>Affiliate Programme</p>
                    <p>Ultras Press</p>
                    
                </div>
                <div>
                    <h5>Customer Service</h5>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Returns & Refunds</p>
                    <p>Cookie Guidelines</p>
                    <p>Delivery Information</p>
                </div>
                <div>
                    <h5>Customer Service</h5>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Returns & Refunds</p>
                    <p>Cookie Guidelines</p>
                    <p>Delivery Information</p>
                </div>
                <div>
                    <h5>Subscribe Us</h5>
                    <p>Subscribe to our newsletter to get</p>
                    <p>updates about our grand offers.</p>
                    <input type='text' placeholder='Enter your email'/>
                </div>
            </div>
        </section>
        <hr></hr>
        <footer>© 2023 Foodmart. All rights reserved.</footer>
        <h5 className='hari'>THE WEBSITE CREATE BY "HARII"</h5>
        <hr></hr>
    </div>
    
  )
}

export default Ext