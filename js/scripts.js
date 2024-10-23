const textArray = ["Flavio Pires ", "Web Developer ", "IT Support "];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const dynamicTextSpan = document.getElementById("dynamic-text");

function type() {
    const currentFullText = textArray[textIndex];

    // Check if we are deleting or typing
    if (isDeleting) {
        currentText = currentFullText.substring(0, charIndex--);
    } else {
        currentText = currentFullText.substring(0, charIndex++);
    }

    // Update the text content
    dynamicTextSpan.textContent = currentText;

    // Handle typing completion
    if (!isDeleting && charIndex === currentFullText.length) {
        // Pause before starting to delete
        isDeleting = true;
        setTimeout(type, 3000); // Wait 1 second before starting to delete
    } else if (isDeleting && charIndex < 0) {
        // When finished deleting, move to the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Loop through the array
        charIndex = 0; // Reset charIndex for the new text
        setTimeout(type, 1000); // Wait before starting to type the next word
    } else {
        
        setTimeout(type, isDeleting ? 100 : 150); // typing speed
    }
}

// Start the typing effect on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 500); // Start typing after 500ms
});
