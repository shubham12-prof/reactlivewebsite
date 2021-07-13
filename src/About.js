import React from 'react'
import Common from './Common';
import web from "../src/Images/M4.jpg";

const Home = () => {
    return(
    <>
          <Common name='Go where you feel most alive.'
          imgsrc={web} 
          visit='/contact'
          btname= "Contact Now" 
          type=""
          />
        </>

    );
}

export default Home