import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export const Balance = () =>{

  const [auth, setAuth] = useState(true)
  const [token, setToken] = useState(window.sessionStorage.getItem('token'))

  useEffect(()=>{
    axios({
      url: 'http://192.168.86.40:3000/api',
      method: 'post',
      data: {
        token
      }
    })
  },[])


  if(auth == false){
    return(
      <Redirect to="/login" />
    )
  }if(auth == true){
    return(
      <h1>balance</h1>
    )
  }
} 