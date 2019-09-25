const {voiceServiceCall} = require('../AT/AfricasTalking')

const appRouter = (app) => {
    app.post("/voicecall",voiceServiceCall.post)
}

module.exports = appRouter;