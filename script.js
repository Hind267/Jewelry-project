
//home page image slide 
let currentImageIndex = 0;
const images = [
    'Home/home1.jpg',
    'Home/home3.jpg', // Change to your actual image paths
    'Home/home4.avif',
    'Home/home5.jpg',
    'Home/home2.avif' // Change to your actual image paths
];
const bridalImg=[
    'Home/bridalRings/img1.jpg',
    'Home/bridalRings/img3.jpg',
    'Home/bridalRings/img4.jpg',
    'Home/bridalRings/img5.jpg'
];
function showImage(index) {
    const sliderImage = document.getElementById('slider-image');
    
    sliderImage.src = images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
//bridal 
function prevImagebridal() {
    currentImageIndex = (currentImageIndex - 1 + bridalImg.length) % bridalImg.length;
    showBridal(currentImageIndex);
}

function nextImagebridal() {
    currentImageIndex = (currentImageIndex + 1) % bridalImg.length;
    showBridal(currentImageIndex);
}

function showBridal(index){
    const sliderImage = document.getElementById('slider-bridal-image');
    
    sliderImage.src = bridalImg[index];
}



// Initial image display
showImage(currentImageIndex);

showBridal(currentImageIndex);



///
// Select all product images
const productImages = document.querySelectorAll('.product img');
    console.log("Found images:", productImages.length);

    // Add event listeners to each image
    productImages.forEach(image => {
        image.addEventListener('mouseenter', enlargeImage);
        image.addEventListener('mouseleave', resetImage);
    });

    // Function to enlarge the image
    function enlargeImage(event) {
        console.log("Mouse entered");
        event.target.style.transform = 'scale(1.5)';
        event.target.style.transition = 'transform 0.3s ease';
        event.target.style.zIndex = '1';
    }

    // Function to reset the image to its original size
    function resetImage(event) {
        console.log("Mouse left");
        event.target.style.transform = 'scale(1)';
        event.target.style.zIndex = '0';
    }

    function showBar() {
        const searchInput = document.getElementById('searchInput');
        searchInput.classList.toggle('show');
        
        if (searchInput.classList.contains('show')) {
          searchInput.focus();
        }
      }
      
      function toggleSearch() {
        const searchContainer = document.getElementById('searchContainer');
        if (searchContainer.style.display === 'none') {
          searchContainer.style.display = 'inline-block';
          document.getElementById('searchBox').focus();
        } else {
          searchContainer.style.display = 'none';
        }
      }

      //
      // Get elements
// Function to show the signup popup
function showSignupPopup() {
    console.log('showSignupPopup function called'); // Debug log
    var popup = document.getElementById('signupPopup');
    if (popup) {
        popup.style.display = 'block';
    } else {
        console.error('Popup element not found');
    }
}

// Function to hide the signup popup
function hideSignupPopup() {
    console.log('hideSignupPopup function called'); // Debug log
    var popup = document.getElementById('signupPopup');
    if (popup) {
        popup.style.display = 'none';
    } else {
        console.error('Popup element not found');
    }
}

// Function to handle the signup form submission
function handleSignup(event) {
    event.preventDefault();
    console.log('handleSignup function called'); // Debug log

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Here you would typically send this data to your server
    console.log('Sign-up Details:', { username, email, password });

    // Show a success message
    alert('Sign up successful!');

    // Clear the form
    document.getElementById('signupForm').reset();

    // Hide the popup
    hideSignupPopup();
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    var popup = document.getElementById('signupPopup');
    if (event.target == popup) {
        hideSignupPopup();
    }
};

// Add event listener to profile button (alternative to inline onclick)
document.getElementById('profileButton').addEventListener('click', showSignupPopup);
      