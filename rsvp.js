document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvpForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    const modal = document.getElementById("modal");
    const modalDetails = document.getElementById("modalDetails");
    const closeModal = document.getElementById("closeModal");
  
    function validateName() {
      const name = nameInput.value.trim();
      if (name === "") {
        nameError.textContent = "Name is required.";
        return false;
      } else if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.textContent = "Name can only contain letters.";
        return false;
      } else {
        nameError.textContent = "";
        return true;
      }
    }
  
    function validateEmail() {
      const email = emailInput.value.trim();
      if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        return false;
      } else {
        emailError.textContent = "";
        return true;
      }
    }
  
    function validateMessage() {
      const message = messageInput.value.trim();
      if (message === "") {
        messageError.textContent = "Message is required.";
        return false;
      } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        return false;
      } else {
        messageError.textContent = "";
        return true;
      }
    }
  
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
  
      if (isNameValid && isEmailValid && isMessageValid) {
        modalDetails.innerHTML = `
          <strong>Name:</strong> ${nameInput.value}<br/>
          <strong>Email:</strong> ${emailInput.value}<br/>
          <strong>Message:</strong> ${messageInput.value}
        `;
        modal.style.display = "flex";
        form.reset();
      }
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });
  });
  