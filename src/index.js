import VoiceAssistant from './manager';

var recogni = new VoiceAssistant({
    keyword : ["Lorem", "Ipsum"],
    starting : true,
    func: 'console.log("\t\t\t\t\tHello World!")',
    accuracy: '50%'
})

console.log(recogni.showResult())