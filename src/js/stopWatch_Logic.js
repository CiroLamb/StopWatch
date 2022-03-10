import timeFormat from "./utils/timeFormat";
import stopWatch_Creation from "./stopWatch_Creation";
import { INITIALTIME, MILLISECOND, CHECK } from "../app";

let root = document.querySelector('#root');

stopWatch_Creation();

/**
 * @param {string} time 
 */
function timeSet(time){

    const timeHead = root.querySelector('.timeHead');

    timeHead.textContent=time;
};


function stopWatch_Logic(){

    let interval = null;

    if(CHECK[0]){
        
        let timePassed = 0;
        INITIALTIME[0] = new Date().getTime();
        
        interval = setInterval(() => {

            timePassed = new Date().getTime();
            MILLISECOND[0] = timePassed - INITIALTIME[0];

            timeSet(timeFormat(MILLISECOND[0]));

        }, 1);

    }else{

        let timePassed = 0;
        
        INITIALTIME[0] = new Date().getTime();

        INITIALTIME[0] = INITIALTIME[0] - MILLISECOND[0];

        interval = setInterval(() => {

            timePassed = new Date().getTime();
            MILLISECOND[0] = timePassed - INITIALTIME[0];

            timeSet(timeFormat(MILLISECOND[0]));

        }, 1);
    }

    return interval;
};

export default stopWatch_Logic;