// script.js

// directoryData will be available globally from directorydata.js

let cardsToLoad = 8; // Number of cards to load initially
let loadedCards = 4; // Number of cards initially loaded

// Separate data arrays for filtered, all, and searched cards
let filteredData = [];
let searchedData = [];

// Function to load more cards in listing on click 
function loadMore() {
  const spinner = document.getElementById('load-more-btn').querySelector('i');
  spinner.classList.add("spin");
  // Add a small delay to the function
  setTimeout(() => {
    // Determine the context (filtered, searched, or all)
    let contextData;
    if (filteredData.length > 0) {
      contextData = filteredData;
    } else if (searchedData.length > 0) {
      contextData = searchedData;
    } else {
      contextData = directoryData;
    }

    // Check if there are any more items to load
    if (contextData.length > loadedCards) {
      // Load more cards and render
      renderCards(contextData.slice(0, loadedCards + cardsToLoad));
      loadedCards += cardsToLoad;
    } else {
      // Hide the button and show the "You have reached the end of the list" message
      const loadMoreBtn = document.getElementById("load-more-btn");
      loadMoreBtn.style.display = "none";
      const endOfListMsg = document.getElementById("end-of-list");
      endOfListMsg.style.display = "inline-block";
    }

    // Hide the spinner
    spinner.classList.remove("spin");
  }, 350);
}

// Function to render cards inside listing
function renderCards(data) {
  const cardWrapper = document.getElementById("cardWrapper");
  cardWrapper.innerHTML = "";

  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = '<div class="img-container">' +
      '<img width="286" height="240" src="' + item.imageUrl + '" alt="' + item.Title + '" loading="lazy">' +
      '<span class="overlay-text">' + item.Title + '</span>' +
      '<span class="icon-right">' + '<i class="fa fa-heart"></i> ' + item.Likes + '</span>' +
      '<span class="icon-left">' + item.topLeftText + '</span>' +
      '<span class="icon-bottom">' + item.bottomText + '</span>' +
      '</div>' +
      '<div class="content">' +
      '<h2>' + item.Title + '</h2>' +
      '<p>' + item.description + '</p>' +
      '<button ' + 'onclick="triggerModal(' + index + ')"' + 'class="btn">Learn more</button>' +
      '</div>' +
      '<div id="' + index + '" class="modal-container">' +
      '<div onclick="triggerModal(' + index + ')" class="overlay"></div>' +
      '<div id="' + index + '-popup' + '"  class="modal">' +
      '<img width="800" height="256" src="' + item.imageUrl + '" alt="' + item.Title + '" class="modal-img" loading="lazy">' +
      '<div class="modal-text">' +
      '<h2>' + item.Title + '</h2>' +
      '<p>' + item.modalDescription + '</p>' +
      '<a class="btn" style="float:left;" href="' + item.linkUrl + '" target="_blank">Buy now</a>' +
      '</div>' +
      '</div>' +
      '</div>';
    cardWrapper.appendChild(card);
  });
}

// Function to filter cards by tag
function filterCards(tag) {
  // Show the "Load more" button again, remove end of list msg
  const loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.style.display = "inline-block";
  const endOfListMsg = document.getElementById("end-of-list");
  endOfListMsg.style.display = "none";

  // Filter the data using OR operator and update the filteredData array
  filteredData = directoryData.filter((item) => item.tags.includes(tag));

  renderCards(filteredData.slice(0, cardsToLoad));
  loadedCards = cardsToLoad;
}

// Function to show all cards
function showAllCards() {
  // Show the "Load more" button again, remove end of list msg
  const loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.style.display = "inline-block";
  const endOfListMsg = document.getElementById("end-of-list");
  endOfListMsg.style.display = "none";
  // Show all cards from the original data
  filteredData = []; // Clear filtered data
  searchedData = []; // Clear searched data
  renderCards(directoryData.slice(0, cardsToLoad));
  loadedCards = cardsToLoad;
}

// Function to search cards
function searchCards() {
  // Show the "Load more" button again, remove end of list msg
  const loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.style.display = "inline-block";
  const endOfListMsg = document.getElementById("end-of-list");
  endOfListMsg.style.display = "none";
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();
  // Filter the data and update the searchedData array
  searchedData = directoryData.filter((item) =>
    item.Title.toLowerCase().includes(searchTerm)
  );
  renderCards(searchedData.slice(0, cardsToLoad));
  loadedCards = cardsToLoad;
}

// Function to trigger modal
function triggerModal(index) {
  const modal = document.getElementById(index);
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

// Function for nav bar menu responsiveness
function respNavMenu() {
  var nav = document.getElementById("navMenu");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}

// Function to scroll filter tags
function scrollFilters(direction) {
  const filterTags = document.getElementById('filterTags');
  const scrollAmount = 200;
  
  if (direction === 'left') {
    filterTags.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else {
    filterTags.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// Function to trigger filters modal
function triggerFiltersModal() {
  const modal = document.getElementById('filters-modal');
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Handle listing form submission
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
        plan: document.getElementById('plan-selection').value
      };

      // Here you would typically send this data to your backend
      // For now, we'll just show a success message
      alert('Thank you for submitting your restaurant! We will review your listing and contact you shortly.');
      listingForm.reset();
    });
  }

  // Initialize existing event listeners
  renderCards(directoryData.slice(0, cardsToLoad));

  // Add event listeners for filter tags
  const buttons = document.querySelectorAll('.filter-tag-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(otherButton => {
        otherButton.classList.remove('active-btn');
      });
      button.classList.add('active-btn');
    });
  });

  // Add click listeners for filter arrows
  document.querySelector('.filter-tags-left-arrow').addEventListener('click', () => scrollFilters('left'));
  document.querySelector('.filter-tags-right-arrow').addEventListener('click', () => scrollFilters('right'));

  // Add scroll event listener to show/hide arrows based on scroll position
  const filterTags = document.getElementById('filterTags');
  filterTags.addEventListener('scroll', function() {
    const leftArrow = document.querySelector('.filter-tags-left-arrow');
    const rightArrow = document.querySelector('.filter-tags-right-arrow');
    
    // Show/hide left arrow based on scroll position
    leftArrow.style.display = filterTags.scrollLeft > 0 ? 'flex' : 'none';
    
    // Show/hide right arrow based on whether there's more content to scroll
    const maxScroll = filterTags.scrollWidth - filterTags.clientWidth;
    rightArrow.style.display = filterTags.scrollLeft >= maxScroll ? 'none' : 'flex';
  });

  // Trigger initial scroll event to set arrow visibility
  filterTags.dispatchEvent(new Event('scroll'));
});

