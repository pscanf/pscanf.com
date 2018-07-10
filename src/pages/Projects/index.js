import React from "react";
import { Head, withRouteData } from "react-static";

import ProjectsList from "../../components/ProjectsList";

export default withRouteData(({ projects }) => (
    <section className="p-Projects">
        <Head>
            <title>{"pscanf's projects"}</title>
        </Head>
        <ProjectsList
            title="Some of my open source projects"
            projects={projects}
        />
    </section>
));
