import stopWatch_Logic from "./stopWatch_Logic";
import { INITIALTIME, MILLISECOND, CHECK, lapArray } from "../app";

let root = document.querySelector('#root');

let interval = [null];

const resetButton = root.querySelector('.reset');
const stopButton = root.querySelector('.stop');
const startButton = root.querySelector('.start');

function stopWatch_Controller(){

    startStopWatch();
    resetStopWatch();
    pauseStopWatch();

};

function resetStopWatch(){

   resetButton.addEventListener('click', () => {

        const timeHead = root.querySelector('.timeHead');

        clearInterval(interval[0]);


        const lapNode = document.querySelector('.lapNode');
        const lapList = document.querySelectorAll('.lap');
        const arrayLapList = Array.from(lapList);
        for(let i=0; i< arrayLapList.length;i++){

            lapNode.removeChild(arrayLapList[i]);
        }

        startButton.removeAttribute('disabled');
        resetButton.setAttribute('disabled', true);
        stopButton.setAttribute('disabled', true);
        document.querySelector('.lapButton').setAttribute('disabled', true);


        timeHead.textContent = '00:00:00:000';

        

            INITIALTIME[0]=0;
            MILLISECOND[0]=0;
            CHECK[0]=true;
            lapArray[0]=0;
            lapArray[1]=0;

   });

};

function startStopWatch(){

    function handleStart() {

        interval[0] = stopWatch_Logic();

        resetButton.removeAttribute('disabled');
        stopButton.removeAttribute('disabled');
        startButton.setAttribute('disabled', true);
        document.querySelector('.lapButton').removeAttribute('disabled');
    }

    startButton.addEventListener('click', handleStart);

};

function pauseStopWatch(){

    function handleStop() {

        clearInterval(interval[0]);

        CHECK[0]=false;

        resetButton.removeAttribute('disabled');
        startButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', true);
    }

    stopButton.addEventListener('click', handleStop);

};


export default stopWatch_Controller;