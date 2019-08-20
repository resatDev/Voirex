/**
 * 
 *  Percentage similarity between keyword and voiceText
 * 
 */
export function levenshtein(keyword, voiceText){
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
};