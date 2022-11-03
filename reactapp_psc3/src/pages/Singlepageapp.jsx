import React from 'react';
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { Additemtocart,Delitemtocart } from './redux/action';

const Singlepageapp = () => {
  const nav = useNavigate();
  const para = useParams();
  console.log(para);//{prod_id:2}

  const { pro_id } = para;
  console.log(pro_id);
  const [user_data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const [cartbtn,setcartbtn]=useState("Add to Cart");
  // const 

  useEffect(() => {
    setloading(true);
    fetch(`http://localhost:8800/Product/${pro_id}`).
      then((res) => { return res.json() }).
      then((data) => setData(data));
    setloading(false);
  }, []);

  const dispatch=useDispatch();
  // const Additemtocart=(user_data)=>{
   
  // }
  // console.log(user_data.image);

  const { rating } = user_data;
  console.log(rating);

  if (loading) {
    return <>
      <div className='col-md-6'>
        <Skeleton height={400} />
      </div>

      <div className="col-md-6">
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={150} />

      </div>
    </>
  }

  const addtocart=(user_data)=>{
    if(cartbtn==="Add to Cart")
    {
      dispatch((Additemtocart(user_data))) 
      setcartbtn("Remove item");


    }
    else{
      dispatch((Delitemtocart(user_data)))
     setcartbtn("Add to Cart");
    }

  }
  return (<>
    <div style={{ display: "flex", width: "80%", height: "500px", padding: "30px", paddingLeft: "20px", margin: "auto", marginTop: "100px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

      <div style={{ width: "40%" }}>
        <img src={user_data.image} alt="img" height="300px" />
        {/* <h2>"Category:- "{user_data.category}</h2> */}
      </div>
      <div style={{ width: "60%", borderLeft: "1px solid" }}>
        <div style={{ marginLeft: "20px", lineHeight: "33px" }}>

          <h2 >{user_data.title}</h2>
          <p style={{ marginTop: "50px"}}>Details:- {user_data.description}</p>
          <h3 style={{ marginTop: "50px" }}>Price:- ${user_data.price}</h3>

          {/* <p>Rating:- {rating.rate}</p> */}
        </div>
        <div style={{ display: "flex", margin: "auto", marginTop: "30px", justifyContent: "center", gap: "15px" }}>
       <button style={{ borderRadius: "10px", border: "none", width: "130px", height: "50px" }} onClick={()=>addtocart(user_data)}>{cartbtn}</button>
          {/* <NavLink to="/cart"> <button  > </NavLink> */}
          
          <NavLink to="/cart"><button style={{ borderRadius: "10px", border: "none", width: "130px", height: "50px" }}>Go To Cart</button></NavLink>
        </div>
      </div>
    </div>
    <button style={{ marginTop: "30px" }} onClick={() => nav("/product")}>Go back--</button>
  </>
  )
}

export default Singlepageapp