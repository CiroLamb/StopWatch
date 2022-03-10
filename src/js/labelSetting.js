
function labelSetting(tag){

    tag.setAttribute('contenteditable', true);

    let  l = true;

        tag.addEventListener('click', () => {
            if(l){
                tag.textContent = '';
                l=false;
            }
        });

        tag.addEventListener('keypress', (e) => {

            if(e.key === 'Enter'){
                tag.removeAttribute('contenteditable');
            }
        });


        tag.addEventListener('blur', (e) => {
            if(tag.textContent.length>2){
                tag.removeAttribute('contenteditable');
            }
        });

        tag.addEventListener('keyup', (e) => {
            const currentValue = tag.textContent;

            if(tag.textContent.length > 20) {
                tag.textContent = currentValue.substring(0, 20);
                tag.removeAttribute('contenteditable');
            }
        });

}

export default labelSetting;