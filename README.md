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

-   Add favicon.
-   Document all dev dependencies.
-   Add the moment webpack plugin.
-   Built-in "fake mode".
-   Heroku config?

## Not a goal right now

-   Separate React into its own bundle.

## Notes & Gotchas

### Why not use `styled-components`?

I prefer to use SASS because it offers mixins. I also prefer to define things like color variables
in SASS instead of Javascript. I haven't been able to get SASS to play nicely with
`styled-components`. Unfortunately this means we miss out on the nice style scoping that comes with
`styled-components`. But as long as component names are unique, we can scope all styles inside of a
`.ComponentName` class.

You are free to install the `styled-components` dependency and use it as usual. You just won't have
SASS.

### You must import React

Any time you use JSX, you must `import * as React from "react"`. This is because the Typescript
compiler transforms JSX into `React` calls. And yet, unless you import React, it will assume that
you've made a mistake by writing JSX. If you forget to do this, you'll see the error message:

```
TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
```

### What if I want to use a library from NPM and it doesn't have typings?

That's okay. For the purposes of this example, assume you want to use a library `foo`.

1. Go into `typings/` and create `foo.d.ts`.
2. In that file, type `declare module "foo"`

Now you can import the `foo` library, and Typescript will assume it's an `any` type. Of course, you
could write your own typings in `foo.d.ts` and describe the shape of the library instead of
declaring it as `any`, if you want.
