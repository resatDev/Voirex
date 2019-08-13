export function textMining (keywords = [], rawText) {
    let result = []
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
        })
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