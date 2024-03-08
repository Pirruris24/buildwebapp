//import logo from './logo.svg';
//import './App.css';
//import Maps from './component/fastapi';
//import Map from './component/image';
//import Form from './component/fastapi';
//import React, { useState } from 'react';
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterUser from './component/RegisterUser';
import Login from './component/Login';
import AnotherComponent from './component/AnotherComponent';
import Home from './component/Home'
import AdminBuildDB from './component/AdminBuildDB';
import DataTansformation from './component/AdminBuildDataTransformation';
import MyComponent from './component/MyComponent';



function App(){
  return (
    <Router>
      <Routes>
        <Route  path="/" Component={Home}/>
        <Route  path="/login" Component={Login}/>
        <Route  path="/registeruser" Component={RegisterUser}/>
        <Route  path="/maps" Component={AnotherComponent}/>
        <Route  path="/builddb" Component={AdminBuildDB}/>
        <Route  path="/datatransformation" Component={DataTansformation}/>
        <Route  path="/mycomponent" Component={MyComponent}/>
      </Routes>
     
            
    </Router>
    
  );

};





export default App;
