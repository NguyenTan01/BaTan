/**======================= toggle style switcher ========================**/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
console.log(styleSwitcherToggle)
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
    alert('This feature is under development. Sorry for this inconvenience.');
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
})

/**======================= theme color ========================**/


/**======================= theme light and dark mode ========================**/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})