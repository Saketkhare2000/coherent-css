const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links"); // Entire nav jo andar bahar hoga usko select kiya
    const navLinks = document.querySelectorAll(".nav-links li"); // Links ko select kara

    // Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // classList.toggle is used to add and remove class when event occurs

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''; // If already exists, nothing in animation
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                // forwards mean that after animation ==> Keep it that way
                console.log(index / 7);
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle')
        // Toggle class toggle kardo
    });
};

navSlide();