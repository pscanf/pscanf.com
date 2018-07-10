import convert from "htmr";
import React from "react";
import { Head, withRouteData } from "react-static";

import Avatar from "../../components/Avatar";
import ContactLinks from "../../components/ContactLinks";
import ProjectsDetailedList from "../../components/ProjectsDetailedList";
import "./index.css";

export default withRouteData(({ about, projects }) => (
    <section className="p-About">
        <Head>
            <title>{"About pscanf"}</title>
        </Head>
        <Avatar />
        <ContactLinks />
        {convert(about.contents)}
        <ProjectsDetailedList title="Projects:" projects={projects} />
    </section>
));
