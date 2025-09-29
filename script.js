document.addEventListener("DOMContentLoaded", function () {
    // Select the burger button and menu container
    const burgerButton = document.querySelector(".nav__burger");
    const menuContainer = document.querySelector(".nav__burger__body");

    // Function to close the menu
    function closeMenu() {
        menuContainer.classList.remove("nav__burger__body-active");
        burgerButton.classList.remove("nav__burger-active");
    }

    // Toggle menu on button click
    if (burgerButton && menuContainer) {
        burgerButton.addEventListener("click", function () {
            menuContainer.classList.toggle("nav__burger__body-active");
            burgerButton.classList.toggle("nav__burger-active");
        });

        // Close menu when clicking outside of it
        document.addEventListener("click", function (event) {
            if (
                !menuContainer.contains(event.target) && 
                !burgerButton.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close menu when resizing the window above 768px
        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        // Close menu when a link inside the menu is clicked
        const menuLinks = menuContainer.querySelectorAll("a");
        menuLinks.forEach(function(link) {
            link.addEventListener("click", closeMenu);
        });
    }
});
