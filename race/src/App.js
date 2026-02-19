import logo from './logo.svg';
import Nav from './files/Nav';
import Home from './files/Home';
import Demo from './files/Demo';
import Pro from './files/Pro';
import Fruit from './files/Fruit';
import Ext from './files/Ext';
import Veg from './files/Veg';
import Juice from './files/Juice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './files/New';
// import { Router } from 'express';

function App() {
  return (
    <div >
      <BrowserRouter>
    
      <Nav/>
      
      
      <Routes>
         <Route path='/'element={ <Home/>}/> 
       <Route path='/fruit'element={ <Fruit/>}/>   
       <Route path='/juice'element={ <Juice/>}/>   
       <Route path='/veg'element={ <Veg/>}/>   
</Routes>
      <Veg/>
      <Juice/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
