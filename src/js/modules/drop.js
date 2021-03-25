const drop = () => {
    //dragentre - объект над dropArea
    //dragleave - за пределами dropArea
    //draqover - объект зависает над dropArea
    //drop - объект отправлен в dropAre

    const fileInputs = document.querySelectorAll('[name = "upload"]');

    ['dragenter','dragleave','dragover','drop'].forEach(evenName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(evenName,preventDefaults,false);
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,0.7)";
    }

    function unhighlight(item){
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')){
            item.closest('.file_upload').style.backgroundColor = "#fff";
        }else{
            item.closest('.file_upload').style.backgroundColor = "#ededed";
            
        }
        
    }

    ['dragenter','dragover'].forEach(evenName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(evenName,()=> highlight(input),false);
        });
    });

    ['dragleave','drop'].forEach(evenName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(evenName,()=> unhighlight(input),false);
        });
    });


    fileInputs.forEach(input => {
        input.addEventListener('drop',(e) =>{
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots ="..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;