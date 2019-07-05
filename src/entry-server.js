import { createApp } from './web/app.js'

export default context => {
    const { app } = createApp()
    return app
}