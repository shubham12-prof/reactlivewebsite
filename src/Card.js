import React from 'react'
import { NavLink } from 'react-router-dom'
import Sdata from './Sdata';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <img className="card-img-top" src={props.imgsrc}
                        alt="Card image cap" />
                    <div className="card-body">
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