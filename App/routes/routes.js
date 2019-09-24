const {ATVoice} 

const appRouter = (app) => {
    app.post("/voicecall",ATVoice.post)
}

module.exports = appRouter;