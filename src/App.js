//import libraries
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//import components
import Home from './Components/Home.js';
import PizzaForm from "./Components/PizzaForm";

const App = () => {
    return (
        <Router>
            <nav style={{display: "flex", margin: "10px"}}>
                <Link to={'/'}>
                    <p style={{margin: "10px"}}>Lambda Eats</p>
                </Link>
                <Link to={'/pizza'}>
                    <p style={{margin: "10px"}}>Pizza</p>
                </Link>
            </nav>
            <div>
                <Switch>
                    <Route path={'/pizza'}>
                        <PizzaForm/>
                    </Route>
                    <Route path={'/'}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
};
export default App;
