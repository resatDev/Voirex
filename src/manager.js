import {voiceApi} from './voice';
import {textMining} from './process';
import {makeResultHigh, makeResultAbs, makeResultMid, makeResultLow} from './result';
import {howMuchAccuracy} from './accuracy'
import {startTakingText, stopTakingText, takeText} from './dataFlow'
import { setText } from './text';
class VoiceAssistant {
    constructor(voiceType = '' ,command = { keyword : [], starting : false, func : '(() => {return "null"})', accuracy: '70%'} ){
        this.command = command;
        this.voiceApi = voiceApi;
        this.textMining = textMining;
        this.makeResultHigh = makeResultHigh;
        this.makeResultAbs = makeResultAbs;
        this.makeResultMid = makeResultMid;
        this.makeResultLow = makeResultLow;
        this.howMuchAccuracy = howMuchAccuracy;
        this.voiceType = voiceType;
        this.startTakingText = startTakingText;
        this.stopTakingText = stopTakingText;
        this.takeText = takeText;
        this.setText = setText;
    }
    /*
    getCommand(){
        return this.command
    }
    */
    controlling(){
        return this.stopTakingText(["osman", "ali", "hüseyin"], 2);
    }
    startRecognition() {
        return voiceApi(this.command.starting)
    }
    resultTextMining(){
        return textMining(this.command.keyword, this.startRecognition())
    }
    showResult(){
        if(this.howMuchAccuracy(this.command.accuracy) > 89 && this.howMuchAccuracy(this.command.accuracy) < 101){
            return makeResultAbs(this.resultTextMining(), this.command.keyword, this.command.func)
        }
        else if(this.howMuchAccuracy(this.command.accuracy) < 90 && this.howMuchAccuracy(this.command.accuracy) > 69){
            return makeResultHigh(this.resultTextMining(), this.command.keyword, this.command.func);
        }   
        else if(this.howMuchAccuracy(this.command.accuracy) < 70 && this.howMuchAccuracy(this.command.accuracy) > 49){
            return makeResultMid(this.resultTextMining() , this.command.keyword, this.command.func);
        }
        else if(this.howMuchAccuracy(this.command.accuracy) < 50 && this.howMuchAccuracy(this.command.accuracy) >= 0){
            return makeResultLow(this.resultTextMining(),this.command.func)
        }else{
            return "*****\n\nYour accuracy value is over range of the default values, please update your accuracy value between 0 and 100!\n\n*****"
        }
    }
}
export default VoiceAssistant