'use strict';

/**
 * 
 *  Converting Accuracy to a Number (Developer Accuracy) 
 */
function howMuchAccuracy(accuracy){
    var acc = accuracy.split('');
    return Number(acc.splice(0,acc.length - 1).join(''))
 }

/**
 * 
 * CHECK RECOGNITON TEXT IS EMPTY OR NOT
 */ 

const isEmpty = (recognitionText) => {

    // If text is not empty --> return recognitionText
    if(recognitionText != ''){
        return recognitionText

    // If text is empty --> return Error Message "-1"
    }else{
        return "-1"
    }
};

/**
 * 
 * Take the properties and info about the Voice Recognition API 
 * which developer preffered as argument of getVoiceApiInfo()
 */

function getVoiceApiInfo(voiceApiType){
    
  //Default Browser Voice Recognition Api
  let browserDefaultVoiceApi =  `
            /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
            /*/*/*/DEFAULT BROWSER VOICE RECOGNITION/*/*/*/*
            /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

           "Interim Results": mutable (default false) \n\n
           "Maximum" Alternatives: mutable (default 1) \n\n
           "Lang" : mutable (default meta charset) \n\n
           
           { 
            "Afrikaans": [
              ["South Africa", "af-ZA"]
            ],
            "Arabic" : [
              ["Algeria","ar-DZ"],
              ["Bahrain","ar-BH"],
              ["Egypt","ar-EG"],
              ["Israel","ar-IL"],
              ["Iraq","ar-IQ"],
              ["Jordan","ar-JO"],
              ["Kuwait","ar-KW"],
              ["Lebanon","ar-LB"],
              ["Morocco","ar-MA"],
              ["Oman","ar-OM"],
              ["Palestinian Territory","ar-PS"],
              ["Qatar","ar-QA"],
              ["Saudi Arabia","ar-SA"],
              ["Tunisia","ar-TN"],
              ["UAE","ar-AE"]
            ],
            "Basque": [
              ["Spain", "eu-ES"]
            ],
            "Bulgarian": [
              ["Bulgaria", "bg-BG"]
            ],
            "Catalan": [
              ["Spain", "ca-ES"]
            ],
            "Chinese Mandarin": [
              ["China (Simp.)", "cmn-Hans-CN"],
              ["Hong Kong SAR (Trad.)", "cmn-Hans-HK"],
              ["Taiwan (Trad.)", "cmn-Hant-TW"]
            ],
            "Chinese Cantonese": [
              ["Hong Kong", "yue-Hant-HK"]
            ],
            "Croatian": [
              ["Croatia", "hr_HR"]
            ],
            "Czech": [
              ["Czech Republic", "cs-CZ"]
            ],
            "Danish": [
              ["Denmark", "da-DK"]
            ],
            "English": [
              ["Australia", "en-AU"],
              ["Canada", "en-CA"],
              ["India", "en-IN"],
              ["Ireland", "en-IE"],
              ["New Zealand", "en-NZ"],
              ["Philippines", "en-PH"],
              ["South Africa", "en-ZA"],
              ["United Kingdom", "en-GB"],
              ["United States", "en-US"]
            ],
            "Farsi": [
              ["Iran", "fa-IR"]
            ],
            "French": [
              ["France", "fr-FR"]
            ],
            "Filipino": [
              ["Philippines", "fil-PH"]
            ],
            "Galician": [
              ["Spain", "gl-ES"]
            ],
            "German": [
              ["Germany", "de-DE"]
            ],
            "Greek": [
              ["Greece", "el-GR"]
            ],
            "Finnish": [
              ["Finland", "fi-FI"]
            ],
            "Hebrew" :[
              ["Israel", "he-IL"]
            ],
            "Hindi": [
              ["India", "hi-IN"]
            ],
            "Hungarian": [
              ["Hungary", "hu-HU"]
            ],
            "Indonesian": [
              ["Indonesia", "id-ID"]
            ],
            "Icelandic": [
              ["Iceland", "is-IS"]
            ],
            "Italian": [
              ["Italy", "it-IT"],
              ["Switzerland", "it-CH"]
            ],
            "Japanese": [
              ["Japan", "ja-JP"]
            ],
            "Korean": [
              ["Korea", "ko-KR"]
            ],
            "Lithuanian": [
              ["Lithuania", "lt-LT"]
            ],
            "Malaysian": [
              ["Malaysia", "ms-MY"]
            ],
            "Dutch": [
              ["Netherlands", "nl-NL"]
            ],
            "Norwegian": [
              ["Norway", "nb-NO"]
            ],
            "Polish": [
              ["Poland", "pl-PL"]
            ],
            "Portuguese": [
              ["Brazil", "pt-BR"],
              ["Portugal", "pt-PT"]
            ],
            "Romanian": [
              ["Romania", "ro-RO"]
            ],
            "Russian": [
              ["Russia", "ru-RU"]
            ],
            "Serbian": [
              ["Serbia", "sr-RS"]
            ],
            "Slovak": [
              ["Slovakia", "sk-SK"]
            ],
            "Slovenian": [
              ["Slovenia", "sl-SI"]
            ],
            "Spanish": [
              ["Argentina", "es-AR"],
              ["Bolivia", "es-BO"],
              ["Chile", "es-CL"],
              ["Colombia", "es-CO"],
              ["Costa Rica", "es-CR"],
              ["Dominican Republic", "es-DO"],
              ["Ecuador", "es-EC"],
              ["El Salvador", "es-SV"],
              ["Guatemala", "es-GT"],
              ["Honduras", "es-HN"],
              ["México", "es-MX"],
              ["Nicaragua", "es-NI"],
              ["Panamá", "es-PA"],
              ["Paraguay", "es-PY"],
              ["Perú", "es-PE"],
              ["Puerto Rico", "es-PR"],
              ["Spain", "es-ES"],
              ["Uruguay", "es-UY"],
              ["United States", "es-US"],
              ["Venezuela", "es-VE"]
            ],
            "Swedish": [
              ["Sweden", "sv-SE"]
            ],
            "Thai": [
              ["Thailand", "th-TH"]
            ],
            "Turkish": [
              ["Turkey", "tr-TR"]
            ],
            "Ukrainian": [
              ["Ukraine", "uk-UA"]
            ],
            "Vietnamese": [
              ["Viet Nam", "vi-VN"]
            ],
            "Zulu": [
              ["South Africa", "zu-ZA"]
            ]
          }`;
    
    switch(voiceApiType){
        case 'browserDefault':
            return browserDefaultVoiceApi;        
        default:
          // If want to use developer use a voice recognition api 
          // which already not exit in this package.
            return "-1"    
    }

}

/**
 * 
 * BASICS OF DEFAULT VOICE RECOGNITON API
 */

// Creating and setting a new recognition
function setVoiceRecognition(lang){
    if('webkitSpeechRecognition' in window){
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        let recognition = new window.SpeechRecognition();
        recognition.lang = lang;
        recognition.interimResults = false;
        recognition.maxAlternatives = 400;
        console.log('This browser supported by voirex');
        return recognition
    }
    else{
        console.log("This browser does not support Voirex \n Supported browsers; \n --> Google Chrome \n --> Google Chromium");
        return(-1)
    }
}

// Start recording
function startRecord(recognition){
    recognition.start();
}

// Stop Recording
function stopRecord(recognition){
    recognition.stop();
}

// Getting the Voice Text
function instruction(event){
        let finalTranscript = '';
        for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
            finalTranscript += transcript;
            }
        }
        return finalTranscript;
    }

/**
 * 
 * Check the Voice Api Exist or not 
 */
function existingVoiceApi(existingApi){
    return existingApi == "-1" ? false : true
}

/**
 * 
 *  Percentage similarity between keyword and voiceText
 * 
 */
function levenshtein(keyword, voiceText){
    if(!keyword || !voiceText) return (keyword || voiceText).length;
    var matrix = [];
    for(var i = 0; i <= voiceText.length; i++){
        matrix[i] = [i];
        if(i === 0) continue;
        for(var j = 0; j <= keyword.length; j++){
            matrix[0][j] = j;
            if(j === 0) continue;
            matrix[i][j] = voiceText.charAt(i - 1) == keyword.charAt(j - 1) ? matrix[i - 1][j - 1] : Math.min(
                matrix[i-1][j-1] + 1,
                matrix[i][j-1] + 1,
                matrix[i-1][j] + 1
            );
        }
    }
    return  (1 - matrix[voiceText.length][keyword.length] / Math.max(voiceText.length, keyword.length))*100;
}

/**
 * 
 *  Calculating each keyword distance between the voiceText and
 *  hold in a JSON object
 * 
 */
function actualAccuracy(distanceAl, keyword, voiceText){
    let percantageAcc = {};
    for(let i = 0; i < keyword.length; i++){
        percantageAcc[keyword[i]] = distanceAl(keyword[i], voiceText).toString();
    }
    JSON.stringify(percantageAcc);
    return percantageAcc
}

/* 
 *  Find the maximum and minimum value of keyword accuracy values
 */

 //Maximum value
function maxAccuracy(accuracyList){
    var values = [];
    Object.keys(accuracyList).every( (prop) => values.push(Number(accuracyList[prop])));
    return Math.max(...values)
}

//Minimum value
function minAccuracy(accuracyList){
    var values = [];
    Object.keys(accuracyList).every( (prop) => values.push(Number(accuracyList[prop])));
    return Math.min(...values)
}

/**
 * Result the process of all as accuracy resulting
 */

 function resultProcessingVR(accuracyAct, accuracyDev, func){
    return accuracyAct >= accuracyDev ? func() : -1
 }

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
        stopRecord(recognition);
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

function myfunc(){
    alert('It is successfully working!');
}

var recognition = new Voirex(
    {
        type: 'browserDefault',
        lang: 'tr-TR'
    },
    {
        keyword: ['merhaba', 'selam'],
        func: myfunc,
        accuracy: '2%',
        pref: 'max'
    }
);
var new_recogntion = recognition.setVoiceRecConfig();

recognition.startRecognition(new_recogntion);
new_recogntion.onresult = (event) => {
    console.log(recognition.resultProcessVoiceRecog(recognition.getVoiceText(event)));
};
