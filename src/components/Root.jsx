import React from "react";
import App from "./App";
import NabigationBar from "./NabigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NoMatch from "./pages/NoMatch";
// import About from "./pages/About";

export default function Root(){
const routes = [
    {path:'/', name:'Home', Component: App, exact:true},
    {path:'/about', name:'About', Component: About, exact:false},
    {path:'/contact', name:'Contact', Component: Contact, exact:false},
    {path:'/blog', name:'Blog', Component: Blog, exact:true},
    {path:'/blog/:id', name:'Post', Component: BlogPost, exact:false},
    {path:'*', name:'No Match', Component: NoMatch, exact:false},
];

return(
    <Router>
    <div className="todo-app-container">
<NabigationBar />
<div className="content">
    <Routes>
        {routes.map(({path, Component, exact}) => (
            <Route exact={exact} path={path} element={<Component />}></Route>
        ))}
        {/* <Route exact path="/" element={<App/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogPost />}></Route>
        <Route path="*" element={<NoMatch />}></Route> */}
    </Routes>

</div>
    {/* <About/> */}
    </div>
    </Router>
);

}