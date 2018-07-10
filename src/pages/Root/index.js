import React from "react";
import { Router } from "react-static";
import Routes from "react-static-routes";

import NavBar from "../../components/NavBar";
import WebsiteFooter from "../../components/WebsiteFooter";
import "./index.css";

export default () => (
    <Router>
        <div className="p-Root">
            <header role="banner">
                <NavBar />
            </header>
            <main>
                <Routes />
            </main>
            <footer>
                <WebsiteFooter />
            </footer>
        </div>
    </Router>
);
