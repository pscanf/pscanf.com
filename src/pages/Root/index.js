import React from "react";
import { Router } from "react-static";
import Routes from "react-static-routes";

import NavBar from "../../components/NavBar";
import "./index.css";

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <section className="p-Root">
                    <NavBar />
                    <main className="p-Root-content">
                        <Routes />
                    </main>
                </section>
            </Router>
        );
    }
}
