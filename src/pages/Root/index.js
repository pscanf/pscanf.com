import React from "react";
import { Head, Router } from "react-static";
import Routes from "react-static-routes";

import GoogleAnalytics from "../../components/GoogleAnalytics";
import NavBar from "../../components/NavBar";
import { GOOGLE_ANALYTICS_ID } from "../../config";
import "./index.css";

export default () => (
    <Router>
        <div className="p-Root">
            <Head>
                <script
                    id="app-config"
                    src="http://localhost:34567app-config.js"
                />
            </Head>
            <header role="banner">
                <NavBar />
            </header>
            <main className="p-Root-content">
                <GoogleAnalytics id={GOOGLE_ANALYTICS_ID}>
                    <Routes />
                </GoogleAnalytics>
            </main>
        </div>
    </Router>
);
