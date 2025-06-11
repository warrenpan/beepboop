# BeepBoop - Stablecoin Wallet

A monorepo containing a Next.js-based web stablecoin wallet built with Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps
- `@beepboop/web`: a Next.js web application for the stablecoin wallet

### Packages
- `@beepboop/ui`: a shared React component library

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

This will start the development server for all apps in the monorepo. The web app will be available at [http://localhost:3000](http://localhost:3000).

## Build

To build all apps and packages:

```bash
npm run build
```

## Develop

To develop all apps and packages:

```bash
npm run dev
```

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines for faster builds.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
