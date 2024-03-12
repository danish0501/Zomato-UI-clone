const accordions = document.querySelectorAll(".accordion-container");

accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function() {
        // get the data
        const data = this.nextElementSibling;
        data.classList.toggle("show");

        // get the icon and add animation
        const icon = this.querySelector("i");
        icon.classList.toggle("animate");
    });
});