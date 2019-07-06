# NPS

## What is NPS?

NPS is a CLI for adding, modifying, extending, and overriding the scripts in
your package.json file.

## Why does NPS exist?

I wanted a way to quickly add, modify, extend, and override the scripts in my
package.json files and I thought others might like the ergonomics as well.

## Why not just open your package.json file and add the script?

Mostly laziness.

## Usage

If you would like you can install globally using either yarn or npm.

```sh
npm install --global @hagnerd/nps
yarn global add @hagnerd/nps
```

After that it will be available with the command `nps`.

If you don't want to install the package globally, just run `npx @hagnerd/nps`.

## What's next?
I'm thinking about adding some nice features like being able to easily select
scripts to delete from the command line, saving a set of scripts to a template,
and being able to add groups of scripts with one command.
