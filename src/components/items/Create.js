import React, { useState } from 'react'
import { useNavigate } from "react-router";
import items from '../../apis/items';




const handleSubmit = async (e,itemDetails)=>{
    e.preventDefault();
    let {id,name,price} = itemDetails;
    const response = await items.post('/',{id,name,price});
    console.log(response);
};
const Create = (props)=>{

        const [itemDetails, setItemDetails] = useState({id:"",name:"",price:""});

        return (<div>
        <h2>{"Add Item"}</h2>

        <form onSubmit={(e)=>handleSubmit(e,itemDetails)}>
            <div className="row mb-3">
                <label htmlFor="inputID" className="col-sm-2 col-form-label">ID</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputID"
                value = {itemDetails.id}
                onChange = {(e)=> setItemDetails({...itemDetails,id: parseInt(e.target.value)})}
                />
                </div>
            </div>
            {console.log(itemDetails)}
            <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName"
                value = {itemDetails.name}
                onChange = {(e)=> setItemDetails({...itemDetails,name: e.target.value})}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPrice" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputPrice"
                value = {itemDetails.price}
                onChange = {(e)=> setItemDetails({...itemDetails,price: parseInt(e.target.value)})}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>


        
        
        </div>)
}


export default Create;