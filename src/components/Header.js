import React from 'react'
import { Link } from "react-router-dom";


class Header extends React.Component{

    render(){
        return (
    <div className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/customers" className="nav-link">Customers</Link></li>
        <li className="nav-item"><Link to="/items" className="nav-link">Items</Link></li>
        <li className="nav-item"><Link to="/orders" className="nav-link">Orders</Link></li>
      </ul>
    </div>)
    }
}

export default Header;