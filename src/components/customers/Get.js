import React,{useEffect, useState} from 'react'
import customers from '../../apis/customers';
import { Link, useNavigate } from "react-router-dom";


const getCustomers = async (setCustomers)=>{
    const response = await customers.get('/');
    console.log(response);
    setCustomers(response.data);
}

const renderRecords = (customers)=>{

    return customers.map((customer)=>{
        console.log(customer);
        return(
            <tr>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.age}</td>
                    <td>{customer.status}</td>
                    <td><Link to={`/customers/edit/${customer.id}`}>Edit</Link></td>
                    <td><Link to={`/customers/delete/${customer.id}`}>Delete</Link></td>
            </tr>
        )
    })
}

const Get = (props) => {
    const [customers, setCustomers] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        getCustomers(setCustomers);
    },[]);

    return (
        
        <div>
        
        <div className="d-flex justify-content-center py-3">
            <button type="button" className="btn btn-primary" 
            onClick={(e)=>{navigate("./create",{ replace: true })}}>
                Add a new Customer</button>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Status</th>
                    <th scope="col">#Edit</th>
                    <th scope="col">#Delete</th>
                </tr>
            </thead>
            <tbody>
            {renderRecords(customers)}
                
            </tbody>
        </table>

            
        </div>
        );
}

export default Get;