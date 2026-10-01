// North Star Bakery product data

const bakeryProducts = {
    "Signature Loaf": "Bread",
    "Country Sourdough": "Bread",
    "Whole Grain Bread": "Bread",
    "Seasonal Artisan Bread": "Bread",
    "Butter Croissant": "Pastry",
    "Fruit Danish": "Pastry",
    "Cinnamon Roll": "Pastry",
    "Seasonal Muffin": "Pastry",
    "Small Celebration Cake": "Cake",
    "Large Celebration Cake": "Cake",
    "Custom Decorated Cake": "Cake",
    "Seasonal Cake": "Cake"
};

const favoriteMessages = {
    added: "Added to your favorites!",
    removed: "Removed from your favorites."
};

// Save a favorite product in browser storage
function saveFavorite(productName) {
    localStorage.setItem("northStarFavorite", productName);
}

// Load the saved favorites from browser storage
function loadFavorite() {
    return localStorage.getItem("northStarFavorite");
}

// Update the favorite message on the page
function displayFavorite(productName) {
    const favoriteMessage = document.getElementById("favorite-message");

    if (productName) {
        favoriteMessage.textContent =
            "Your favorite product is: " + productName;
    } else {
        favoriteMessage.textContent =
            "You have not selected a favorite product yet.";
    }
}

// Handle click on a favorite button
function handleFavoriteClick(event) {
    const productName = event.target.dataset.product;
    const currentFavorite = loadFavorite();

    if (currentFavorite === productName) {
        localStorage.removeItem("northStarFavorite");
        displayFavorite("");
        event.target.textContent = "Add to Favorites";
    } else {
        saveFavorite(productName);
        displayFavorite(productName);

        const buttons = document.querySelectorAll(".favorite-button");

        buttons.forEach(function(button) {
            button.textContent = "Add to Favorites";
        });

        event.target.textContent = "Remove from Favorites";
    }
}

// Set up the favorite buttons
function setupFavorites() {
    const favoriteButtons = document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach(function(button) {
        button.addEventListener("click", handleFavoriteClick);
    });

    const savedFavorite = loadFavorite();

    if (savedFavorite) {
        displayFavorite(savedFavorite);

        favoriteButtons.forEach(function(button) {
            if (button.dataset.product === savedFavorite) {
                button.textContent = "Remove from Favorites";
            }
        });
    }
}

// Start the favorite feature when page loads
if (document.querySelector(".favorite-button")) {
    setupFavorites();
}
// Validate the contact form
function validateContactForm(event) {
    const form = event.target;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pickupDate = document.getElementById("pickup-date");
    const requestType = document.getElementById("request-type");
    const itemDetails = document.getElementById("item-details");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const pickupDateError = document.getElementById("pickup-date-error");
    const requestTypeError = document.getElementById("request-type-error");
    const itemDetailsError = document.getElementById("item-details-error");
    const formSuccess = document.getElementById("form-success");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    pickupDateError.textContent = "";
    requestTypeError.textContent = "";
    itemDetailsError.textContent = "";
    formSuccess.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else if (name.value.trim().length < 2) {
        nameError.textContent = "Name must be at least 2 characters.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (pickupDate.value === "") {
    pickupDateError.textContent = "Please select a pickup date.";
    isValid = false;
    }

    if (requestType.value === "") {
        requestTypeError.textContent = "Please select a request type.";
        isValid = false;
    }

    if (itemDetails.value.trim() === "") {
        itemDetailsError.textContent = "Please enter your item details.";
        isValid = false;
    } else if (itemDetails.value.trim().length < 10) {
        itemDetailsError.textContent =
            "Item details must be at least 10 characters.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        return;
    }

    event.preventDefault();
    formSuccess.textContent =
        "Thank you! Your request has been received.";
}

// Set up contact form validation
function setupContactForm() {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", validateContactForm);
}

// Start contact form validation when the page loads
if (document.querySelector("form")) {
    setupContactForm();
}