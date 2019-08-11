import {setText} from './text'
export const voiceApi = (starting, timeZone) => {
    if(starting){
        return setText(timeZone)
    }else{
        return "-1"
    }
}