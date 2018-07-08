import React from "react";
import { Head, withRouteData } from "react-static";

import PostsList from "../../components/PostsList";

export default withRouteData(({ posts }) => (
    <section className="p-Blog">
        <Head>
            <title>{"pscanf blog"}</title>
        </Head>
        <PostsList title="All my articles" posts={posts} />
    </section>
));
