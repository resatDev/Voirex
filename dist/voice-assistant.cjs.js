'use strict';

const setText = () => {
    let textRaw = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.";
    let textPrc = textRaw.split(' ').map(item => item);
    return textPrc
};

const voiceApi = (starting, timeZone) => {
    if(starting){
        return setText()
    }else{
        return "-1"
    }
};

/*
******If the accuracy >70 and <90 
*/
function accuracyHigh (keywords = [], rawText) {
    let result = [];
    rawText == "-1" ? "-1" : 
    result = rawText.map(item => {
        for(var i = 0; i < keywords.length; i++){
            if(item.includes(keywords[i])){
                return item
            }else {
                continue
            }
        }
    });
    return result.filter(function (el) {
        return el != null;
    });
}
/*
*******If the accuracy <70 and >50
*/

function makeResult (result = [], func){
    return result == [] ? console.log("There is nothing") : func()
}

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
        makeResult(this.accuracyItem(), this.func);
    }
}

var recogni = new VoiceAssistant({
    keyword : ["Lorem", "Ipsum"],
    starting : false,
    func: console.log("\t\t\t\t\tHello World!")
});

recogni.accuracyItem();
