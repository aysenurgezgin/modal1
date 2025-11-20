const btnOpenModal = document.getElementById("btn-open-modal");
const mainModal = document.querySelector(".main-modal");
const btnCloseModal = document.querySelector(".btn-colese-modal");
const btnNoModal = document.querySelector(".btn-no-modal");

btnOpenModal.addEventListener("click", function(){
    mainModal.classList.remove("main-modal-none");
});
