
const submitButton = document.querySelector('#contact-form');
const main = document.getElementById("main");
const body = document.getElementById("body");
const modal = document.getElementById("contact_modal");
const imgCloseModal = document.getElementById("imgCloseModal");
const btnOpenContact = document.querySelector('.contact_button');

function displayModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
	modal.style.display = "block";
    imgCloseModal.focus();
}

function closeModal() {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = "none";
    btnOpenContact.focus();
}

submitButton.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#messageBox');
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    console.log({ firstName, lastName, email, message });
    closeModal();
  }

imgCloseModal.addEventListener('keyup', function (e) {    
    if (modal.getAttribute('aria-hidden') == 'false' && e.code === 'Escape') {
       closeModal();
    }
});