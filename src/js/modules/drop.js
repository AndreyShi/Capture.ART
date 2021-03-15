const drop = () => {
    //dragentre - объект над dropArea
    //dragleave - за пределами dropArea
    //draqover - объект зависает над dropArea
    //drop - объект отправлен в dropAre

    const fileInputs = document.querySelectorAll('[name = "upload"]');

    ['click','dragenter','dragleave','dragover','drop'].forEach(evenName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(evenName,preventDefaults,false);
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }
};

export default drop;