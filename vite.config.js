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
