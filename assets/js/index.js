import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./home.js";
import Projects from "./projectMain.js";

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / >
        }
        /> <
        Route path = "/projects"
        element = { < Projects / >
        }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}
ReactDOM.render( < App / > , document.getElementById("root"));