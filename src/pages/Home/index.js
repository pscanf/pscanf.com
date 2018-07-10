import convert from "htmr";
import React from "react";
import { Head, withRouteData } from "react-static";

import Avatar from "../../components/Avatar";
import ContactLinks from "../../components/ContactLinks";
import "./index.css";

export default withRouteData(({ about }) => (
    <section className="p-Home">
        <Head>
            <title>{"About pscanf"}</title>
        </Head>
        <Avatar />
        <ContactLinks />
        {convert(about.contents)}
    </section>
));
