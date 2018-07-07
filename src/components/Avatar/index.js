import React from "react";

import pathJoin from "../../utils/pathJoin";
import "./index.css";

export default ({ websiteBasePath }) => (
    <section className="c-Avatar">
        <img
            src={pathJoin(websiteBasePath, "/images/profile-picture.jpg")}
            alt="Profile picture"
        />
    </section>
);
