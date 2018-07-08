import React from "react";
import { Head, withRouteData } from "react-static";

import "./index.css";

export default withRouteData(({ websiteBasePath }) => (
    <section className="p-NotFound">
        <Head>
            <title>{"Page not found"}</title>
        </Head>
        <h1>{"Page not found"}</h1>
        <a href={websiteBasePath}>{"Back to the homepage"}</a>
    </section>
));
