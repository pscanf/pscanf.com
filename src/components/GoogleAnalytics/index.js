import React from "react";

const Analytics =
    typeof document !== "undefined" ? require("react-router-ga").default : null;

export default ({ children, id }) => {
    return Analytics && id ? (
        <Analytics id={id}>{children}</Analytics>
    ) : (
        children
    );
};
