import React, { useState } from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./Form";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Todo from "./Todos";
import FunctionalCar from './FunctionalCar';
import ClassComponentCar from './ClassComponentCar';
export default function App() {
    const [count, setCount]=useState(0);
    const [todos,setTodos]=useState(["todo 1","todo 2"]);

    const increment=()=>{
        setCount((c)=>c+1);
    };
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact"  element={<Contact/>}/>
            <Route path="todos"  element={<Todo todos={todos}/>}/>
            <Route path="functionalComponent"  element={<FunctionalCar color="white"/>}/>
            <Route path="classComponent"  element={<ClassComponentCar />}/>
            <Route path="*" element={<NoPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);
//root.render(myelement);
