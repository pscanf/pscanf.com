import React from "react";

import pathJoin from "../../utils/pathJoin";
import "./index.css";

export default ({ websiteBasePath }) => (
    <div className="c-Avatar">
        <img
            src={pathJoin(websiteBasePath, "/images/profile-picture.jpg")}
            alt="Paolo Scanferla"
        />
    </div>
);
