const btn = document.getElementById('ham');
const closebtn = document.getElementById('cross');

btn.addEventListener('click', openModal);
closebtn.addEventListener('click', closeModal);

function openModal(){

const modal = document.getElementById('nav-modal');
modal.style.display = 'block';
document.body.classList.add('overlay');
}

function closeModal(){

    const modal = document.getElementById('nav-modal');
    modal.style.display = 'none';
    document.body.classList.remove('overlay');
    
 }