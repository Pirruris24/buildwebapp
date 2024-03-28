import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUser from './component/RegisterUser';
import Login from './component/Login';
import AnotherComponent from './component/AnotherComponent';
import Home from './component/Home';
import AdminBuildDB from './component/AdminBuildDB';
import DataTansformation from './component/AdminBuildDataTransformation';
import MyComponent from './component/MyComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/maps" element={<AnotherComponent />} />
        <Route path="/builddb" element={<AdminBuildDB />} />
        <Route path="/datatransformation" element={<DataTansformation />} />
        <Route path="/mycomponent" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
