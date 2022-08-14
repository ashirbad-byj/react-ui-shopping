import React,{useEffect, useState} from 'react'
import orders from '../../apis/orders';
import { Link, useNavigate } from "react-router-dom";


const getOrders = async (setOrders)=>{
    const response = await orders.get('/');
    console.log(response);
    setOrders(response.data);
}

const renderRecords = (orders)=>{

    return orders.map((order)=>{
        console.log(order);
        return(
            <tr>
                    <td>{order.id}</td>
                    <td>{order.customer_id}</td>
                    <td>{order.item_id}</td>
                    <td>{order.quantity}</td>
                    <td>{order.status}</td>
                    <td><Link to={`/orders/edit/${order.id}`}>Edit</Link></td>
                    <td><Link to={`/orders/delete/${order.id}`}>Delete</Link></td>
            </tr>
        )
    })
}

const Get = (props) => {
    const [orders, setOrders] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        getOrders(setOrders);
    },[]);

    return (
        
        <div>
        
        <div className="d-flex justify-content-center py-3">
            <button type="button" className="btn btn-primary" 
            onClick={(e)=>{navigate("./create",{ replace: true })}}>
                Add a new Order</button>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Item ID</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">#Edit</th>
                    <th scope="col">#Delete</th>
                </tr>
            </thead>
            <tbody>
            {renderRecords(orders)}
                
            </tbody>
        </table>

            
        </div>
        );
}

export default Get;