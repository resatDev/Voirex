/**
 * 
 *  Calculating each keyword distance between the voiceText and
 *  hold in a JSON object
 * 
 */
export function actualAccuracy(distanceAl, keyword, voiceText){
    let percantageAcc = {}
    for(let i = 0; i < keyword.length; i++){
        percantageAcc[keyword[i]] = distanceAl(keyword[i], voiceText).toString();
    }
    JSON.stringify(percantageAcc)
    return percantageAcc
}