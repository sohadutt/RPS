let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('toggle-theme')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'true')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'false')
}

if (darkmode === "true") {
    enableDarkMode()
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "true" ? enableDarkMode() : disableDarkMode()
})

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".glow-target");

    function glowLoop(index = 0) {
  headers[index].classList.add("glow");

  setTimeout(() => {
    headers[index].classList.remove("glow");
    glowLoop((index + 1) % headers.length); 
  }, 1000);
}
    glowLoop();
  });