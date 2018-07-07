import convert from "htmr";
import React from "react";

import "./index.css";

export default ({ intro }) => (
    <header className="c-Intro">
        <h1 className="c-Intro-logo">{"pscanf()"}</h1>
        <section className="c-Intro-description">
            {convert(intro.contents)}
        </section>
    </header>
);
