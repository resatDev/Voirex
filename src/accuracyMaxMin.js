/* 
 *  Find the maximum and minimum value of keyword accuracy values
 */

 //Maximum value
export function maxAccuracy(accuracyList){
    var values = []
    Object.keys(accuracyList).every( (prop) => values.push(Number(accuracyList[prop])))
    return Math.max(...values)
}

//Minimum value
export function minAccuracy(accuracyList){
    var values = []
    Object.keys(accuracyList).every( (prop) => values.push(Number(accuracyList[prop])))
    return Math.min(...values)
}