(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    const setText = () => {
        let textRaw = "Lorem Ipsum";
        let textPrc = textRaw.split(' ').map(item => item);
        return textPrc
    };

    const voiceApi = (starting, timeZone) => {
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
        if(Array.isArray(keyword)){
            if(keyword.join(" ") == result.join(" ")){
                let new_func = new Function(func);
                return new_func()
            }
            else{
                return "There is nothing absolute inner"
            }
        }
        else{
            return "There is nothing absolute"
        }
    }
    /* 
        Accuracy 70%
    */
    function makeResultHigh (result ,keyword, func){
        let new_func = new Function(func);
        if(result != "-1"){
            keyword.map(item => {
                if(result.join(" ").includes(item)){
                    return new_func()
                }
            });
        }else{
            return "There is nothing to show"
        }
    }
    /*
        Accuracy 50%
    */ 
    function makeResultMid (result ,keyword, func){
        let new_func = new Function(func);
        if(result != "-1"){
            keyword.map(item => {
                if(result.join(" ").includes(item)){
                    return new_func()
                }
            });
        }else{
            return "There is nothing to show"
        }
    }

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

    var recogni = new VoiceAssistant({
        keyword : ["Lorem", "Ipsum"],
        starting : true,
        func: 'console.log("\t\t\t\t\tHello World!")',
        accuracy: '50%'
    });

    console.log(recogni.showResult());

}));
