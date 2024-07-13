import Layout from "./Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pages from "./Pages/pages";
import SinglePost from "./Pages/singlepost";
import Signup from "./Pages/Contact/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path="/blog" exact element = {<Blog/>} />
          <Route path="/single_post" exact element = {<SinglePost/>} />
          <Route path="/pages" exact element = {<Pages/>} />
          <Route path="/contact" exact element = {<Contact/>} />   
          <Route path="/contact/signup" exact element = {<Signup/>} />   
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
