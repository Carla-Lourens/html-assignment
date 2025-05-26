// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const detailsBtn = document.getElementById("detailsBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

// Show the popup when "The details" button clicked
  function showPopup(event) {
    event.preventDefault();  // Prevent default link navigation
    popup.classList.remove("hidden");
  }

  // Function to hide the popup
  function closePopup() {
    popup.classList.add("hidden");
  }

  // Event listeners
  detailsBtn.addEventListener("click", showPopup);
  closeBtn.addEventListener("click", closePopup);
});

// Mobile dropdown toggle
  const dropdownParents = document.querySelectorAll('nav ul li:has(ul.dropdown) > a');

  dropdownParents.forEach(link => {
    link.addEventListener('click', (e) => {
      const parentLi = link.parentElement;

      // For mobile, toggle .open class on parent <li> to show/hide dropdown
      if (window.innerWidth < 768) {
        e.preventDefault();  // Prevent default link behavior
        parentLi.classList.toggle('open');
      }  
    });
  });
