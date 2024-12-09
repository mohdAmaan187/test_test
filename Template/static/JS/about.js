document.addEventListener("DOMContentLoaded", () => {
    const aboutDivs = document.querySelectorAll(".about_div1, .about_div2");

    aboutDivs.forEach((div) => {
        const title = div.querySelector(".about_title");
        const info = div.querySelector(".about_info");

        // Add mouseenter event to expand the div
        title.addEventListener("mouseenter", () => {
            div.classList.add("expanded");
        });

        // Add mouseleave event to collapse the div
        div.addEventListener("mouseleave", () => {
            div.classList.remove("expanded");
        });
    });
});