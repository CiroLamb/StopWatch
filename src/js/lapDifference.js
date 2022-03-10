import {MILLISECOND, lapArray} from "../app";
import timeFormat from "./utils/timeFormat";

function stopWatch_lapDifference(){
    
    lapArray[0] = MILLISECOND[0];

        let diff = lapArray[0] - lapArray [1];
    
    let t = lapArray[0];
    lapArray[0]=lapArray[1];
    lapArray[1]=t;

    return timeFormat(diff);
    
}

export default stopWatch_lapDifference;