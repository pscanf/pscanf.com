import React from "react";

import "./index.css";

export default () => (
    <section className="p-NotFound">
        <h1>{"Page not found"}</h1>
        {/*
            Link to / as we can't retrieve websiteBasePath from page data, see
            react-static issue #628
        */}
        <a href="/">{"Back to the homepage"}</a>
    </section>
);
