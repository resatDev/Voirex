/**
 * 
 * BASICS OF DEFAULT VOICE RECOGNITON API
 */

// Creating and setting a new recognition
export function setVoiceRecognition(lang){
    if('webkitSpeechRecognition' in window){
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        let recognition = new window.SpeechRecognition();
        recognition.lang = lang;
        recognition.interimResults = false;
        recognition.maxAlternatives = 400;
        console.log('This browser supported by voirex')
        return recognition
    }
    else{
        console.log("This browser does not support Voirex \n Supported browsers; \n --> Google Chrome \n --> Google Chromium")
        return(-1)
    }
}

// Start recording
export function startRecord(recognition){
    recognition.start();
}

// Stop Recording
export function stopRecord(recognition){
    recognition.stop();
}

// Getting the Voice Text
export function instruction(event){
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
            finalTranscript += transcript;
            } else {
            interimTranscript += transcript;
            }
        }
        return finalTranscript;
    }

