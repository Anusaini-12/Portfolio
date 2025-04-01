document.addEventListener("DOMContentLoaded", () => {
  const textArray = [
    "Frontend Developer 🚀",
    "Building interactive UIs ✨",
    "Learning DSA with C++ 🔥",
    "Passionate about coding 💻",
    "Creating user-friendly designs 🎨",
    "Problem-solving with code 🧩"
  ];

  let textIndex = 0, charIndex = 0;
  const typingSpeed = 100, erasingSpeed = 50, delayBetweenTexts = 2000;
  const typingElement = document.querySelector(".typing-effect");

  if (!typingElement) return;

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
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, typingSpeed);
    }
  }

  // Adjust typing for mobile
  if (window.innerWidth <= 480) {
    typingElement.style.whiteSpace = "normal";
    typingElement.style.borderRight = "none";
  }

  setTimeout(typeText, 500);
});