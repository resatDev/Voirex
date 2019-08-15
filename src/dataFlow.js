export function startTakingText(voiceText, index){
    return voiceText.splice(index, 1);
}

export function stopTakingText(voiceTextItem, timeZone){
    let text = ''
    let index = 0;
    for(var i = 0; i < timeZone; i++){
        setTimeout(() => {text += voiceTextItem;}, 1000)
        index++;
    }
    return text;
}

export function takeText(text){
    return text
}