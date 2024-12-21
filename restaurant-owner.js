// Modal functionality
function openModal(plan) {
  const modal = document.getElementById('signup-modal');
  const selectedPlanInput = document.getElementById('selected-plan');
  selectedPlanInput.value = plan;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
  const modal = document.getElementById('signup-modal');
  modal.classList.remove('show');
  document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('signup-modal');
  if (event.target === modal) {
    closeModal();
  }
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
  const listingForm = document.getElementById('listing-form');
  
  if (listingForm) {
    listingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('restaurant-name').value,
        address: document.getElementById('restaurant-address').value,
        phone: document.getElementById('restaurant-phone').value,
        email: document.getElementById('restaurant-email').value,
        website: document.getElementById('restaurant-website').value,
        description: document.getElementById('restaurant-description').value,
        plan: document.getElementById('selected-plan').value
      };

      // Here you would typically send this data to your backend
      // For now, we'll just show a success message
      alert('Thank you for signing up! Your 7-day free trial has started. We will contact you shortly with next steps.');
      listingForm.reset();
      closeModal();
    });
  }
});

// Function for nav bar menu responsiveness
function respNavMenu() {
  var nav = document.getElementById("navMenu");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
} 