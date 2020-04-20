# react16-app-template

A project template for a React 16 app with Typescript, and all the goodies.

## Goals

-   All the fancy "modern web app" and local dev stuff.
-   More fine-grained control and visibility than opaque options like `create-react-app`.

## Why?

I spent too many days--nay, weeks--of my life fighting against Webpack templates that did way too
much for me in ways I didn't understand. There was always one small detail I couldn't figure out how
to change. One day I decided to write my own Webpack config instead, and since then I've never had
another problem changing something in the build.

## Features

-   Write code in strict Typescript, including JSX templates.
-   Testing for library functions and React components, both using Mocha.
-   Style components with SASS.
-   Hot-reloading dev server with sourcemaps.
-   Auto code formatting.
-   Use `make` to run build commands.
-   Normalize.css built in.

## How to do stuff

If you run `make help`, every make command is documented:

```
$ make help
test                            Run both library tests and component tests.
test-lib                        Run just library tests (no Webpack involved).
test-components                 Run just component tests (uses webpack.test.config.js)
run                             Run the dev server.
build                           Run a production build.
fmt                             Auto-format the codebase.
```

## Suggestions for the user

-   Configure your text editor to format using `prettier`. Make sure it matches what `make fmt`
    does.

## TODO

-   Add react-router.
-   Add favicon.
-   Document all dev dependencies.
-   Add the moment webpack plugin.
-   Built-in "fake mode".

## Not a goal right now

-   Separate React into its own bundle.

## Thoughts

### Why not use `styled-components`?

I prefer to use SASS because it offers mixins. I also prefer to define things like color variables
in SASS instead of Javascript. I haven't been able to get SASS to play nicely with
`styled-components`. Unfortunately this means we miss out on the nice style scoping that comes with
`styled-components`. But as long as component names are unique, we can scope all styles inside of a
`.ComponentName` class.
