// Initialize Lucide Icons
lucide.createIcons();

// Typewriter Effect
const phrases = [
    "Enterprise Java Apps",
    "Agentic AI Workflows",
    "Microservices on AWS",
    "Smart DBA Optimizers",
    "Scalable Cloud APIs"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
const typewriterElement = document.getElementById('typewriter');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typewriterElement.innerText = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typeSpeed = 50; // Delete faster
    } else {
        typewriterElement.innerText = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typeSpeed = 100; // Type slower
    }

    // Logic for pausing at ends
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new phrase
    }

    setTimeout(type, typeSpeed);
}

// Start typing animation on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});
