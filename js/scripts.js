const textArray = [
    "Flavio Pires ",
    "a Web Developer ",
    "a Full Stack Developer ",
    "a Frontend Developer ",
    "a Backend Developer ",
    "a UX Designer ",
    "a Creative Coder ",
    "a Tech Problem Solver ",
    "a Software Enthusiast ",
    "a Web Designer ",
    "a Agile Team Player "
];
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
        setTimeout(type, 3000); // Wait before starting to delete
    } else if (isDeleting && charIndex < 0) {
        // When finished deleting, move to the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Loop through the array
        charIndex = 0; // Reset charIndex for the new text
        setTimeout(type, 1000); // Wait before starting to type the next word
    } else {
        
        setTimeout(type, isDeleting ? 70 : 70); // typing speed
    }
}

// Start the typing effect on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 500); // Start typing after 500ms
});




function setLanguage(language) {
    const flagIcon = document.getElementById('flag-icon');

    // Update flag icon
    if (language === 'en') {
        flagIcon.src = '/images/UkLogo.png';
    } else if (language === 'pt') {
        flagIcon.src = '/images/PTlogo.png';
    }

    
    const aboutTextHome = document.getElementById('introHome');
    aboutTextHome.innerText = aboutTextHome.getAttribute(`data-lang-${language}`);
    
    const aboutTextAbout = document.getElementById('aboutText1');
    aboutTextAbout.innerText = aboutTextAbout.getAttribute(`data-lang-${language}`);

    const aboutTextAbout2 = document.getElementById('aboutText2');
    aboutTextAbout2.innerText = aboutTextAbout2.getAttribute(`data-lang-${language}`);

    const educationTitle = document.getElementById('educationTitle');
    educationTitle.innerText = educationTitle.getAttribute(`data-lang-${language}`);

    const ExperienceTitle = document.getElementById('ExperienceTitle');
    ExperienceTitle.innerText = ExperienceTitle.getAttribute(`data-lang-${language}`);

    const university2label = document.getElementById('university2label');
    university2label.innerText = university2label.getAttribute(`data-lang-${language}`);

    const universityDescription = document.getElementById('universityDescription');
    universityDescription.innerText = universityDescription.getAttribute(`data-lang-${language}`);
    
    const educationSecondary = document.getElementById('educationSecondary');
    educationSecondary.innerText = educationSecondary.getAttribute(`data-lang-${language}`);

    const educationSecondary2 = document.getElementById('educationSecondary2');
    educationSecondary2.innerText = educationSecondary2.getAttribute(`data-lang-${language}`);

    const secondaryDescription = document.getElementById('secondaryDescription');
    secondaryDescription.innerText = secondaryDescription.getAttribute(`data-lang-${language}`);

    const internshipLabel = document.getElementById('internshipLabel');
    internshipLabel.innerText = internshipLabel.getAttribute(`data-lang-${language}`);

    const internshipDescription = document.getElementById('internshipDescription');
    internshipDescription.innerText = internshipDescription.getAttribute(`data-lang-${language}`);

    const skillsTitle = document.getElementById('skillsTitle');
    skillsTitle.innerText = skillsTitle.getAttribute(`data-lang-${language}`);
    
    const skillsTitle2 = document.getElementById('skillsTitle2');
    skillsTitle2.innerText = skillsTitle2.getAttribute(`data-lang-${language}`);

    const navbarHome = document.getElementById('navbarHome');
    navbarHome.innerText = navbarHome.getAttribute(`data-lang-${language}`);

    const navbarAbout = document.getElementById('navbarAbout');
    navbarAbout.innerText = navbarAbout.getAttribute(`data-lang-${language}`);

    const navbarEducation = document.getElementById('navbarEducation');
    navbarEducation.innerText = navbarEducation.getAttribute(`data-lang-${language}`);

    const navbarSkills = document.getElementById('navbarSkills');
    navbarSkills.innerText = navbarSkills.getAttribute(`data-lang-${language}`);

    const navbarContact = document.getElementById('navbarContact');
    navbarContact.innerText = navbarContact.getAttribute(`data-lang-${language}`);

    const cvButton = document.getElementById('cv-button');
    cvButton.innerText = cvButton.getAttribute(`data-lang-${language}`);
    
// Left side of contact page

    const contactQuestion = document.getElementById('contactQuestion');
    contactQuestion.innerText = contactQuestion.getAttribute(`data-lang-${language}`);

    const formText2 = document.getElementById('formText2');
    formText2.innerText = formText2.getAttribute(`data-lang-${language}`);

    const nameLabel = document.getElementById('nameLabel');
    nameLabel.innerText = nameLabel.getAttribute(`data-lang-${language}`);

    const formText = document.getElementById('formText');
    formText.innerText = formText.getAttribute(`data-lang-${language}`);

    const buttonSubmit = document.getElementById('buttonSubmit');
    buttonSubmit.innerText = buttonSubmit.getAttribute(`data-lang-${language}`);


    // Right side of contact page
    const optionLabel = document.getElementById('optionLabel');
    optionLabel.innerText = optionLabel.getAttribute(`data-lang-${language}`);

    const sendEmail = document.getElementById('sendEmail');
    sendEmail.innerText = sendEmail.getAttribute(`data-lang-${language}`);

    const thankYou = document.getElementById('thankYou');
    thankYou.innerText = thankYou.getAttribute(`data-lang-${language}`);

    const aboutTitle = document.getElementById('aboutTitle');
    aboutTitle.innerText = aboutTitle.getAttribute(`data-lang-${language}`);

    const specializingTitle = document.getElementById('specializingTitle');
    specializingTitle.innerText = specializingTitle.getAttribute(`data-lang-${language}`);


    }



