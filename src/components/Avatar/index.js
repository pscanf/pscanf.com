import React from "react";

import "./index.css";
import profilePictureUrl from "./profilePicture.jpg";

export default () => (
    <div className="c-Avatar">
        <img src={profilePictureUrl} alt="Paolo Scanferla" />
    </div>
);
