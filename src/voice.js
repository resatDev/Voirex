import {setText} from './text'
export const voiceApi = (starting, timeZone) => {
    if(starting == true){
        return setText(timeZone)
    }else{
        return "-1"
    }
}