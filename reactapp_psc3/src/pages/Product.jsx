import React from 'react';
import {useEffect,useState} from 'react';
import { useContext } from 'react';
import styles from './Product.module.css';
import {Link,useSearchParams} from 'react-router-dom';
import Skeleton,{SkeletonTheme}from 'react-loading-skeleton';
const convertintonumber=(num)=>{

    num=Number(num);

    if(num==="number"&&num<=0){
       return num=1;
    }
    if(!num){
        return num=1;
    }
    return num;
}

const Product = () => {
    const [searchparam,setsearchparam]=useSearchParams();
    const[total,settotal]=useState(0);
    const [loading,setloading]=useState(false);
    
    // console.log(searchparam);
    // console.log(searchparam.get("page)

    const initvalue=convertintonumber(searchparam.get("page"));
    // console.log(typeof initvalue)
    const [page,setpage]=useState(initvalue);
    // setsearchparam({page})
    const [orderby,setorderby]=useState(""); 
    const [filterby,setfilter]=useState("");

    const [pro_array,setproduct_array]=useState([]);
    const limit=6;
    useEffect(()=>{
        let url;

        if(orderby){
            setloading(true);
          
            url=`http://localhost:8800/Product?_page=${page}&_limit=${limit}&_sort=price&_order=${orderby}`;
            setloading(false);

        }
        else if(filterby)
        {
      
            setloading(true);
            url=`http://localhost:8800/Product?_page=${page}&_limit=${limit}&category=${filterby}`
         
            setloading(false);

        }
        else{
         
            setloading(true);
            url=`http://localhost:8800/Product?_page=${page}&_limit=${limit}`;
            setloading(false);

        }
            async function getdata(){
                setloading(true);
                    let res=await fetch(url);
                    settotal(res.headers.get("X-Total-Count"));
                    // console.log(res.headers.get("X-Total-Count"));//to get the total product in array...you can get this key from network in inspect
                    let data=await res.json();
                    // console.log(data);
                    setproduct_array(data);
                    setloading(false);
            }
            getdata();
    },[page,orderby,filterby])

    useEffect(()=>{
        if(orderby){
            setsearchparam({page,orderby}) 
        }
        else if(filterby){
            setsearchparam({page,filterby})
        }
        else{
        setsearchparam({page})
        }

    },[page,orderby,filterby]);
    console.log(pro_array);

    const handlepagination=(val)=>{
            setpage((prev)=>prev+val);
    }
    if(loading){
        return <>
        <div className='col-md-3'>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
         <Skeleton count={5} height={350}/>
         </SkeletonTheme>
         </div>
         </>
    }
    
  return (
    <>

        {/* <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="imag" style={{marginTop:"40px",width:"100%",height:"500px"}}/> */}


                <div style={{display:"flex",width:"100%",justifyContent:"space-evenly",marginTop:"50px"}}>
                <div style={{width:"100%",display:"flex",justifyContent:"center",marginLeft:"30px"}}>
                <button style={{marginLeft:"20px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setorderby("asc")}>Sort Ascending By Price</button>
                <button style={{marginLeft:"20px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setorderby("desc")}>Sort Descending By price</button>
                <button style={{marginLeft:"20px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setorderby("")}>Reset</button>
                </div>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <button style={{marginLeft:"15px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setfilter("men's clothing")}>men's clothing</button>
                <button style={{marginLeft:"15px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setfilter("jewelery")}> jewelery</button>
                <button style={{marginLeft:"15px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}}onClick={()=>setfilter("electronics")}>Electronics</button>
                <button style={{marginLeft:"15px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",borderRadius:"10px",border:"none",padding:"15px"}} onClick={()=>setfilter("")}>Reset</button>
                </div>
                </div>


       <div style={{display:"grid",margin:"auto",gridTemplateColumns:"repeat(2,1fr)",gridTemplateRows:"auto",gap:"30px",marginTop:"60px",width:"80%"}}>
        
            {
                pro_array.map((elem)=>{
                       return   <div key={elem.id} style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"30px",borderRadius:"15px"}}>
                                  <Link to={`/product/${elem.id}`}><img style={{width:"150px",height:"150px"}} src={elem.image} alt="img_product" /></Link>
                                <h3>{elem.title}</h3>
                                <h4>{elem.price}</h4>
                        </div>
                      
                     

                })
            }

               

    </div>

                <div style={{margin:"auto",display:"flex",justifyContent:"center",padding:"10px",width:"80%",marginTop:"20px"}}>
                <button style={{backgroundColor:"lightgreen",fontWeight:"bold",color:"black",width:"200px",padding:"15px",marginLeft:"10px",border:"none",borderRadius:"10px"}}  onClick={()=>handlepagination(-1)} disabled={page==1}>Prev</button>
                <button style={{width:"100px",padding:"15px",marginLeft:"10px",border:"none",borderRadius:"10px",fontWeight:"bold"}} >{page}</button>
                <button style={{backgroundColor:"lightgreen",fontWeight:"bold",color:"black",width:"200px",padding:"15px",marginLeft:"10px",borderRadius:"10px",backgroundColor:"lightgreen",fontWeight:"bold",color:"black",border:"none"}}onClick={()=>handlepagination(1)} disabled={page===Math.ceil(total/limit)}>Next</button>
                </div>
                

              
      
    </>
 
  )
}

export default Product