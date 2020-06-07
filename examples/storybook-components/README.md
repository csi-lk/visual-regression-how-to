# Storybook Components

> How to visual regression test components in storybook using Happo.io

## Running Storybook

```
yarn storybook
```

Then should open at http://localhost:61415/

## Testing with Happo.io

We're going to utalize [happo.io](https://docs.happo.io/docs/storybook) for this setup

You'll need to setup an account with them and a `.env` with your `HAPPO_API_KEY` and `HAPPO_API_SECRET` set up (or set as env vars)

Then run

```
yarn test
```
