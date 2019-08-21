import { howMuchAccuracy } from './accuracy'
import { isEmpty } from './isEmpty'
import { getVoiceApiInfo } from './voiceApiInfo'
import { setVoiceRecognition, startRecord, stopRecord, instruction } from './browserVR'
import { existingVoiceApi } from './whichApi';
import { levenshtein } from './distanceKeyRec';
import { actualAccuracy } from './actualAccuracy'
import { maxAccuracy, minAccuracy } from './accuracyMaxMin'
import { resultProcessingVR } from './result'

class Voirex {
    constructor(
        voiceType = {
            type: '',
            lang: ''
        },
        command = {
            keyword: [],
            func : '',
            accuracy: '',
            pref: ''
        }
    )
    {
        //Properties of VoiceAssistant
        this.voiceType = voiceType;
        this.command = command;

        //Developer accuracy
        this.howMuchAccuracy = howMuchAccuracy;

        //voiceText is empty or not
        this.isEmpty = isEmpty;

        //about prefered Voice Recognition Api
        this.getVoiceApiInfo = getVoiceApiInfo;

        //voice api exist or not
        this.existingVoiceApi = existingVoiceApi;

        //similarity between keywords and voiceText as Levenshtein Distance Algorithm
        this.levenshtein = levenshtein;

        //Levenshtein accuracy of each keyword item
        this.actualAccuracy = actualAccuracy;

        //max and min accuracy
        this.maxAccuracy = maxAccuracy;
        this.minAccuracy = minAccuracy;

        //resulting
        this.resultProcessVR = resultProcessingVR;

        /*
            Browser Recognition Process
        */ 
        this.setVoiceRecognition = setVoiceRecognition; //set the congif of recognition
        this.startRecord = startRecord;                 //start the recording
        this.stopRecord = stopRecord;                   //stop the recording
        this.instruction = instruction;                 //get the voice text
    }

    //To learn about the Voice Recognition Api you preferred
    getAPIInfo(){
        return getVoiceApiInfo(this.voiceType.type);
    }

    //converting command.accuracy to a number
    developerAccuracyNum(){
        return howMuchAccuracy(this.command.accuracy);
    }

    //checking: voiceText is empty or not
    checkingVoiceText(){
        return isEmpty(voiceText);
    }

    //Check the voice Api Exist or not
    checkingVoiceApi(){
        return this.existingVoiceApi(this.getVoiceApiInfo(this.voiceType.type));
    }

    //Levenshtein Distance Algorithm
    checkActualAccuracy(voiceText){
        return actualAccuracy(this.levenshtein, this.command.keyword, voiceText);
    }

    //check max Accuracy 
    checkMax(voiceText){
        return maxAccuracy(this.checkActualAccuracy(voiceText));
    }

    //check min Accuracy
    checkMin(voiceText){
        return minAccuracy(this.checkActualAccuracy(voiceText));
    }

    //setting configuration of a new Voice Recognition
    setVoiceRecConfig() {
        return setVoiceRecognition(this.voiceType.lang);
    }

    //starting Voice Recognition
    startRecognition(recognition){
        startRecord(recognition);
    }

    //stoping Voice Recognition
    stopRecognition(recognition){
        stopRecord(recognition)
    }

    //getting Voice Text
    getVoiceText(e){
        return this.instruction(e)
    }

    //Developer preference max or min
    devPref(voiceText){
        switch(this.command.pref){
            case 'max':
                return this.checkMax(voiceText);
            case 'min':
                return this.checkMin(voiceText);
        }
    }

    //result all process
    resultProcessVoiceRecog(voiceText){
        return this.resultProcessVR(this.devPref(voiceText), this.developerAccuracyNum(), this.command.func)
    }
}

export default Voirex;