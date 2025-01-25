document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-button");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const confirmPayment = document.getElementById("confirm-button"); // Correctly selecting confirm button

    // Show the popup when a buy button is clicked
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.display = "block";
        });
    });

    // Close the popup when the close button is clicked
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the popup when the confirm button is clicked
    confirmPayment.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }

    });
});
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    const content = document.querySelector(".content");
    const header = document.querySelector(".header");
  
    if (menu.style.display === "flex") {
      closeMenu();
    } else {
      menu.style.display = "flex";
      content.classList.add("blur");
      header.classList.add("blur");
  
      // Add event listener to close menu when clicking outside
      document.addEventListener("click", handleOutsideClick);
    }
  }
  
  function closeMenu() {
    const menu = document.getElementById("dropdownMenu");
    const content = document.querySelector(".content");
    const header = document.querySelector(".header");
  
    menu.style.display = "none";
    content.classList.remove("blur");
    header.classList.remove("blur");
  
    // Remove the event listener
    document.removeEventListener("click", handleOutsideClick);
  }
  
  function handleOutsideClick(event) {
    const menu = document.getElementById("dropdownMenu");
    const menuIcon = document.querySelector(".menu-icon");
  
    // Close the menu if the clicked element is outside the dropdown and the menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      closeMenu();
    }
  }
  // Counter
    const countDisplay = document.getElementById('count');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    let count = 1;

    // Increase the count
    increaseButton.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count;
    });

    // Decrease the count
    decreaseButton.addEventListener('click', () => {
      if (count > 1) {
        count--;
        countDisplay.textContent = count;
      }
    });
    document.addEventListener("DOMContentLoaded", () => {
      const purchaseButton = document.querySelector(".btn-purchase");
      const radioGroups = document.querySelectorAll(".radio");
      
      // Function to check if all radio groups have a selected option
      const checkRadios = () => {
          let allSelected = true;
  
          radioGroups.forEach(radioGroup => {
              const radios = radioGroup.querySelectorAll("input[type='radio']");
              const isSelected = Array.from(radios).some(radio => radio.checked);
              if (!isSelected) {
                  allSelected = false;
              }
          });
  
          purchaseButton.disabled = !allSelected; // Disable button if any group is unselected
      };
  
      // Attach event listeners to all radio buttons
      radioGroups.forEach(radioGroup => {
          const radios = radioGroup.querySelectorAll("input[type='radio']");
          radios.forEach(radio => {
              radio.addEventListener("change", checkRadios);
          });
      });
  
      // Initial check on page load
      checkRadios();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const purchaseButton = document.querySelector(".btn-purchase");
    const radioGroups = document.querySelectorAll(".radio");

    // Function to check if all radio groups have a selected option
    const checkRadioSelection = () => {
        let allSelected = true;

        // Check each radio group
        radioGroups.forEach(radioGroup => {
            const radios = radioGroup.querySelectorAll("input[type='radio']");
            const isSelected = Array.from(radios).some(radio => radio.checked);
            if (!isSelected) {
                allSelected = false;
            }
        });

        // Enable or disable the purchase button based on selection
        if (allSelected) {
            purchaseButton.disabled = false;
            purchaseButton.style.backgroundColor = "#6B2125"; // Normal button color (e.g., green)
            purchaseButton.style.color = "#fff"; // Normal text color (e.g., white)
            purchaseButton.style.cursor = "pointer";
        } else {
            purchaseButton.disabled = true;
            purchaseButton.style.backgroundColor = "gray"; // Disabled button color
            purchaseButton.style.color = "#ccc"; // Disabled text color
            purchaseButton.style.cursor = "not-allowed";
        }
    };

    // Add event listeners to all radio buttons
    radioGroups.forEach(radioGroup => {
        const radios = radioGroup.querySelectorAll("input[type='radio']");
        radios.forEach(radio => {
            radio.addEventListener("change", checkRadioSelection);
        });
    });

    // Initial check on page load
    checkRadioSelection();
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed:1000,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });