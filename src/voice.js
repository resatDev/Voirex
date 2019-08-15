import {setText} from './text'
export const voiceApi = (starting) => {
    if(starting == true){
        return setText()
    }else{
        return "-1"
    }
}