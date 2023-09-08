let openBtn = document.getElementById('openBtn');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close_modal');

openBtn.addEventListener('click', function(){
    modal.style.display = 'flex';
    openBtn.style.display = 'none';
})

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
    openBtn.style.display = "block";
});