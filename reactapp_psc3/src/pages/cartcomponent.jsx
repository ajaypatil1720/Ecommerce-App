import React from 'react'
import { useState } from 'react';
import { Delitemtocart } from './redux/action';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
const Cartcomponent = (props) => {
    const {data}=props;
    console.log("Data Prop is:- ",data);
    const [qty,setqty]=useState(1);
    const [totalpro,settotal]=useState(0);
    const [totalamount,settotalamount]=useState(0);

    const dispatch=useDispatch();
   
   useEffect(()=>{
        settotalamount(data[0].price);
   },[data]);
    let total=0;
    let totalamountofproduct=0;
    
   
    const handledata=(qtypro,price)=>{
        console.log("price:-",price);
        setqty((prev)=>prev+qtypro);
        total=qty*price;
        settotal(total);

        //  totalamountofproduct= totalamountofproduct+total;
         settotalamount((prev)=>prev+total);

    }
    console.log("total is:- ",totalpro);
    console.log("Quantity is ", qty);
    console.log(data);


    return ( 
        <> 
        {    
      data.map((elem)=>{ 
      return <div  style={{display:"flex",marginTop:"30px",padding:"20px"}}>
            <img src={elem.image} alt="imgcart" width="100px" height="100px"/>
            <div style={{margin:"auto"}}>
            <h3 style={{marginTop:"20px"}}>{elem.title}</h3>
            </div>
            <div style={{display:"flex",height:"30px",marginTop:"20px"}}>
            <button style={{marginLeft:"10px"}} onClick={()=>handledata(elem.qty,elem.price)}>+</button>
            <button style={{marginLeft:"10px"}}>{totalpro}</button>
            <button style={{marginLeft:"10px"}} disabled={qty===0} onClick={()=>handledata(-elem.qty,-elem.price)}>-</button>
            </div>
            <button onClick={()=>dispatch(Delitemtocart(elem))}>Remove Item</button>
        </div>
      
        })
    }

    <h2>Total is:- {totalamount}</h2>
     </>  
   
  )
}

export default Cartcomponent;