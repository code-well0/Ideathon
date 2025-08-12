document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeBtn = document.querySelector(".close-btn");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");

    let userMessage;

    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">support_agent</span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
    }

    const generateResponse = (incomingChatLi) => {
        const messageElement = incomingChatLi.querySelector("p");
        const userText = userMessage.toLowerCase();
        let responseText = "I'm sorry, I can't help with that. Please ask about services, licenses, registration, or how to login.";

        // Simple keyword-based responses
        if (userText.includes("hello") || userText.includes("hi")) {
            responseText = "Hello! How can I assist you with business in Delhi today?";
        } else if (userText.includes("service")) {
            responseText = "We offer a single-window system for licenses, real-time application tracking, and information on government schemes. How can I elaborate?";
        } else if (userText.includes("license")) {
            responseText = "You can apply for multiple licenses using our single smart application form. Just register and click 'Apply for a New License'.";
        } else if (userText.includes("register") || userText.includes("registration")) {
            responseText = "You can register by clicking the 'Register' button on the top right of the homepage. You'll need your GSTIN or Udyam number.";
        } else if (userText.includes("login") || userText.includes("log in")) {
            responseText = "Click the 'Log In' button at the top right to access your dashboard.";
        } else if (userText.includes("help")) {
            responseText = "I can help with questions about services, licenses, registration, and login. What do you need assistance with?";
        }


        // Set the response text and simulate typing
        setTimeout(() => {
            messageElement.textContent = responseText;
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600); // Simulate a short delay for the response
    }

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if(!userMessage) return;
        chatInput.value = ""; // Clear the input field

        // Append the user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }

    chatInput.addEventListener("keydown", (e) => {
        // If Enter key is pressed without Shift key, handle the chat
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });

    sendChatBtn.addEventListener("click", handleChat);
    closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
});
