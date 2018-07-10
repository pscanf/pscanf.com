import React from "react";
import { Link } from "react-static";

import "./index.css";

export default () => (
    <section className="c-WebsiteFooter">
        <Link exact={true} to="/privacy-policy">
            {"privacy policy"}
        </Link>
    </section>
);
