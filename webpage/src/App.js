import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Signup from './Signup'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const axios = require('axios');

function App() {
    
  const [email ,setEmail]=useState('');
  const [password,setPassword]=useState('');

const submitHandler=(e)=>{
  e.preventDefault();
  setEmail(e.target.email.value);
  setPassword(e.target.password.value);
  console.log(e.target.email.value);
}

axios.get('/api/notes', {
  email: email,
  password: password,
  },

).then(response=>{
  console.log(response);

}) .catch(error=>{
  console.log(error);
});

return (

<div className="App">
<form  onSubmit={(e)=>submitHandler(e)}>
  <TextField type="email" label="Email" name="email"/>
  <br />
  <TextField type="password" label="Password" name="password"/>
  
    <div className="login" >
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </div>

  <Link to="/page2">
    <div className="signup">
      <Button  variant="contained">Signup</Button>
    </div>
  </Link>
</form>

</div>

);
}


export default App;