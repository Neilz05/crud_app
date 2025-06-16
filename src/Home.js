
// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./components/Home";
function Home() {
    let history = useNavigate();
    function deleted(id){
        let index = array.map(function(e){
            return e.id;
        })

        const entry = array.findIndex(item => item.id === id);
        array.splice(entry, 1); // entry = entry with index to be deleted, '1' is = delete, 0/null = do nothing
        
        console.log('entry is', entry);
        history('/'); //redirect to same page to rerender the page
    }

    function setID(id, name, age){
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }
    return (
        <div style={{ margin: "2rem" }}>
            <h1>List of Users</h1>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        {Object.keys(array[0]).map((key, index) => {
                                if(index == 0)
                                    return;
                                return <th key={index}>{key}</th>
                        })}
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to="/edit">
                                        <Button 
                                            onClick={() => setID(item.id, item.Name, item.Age)}
                                            className="me-2">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        onClick={() =>deleted(item.id)}
                                        variant="danger">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Link to="/create">
                <Button variant="success" size="lg">
                    Create New User
                </Button>
            </Link>
        </div>

        // <div className="Home">
        //     <h1>Testing CREATE</h1>
        //     <Router>
        //         <Routes>
        //             // <Route path="/"/*  element={<Home />} */ />
        //             <Route
        //                 path="/create"
        //                 /* element={<Home />} */
        //             />
        //         </Routes>
        //     </Router>
        // </div>

    )
}

export default Home;
