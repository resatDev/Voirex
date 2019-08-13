/*
    Accuracy 100%
*/
export function makeResultAbs(result, keyword, func){
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
export function makeResultHigh (result ,keyword, func){
    let new_func = new Function(func);
    if(result != "-1"){
        keyword.map(item => {
            if(result.join(" ").includes(item)){
                return new_func()
            }
        })
    }else{
        return "There is nothing to show"
    }
}
/*
    Accuracy 50%
*/ 
export function makeResultMid (result ,keyword, func){
    let new_func = new Function(func);
    if(result != "-1"){
        keyword.map(item => {
            if(result.join(" ").includes(item)){
                return new_func()
            }
        })
    }else{
        return "There is nothing to show"
    }
}