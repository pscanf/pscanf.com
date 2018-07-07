import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Root from "./pages/Root";

// When loaded in the browser, render the app
if (typeof document !== "undefined") {
    ReactDOM.render(<Root />, document.getElementById("root"));
}

// Export the top-level component for static rendering
export default Root;
