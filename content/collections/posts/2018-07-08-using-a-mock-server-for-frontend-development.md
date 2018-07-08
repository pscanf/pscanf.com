---
slug: 2018-07-08-using-a-mock-server-for-frontend-development
date: 2018-07-08
title: Using a mock server for frontend development
tags:
  - frontend
  - tooling
  - mock server
---

One of the most useful tools that I use when developing frontend Single Page
Applications is a mock server.

A mock server is an http server that _mocks_ your app's backend during
development, implementing your backend's APIs and replicating their behavior,
returning pre-defined responses or randomly generated data.

You typically start a mock server alongside your app's development server,
configuring the app so it directs its API calls to the mock server. The
configuration for a mock server is usually kept in source control with the app,
so that it's shared among developers and can be easily modified as needed.

### Benefits

#### Easy development setup

First and foremost, when developing your frontend you don't have to _also_ start
your backend, which is especially tedious (or nearly impossible) when the
backend is made of a myriad of microservices, each having their own database.

An alternative approach I've often seen employed to solve this problem is to
point your app to a remote development environment - shared by all the team -
where the backend is deployed. However this solution has some drawbacks:

- you can't work if you're offline
- the shared development environment often breaks (with database
  inconsistencies, unavailable services, etc)
- it's hard to reproduce certain API responses

Which brings me to the next benefit.

#### Simulating complex interactions and corner cases

The main point of a mock server is to simulate API responses, and since the mock
server lives in your local development environment, it's much easier to change
its behavior to simulate all the possible states of your API.

Want to test if your search widget blows up when the API returns thousands of
results? With a mock server it's probably just a matter of changing a number in
the configuration, while with a real backend you'd need to insert specifically
crafted records in a database.

#### Start building the app even if its backend doesn't exist yet

Many times I've been in the situation of not yet having a backend for the app I
was about to build. Be it because the backend team was still busy on another
project, because I had to build the backend in parallel, or just because I
wanted to get early feedback from my client on the user interactions with the
app.

With a mock server that's not a problem at all. Just start building the app,
mock the APIs you need, and the backend will eventually implement them.
Moreover, I found this approach to be beneficial for the design of the API,
since it explicits the needs of the client, making it easier to avoid pitfalls
such as over-engineering and over-generalization.

#### Get a bird's eye view of the API needed by your app

What APIs does my app use? When using a mock server the answer is easy: the APIs
implemented by the mock server. If an API is not there, during development the
app would break when calling it, and the developer would notice.

#### Make automated browser tests more reliable

Automated browser tests are notoriously flaky. One factor contributing to their
flakiness is having them run on an app in a real, deployed environment, using a
real backend. If the backend takes a long time to respond, if it doesn't match
the version expected by the frontend, or if someone altered the database in an
unexpected way, browser tests will fail. Using a mock server instead takes away
these sources of unreliability, and - as already written above - also makes it
easier to simulate corner cases, a very common occurrence in tests.

Of course, tests against a mock server are not a replacement for truly
end-to-end tests, but they can be a good fit for things like cross-browser
testing, where we don't really care about how the backend behaves, and we don't
want to be distracted by its failures.

### Choosing a mock server

There are a few mock servers on the market, so choosing the right one for your
project can be difficult. The two main features I look for when choosing a mock
server are:

- **being easy to integrate in the project**: how will developers install it?
  How will they run it? For a frontend web application this means that it
  probably should be distributed via npm, and be runnable in an npm script
- **being easy to configure so it can mimic my API**: this depends a lot on the
  API. For instance, if the API is accurately described in an swagger
  definition, I can choose a mock server that auto-generates endpoints in the
  definition

I think the second point is the trickiest one, because APIs are often full of
corner cases and ill-specified behaviors. That actually led me to write
[my own mock server](https://github.com/staticdeploy/mock-server), which adopts
a code-over-configuration approach to allow for maximum flexibility (at the
expense of course of terseness, because you have to write your own endpoints).

But of course there are other great mock servers out there, like
[node-mock-server](https://github.com/smollweide/node-mock-server) and
[MockServer](http://www.mock-server.com/). Just choose one, and I promise it'll
improve your development workflow. :)
