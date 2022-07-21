import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"
import CircularProgress from '@mui/material/CircularProgress';

export default function Splash() {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/accueil");
        },[5000])
    },[])


  return (
    <div className="flex flex-col items-center justify-center " style={{height:"100vh"}}>
        <img src={logo}  style={{width:150,height:150}}/>
        <CircularProgress size={20}/>
    </div>
  )
}
