import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Signin from "./Components/SignIn/SignIn";
import Admin from "./Pages/Admin";
import AddProPage from "./Pages/AddProPage";
import ContactPage from "./Pages/ContactPage";
import { Switch } from "react-router-dom";
import React from "react";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Signin} />
                <PrivateRoute path="/Admin" component={Admin} />
                <PrivateRoute path="/addProduct" component={AddProPage} />
                <PrivateRoute path="/contactList" component={ContactPage} />
            </Switch>
        </Router>
    );
}

export default App;
