/**
 * 
 * CHECK RECOGNITON TEXT IS EMPTY OR NOT
 */ 

export const isEmpty = (recognitionText) => {

    // If text is not empty --> return recognitionText
    if(recognitionText != ''){
        return recognitionText

    // If text is empty --> return Error Message "-1"
    }else{
        return "-1"
    }
}