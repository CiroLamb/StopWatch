import {createButton, createDiv, createLabel, createP, createInput} from "./utils/domElements";
import stopWatch_lapDifference from "./lapDifference";
import labelSetting from "./labelSetting";
import deleteSelectedBox from "./deleteSelected_checkBox";

let root = document.querySelector('#root');

const lapNode = createDiv();
lapNode.classList.add('lapNode');

root.appendChild(lapNode);

function stopWatch_lap(){

    const lapButton = createButton();
    lapButton.classList.add('lapButton');
    lapButton.textContent = 'LAP';
    lapButton.setAttribute('disabled', true);

    deleteSelectedBox();
    
    lapButton.addEventListener('click', lapCreation);

    root.querySelector('.stopWatch').appendChild(lapButton);
}

function lapCreation(){

    const node = createDiv();
    const lap = createP();
    const lapDifference = createP();
    const tag = createLabel();
    const box = createInput();

        node.classList.add('lap');
        lap.classList.add('lapTime');
        tag.classList.add('lapTag');
        lapDifference.classList.add('lapDifference');
        box.classList.add('checkBox');

        lap.textContent = 'lap: ' + (root.querySelector('.timeHead')).textContent;

        lapDifference.textContent = 'lap difference: ' + stopWatch_lapDifference();

        tag.textContent = 'inserisci etichetta';

        box.setAttribute('type', 'checkbox');

        labelSetting(tag);

    node.appendChild(box);
    node.appendChild(lap);
    node.appendChild(lapDifference);
    node.appendChild(tag);

    lapNode.appendChild(node);
}

export default stopWatch_lap;