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
-   Auto code formatting.
-   Use `make` to run build commands.
-   Hot-reloading dev server with sourcemaps.

## Suggestions for the user

-   Configure your text editor to format using `prettier`.

## TODO

-   Built-in "fake mode"
-   Additional tsconfig options?
-   Document all dev dependencies.
-   favicon
-   inline doc in Makefile
-   disable source maps for production build
-   readme on how to run stuff
-   scss
-   allow for custom TS declarations
-   testing
-   name output files with a hash
-   add the moment webpack plugin

## Not a goal now

-   Separate React into its own library
