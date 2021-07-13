import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  Home  from './Home';
import  About  from './About';
import  Contact  from './Contact';
import Navbarr from './Navbar/Navbarr';
import Footer from './Footer';
import {Switch, Route, Redirect} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import { Quotes } from './Quotes';

const App =() =>
 {
   return(
     <>
    <BrowserRouter>
    <Navbarr />
     <Switch>
     <Route exact path= "/" component ={Home} />
     <Route exact path= "/about" component ={About}/>
     <Route exact path= "/Quotes" component ={Quotes}/>
     <Route exact path= "/contact" component ={Contact}/>
     <Redirect to= "/" />
     </Switch>
     <Footer />
     </BrowserRouter>
   </>
   )
 }

export default App;
