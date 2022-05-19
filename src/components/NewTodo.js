import React, { useState } from 'react';
import style from './newTodo.module.css';


const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', description: ''})
    const {title, description} = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return{
                ...todo,
                [name]: e.target.value
            }
        })
    }

    const handleSubmit =(e) => {
        
        e.preventDefault();
        props.onAddTodo(todo)
        setTodo({title: '', description: ''})
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}> 
            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={handleChange} value={title} id="title" />
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" onChange={handleChange} value={description} id="description" />
            </div>
            <button type='submit' className={style.addBtn}>Add Todo</button>
        </form>
    );
};

export default NewTodo;