---
position: 0
name: staticdeploy
shortDescription: An open-source platform for deploying static apps
homepage: https://staticdeploy.io
technologies:
  - Node.js
  - SQLite / PostgreSQL
  - AWS S3
  - React
  - TypeScript
  - Docker
---

I've been thinking about this project since late 2015, but it was not until two
years later that I started seriously working on it. The project scratches two
itches of mine:

- being able to configure at runtime (as opposed to build time) static websites
  and applications
- being able to deploy every branch (or every commit) of a static app, making it
  easy to show a developer's work in progress to their client / product owner

Some technical highlights of the projects are:

- written in TypeScript
- thoroughly tested
- sub-modules organized in a monorepo managed with Lerna
- non-trivial CI setup running on CircleCI
