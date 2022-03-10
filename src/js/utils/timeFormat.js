/**
 * 
 * @param {number} millisecond 
 * @returns string (time in string format)
 */

function timeFormat(millisecond){


    var sec=(""+(millisecond/1000)).split('.')[0];

    var oo=(""+(sec/3600)).split('.')[0];
    var mm=(""+((sec%3600)/60)).split('.')[0];
    var ss=(""+(sec%3600%60)).split('.')[0];
    var ms=(""+(millisecond%1000)).split('.')[0];

  
    if(oo.length===1){
        oo='0'+oo;
    }
    if(mm.length===1){
        mm='0'+mm;
    }
    if(ss.length===1){
        ss='0'+ss;
    }
    if(ms.length===1){
        ms='00'+ms;
    }
    if(ms.length===2){
        ms='0'+ms;
    }
    
    var tempo=oo+':'+mm+':'+ss+':'+ms;

    return tempo; //string
}

export default timeFormat;