import jdown from "jdown";
import { sortBy } from "lodash";
import { join } from "path";
import { URL } from "url";

const websiteRootUrl = new URL(
    process.env.WEBSITE_ROOT_URL || "http://localhost:3000"
);
const websiteBasePath = websiteRootUrl.pathname;

export default {
    siteRoot: websiteRootUrl.origin,
    basePath: websiteBasePath,
    preact: true,
    getRoutes: async () => {
        const { about, privacyPolicy, posts = [], projects = [] } = await jdown(
            join(__dirname, "/content")
        );
        return [
            {
                path: "/",
                component: "src/pages/Home",
                getData: () => ({ about })
            },
            {
                path: "/blog",
                component: "src/pages/Blog",
                getData: () => ({
                    posts: sortBy(posts, "date")
                        .reverse()
                        .map(post => ({
                            slug: post.slug,
                            title: post.title,
                            date: post.date
                        }))
                }),
                children: posts.map(post => ({
                    path: `/${post.slug}/`,
                    component: "src/pages/Post",
                    getData: () => ({ post })
                }))
            },
            {
                path: "/projects",
                component: "src/pages/Projects",
                getData: () => ({ projects })
            },
            {
                path: "/privacy-policy",
                component: "src/pages/PrivacyPolicy",
                getData: () => ({ privacyPolicy })
            },
            {
                is404: true,
                component: "src/pages/NotFound",
                getData: () => ({ websiteBasePath })
            }
        ];
    }
};
