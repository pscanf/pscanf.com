const { join } = require("path");

const BUNDLE_TAG = process.env.CIRCLE_BRANCH;
const IS_MASTER = BUNDLE_TAG === "master";

module.exports = {
    bundle: {
        from: join(__dirname, "/dist"),
        name: "pscanf.com",
        tag: BUNDLE_TAG,
        description: `Commit ${process.env.CIRCLE_SHA1}`,
        fallbackAssetPath: "/404.html",
        fallbackStatusCode: 404,
        headers: {
            "**/*": {
                "Cache-Control": "public, max-age=86400"
            }
        }
    },
    deploy: {
        app: "pscanf.com",
        entrypoint: IS_MASTER ? "pscanf.com/" : `pscanf.com/_/${BUNDLE_TAG}/`,
        bundle: `pscanf.com:${BUNDLE_TAG}`
    }
};
