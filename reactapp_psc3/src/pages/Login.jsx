import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../component/Context';
import {Navigate, useNavigate} from 'react-router-dom';
const initialState={
  name:"",
  Email:""
}
const Login = () => {
  const nav=useNavigate();
  // console.log(formarray)

  // const arr=JSON.parse(localStorage.getItem("user_data"));
  
  // console.log(arr[0].username);

   const{auth,setAuth}=useContext(Authcontext);
   
    const [text,settext]=React.useState(initialState);
    // const [udata,setudata]=React.useState([]);
    const ondatachange=(e)=>{
      // console.log(e.target.name);
      // e.preventDefault();
        settext({...text,[e.target.name]:e.target.value});
        // console.log(e.target.value);
    }
    console.log(text);

//     console.log(text);
//     const toggleauth=(e)=>{
//       e.preventDefault();
//       setudata([...udata,text]);
//       console.log(udata);
//         if(udata[0].name==="ajay"&&udata[0].email==="a@gmail.com")
//         {
//           // auth=true;
//          return <Navigate to="/"/> ;  
//  }

    
const toggleauthlogin=(e)=>{
  e.preventDefault();
let arr=JSON.parse(localStorage.getItem("user_data"));
  console.log(arr);

  const {name,Email}=text;
  console.log("username is :- ",name);

  if(name===""){
      alert("Enter  Username")

  }
  else if( Email==="" && !Email.includes("@")){
      alert("Enter Valid Email id");
  }
  else{

    if(arr&&arr.length){
      var verifydata=arr.filter((elem)=>{
        // console.log("Arrau is:- ",arr);
        return elem.username===name&&elem.email===Email;
      })
      // console.log("Array Data is :- ",verifydata);

      if(verifydata.length===0){
        alert("Enter Valid Details");
      }
      else{
        // auth=true;
        setAuth(!auth);
        

        // <Navigate to="/about"/>
        localStorage.setItem("user_login",JSON.stringify(verifydata));
        nav("/");
      }

    }

  }

 

}
    // console.log(auth);

    // if(auth){
    //     return <Navigate to="/"/>
    // }

  return ( <div style={{display:"flex",width:"100%",margin:"auto",marginTop:"30px"}}>

<div style={{width:"90%",margin:"auto"}}>
    <form onSubmit={toggleauthlogin}>

        <h2>Login Form</h2>
        <input type="text"  placeholder="Enter Your username "name="name" onChange={ondatachange} value={text.name} /> <br/>
        <input type="email" placeholder="Enter Your email" name="Email" onChange={ondatachange} value={text.Email}/><br/>
        <input type="submit" style={{backgroundColor:"lightgreen",height:"40px"}} />

    </form>
</div>

<div style={{width:"90%"}}>
    <img style={{marginTop:"60px"}} src="https://media.istockphoto.com/vectors/young-woman-secretary-answering-call-in-office-vector-id1208588832?k=20&m=1208588832&s=612x612&w=0&h=zc8TGI6ZS7tHS_KW4ez5JzL8Fo5DRgfYCqCDg8sJaI4=" alt="" />
</div>

{/* <Login user={formarray}/> */}
    </div>
  )
}

export default Login;



