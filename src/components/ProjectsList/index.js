import sortBy from "lodash/sortBy";
import React from "react";
import { Link } from "react-static";

import "./index.css";

export default ({ title, projects }) => (
    <section className="c-ProjectsList">
        <h3 className="c-ProjectsList-title">{title}</h3>
        <ul>
            {sortBy(projects, "position").map(project => (
                <li className="c-ProjectsList-project" key={project.name}>
                    <Link to={project.homepage}>
                        <h4 className="c-ProjectsList-project-name">
                            {project.name}
                        </h4>
                        <p className="c-ProjectsList-project-short-description">
                            {project.shortDescription}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);
