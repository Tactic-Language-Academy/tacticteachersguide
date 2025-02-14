document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropbtn");
        const content = dropdown.querySelector(".dropdown-content");
        
        button.addEventListener("click", function(event) {
            event.stopPropagation();
            closeAllDropdowns();
            content.classList.toggle("show");
        });
    });
    
    document.addEventListener("click", function() {
        closeAllDropdowns();
    });
    
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.classList.remove("show");
        });
    }
});

// CSS class for showing dropdown
const style = document.createElement("style");
style.innerHTML = `.dropdown-content.show { display: block; }`;
document.head.appendChild(style);
