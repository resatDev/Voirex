'use strict';

const setText = () => {
    let alt_text = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.";
    let textPrc = alt_text.split(' ');
    return textPrc
};

const voiceApi = (starting) => {
    if(starting == true){
        return setText()
    }else{
        return "-1"
    }
};

function textMining (keywords = [], rawText) {
    let result = [];
    if(rawText == "-1") { 
        return  "-1" 
    } 
    else{
        result = rawText.map(item => {
            for(var i = 0; i < keywords.length; i++){
                if(item.includes(keywords[i])){
                    return item
                }else {
                    continue
                }
            }
        });
        result = result.filter(function (el) {
            return el != null;
        });
        if(result.length != 0){
            return result
        }
        else{
            return "-1"
        }
    }   
}

/*
    Accuracy 100%
*/
function makeResultAbs(result, keyword, func){
    if(Array.isArray(keyword) && result != "-1"){
        if(keyword.join(" ") == result.join(" ")){
            let new_func = new Function(func);
            return new_func()
        }
        else{
            return "There is nothing absolute inner 100%"
        }
    }
    else{
        return "There is nothing absolute 100%"

    }
}
/* 
    Accuracy 70%
*/
function makeResultHigh (result ,keyword, func){
    let new_func = new Function(func);
    let counter = 0;
    if(result != "-1"){
        keyword.map(item => {
            if(result.join(" ").includes(item)){
                counter++;
            }
        });
        if(counter == keyword.length){
            return new_func()
        }
    }else{
        return "There is nothing to show 70%"
    }
}
/*
    Accuracy 50%
*/ 
function makeResultMid (result ,keyword, func){
    let new_func = new Function(func);
    if(result != "-1"){
        for(let i = 0; i < keyword.length; i++){
            if(result.join(" ").includes(keyword[i])){
                return new_func()
            }
        }
    }else{
        return "There is nothing to show 50%"
    }
}
/*
    Accuracy 20%
*/

function makeResultLow (result, func) {
    if(result != "-1"){
        let new_func = new Function(func);
        return new_func()
    }
    else{
        return "There is nothing to show 20%"
    }
}

function howMuchAccuracy(accuracy){
   var acc = accuracy.split('');
   return Number(acc.splice(0,acc.length - 1).join(''))
}

function startTakingText(voiceText, index){
    return voiceText.splice(index, 1);
}

function stopTakingText(voiceTextItem, timeZone){
    let text = '';
    for(var i = 0; i < timeZone; i++){
        setTimeout(() => {text += voiceTextItem;}, 1000);
    }
    return text;
}

function takeText(text){
    return text
}

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

var recogni = new VoiceAssistant('type-1',{
    keyword : ["Lorem", "Ipsum"],
    starting : false,
    func: 'console.log("\t\t\t\t\tHello World!")',
    accuracy: '-151%'
});

console.log(recogni.controlling());
