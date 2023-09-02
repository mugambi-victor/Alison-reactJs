import React from "react";
import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/todos"}>Todo</Link>
                </li>
                <li>
                    <Link to={"/functionalComponent"}>Functional Component</Link>
                </li>
                <li>
                    <Link to={"/classComponent"}>Class Component</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default Layout;