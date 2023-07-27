# Turborepo starter

This is a turborepo starter that does the following:
- Sets up a nextjs frontend in `apps/fe`
- Sets up a Rust backend in `apps/be`. This rust backend uses sqlx + poem + poem-openapi

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `fe`: a [Next.js](https://nextjs.org/) app with [Mantine](https://mantine.dev) and [Tailwind.css](https://tailwindcss.com/).
- `be`: a [Rust](https://www.rust-lang.org/) app with [Poem](https://docs.rs/poem/latest/poem/),[Poem-OpenAPI](https://docs.rs/poem-openapi/latest/poem_openapi/) and [SQLX](https://github.com/launchbadge/sqlx)
- `ui`: a stub Mantine component library.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `types`: Rust library using [Typeshare](https://github.com/1Password/typeshare) to share type logic between `be` and the typescript apps. One source of truth for your types.

Each package/app is 100% statically typed.

## Prerequisite
Do use 100% of the stuff provided in this repo, you need the following installed:

- Rust
- pnpm
- sqlx-cli
- typeshare-cli

This is a non-exhaustive list. More stuff might be required. 🤷🏾‍♂️

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```


