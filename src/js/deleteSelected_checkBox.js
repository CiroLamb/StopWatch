function deleteSelected(){

    root.querySelector('.deleteSelected').addEventListener('click', () => {

            const lapNode = document.querySelector('.lapNode');
            const lapList = document.querySelectorAll('.lap');
            const arrayLapList = Array.from(lapList);

            for(let i=0; i< arrayLapList.length;i++){

                if(arrayLapList[i].querySelector('.checkBox').checked == true){

                    lapNode.removeChild(arrayLapList[i]);
                }

            }
    });
}

export default deleteSelected;