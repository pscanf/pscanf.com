import React from "react";
import { Link } from "react-static";

import "./index.css";

export default () => (
    <nav className="c-NavBar">
        <span className="c-NavBar-left-side">
            <Link className="c-NavBar-logo" exact={true} to="/">
                {"pscanf()"}
            </Link>
        </span>
        <span className="c-NavBar-right-side">
            <Link className="c-NavBar-link" exact={true} to="/blog">
                {"blog"}
            </Link>
            <span className="c-NavBar-separator" />
            <Link className="c-NavBar-link" exact={true} to="/projects">
                {"projects"}
            </Link>
        </span>
    </nav>
);
