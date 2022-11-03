import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Authcontext } from '../component/Context';
import Product from './Product';



const Home = () => {

  const {setAuth}=useContext(Authcontext);


    const loginuser=JSON.parse(localStorage.getItem("user_login"));
    let registeruser=JSON.parse(localStorage.getItem("user_data"));

    const handledelte=(removeuser)=>{

      const activeuser=registeruser.filter((elem)=>{

        return elem!==removeuser;
      })
      // console.log(registeruser);
      localStorage.setItem("user_data",JSON.stringify(activeuser));
      setAuth(true);
      window.location.reload();
      //localStorage.removeItem(deleteuser);       

        console.log(activeuser);
      

      
      
    }

    
  return (<>
   <div style={{marginTop:"90px"}}className="card bg-dark text-black border-0 ">
    {/* <h2>Hello</h2> */}
  <img height="600px"src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img" alt="product_image"/>
  <div className="card-img-overlay ">
    <div>    
      <h5 className="card-title display-3 fw-bold mb-3">New Season Arrival</h5>
    <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Let's Do Shopping!!</p>

    
    </div>

  </div>
</div>
     {/* <div style={{width:"80%",height:"auto",backgroundColor:"lightgreen",color:"white",margin:"auto",marginTop:"30px",padding:"10px"}}>
         <h2>Admin Panal</h2>
     {
         registeruser&&registeruser.length?registeruser.map((elem,index)=>{
                return <div key={index} style={{display:"flex",justifyContent:"space-around",backgroundColor:"white",color:"black",margin:"auto",marginTop:"20px",width:"80%"}}>
                  
                <h3>{elem.username}</h3>
                <p><b>{elem.email}</b></p>
                <p><b>{elem.number}</b></p>
                <p><b>{elem.married}</b></p>
                <p><b>{elem.gender}</b></p>
                <button onClick={()=>handledelte(elem)}style={{width:"150px",height:"30px",marginTop:"10px",backgroundColor:"red",borderRadius:"10px"}}>Delete</button>
                </div>
          }):"empty array"
        }
    </div> */}

    <Product/>
    </>
 
  )
}

export default Home;