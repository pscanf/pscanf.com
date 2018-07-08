import React from "react";

import "./index.css";
import intersperseElement from "../../utils/intersperseElement";
import Tag from "../Tag";

export default ({ tags = [] }) => (
    <ul className="c-Tags">
        {intersperseElement(
            () => " ",
            tags.map(tag => <Tag key={tag}>{tag}</Tag>)
        )}
    </ul>
);
