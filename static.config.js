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
        const { about, intro, posts = [], projects = [] } = await jdown(
            join(__dirname, "/content")
        );
        return [
            {
                path: "/",
                component: "src/pages/Home",
                getData: () => {
                    const lastThreePosts = sortBy(posts, "date")
                        .slice(-3)
                        .reverse()
                        .map(post => ({
                            slug: post.slug,
                            title: post.title,
                            date: post.date
                        }));
                    const topThreeProjects = sortBy(projects, "position")
                        .slice(0, 3)
                        .map(project => ({
                            name: project.name,
                            shortDescription: project.shortDescription,
                            homepage: project.homepage
                        }));
                    return { intro, lastThreePosts, topThreeProjects };
                }
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
                path: "/about",
                component: "src/pages/About",
                getData: () => ({ about, projects })
            },
            {
                is404: true,
                component: "src/pages/NotFound",
                getData: () => ({ websiteBasePath })
            }
        ];
    }
};
