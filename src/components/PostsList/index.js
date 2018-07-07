import React from "react";
import { Link } from "react-static";
import format from "date-fns/format";

import "./index.css";

export default ({ title, posts }) => (
    <section className="c-PostsList">
        <h3 className="c-PostsList-title">{title}</h3>
        <ul>
            {posts.map(post => (
                <li className="c-PostsList-post" key={post.slug}>
                    <Link to={`/blog/${post.slug}/`}>
                        <h4 className="c-PostsList-post-title">{post.title}</h4>
                        <time className="c-PostsList-post-date">
                            {format(post.date, "MMMM D, YYYY")}
                        </time>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);
