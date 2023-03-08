import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';




const Routers1=() =>{
    return(
        <div>
          <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/dashboard" exact element={<Dashboard/>}/>
                    <Route path="/about" exact element={<About/>}/>
                </Routes>
          </BrowserRouter>
           
        </div>
    )
}


export default Routers1;