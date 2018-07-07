import React from "react";
import { withRouteData } from "react-static";

import PostsList from "../../components/PostsList";

export default withRouteData(({ posts }) => (
    <section className="p-Blog">
        <PostsList title="All my articles" posts={posts} />
    </section>
));
