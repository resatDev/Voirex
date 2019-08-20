/**
 * 
 * BASICS OF DEFAULT VOICE RECOGNITON API
 */

// Creating and setting a new recognition
export function setVoiceRecognition(lang){
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 400;
    return recognition;
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

