import {createDiv,createButton,createH1} from "./utils/domElements";

let root = document.querySelector('#root');

function stopWatch_Creation(){

    const node = createDiv();
    const timeHead = createH1();
    const reset = createButton();
    const start = createButton();
    const stop = createButton();
    const deleteSelected = createButton();

        node.classList.add('stopWatch');
        timeHead.classList.add('timeHead');
        reset.classList.add('reset');
        start.classList.add('start');
        stop.classList.add('stop');
        deleteSelected.classList.add('deleteSelected');

        reset.textContent='RESET';
        start.textContent='START';
        stop.textContent='STOP';
        deleteSelected.textContent='delete selected';

            reset.setAttribute('disabled', true);
            stop.setAttribute('disabled', true);
            timeHead.textContent='00:00:00:000';

    node.appendChild(timeHead);
    node.appendChild(reset);
    node.appendChild(start);
    node.appendChild(stop);
    node.appendChild(deleteSelected);

    root.appendChild(node);
};

export default stopWatch_Creation;