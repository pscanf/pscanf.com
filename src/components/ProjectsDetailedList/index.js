import classnames from "classnames";
import lowerFirst from "lodash/lowerFirst";
import sortBy from "lodash/sortBy";
import convert from "htmr";
import React from "react";
import ExternalLinkIcon from "react-icons/lib/fa/external-link";

import "./index.css";
import Tags from "../Tags";

export default class ProjectsDetailedList extends React.Component {
    state = { expandedProjects: {} };

    getToggleProject = project => () =>
        this.setState({
            expandedProjects: {
                ...this.state.expandedProjects,
                [project.name]: !this.state.expandedProjects[project.name]
            }
        });

    renderProject = project => {
        const isExpanded = !!this.state.expandedProjects[project.name];
        const showMoreOrLess = isExpanded
            ? "Hide description"
            : "Show description";
        return (
            <li
                className={classnames("c-ProjectsDetailedList-project", {
                    expanded: isExpanded
                })}
                key={project.name}
            >
                <h4 className="c-ProjectsDetailedList-project-title">
                    <span className="c-ProjectsDetailedList-project-title-name">
                        {project.name}
                        {": "}
                    </span>
                    <span className="c-ProjectsDetailedList-project-title-short-description">
                        {lowerFirst(project.shortDescription)}
                    </span>
                    <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLinkIcon />
                    </a>
                </h4>
                <Tags tags={project.technologies} />
                <section className="c-ProjectsDetailedList-project-description">
                    {convert(project.contents)}
                </section>
                <button onClick={this.getToggleProject(project)}>
                    {showMoreOrLess}
                </button>
            </li>
        );
    };

    render() {
        const { projects, title } = this.props;
        return (
            <section className="c-ProjectsDetailedList">
                <h3 className="c-ProjectsDetailedList-title">{title}</h3>
                <ul>{sortBy(projects, "position").map(this.renderProject)}</ul>
            </section>
        );
    }
}
