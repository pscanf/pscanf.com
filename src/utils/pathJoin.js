export default function pathJoin(path1, path2) {
    return `${path1}/${path2}`.replace(/\/{2,}/g, "/");
}
