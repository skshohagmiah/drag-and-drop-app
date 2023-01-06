const container = document.querySelector('.drag-container');
const title = document.querySelector('.title');
const button = document.querySelector('button');
const input = document.querySelector('input');
let file;

button.addEventListener('click',() => {
    input.click();
    container.classList.add('active')
});

input.addEventListener('change',(e) => {
    file = e.target.files[0]
    showFile();
})

container.addEventListener('dragover', (e) => {
    e.preventDefault()
    title.textContent = 'release to upload'
});

container.addEventListener('dragleave',() => {
    container.classList.remove('active');
    title.textContent = 'drag & drop'
});

container.addEventListener('drop', (e) => {
    file = e.dataTransfer.files[0];
    showFile();
})

function showFile(){
    let  fileType = file.type;
    let validFile = ['image/jpeg','image/png','image/jpg']

    if(validFile.includes(fileType)){
        const fileReader = new FileReader();
        fileReader.onload = function(){
            let imgUrl =  fileReader.result
            container.innerHTML = `<img src="${imgUrl}" alt="">`
        }
        fileReader.readAsDataURL(file)
    }else{
        alert('Our File is Not Valid!')
    }

}