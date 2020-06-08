# Storybook Components

> How to visual regression test components in storybook using Percy.io

## Running Storybook

```
yarn storybook
```

Then should open at http://localhost:61415/

## Testing with percy.io

We're going to utalize [percy.io](https://docs.percy.io/docs/storybook) for this setup

Usually you would setup a `PERCY_TOKEN` with your API Token but as I'm running multiple examples I am setting `PERCY_TOKEN` from `PERCY_STORYBOOK_COMPONENTS`

Set this up in your env with:

```
# Windows
$ set PERCY_STORYBOOK_COMPONENTS=<your token here>

# Unix
$ export PERCY_STORYBOOK_COMPONENTS=<your token here>
```

Then run

```
yarn test
```

To see percy take snapshots and upload
