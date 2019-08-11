import VoiceAssistant from './manager';

var recogni = new VoiceAssistant({
    keyword : ["Lorem", "Ipsum"],
    starting : false,
    func: console.log("\t\t\t\t\tHello World!")
})

recogni.accuracyItem();