import React, { useState } from "react";
import style from "./form.module.css";

const FormHandle = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [user, setUser] = useState({name:'', email: '', password: ''});

  const {name, email, password} = user;  // destructuring from user

   

  const handleChange = (e) => { 
      setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    // console.log(name, email, password);  
    console.log(user)
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <h3>Registration Form </h3>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            id="name"
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            id="email"
            value={email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            value={password}
            required
          />
        </div>
        <div>
          <input className={style.submitBtn} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormHandle;
