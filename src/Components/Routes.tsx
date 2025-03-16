import { createBrowserRouter } from "react-router";
import App from "../App";
import ProfileSection from "./Blog/ProfileSection";
import ProfileObject from "../Customize/Customise";
import HomePage from "./Blog/HomePage";

export function Routes() {

    return createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/about",
            element: <h1>About</h1>
        },
        {
            path: "/contact",
            element: <h1>Contact</h1>
        }
    ])}