# Storybook Components

> How to visual regression test components in storybook using Happo.io

## Running Storybook

```
yarn storybook
```

Then should open at http://localhost:61415/

## Testing with percy.io

We're going to utalize [percy.io](https://docs.percy.io/docs/storybook) for this setup

Then setup your `PERCY_TOKEN` on your env with:

```
# Windows
$ set PERCY_TOKEN=<your token here>

# Unix
$ export PERCY_TOKEN=<your token here>
```

Then run

```
yarn test
```
