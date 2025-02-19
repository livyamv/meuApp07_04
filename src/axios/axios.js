import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.80:5000/api/v1/",
    header:{
      'accept': 'application/json'
    }  
  });
  
  const sheets ={
      postLogin:(user)=>api.get("Login",user)
  }