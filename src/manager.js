import {voiceApi} from './voice';
import {accuracyHigh} from './process';
import {makeResult} from './result';
class VoiceAssistant {
    constructor(command = { keyword : [], starting : false, func : (() => {return "null"})} ){
        this.command = command;
        this.voiceApi = voiceApi;
        this.accuracyHigh = accuracyHigh;
        this.makeResult = makeResult;
    }
    startRecognition() {
        return voiceApi(this.command.starting)
    }
    getCommand(){
        return this.command
    }
    accuracyItem(){
        return accuracyHigh(this.getCommand().keyword, this.startRecognition())
    }
    showResult(){
        makeResult(this.accuracyItem(), this.func)
    }
}

export default VoiceAssistant