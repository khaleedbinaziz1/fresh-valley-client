import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import AddProducts from "./components/AddProducts/AddProducts";
import ManageProduct from "./components/ManageProducts/ManageProduct";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import logo from '../src/icons/logo.png'
import ProductDetail from './components/ProductDetail/ProductDetail';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Container className="header">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/addProducts">Admin</Link>
              </li>
              <li>
                <Link className="link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/addProducts">
            <AddProducts />
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <PrivateRoute path="/manageProducts">
            <ManageProduct />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productDetails">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
