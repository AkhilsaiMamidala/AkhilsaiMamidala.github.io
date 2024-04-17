document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const sectionDropdown = document.getElementById("section-dropdown");
  
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();
      const selectedSection = sectionDropdown.value;
  
      if (selectedSection === "all") {
        scrollToMenuItem(searchTerm);
      } else {
        scrollToSection(selectedSection);
      }
    });
  
    function scrollToMenuItem(searchTerm) {
      const menuItems = document.querySelectorAll(".menu-item");
      let found = false;
  
      menuItems.forEach(item => {
        const itemName = item.querySelector("h3").textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
          item.scrollIntoView({ behavior: "smooth", block: "center" });
          found = true;
        }
      });
  
      if (!found) {
        alert("Item not found!");
      }
    }
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        alert("Section not found!");
      }
    }
  });
  