# Readme

This is a webapp template repository. Webapps using this template are
installable on user desktop/mobile environment.

The files in `./static` use Cosmic.plus images/title/colors and needs to be
updated.

`./src/worker.js` must link all application components.

**Dependencies:** `git`, `node` & `npm`

**Get started:**

```js
git clone https://github.com/MisterTicot/webapp-template my-project
cd my-project
git init dist
npm install
npm run serve
```

From there you can hack `./src/app.js` and `./style` & see the live result in
your browser.

See [Cosmic.plus](https://github.com/cosmic-plus/webappp-cosmic-plus) or
[Equilibre.io](https://github.com/cosmic-plus/webapp-equilibre-io) for examples.

**Setup GitHub destination:**

You need to create two repositories: one for source-code and one for the build
(`./dist` submodule).

```js
git remote set-url origin git@github.com:${user}/${repository}
cd dist
git remote set origin git@github.com:${user}/${repository}-dist
```


From there you can release using:

```js
export version=${version}
npm run make-release && npm run publish-release
```

In GitHub, under `${repository}-dist` settings, enable GitHub pages to have
GitHub publish your latest release at
<https://${user}.github.io/${repository}-dist>.
