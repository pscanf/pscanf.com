import React from "react";
import { withRouteData } from "react-static";

import Intro from "../../components/Intro";
import PostsList from "../../components/PostsList";
import ProjectsList from "../../components/ProjectsList";
import "./index.css";

export default withRouteData(({ intro, lastThreePosts, topThreeProjects }) => (
    <section className="p-Home">
        <Intro intro={intro} />
        <section className="p-Home-content-links">
            <PostsList title="Read my latest articles" posts={lastThreePosts} />
            <ProjectsList
                title="Check out some of my projects"
                projects={topThreeProjects}
            />
        </section>
    </section>
));
