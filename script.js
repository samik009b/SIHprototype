// DARK MODE FUNCTION
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "Light Mode";
}

// Toggle dark/light mode on click
toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
    localStorage.setItem("dark-mode", "enabled");
  } else {
    toggleBtn.textContent = "Dark Mode";
    localStorage.setItem("dark-mode", "disabled");
  }
});

// SOS Button Functionality
const sosBtn = document.querySelector(".sos-btn");
if (sosBtn) {
  sosBtn.addEventListener("click", () => {
    alert("SOS Activated! Help is on the way.");
    // You can replace the alert with any custom action, e.g., open a modal or redirect
  });
}

// Chatbot toggle (if you have chatbot open/close code)
const chatbotIcon = document.querySelector(".chatbot-icon");
const chatbotWindow = document.getElementById("chatbotWindow");
const closeChat = document.getElementById("closeChat");

if (chatbotIcon && chatbotWindow && closeChat) {
  chatbotIcon.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
  });

  closeChat.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
  });

  // Optional: submit chat message
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (userMsg) {
      const div = document.createElement("div");
      div.classList.add("user-msg");
      div.textContent = userMsg;
      chatMessages.appendChild(div);
      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Bot reply (example)
      setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.classList.add("bot-msg");
        botDiv.textContent = "This is an automated reply!";
        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    }
  });
}
