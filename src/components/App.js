import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'


import Header from './Header';
import Home from './Home';
import customers from './customers';
import items from './items';
import orders from './orders';

class App extends React.Component{

    render(){
        return(
            <div  className="container">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/customers' exact element={<customers.Get/>}/>
                      <Route path='/customers/create' exact element={<customers.Create/>}/>
                      <Route path='/customers/edit/:id' exact element={<customers.Edit/>}/>
                      <Route path='/customers/delete/:id' exact element={<customers.Delete/>}/>
                      <Route path='/items' exact element={<items.Get/>}/>
                      <Route path='/items/create' exact element={<items.Create/>}/>
                      <Route path='/items/edit/:id' exact element={<items.Edit/>}/>
                      <Route path='/items/delete/:id' exact element={<items.Delete/>}/>
                      <Route path='/orders' exact element={<orders.Get/>}/>
                      <Route path='/orders/create' exact element={<orders.Create/>}/>
                      <Route path='/orders/edit/:id' exact element={<orders.Edit/>}/>
                      <Route path='/orders/delete/:id' exact element={<orders.Delete/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;