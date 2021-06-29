import React from 'react';
import './App.css'
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import Dashboard from './component/pages/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './component/pages/products/Products';


const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path ='/products'>
              <Products/>
            </Route>
            
            <Route exact path='/'>
              <Dashboard />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
};

export default App;