
const submitButton = document.querySelector('#contact-form')

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

submitButton.addEventListener('submit', formSubmit)

function formSubmit(event) {
    console.log('modal')
    event.preventDefault();
    const firstNameInput = document.querySelector('#first-name')
    const lastNameInput = document.querySelector('#last-name')
    const emailInput = document.querySelector('#email')
    const messageInput = document.querySelector('#messageBox')  
    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const message = messageInput.value
  
    console.log({ firstName, lastName, email, message })
    closeModal()
  }