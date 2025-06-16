// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
import needle from "needle";
// import Home from "./components/Home";
function App() {
    // needle.get('http://localhost:3000/', (err, res) =>
    // {
    // console.log(res.body);
    // });
    return (
        <div className="App">
            <h1>Testing CRUD</h1>
            <Router>
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
