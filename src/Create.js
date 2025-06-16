// import logo from './logo.svg';
import './App.css';
import array from "./array"
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./components/Home";
function Create() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [formData, setFormData] = useState({
        id: '',
        Name: '',
        Age: '',
    });

    let history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newID = uuid();
        const uni = newID.slice(0, 8); // Slicing unique id

        setFormData({
            ...formData,
            id: uni,
            [name]: value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        array.push(formData);
        // array.push({id: formData.id, Name: formData.name, Age: formData.age});
        history("/");
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="input-form">
                <h3>Name: </h3>
                <input
                    // value={formData.name}
                    name="Name"
                    onChange={handleChange}
                />
            </div>
            <div className="input-form">
                <h3>Age: </h3>
                <input
                    type="text"
                    name="Age"
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" onClick={handleSubmit} variant="primary" size="lg" className="me-2">
                Submit
            </Button>
            <Link to="/">
                
                <Button 
                    variant="success" size="lg">
                    Home
                </Button>
            </Link>
        </form>
        </div>

    )
}

export default Create;
