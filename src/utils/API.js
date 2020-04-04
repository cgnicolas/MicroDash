const raspberryHost = '192.168.0.18:4000'
const serverHost = `http://${raspberryHost}`;

export default {
    getServices: serverHost + '/services/',
    invokeService: serverHost + '/services/invoke/'
}