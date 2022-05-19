import React, { useState } from "react";
import style from "./form.module.css";

const Form = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user

    // handleOnChange 
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
         
    }

    // handleOnSubmit 
    const handleSubmit = (e) => {
        console.log('form submitted');
        console.log(user)
        e.preventDefault();

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" onChange={handleChange} id="name" value={name} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} id="email" value={email} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} id="password" value={password} required />
        </div>
        <div>
          <input type="submit" value="Submit" className={style.submitBtn} />
        </div>
      </form>
    </div>
  );
};

export default Form;
