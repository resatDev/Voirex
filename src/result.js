/*
    Accuracy 100%
*/
export function makeResultAbs(result, keyword, func){
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
export function makeResultHigh (result ,keyword, func){
    let new_func = new Function(func);
    let counter = 0;
    if(result != "-1"){
        keyword.map(item => {
            if(result.join(" ").includes(item)){
                counter++
            }
        })
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
export function makeResultMid (result ,keyword, func){
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

export function makeResultLow (result, func) {
    if(result != "-1"){
        let new_func = new Function(func);
        return new_func()
    }
    else{
        return "There is nothing to show 20%"
    }
}