# Big Mastermind

A webapp version of the board game mastermind.

[Demo](https://bighill.github.io/big-mastermind/)

## Requirements

[node](https://nodejs.dev) && [npm](https://www.npmjs.com/)

[Gatsby](https://www.gatsbyjs.org)

```bash
npm install -g gatsby-cli
```

## Usage

### Dev

```bash
# Development: hot reloading, linting, error checking, etc
npm run dev
```

View page at [http://localhost:8000/](http://localhost:8000/).

Also, when running locally in dev mode, you can add the query string `cheat` to display the answer; e.g. [http://localhost:8000/?cheat](http://localhost:8000/?cheat).

### Deploy

Currently, the public demo of this is deployed to GitHub Pages. The `gh-pages` package will build, put build in `gh-pages` repo, and push. Demo available at [https://bighill.github.io/big-mastermind/](https://bighill.github.io/big-mastermind/)

```bash
npm run deploy
```

## Why

The main reason for making this was to test GatsbyJS. Gatsby would shine much better when used for a blog or information-heavy site because of the cool routing features, but I got hung up on reproducing a game from my childhood, so here we are.
