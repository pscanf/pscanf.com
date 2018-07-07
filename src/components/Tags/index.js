import React from "react";

import "./index.css";
import Tag from "../Tag";

export default ({ tags = [] }) => (
    <ul className="c-Tags">{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</ul>
);
