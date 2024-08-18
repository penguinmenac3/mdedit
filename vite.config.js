/**
 * @type {import('vite').UserConfig}
 */
const config = {
    // ...
    base: "/mdedit/",
    server: {
        watch: {
            ignored: ['!**/dist/'],
            usePolling: true
        }
    }
}

export default config
