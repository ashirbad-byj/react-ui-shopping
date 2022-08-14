import React,{useEffect, useState} from 'react'
import items from '../../apis/items';
import { Link, useNavigate } from "react-router-dom";


const getItems = async (setItems)=>{
    const response = await items.get('/');
    console.log(response);
    setItems(response.data);
}

const renderRecords = (items)=>{

    return items.map((item)=>{
        console.log(item);
        return(
            <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td><Link to={`/items/edit/${item.id}`}>Edit</Link></td>
                    <td><Link to={`/items/delete/${item.id}`}>Delete</Link></td>
            </tr>
        )
    })
}

const Get = (props) => {
    const [items, setItems] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        getItems(setItems);
    },[]);

    return (
        
        <div>
        
        <div className="d-flex justify-content-center py-3">
            <button type="button" className="btn btn-primary" 
            onClick={(e)=>{navigate("./create",{ replace: true })}}>
                Add a new Item</button>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">#Edit</th>
                    <th scope="col">#Delete</th>
                </tr>
            </thead>
            <tbody>
            {renderRecords(items)}
                
            </tbody>
        </table>

            
        </div>
        );
}

export default Get;