import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import "./styles.scss";

const _App = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(<_App/>, document.querySelector("#root"));
