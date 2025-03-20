const textArray = [
    "Frontend Developer 🚀",
    "Building interactive UIs ✨",
    "Learning DSA with C++ 🔥",
    "Passionate about coding 💻",
    "Creating user-friendly designs 🎨",
    "Problem-solving with code 🧩"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Typing speed in ms
  const erasingSpeed = 50; // Erasing speed in ms
  const delayBetweenTexts = 2000; // Pause before deleting
  const typingElement = document.querySelector(".typing-effect");
  
  function typeText() {
    if (charIndex < textArray[textIndex].length) {
      typingElement.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, delayBetweenTexts);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % textArray.length; // Move to next text
      setTimeout(typeText, typingSpeed);
    }
  }
  
  // Start the typing effect when page loads
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
  });


  