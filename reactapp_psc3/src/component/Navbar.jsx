import React from 'react';
// import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
// import { Authcontext } from './Context';
import styles from "./nav.module.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";

import { useSelector } from 'react-redux';
const Navbar1 = () => {
const cartqty=useSelector((state)=>state.handlecart);
  // const {toggleauth}=useContext(Authcontext);
// console.log(styles);
    // const obj=[{path:"/",name:"Home"},{path:"/about",name:"About"},{path:"/contact",name:"Contact"},{path:"/product",name:"Product"},{path:"/login",name:"Login"},{path:"/signin",name:"Sign in"}]
  return (
        <div >


          {/* ---------------------------------------Navbar-------------------------*/}

          <Navbar bg="light" className="shadow p-3 mb-5 bg-body rounded" variant="light" fixed="top">
        <Container >
          <Navbar.Brand to="/" className='fw-bold fs-4'>Fav_shopping Zone</Navbar.Brand>
          <Nav className="mx-auto " >
            <div style={{display:"flex",marginLeft:"250px"}}>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link"to="/about">About</NavLink>
            <NavLink className="nav-link"to="/contact">Contact</NavLink>

            <NavLink className="nav-link"to="/product">Product</NavLink>
            </div>

            <div className='buttons' style={{marginLeft:"250px"}}>
            <NavLink to="/login" className="buttons btn btn-outline-dark ms-2"><i className='fa fa-sign-in me-1'>Login</i></NavLink>
            <NavLink to="/signin"  className="buttons btn btn-outline-dark ms-2"><i className='fa fa-user-plus me-1'>Sign up</i></NavLink>
            <NavLink to="/cart"  className="buttons btn btn-outline-dark ms-2"><i className='fa fa-shopping-cart me-1'>Cart({cartqty.length})</i></NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>


          {/* ------------------------------------------------------------------------------ */}
          {/* <h2 style={{color:"green"}}>Favourite Shopping Zone</h2> */}
    {/* <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",display:"flex",height:"80px",justifyContent:"space-around",justifyItem:"center", backgroundColor:"lightgreen"}}> */}

      {/* <h2 className={styles.active}>hello css here</h2> */}
    
    {/* {obj.map((nav,indx)=>(

         <NavLink style={{marginTop:"50px",textDecoration:"none",color:"black",fontSize:"20px",fontWeight:"bold"}}
  
        className={({ isActive })=>
       isActive ? styles.active :styles.default
      }
      key={nav.path} to={nav.path}
        >{nav.name}</NavLink>
        
       
    ))};

    <button style={{backgroundColor:"green",width:"80px",color:"white",fontWeight:"bold",height:"30px",marginTop:"45px",borderRadius:"10px",border:"none",padding:"7px"}} onClick={toggleauth}>Logout</button>

    </div>*/}
    </div> 
 
  )
}

export default Navbar1;