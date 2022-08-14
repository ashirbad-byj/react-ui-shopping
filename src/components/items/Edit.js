import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import items from '../../apis/items';

const fetchItem = async (id_old,setItemDetails)=>{
    const response = await items.get(`/${id_old}`);
    let {id,name,price,status} = response.data[0]
    setItemDetails({id,name,price,status});
};
let id_old;

const handleSubmit = async (e,id_old,itemDetails)=>{
    e.preventDefault();
    let {id,name,price,status} = itemDetails;
    const response = await items.patch('/',{id:parseInt(id_old), data: {id,name,price,status}});
    console.log(response);
};
const Edit = (props)=>{

        const [itemDetails, setItemDetails] = useState({id:"",name:"",price:"",status:""});
        id_old = useParams().id;
        useEffect(() => {
            fetchItem(id_old,setItemDetails)
        },[]);

        return (<div>
        <h2>{"Edit Item"}</h2>

        <form onSubmit={(e)=>handleSubmit(e,id_old,itemDetails)}>
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
            <div className="row mb-3">
                <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputStatus"
                value = {itemDetails.status}
                onChange = {(e)=> setItemDetails({...itemDetails,status: parseInt(e.target.value)})}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>


        
        
        </div>)
}


export default Edit;