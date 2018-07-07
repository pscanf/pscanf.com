import convert from "htmr";
import React from "react";
import { withRouteData } from "react-static";

import Avatar from "../../components/Avatar";
import ContactLinks from "../../components/ContactLinks";
import ProjectsDetailedList from "../../components/ProjectsDetailedList";
import "./index.css";

export default withRouteData(({ about, projects, websiteBasePath }) => (
    <div className="p-About">
        <Avatar websiteBasePath={websiteBasePath} />
        <ContactLinks />
        {convert(about.contents)}
        <ProjectsDetailedList title="Projects:" projects={projects} />
    </div>
));
