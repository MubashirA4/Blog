import React, { useState, useEffect } from 'react'
import Layout from "./Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pages from "./Pages/pages";
import SinglePost from "./Pages/singlepost";
import Signup from "./Pages/signin/signup";
import Signin from './Pages/signin/signin';
import { Routes, Route } from "react-router-dom";
import CreateBlog from "./Pages/createblog";
import Dashboard from "./Dashboard";
import PrivateRoute from './Layout/privateroute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('auth') === 'true');

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path="/blog" exact element = {<Blog/>} />
          {/* <Route path="/single_post" exact element = {<SinglePost/>} /> */}
          <Route path="/pages" exact element = {<Pages/>} />
          <Route path="/contact" exact element = {<Contact/>} />   
          <Route path="/signin" exact element = {<Signin/>} />      
          <Route path="/signup" exact element = {<Signup/>} />      
          {/* <Route path="/add_update_blog" exact element = {<CreateBlog/>} />       */}
          {/* <Route path="/dashboard" exact element = {<Dashboard/>} />  */}
          <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />} />
          <Route path="/add_update_blog" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<CreateBlog/>} />} />
          <Route path="/single_post" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SinglePost/>} />} />
       
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
