import React, { useState } from 'react'
import { useParams } from "react-router";
import customers from '../../apis/customers';


let id_old;

const handleSubmit = async (e,id_old,customerDetails)=>{
    e.preventDefault();
    let {id,name,age} = customerDetails;
    const response = await customers.post('/',{id,name,age});
    console.log(response);
};
const Create = (props)=>{

        const [customerDetails, setCustomerDetails] = useState({id:"",name:"",age:""});
        id_old = useParams().id;

        return (<div>
        <h2>{"Add Customer"}</h2>

        <form onSubmit={(e)=>handleSubmit(e,id_old,customerDetails)}>
            <div className="row mb-3">
                <label htmlFor="inputID" className="col-sm-2 col-form-label">ID</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputID"
                value = {customerDetails.id}
                onChange = {(e)=> setCustomerDetails({...customerDetails,id: parseInt(e.target.value)})}
                />
                </div>
            </div>
            {console.log(customerDetails)}
            <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName"
                value = {customerDetails.name}
                onChange = {(e)=> setCustomerDetails({...customerDetails,name: e.target.value})}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPrice" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputPrice"
                value = {customerDetails.age}
                onChange = {(e)=> setCustomerDetails({...customerDetails,age: parseInt(e.target.value)})}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>


        
        
        </div>)
}


export default Create;