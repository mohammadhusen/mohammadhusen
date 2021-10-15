import React from 'react'
import User from "./User.js";

console.log(User);

const Form = () => {
    return (
        <div className="container">
            <div className="row">&nbsp;</div>
            <h3> Table </h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">phonenumber</th>
    </tr>
  </thead>
  <tbody>
    
    {User.map((userdata,index)=>{
    return<>
    <tr>
        <td>{userdata.id}</td>
        <td>{userdata.name}</td>
        <td>{userdata.email}</td>
        <td>{userdata.username}</td>
        <td>{userdata.phonenumber}</td>
        </tr>
        </>
    })}
    
  </tbody>
    </table>
    <hr/>
    <form action="htttp://www.instagram.com/definet49" method="get">
        <div className="form-group col-md-4">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group col-md-4">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group col-md-4">
            <label for="Username">UserName</label>
            <input type="text" className="form-control" id="Username" placeholder="User Name"/>
        </div>
        <div className="form-group col-md-4">
            <label for="Mobile Number">Mobile Number</label>
            <input type="number" className="form-control" id="Mobile Number" placeholder="Mobile Number"/>
        </div>
        <div className="form-group col-md-4">
            <button type="submit" className="btn btn-primary col-md-3">Submit</button>
        </div>  
    </form>


            
        </div>
    )
}

export default Form
