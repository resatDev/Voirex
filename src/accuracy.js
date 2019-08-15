export function howMuchAccuracy(accuracy){
   var acc = accuracy.split('');
   return Number(acc.splice(0,acc.length - 1).join(''))
}