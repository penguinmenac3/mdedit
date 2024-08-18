# MDEdit

> Test it here: [https://penguinmenac3.github.io/mdedit/](https://penguinmenac3.github.io/mdedit/)

## Usage

To include the code in your project and adapt it to your needs, simply add the lib submodule as a submodule to your project, just like it has been done here.
We opted to not distribute the code as a full node library, so that it is compatible with any build system as long as you use typescript.

## Contribute

1. Clone the repository (with `--recursive`).
1. Install docker or podman.
2. Install the devcontainer vscode extension.
3. Open the workspace in a container in vscode.
4. Add your changes.
5. Submit a pull request.

### Windows

On windows you have to create a `vite.config.js` file with the following content, so that the automatic reloading when you change the code works.

```js
/**
 * @type {import('vite').UserConfig}
 */
const config = {
    // ...
    server: {
        watch: {
            ignored: ['!**/dist/'],
            usePolling: true
        }
    }
}

export default config
```

## Build the app for release

Run the build command, add and commit the dist folder and then push this folger to gh-pages.
```bash
npm run build
rm dist/favicon.xcf
git add -f dist
git commit -m "Build gh-pages."
git push
git subtree push --prefix dist origin gh-pages
```
