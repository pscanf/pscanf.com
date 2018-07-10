import convert from "htmr";
import React from "react";
import { Head, withRouteData } from "react-static";

export default withRouteData(({ privacyPolicy }) => (
    <section className="p-PrivacyPolicy">
        <Head>
            <title>{"pscanf.com privacy policy"}</title>
        </Head>
        {convert(privacyPolicy.contents)}
    </section>
));
