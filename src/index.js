import Voirex from './manager';

function myfunc(){
    alert('It is successfully working!')
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
)
var new_recogntion = recognition.setVoiceRecConfig();

recognition.startRecognition(new_recogntion);
new_recogntion.onresult = (event) => {
    console.log(recognition.resultProcessVoiceRecog(recognition.getVoiceText(event)))
}

