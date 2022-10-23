import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute({children}) {
const navigate = useNavigate();
var [loading,setLoading] = useState(true);
 useEffect(()=>{
    async function ax(){
      setLoading(true);
      try{
       const {data} =  await axios.get('http://localhost:8080/me', {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials:true,'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
      }).then(r => r);
      if (!data) {
        navigate('/login');
      }

      } catch(error){
        navigate('/login');
      } finally{
        setLoading(false);
      }
      
    }
    ax();
 },[]);
 if(loading){
  return (<h1>Loading...</h1>)
 }
 else{
   return(children);
 }
}

export default ProtectedRoute