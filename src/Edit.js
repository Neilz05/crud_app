// import logo from './logo.svg';
import './App.css';
import array from "./array";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./components/Home";
function Edit() {
    function getID(){
        var id = localStorage.getItem('id');
        var Name = localStorage.getItem('name');
        var Age = localStorage.getItem('age');
        let entry = {id, Name, Age};
        return entry;
    }
    const entry = getID();
    const [formData, setFormData] = useState({
        Name: entry.Name,
        Age: entry.Age,
    });
    let history = useNavigate();


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        console.log("SUBMITTED");
        let a = array[index];
        console.log("formdata: ", formData);
        a.Name = formData.Name;
        a.Age = formData.Age;
        history("/");
    }

    let index = array
        .map(function (e) {
            return e.id;
        }).indexOf(entry.id);
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="input-form">
                <h3>Name: </h3>
                <input 
                    value={formData.Name}
                    name="Name"
                    onChange={handleChange}>
                </input>
            </div>
            <div className="input-form">
                <h3>Age: </h3>
                <input 
                    value={formData.Age}
                    name="Age"
                    onChange={handleChange}>
                </input>
            </div>
            <Button type="submit" variant="primary" size="lg" className="me-2">Submit</Button>
            <Link to="/">
                <Button 
                    onClick={() => getID()}
                    variant="success" size="lg">
                    Home
                </Button>
            </Link>
        </form>
        </div>
    )
}

export default Edit;
