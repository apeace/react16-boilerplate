# react16-app-template

A project template for a React 16 app with Typescript, and all the goodies.

### Goals

-   All the fancy "modern web app" and local dev stuff.
-   More fine-grained control and visibility than opaque options like `create-react-app`.

### Why?

I spent too many days--nay, weeks--of my life fighting against Webpack templates that did way too
much for me in ways I didn't understand. It became impossible for me to change anything. One day I
decided to write my own Webpack config instead, and since then I've never had another problem
changing something in the build.

### Features

-   Write code in strict Typescript, including JSX templates.
-   Auto-formatting.
-   Use `make` to run build commands.

### Suggestions for the user

-   Configure your text editor to format using `prettier`.

### TODO

-   Built-in "fake mode"
-   Additional tsconfig options?
-   Document all dev dependencies.
-   favicon
-   inline doc in Makefile
-   disable source maps for production build
-   readme on how to run stuff
-   get rid of dev webpack script tags
