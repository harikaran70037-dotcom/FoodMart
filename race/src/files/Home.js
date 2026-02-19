import React from 'react'

import bac1 from '../images/bac1.jpg';
// import bac2 from '../images/bac2.jpg';
import bac3 from '../images/bac3.jpg';

import bac5 from '../images/bac5.jpg';
import Demo from '../files/Demo.js'
import Pro from '../files/Pro.js'
import Ext from '../files/Ext.js'


const Home = () => {
  return (
    <div>

         <section>
          <div>
            <div className='no22'>
          
          <img className='no21' src={bac1} alt=""/>
          
          </div>
          <div className='i3'>
             <img className='i2' src={bac3} alt=""/>
              </div>
         <div className='i5'>
            <img className='i4' src={bac5} alt=""/>
          </div>
          </div>
          <div className='tx'>
            <h2 className='tx1'>100% Natural</h2>
            <h1 className='tx2'>Fresh <br></br>Smoothie & <br></br>Summer Juice</h1>
            <p>Lorem ipsum dolor sit amet, <br>
            </br>consectetur adipiscing elit. <br></br>Dignissim massa diam elementum.</p>
            <button className='tx3'>Shop now</button>
          </div>
          <div className='tx8'>
            <h1 className='tx4'>20% off</h1>
            <p className='tx5'>_______sale</p>
            <h2 className='tx6'>Fruits &<br></br>vegetables</h2>
            <p className='tx7'>shop collection<i class="fa-solid fa-arrow-right"></i></p>
          </div>
          <div className='tx9'>
            <h1 className='tx10'>20% off</h1>
            <p className='tx11'>_______sale</p>
            <h2 className='tx12'>Baked Products</h2>
            <p className='tx13'>shop collection<i class="fa-solid fa-arrow-right"></i></p>
          </div>
        </section>
       <Demo/>
      <Pro/>
      <Ext/>
    </div>
    
  )
}

export default Home