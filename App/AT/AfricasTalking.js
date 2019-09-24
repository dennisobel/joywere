const options = {
    apiKey: 'YOUR_API_KEY',// use your sandbox app API key for development in the test environment
    username: 'YOUR_USERNAME',// use 'sandbox' for development in the test environment
};

const AfricasTalking = require('africastalking')(options);
// Initialize a service e.g. VOICE
const voice = AfricasTalking.VOICE
const sms = AfricasTalking.SMS

const voiceServiceCall = (req,res) => {
    const options = {
        callFrom:"",
        callTo:""
    }
    
    // INITIATE A PHONECALL
    voice.call(options).then(response => {
        res.send(200)
    }).catch(error => {
        res.send(error)
    })

    
}

const smsServiceCall = () => {
    const options = {
        to: ['+254711XXXYYY', '+254733YYYZZZ'],
        message: "I'm a lumberjack and its ok, I work all night and sleep all day"
    }

    sms.send(options)
        .then(response => {})
}

module.exports = {
    voiceServiceCall
}