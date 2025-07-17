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
import axios from "axios";
// import Home from "./components/Home";
function Create() {
    // const [data, setData] = useState([]);
    // function handleGet() {
    //     axios.get("/api/test")
    //         .then(response => {
    //             console.log(response.data);
    //             setData(response.data);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
    // return (
    //     <div>
    //         <Button className="primary" onClick={handleGet}>TRY GET</Button>
    //         {data.map((item, index) => (
    //             <p key={index}>
    //                 Name: {item.name}
    //                 <br />
    //                 Home: {item.home}
    //             </p>
    //         ))}
    //     </div>
    // )
    // const payload = {
    //     key1: "value1",
    //     key2: "value2"
    // };


    // function handlePost(payload) {
    //     axios.post("/api/test", payload)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => console.error("Error:", error));
    // }
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [formData, setFormData] = useState({
        // id: '',
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
            // id: uni,
            [name]: name == "Age" ? parseInt(value) : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        array.push(formData);
        // array.push({id: formData.id, Name: formData.name, Age: formData.age});
        axios.post("/api/test", formData)
        .then(response => {
            // console.log(response.data);
            history("/");
        })
        .catch(error => console.error("Error:", error));
    }

    const goHome = (e) => {
        history("/");
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="input-form">
                <h3>Name: </h3>
                <input
                    value={formData.name}
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
            <Button type="submit" variant="primary" size="lg" className="me-2">
                Submit
            </Button>
                <Button onClick={goHome} 
                    variant="success" size="lg">
                    Home
                </Button>
        </form>
        </div>
    )
}

export default Create;
