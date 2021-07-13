import React from 'react'
import Common from './Common';
import web from "../src/Images/M7.jpg";

const Home = () => {
    return(
    <>
          <Common
          name='The mountains are calling and'
          imgsrc={web} 
          visit='/Quotes'
          btname= "Quotes" 
          type ="I must go."  
          />  
        </>

    );
}

export default Home