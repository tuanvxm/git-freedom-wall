# Contributing

::: warning Important
Do not include any private, privileged, or confidential information,
or generally anything you don't want to be (potentially) spammed.

Anything you put in your materials are put into public view.
:::

---

## :unicorn: Setting up your local dev environment

::: tip Note
This step isn't required to contribute to the final site,
but you'll need to do this to verify your local changes before submitting
a pull request.
:::

1. Your local machine will need to have [NodeJS][nodejs] installed.

2. Fork this repository onto your own Github account.
   The git repository link should be at the top right of your screen.

3. Clone your copy of the repository down into your local machine.

4. Run an `npm install` or a `yarn install` in the project root directory.
   (`yarn` being preferred, if your machine has it).

   This will install all the lib dependencies of this project.

## :cake: Adding materials

To add your mark onto the Freedom Wall, you'll need to do a few things:

### Create your page by adding an `.md` file in `docs/roster/`.

This file should be written in [Markdown][markdown], and can include whatever you want.
We recommend you put in the following at least:

- your name in a **top-level header**,
- your tagline, in a directly adjacent quoteblock,
- a photo you'd like to share, and
- a table of links you'd like to share.

### Append a freeform message of your own in `docs/README.md`.

Make sure it's in the form of

```markdown
::: tip <date>
Some freeform text~!

> Can also hold markdown.

Don't forget to sign your message below!

&mdash; [name](/roster/name.md)
:::
```

### Add the link to your page in `docs/.vuepress/roster.js`.

The `roster.js` file gets automatically parsed into the site sidebar.

Always add at the top of the list.
(So it's in reverse chronological order.)

## :space_invader: Verifying your changes

To verify your additions, and ensure that they're rendering as expected,
you can run **development mode** `npm run develop` or `yarn develop` from the project root directory.

This will compile the site, and make it available through `localhost:8080` on your local machine.

Visit that URL in your browser, and you should be able to navigate the site.
Ensure that your changes are showing up as you want them to.

::: tip Note
When you run **development mode**, you can continue editing the source code / files,
and the server will automatically detect your changes, recompile, and push your changes to your browser.

You **don't** need to stop the server and/or reload your browser to see your changes.
:::

To stop the server, press `Ctrl+C` in the terminal.

## :rocket: Publishing your changes on the parent site

Once your changes are OK, you will want to get your changes finalized, accepted, and published on the parent site.

To do this, you will need to open a [Pull Request][pull-request] on the root git repository,
with the changes you've made on your forked git repository.

1. Make sure your local changes are `pushed` to your remote fork repository. (e.g. using `git push`).

2. Open a pull request in Github:

   - the **base** is the parent repository on the `master` branch,
   - the **head** is your (forked) repository, on whatever branch you committed your changes on (most probably `master` as well)

3. Once your pull request is submitted, we'll review your work.
   We'll work with you to correct any changes / improvements / problems we identify as well.

   Once everything looks good, we'll merge your changes in, and your materials will be published on the base site. :rocket:

[markdown]: https://devhints.io/markdown
[nodejs]: https://nodejs.org
[pull-request]: https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests
