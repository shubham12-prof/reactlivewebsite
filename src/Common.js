import React from 'react'
import "./Common.css"
import {NavLink} from "react-router-dom";
import web1 from "../src/Images/p2.jpg";

const Common = ( props ) => {
    return(
    <>
        <section id="header" className="d-flex">
        <div className="container-fluid ">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
<h1 className="left">
    {props.name} <strong className="brand-name">
    {props.type}
    </strong>
</h1>
<h2 className="my-3">
        {}
</h2>
<div className="mt-3">
    <NavLink to={props.visit} className="btn-get-started">
 {props.btname}
</NavLink>

</div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={props.imgsrc} className="img-fluid animated" alt="Home img" />
</div>
</div>
</div>
</div>
</div>
        </section>
        </>

    );
}

export default Common;