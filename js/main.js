// Main Javascript file
var slide_item, slide_container, next_btn, prev_btn;
slide_container = document.querySelector(".slider_container");
slide_item = document.querySelectorAll(".slide_item");
next_btn = document.querySelector(".next-btn");
prev_btn = document.querySelector(".prev-btn");

let current_index = 0;
let max_slides = 0;

for (i = 0; i < slide_item.length; i++) {
  max_slides = i;
  if (current_index == i) {
    console.log(slide_item[i]);
    // slide_item[i].style.display = "";
    slide_item[i].classList.add("fade_in");
  } else {
    // slide_item[i].style.display = "none";
    slide_item[i].classList.add("fade_out");
  }
}

next_btn.onclick = () => {
  if (current_index < max_slides) {
    current_index++;
    changeSlide(current_index);
  } else {
    current_index = 0;
    changeSlide(current_index);
  }
};

prev_btn.onclick = () => {
  if (current_index != 0) {
    current_index--;
    changeSlide(current_index);
  } else {
    current_index = max_slides;
    changeSlide(current_index);
  }
};

function changeSlide(slideId) {
  for (i = 0; i < slide_item.length; i++) {
    if (slideId == i) {
      //   slide_item[i].style.display = "";
      slide_item[i].classList.remove("fade_out");
      slide_item[i].classList.add("fade_in");
      console.log(`visible ${i}`);
    } else {
      slide_item[i].classList.remove("fade_in");
      slide_item[i].classList.add("fade_out");
      //   slide_item[i].style.display = "none";
      console.log(`Not visible ${i}`);
    }
  }
}

console.log(`Max slides are ${max_slides + 1}`);
// --------------------------- end SlideShow   ---------------------------

// --------------------------- start Chatbot menu ---------------------------
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");

    messageElement.textContent = run(userMessage);
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

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

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));