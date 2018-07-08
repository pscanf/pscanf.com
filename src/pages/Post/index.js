import format from "date-fns/format";
import convert from "htmr";
import React from "react";
import { Head, withRouteData } from "react-static";

import "./index.css";

export default withRouteData(({ post }) => (
    <article className="p-Post">
        <Head>
            <title>{`${post.title} - pscanf blog`}</title>
            <meta name="description" content={post.description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@pscanf" />
            <meta property="og:type" content="article" />
        </Head>
        <header>
            <h1 className="p-Post-title">{post.title}</h1>
            <time className="p-Post-date">
                {"Published on "}
                {format(post.date, "MMMM D, YYYY")}
            </time>
        </header>
        <section className="p-Post-content">{convert(post.contents)}</section>
    </article>
));
