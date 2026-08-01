# Consultancy CMS

Strapi 5 headless CMS backing the education-consultancy product. It holds two kinds of
content: the public marketing site, and the editable copy the application itself renders.

Pairs with [consultancy-backend](https://github.com/MuratAkkus0/consultancy-backend), which
owns the application data — students, consultants, applications, documents. This repository
owns none of that. Only content.

## What is in here

### Page content — single types

One entry each, edited in place rather than created repeatedly.

| Group | Types |
| --- | --- |
| Marketing pages | `homepage`, `services-page`, `pricing-page`, `about-page`, `contact-page`, `success-stories-page`, `blog-page` |
| In-app copy | `dashboard-page`, `applications-page`, `auth-page`, `errors-page`, `routing-page`, `kassenbuch-page` |
| Site chrome | `header`, `footer`, `global`, `metadata` |
| Legal (German) | `impressum`, `datenschutz`, `agb` |
| Profile | `veysel-bayar` |

Keeping the application's own strings — dashboard labels, auth screens, error messages — in
the CMS means copy changes ship without a frontend deploy.

### Editorial content — collection types

`article`, `blog`, `author`, `category`, `about-us`, `subscription`.

### Components

Reusable field groups live in `src/components/`, namespaced per page (`homepage/`,
`pricing-page/`, `services-page/`, …) plus `shared/` and `i18n-shared/` for blocks used
across several pages.

## Stack

- **Strapi** 5.47
- **Node** 20–24 (see `engines` in `package.json`)
- **Database** SQLite by default via `better-sqlite3`. The `pg` driver is already installed,
  so pointing `config/database.ts` at PostgreSQL for a deployed environment is configuration,
  not new dependencies.
- **Plugins** `users-permissions` (API roles and tokens), `cloud`

## Local setup

```bash
npm install
npm run develop
```

The admin panel is then at `http://localhost:1337/admin`. The first account created there
becomes the super admin.

`npm run dev` is an alias of `develop`; `npm run build && npm start` runs it with autoReload
disabled. `npm run seed:example` loads Strapi's example dataset — useful on a fresh checkout,
not something to run against real content.

### Configuration

Strapi expects `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`,
`JWT_SECRET` and the `DATABASE_*` variables in a `.env` file. There is **no `.env.example`
committed**, so a fresh clone gives no indication of what needs to be set — adding one is the
first thing worth doing here.

## Consuming the content

Content is read over Strapi's REST API at `/api/<plural-name>`, gated by the roles under
**Settings → Users & Permissions → Roles**. Public marketing content needs the `public` role
to have `find`/`findOne` on the relevant types; anything else needs an API token.

## Known gaps

- No committed `.env.example`, so the required environment variables are undiscoverable from
  the repository alone.
- SQLite is fine locally but is not a sensible target for a deployed instance. The PostgreSQL
  path is available but not configured here.
- Schema names are English while the content is German-facing. That is a reasonable
  convention, but it is currently implicit — worth stating in the content model rather than
  letting it drift.
