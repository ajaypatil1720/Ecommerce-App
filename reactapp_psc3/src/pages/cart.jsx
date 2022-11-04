import React from 'react'
import { useState } from 'react';
import store from './redux/store';
import { useSelector } from 'react-redux';
import Cartcomponent from './cartcomponent';
import { NavLink } from 'react-router-dom';

const Cart = () => {
const data_from_redux_storage=useSelector((state)=>state.handlecart);
console.log("hello:- ",data_from_redux_storage);
  const [datafromstore,setdatafromstore]=useState({});
//  store.subscribe(()=>setdatafromstore(store.getState()));
//  console.log("data from store",datafromstore)
//   store.subscribe(()=>console.log(store.getState()));
const emptycart=()=>{
  return <h2>Empty Cart.....</h2>
}
const checkout=()=>{
  return (<>

    <NavLink to="/checkout"> <button className='btn btn-secondary btn-lg'> Checkout </button></NavLink>
    </>
  )
  }
  return (
    <>
    <div style={{marginTop:"100px"}} >
    <h2>Cart Page</h2>
    <div className="bg-light rounded-3" style={{width:"70%",margin:"auto",border:"1px solid",marginTop:"30px"}}>
      {data_from_redux_storage.length===0 && emptycart()}
      <Cartcomponent data={data_from_redux_storage}/>
      {data_from_redux_storage.length!==0 && checkout()}
      
    </div>
    </div>
    </>
  )
}

export default Cart;