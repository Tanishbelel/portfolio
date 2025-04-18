const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Chill Guy", "Web Developer", "Programmer", "Problem Solver", "Entrepreneur", "Engineer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursor.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to all achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('click', function () {
            const imageSrc = this.querySelector('img').src;
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('.achievement-overlay p').textContent;
            openModal(imageSrc, title, description);
        });
    });
});

function openModal(imageSrc, title, description) {
    const modal = document.getElementById('achievementModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Set modal content
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';

    // Close on background click
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('achievementModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match this with your CSS transition time
    document.body.style.overflow = '';
}

// Add this to handle the close button click
document.querySelector('.close-modal').addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
});
const backToTopButton = document.querySelector('.back-to-top');

// Show button when scrolling down 300px from the top
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Get DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

// Toggle menu function
function toggleMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Add click event listener to menu button
mobileMenuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking menu items
const menuLinks = document.querySelectorAll('.mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && 
        !mobileMenu.contains(e.target) && 
        mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Handle scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});
