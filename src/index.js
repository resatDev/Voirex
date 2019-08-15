import VoiceAssistant from './manager';

var recogni = new VoiceAssistant('type-1',{
    keyword : ["Lorem", "Ipsum"],
    starting : false,
    func: 'console.log("\t\t\t\t\tHello World!")',
    accuracy: '-151%'
})

console.log(recogni.controlling())
