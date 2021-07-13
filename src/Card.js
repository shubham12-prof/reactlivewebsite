import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";
import Sdata from './Sdata';

const Card = (props) => {
    useEffect(() => {
        Aos.init({duration:1000});
    },[]);
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img  className="card-img-top"  data-aos="flip-left" data-aos-offset="200" src={props.imgsrc}
                        alt="Card image cap" />
                    <div className="card-body" data-aos="fade-down">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.write}</p>
                        <NavLink to=" " className="btn btn-primary">
                            Go somewhere
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card