import React from "react";
import { useState } from "react";
import Login from "./Login";
import "./signup.css"

const initial = {
    username: "",
    email: "",
    number: "",
    gender: "",
    married: false
}
export default function Formnew() {

    const [formdata, setformdata] = useState(initial);
    const [formarray, setformarray] = useState(JSON.parse(localStorage.getItem("user_data")) || []);


    const handlechange = (e) => {
        // console.log({[e.target.name]:"ajay"});
        // console.log(e.target.value);
        // console.log(e.target.checked);

        // you can write like this:- const {name,value,checked}=e.target

        // setformdata((prev)=>console.log(prev));
        // setformdata((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
        // or

        //for check box

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // console.log(e.target.value);
        setformdata({ ...formdata, [e.target.name]: value });

        // console.log({...formdata,[e.target.name]:e.target.value});



        // ex:-

        {/*
        const key = "age";

        let obj = {
            [key]: 24,
        }
    console.log(obj);*/}





        // console.log(formdata);
    }
    console.log(formdata);

    // you can write like this:- const {username,email,number,gender,married}=formdata;
    // console.log(formdata);
    const handlesubmit = (e) => {
        e.preventDefault();
        const { username, email, number, gender, married } = formdata;
        console.log("username is :- ", username);

        if (username === "") {
            alert("Enter Username")

        }
        else if (email === "" && !email.includes("@")) {
            alert("Enter Valid Email id");
        }
        else if (number.length !== 10) {
            alert("Enter Right Number");
        }
        else if (married == "") {
            alert("Married Status is not filled");

        }
        else {
            alert("User Registered Succesfully");
            setformarray([...formarray, formdata]);

        }
    }
    // console.log(formarray);
    localStorage.setItem("user_data", JSON.stringify(formarray));

    return <div style={{display:"flex",width:"100%",margin:"auto",marginTop:"30px"}}>

        <div style={{width:"90%",margin:"auto"}}>
            <form action="" onSubmit={handlesubmit}>

                <h2>Registration Form</h2>
                <input type="text"  placeholder="Enter Your username "name="username" onChange={handlechange} value={formdata.name} /> <br/>
                <input type="email" placeholder="Enter Your email"name="email" onChange={handlechange} value={formdata.email} /><br/>
                <input type="number" placeholder="Enter Your number"name="number" onChange={handlechange} value={formdata.number} /><br/>
                <input type="text" placeholder="Enter Your gender"name="gender" onChange={handlechange} value={formdata.gender} /><br/>
                Married/unmarried<input type="checkbox" placeholder="Married or not"style={{width:"15px",margin:"auto",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"15px",marginTop:"45px",marginLeft:"10px"}} name="married" onChange={handlechange} checked={formdata.married} /><br/>
                <input type="submit" style={{backgroundColor:"lightgreen",height:"40px"}} />

            </form>
        </div>

        <div style={{width:"90%"}}>
            <img style={{marginTop:"60px"}}src="https://media.istockphoto.com/vectors/young-woman-secretary-answering-call-in-office-vector-id1208588832?k=20&m=1208588832&s=612x612&w=0&h=zc8TGI6ZS7tHS_KW4ez5JzL8Fo5DRgfYCqCDg8sJaI4=" alt="" />
        </div>

        {/* <Login user={formarray}/> */}



    </div>
}