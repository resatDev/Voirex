import {voiceApi} from './voice';
import {textMining} from './process';
import {makeResultHigh, makeResultAbs, makeResultMid} from './result';
class VoiceAssistant {
    constructor(command = { keyword : [], starting : false, func : '(() => {return "null"})', accuracy: '70%'} ){
        this.command = command;
        this.voiceApi = voiceApi;
        this.textMining = textMining;
        this.makeResultHigh = makeResultHigh;
        this.makeResultAbs = makeResultAbs;
        this.makeResultMid = makeResultMid;
    }
    getCommand(){
        return this.command
    }
    controlling(){
        return textMining(this.getCommand().keyword, this.startRecognition())
    }
    startRecognition() {
        return voiceApi(this.command.starting)
    }
    accuracyItem(){
        return textMining(this.getCommand().keyword, this.startRecognition())
    }
    showResult(){
        switch (this.command.accuracy){
            case '100%':
                return this.makeResultAbs(this.accuracyItem(), this.command.keyword, this.command.func);
            case '70%':
                return this.makeResultHigh(this.accuracyItem(), this.command.keyword, this.command.func);
            case '50%':
                return this.makeResultMid(this.accuracyItem(), this.command.keyword, this.command.func)
        }
    }
}

export default VoiceAssistant