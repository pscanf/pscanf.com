import classnames from "classnames";
import lowerFirst from "lodash/lowerFirst";
import sortBy from "lodash/sortBy";
import convert from "htmr";
import React from "react";
import ExternalLinkIcon from "react-icons/lib/fa/external-link";

import "./index.css";
import ScreenReaderText from "../ScreenReaderText";
import Tags from "../Tags";

export default class ProjectsList extends React.Component {
    state = { expandedProjects: {} };

    getToggleProject = project => evt => {
        evt.preventDefault();
        this.setState({
            expandedProjects: {
                ...this.state.expandedProjects,
                [project.name]: !this.state.expandedProjects[project.name]
            }
        });
    };

    renderProject = project => {
        const isExpanded = !!this.state.expandedProjects[project.name];
        const showMoreOrLess = isExpanded
            ? "Hide description"
            : "Show description";
        return (
            <li
                className={classnames("c-ProjectsList-project", {
                    expanded: isExpanded
                })}
                key={project.name}
            >
                <h4 className="c-ProjectsList-project-title">
                    <span className="c-ProjectsList-project-title-name">
                        {project.name}
                        {": "}
                    </span>
                    <span className="c-ProjectsList-project-title-short-description">
                        {lowerFirst(project.shortDescription)}
                    </span>
                    <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLinkIcon />
                        <ScreenReaderText>
                            {"Project homepage"}
                        </ScreenReaderText>
                    </a>
                </h4>
                <Tags tags={project.technologies} />
                <section className="c-ProjectsList-project-description">
                    {convert(project.contents)}
                </section>
                <a href="#" onClick={this.getToggleProject(project)}>
                    {showMoreOrLess}
                </a>
            </li>
        );
    };

    render() {
        const { projects, title } = this.props;
        return (
            <section className="c-ProjectsList">
                <h3 className="c-ProjectsList-title">{title}</h3>
                <ul>{sortBy(projects, "position").map(this.renderProject)}</ul>
            </section>
        );
    }
}
