import format from "date-fns/format";
import React from "react";
import { withRouteData } from "react-static";
import convert from "htmr";

import "./index.css";

export default withRouteData(({ post }) => {
    return (
        <article className="p-Post">
            <header>
                <h2 className="p-Post-title">{post.title}</h2>
                <time className="p-Post-date">
                    {"Published on "}
                    {format(post.date, "MMMM D, YYYY")}
                </time>
            </header>
            <section className="p-Post-content">
                {convert(post.contents)}
            </section>
        </article>
    );
});
