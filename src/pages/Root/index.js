import React from "react";
import { Router } from "react-static";
import Routes from "react-static-routes";

import NavBar from "../../components/NavBar";
import "./index.css";

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <div className="p-Root">
                    <header role="banner">
                        <NavBar />
                    </header>
                    <main className="p-Root-content">
                        <Routes />
                    </main>
                </div>
            </Router>
        );
    }
}
