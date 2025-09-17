let pop_up = "Welcome to MyShop! Enjoy your shopping experience.";
alert(pop_up);
let footerdate = document.getElementById("footer-date");
let date = new Date().getFullYear();
footerdate.innerHTML = date;




function check_avail(product) {
    let availabilityMessage = '';
    const availabilityElement = document.getElementById('avail-' + product.replace(/\s+/g, '-'));
      
    
    if (product === 'Nokia 3310') {
      availabilityMessage = 'This product is currently unavailable.';
    } else if (product === 'Google Pixel 9') {
        availabilityMessage = 'This product is available in stock.';
    } else if (product === 'Google Pixel 9A') {
        availabilityMessage = 'This product is available in stock.';
    } else if (product === 'Samsung Galaxy Z Fold 7') {
        availabilityMessage = 'This product is out of stock.';
    } else if (product === 'Iphone 16 Pro') {
        availabilityMessage = 'This product is available in stock.';
    }

      
    availabilityElement.textContent = availabilityMessage;
}
  document.getElementById("loginForm").addEventListener("submit", function(event) {
 
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

    
      if (username === "" || password === "") {
        
        event.preventDefault();

      
        alert("Please enter both username and password.");
      }
    });

    function sendMessage() {
      const inputElem = document.getElementById("user-input");
      let input = inputElem.value.trim().toLowerCase();
      const chatLog = document.getElementById("chat-log");

      if (input === "") return; // Do nothing if input empty

      // Display user message
      const userMsg = document.createElement("p");
      userMsg.classList.add("user-msg");
      userMsg.textContent = "You: " + input;
      chatLog.appendChild(userMsg);

      inputElem.value = ""; // Clear input field

      // Get bot response
      const botResponse = getBotResponse(input);

      // Show bot response after a short delay
      setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.classList.add("bot-msg");
        botMsg.textContent = "Bot: " + botResponse;
        chatLog.appendChild(botMsg);

        // Scroll chat to bottom
        chatLog.scrollTop = chatLog.scrollHeight;
      }, 500);
    }

    function getBotResponse(input) {
      if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today?";
      } else if (input.includes("product") || input.includes("shop")) {
        return "Feel free to check our products page for all the latest mobile devices!";
      } else if (input.includes("price")) {
        return "Prices vary by product, please visit our product pages for details.";
      } else if (input.includes("support") || input.includes("help")) {
        return "You can contact us at info@myshop.com or call +92-300-1234567.";
      } else {
        return "Sorry, I didn't understand that. Can you please rephrase?";
      }
    }