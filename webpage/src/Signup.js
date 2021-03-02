import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { render } from "react-dom";
const axios = require('axios');


function Signup() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState("");
   

const submitHandler = (e) => {
  e.preventDefault();
  setEmail(e.target.email.value);
  setPassword(e.target.password.value);
  console.log(e.target.email.value);
}

axios.post('http://localhost:8080/api/notes', {
    Email: email,
    Password: password,
    },

  ).then(function (response) {
    console.log(response);
  });

return (

<div>
<form onSubmit={(e)=>submitHandler(e)}>
  
  <TextField type="email" name="email" label="email"/>
  <br />

  <TextField type="password" name="password" label="password" />

  <div className="login" >
    <Button type="submit" variant="contained" color="primary">Signup</Button>
  </div>
</form>

</div>

)

}

export default Signup;