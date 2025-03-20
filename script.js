// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Scroll to the top of the section
        });
      }
    });
  });
  
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
} else {
  body.classList.remove('dark-mode');
  themeToggle.textContent = '🌙';
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  
  // Save correct theme state
  localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});

// Add animations to sections on scroll
const sections = document.querySelectorAll('section');
  
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
// Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'back-to-top';
  backToTopButton.className = 'btn';
  backToTopButton.textContent = '↑';
  backToTopButton.style.display = 'none'; // Initially hidden
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

//FORM
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("EfbxTqGZn9kjae1y8");

  const contactForm = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input fields
    if (!name || !email || !message) {
      responseMessage.textContent = "Please fill in all fields.";
      responseMessage.style.color = "red";
      responseMessage.style.display = "block";
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      responseMessage.textContent = "Please enter a valid email.";
      responseMessage.style.color = "red";
      responseMessage.style.display = "block";
      return;
    }

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_ksva7nl", "template_6jce0ve", templateParams)
      .then(() => {
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";
        responseMessage.style.display = "block";
        contactForm.reset();
      })
      .catch((error) => {
        responseMessage.textContent = "Failed to send message. Please try again.";
        responseMessage.style.color = "red";
        responseMessage.style.display = "block";
        console.error("EmailJS Error:", error);
      });
  });
});
