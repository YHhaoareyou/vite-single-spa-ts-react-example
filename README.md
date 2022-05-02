# vite-single-spa-ts-react-example

This is a React TypeScript app of an example micro-frontends project with Vite and single-spa implemented together.
Instead of Webpack, this project uses Vite & TypeScript for each micro-frontends app and even the root-config.

Please refer to the [Root-config](https://github.com/YHhaoareyou/vite-single-spa-ts-root-config) example for our motivation, faced issues, and implementation.

*Root-config example: https://github.com/YHhaoareyou/vite-single-spa-ts-root-config*
*Vue micro-frontends app example: https://github.com/YHhaoareyou/vite-single-spa-ts-vue-example*

## Local development

```sh
pnpm install
pnpm run dev
```

Now this app runs on localhost:3002, but please follow the **Local development** section in [Root-config](https://github.com/YHhaoareyou/vite-single-spa-ts-root-config) to run the root-config and navigate in the opened window.

## Production (preview on local)

```sh
pnpm install
pnpm run build
pnpm run preview
```

Now the built project runs on localhost:9002, but please follow the **Production (preview on local)** section in [Root-config](https://github.com/YHhaoareyou/vite-single-spa-ts-root-config) to run the root-config and navigate in the opened window.

## Before deployment

Set the environment variables `VITE_MF_REACT_PROD_DOMAIN` to the domains where you host this React micro-frontends app.

This example project uses `dotenv` in `vite.config.ts` to parse environment variables from `src/.env`. Please make necessary changes if you set your environment variables in different ways.