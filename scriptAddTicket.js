
//dark mode
const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  searchBtn = document.querySelector(".search-box"),
  modeSwitch = document.querySelector(".toggle-switch"),
  modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});


//create select brand
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

// Function to toggle the menu and animation
const toggleMenu = () => {
  if (optionMenu.classList.contains("active")) {
    optionMenu.classList.remove("active");
    optionMenu.classList.add("drop-up");
  } else {
    optionMenu.classList.remove("drop-up");
    optionMenu.classList.add("active");
  }
};

// Event listener for the button click
selectBtn.addEventListener("click", toggleMenu);

// Event listener for each option click
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOptionText = option.querySelector(".option-text").innerText;
    let selectedOptionImg = option.querySelector("img").src;

    // Clear the previous content
    sBtn_text.innerHTML = '';

    // Create new image and text nodes
    let imgElement = document.createElement("img");
    imgElement.src = selectedOptionImg;
    imgElement.style.width = "60px"; // Adjust the size as needed
    imgElement.style.marginRight = "8px"; // Space between image and text
    imgElement.style.borderRadius = "5px"; // Space between image and text

    let textNode = document.createTextNode(selectedOptionText);

    // Append the new image and text to the button
    sBtn_text.appendChild(imgElement);
    sBtn_text.appendChild(textNode);

    // Close the menu after selection
    optionMenu.classList.remove("active");
    optionMenu.classList.add("drop-up");
  });
});



//create select module
const optionMenu2 = document.querySelector(".select-menu2"),
  selectBtn2 = optionMenu2.querySelector(".select-btn2"),
  options2 = optionMenu2.querySelectorAll(".option2"),
  sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

// Function to toggle the menu and animation
const toggleMenu2 = () => {
  if (optionMenu2.classList.contains("active2")) {
    optionMenu2.classList.remove("active2");
    optionMenu2.classList.add("drop-up2");
  } else {
    optionMenu2.classList.remove("drop-up2");
    optionMenu2.classList.add("active2");
  }
};

// Event listener for the button click
selectBtn2.addEventListener("click", toggleMenu2);

// Event listener for each option click
options2.forEach(option2 => {
  option2.addEventListener("click", () => {
    let selectedOptionText2 = option2.querySelector(".option-text2").innerText;
    sBtn_text2.innerText = selectedOptionText2;

    // Close the menu with the "drop-up" animation
    optionMenu2.classList.remove("active2");
    optionMenu2.classList.add("drop-up2");
  });
});



//add lodding and check icon in buttom
btn = document.querySelector(".save");
btn.onclick = function () {
  this.innerHTML = "<div class='spin'><div class='circle iconn '></div></div>";
  setTimeout(() => {
    this.innerHTML = "<i class='bx bx-check iconn check'></i>";
  }, 5000);
  setTimeout(() => {
    location.replace('tickets.html');
  }, 8000);
}

//another page
function myFunction() {
  location.replace('tickets.html');
}
function clickedButton() {
  location.replace('index.html');
}
