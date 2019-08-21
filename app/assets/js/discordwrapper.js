// Work in progress
/*(const logger = require('./loggerutil')('%c[DiscordWrapper]', 'color: #7289da; font-weight: bold')

const {Client} = require('discord-rpc')

let client
let activity

exports.initRPC = function(genSettings, servSettings, initialDetails = 'Unofficial Minecraft FPS'){
    client = new Client({ transport: 'ipc' })

    activity = {
        details: initialDetails,
        state: 'Waiting for Client',
        largeImageKey: 'cc-round',
        largeImageText: 'CounterCraft (MC 1.6.4)',
        smallImageKey: 'null',
        smallImageText: 'null',
        startTimestamp: new Date().getTime(),
        instance: false
    }

    client.on('ready', () => {
        logger.log('Discord RPC Connected')
        client.setActivity(activity)
    })
    
    client.login({clientId: genSettings.clientId}).catch(error => {
        if(error.message.includes('ENOENT')) {
            logger.log('Unable to initialize Discord Rich Presence, no client detected.')
        } else {
            logger.log('Unable to initialize Discord Rich Presence: ' + error.message, error)
        }
    })
}

exports.updateDetails = function(details){
    activity.details = details
    client.setActivity(activity)
}

exports.updateState = function(state){
    activity.state = state
    client.setActivity(activity)
}

exports.updateSmallImage = function(smallImageKey, smallImageText) {
    activity.smallImageKey = smallImageKey
    activity.smallImageText = smallImageText
    client.setActivity(activity)
}

exports.updateLargeImage = function(largeImageKey, largeImageText) {
    activity.largeImageKey = largeImageKey
    activity.largeImageText = largeImageText
    client.setActivity(activity)
}

exports.shutdownRPC = function(){
    if(!client) return
    client.clearActivity()
    client.destroy()
    client = null
    activity = null
}*/