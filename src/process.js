/*
******If the accuracy >70 and <90 
*/
export function accuracyHigh (keywords = [], rawText) {
    let result = []
    rawText == "-1" ? "-1" : 
    result = rawText.map(item => {
        for(var i = 0; i < keywords.length; i++){
            if(item.includes(keywords[i])){
                return item
            }else {
                continue
            }
        }
    })
    return result.filter(function (el) {
        return el != null;
    });
}
/*
*******If the accuracy <70 and >50
*/
