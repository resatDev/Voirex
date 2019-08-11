export function makeResult (result = [], func){
    return result == [] ? console.log("There is nothing") : func()
}