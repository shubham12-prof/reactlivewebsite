import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] =useState(
        {
            FullName:"",
            phone:"",
            email:"",
            address:"",
            msg:"",
            password:""
        }
    );

    const InputEvent=(event) => {
    const {name, value} =event.target;
    setData((preVal) =>{
        return{
            ...preVal,
            [name] :value,
        }
    })
    };

    const formSubmit= (e) =>
    {
    e.preventDefault();
        alert(
            `MY name is ${data.FullName}. My phone number is
            ${data.FullName}`);
        };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact  Us
                </h1>
            </div>
            <div className="Container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="FullName"
                                value={data.FullName}
                                onChange={InputEvent}
                                 placeholder="Enter Name" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="Phone Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                 placeholder="Enter phone Number" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">address</label>
                                <input type="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="address"
                                value={data.address}
                                onChange={InputEvent}
                                 placeholder="Enter address" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="Email"
                                value={data.Email}
                                onChange={InputEvent}
                                 placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                name="Password"
                                value={data.Password}
                                onChange={InputEvent}
                                 placeholder="Password" />
                            </div>
                            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                name="dhubhsm"
                                value={}
                                onChange={InputEvent}
                                 />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact