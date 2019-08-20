/**
 * Result the process of all as accuracy resulting
 */

 export function resultProcessingVR(accuracyAct, accuracyDev, func){
    return accuracyAct >= accuracyDev ? func() : -1
 }