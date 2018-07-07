[![CircleCI](https://img.shields.io/circleci/project/github/pscanf/pscanf.com.svg)](https://circleci.com/gh/pscanf/pscanf.com)

# pscanf.com

Source code and content for [pscanf.com](https://pscanf.com).

The website is built with [React Static](https://react-static.js.org/) and
deployed using [StaticDeploy](https://staticdeploy.io).

## Develop

> System requirements
>
> - [nodejs >= 8](https://nodejs.org/en/)
> - [yarn](https://yarnpkg.org) (used for managing dependencies)

After cloning the repository, run `yarn` to install packages.

You can run the following npm scripts:

- `yarn lint`: runs code linters
- `yarn build`: builds the static website
- `yarn dev`: starts the dev server

## Deploy

Just push to `master` to deploy to `https://pscanf.com/`. Pushing to a branch
deploys the branch to `https://pscanf.com/_/branch-name/`.
