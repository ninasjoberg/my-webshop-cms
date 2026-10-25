# my-webshop-cms

Sanity Studio for editing the webshop's products, categories, collections and pages.

Content is stored in Sanity (project `37lcj78e`, dataset `products`), so edits made in the studio show up on the webshop as soon as they are published. No deploy is needed for content changes.

## Requirements

- Node 24 (see `.nvmrc`)

## Develop

```sh
nvm use
npm install
npm run start
```

The studio runs at http://localhost:3333.

## Scripts

| Command           | What it does                                                      |
| ----------------- | ----------------------------------------------------------------- |
| `npm run start`   | Start the studio locally with live reload (same as `npm run dev`) |
| `npm run build`   | Build the studio into `dist/`                                     |
| `npm run preview` | Serve the built `dist/` locally to check a build                  |
| `npm run deploy`  | Build and publish the studio to `<hostname>.sanity.studio`        |

## Deploy

`npm run deploy` publishes the studio itself (schema, sort options, plugins), not content.
Run it after changing anything in `schemas/` or `sanity.config.js` so the hosted studio matches.
The first time, you are asked to log in (`npx sanity login`) and to pick the studio hostname.
