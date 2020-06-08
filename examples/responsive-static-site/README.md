# Responsive Static Sites

> How to visual regression test static sites responsively using Percy.io

This is just a simple html / css file with a responsive table in it that we're going to snapshot

## Testing with percy.io

We're going to utalize [percy.io](https://docs.percy.io/docs/storybook) for this setup

Usually you would setup a `PERCY_TOKEN` with your API Token but as I'm running multiple examples I am setting `PERCY_TOKEN` from `PERCY_STATIC_SITE`

Set this up in your env with:

```
# Windows
$ set PERCY_STATIC_SITE=<your token here>

# Unix
$ export PERCY_STATIC_SITE=<your token here>
```

Then run

```
yarn test
```

To see percy take snapshots and upload
