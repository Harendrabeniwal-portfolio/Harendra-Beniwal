document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX - 90}px, ${e.clientY - 90}px)`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});
