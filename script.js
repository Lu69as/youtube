document.querySelectorAll("nav").forEach((e) => {
    e.innerHTML = `
        <div class="navItems">
            <a href="https://www.youtube.com/@lu69as" target="_blank" rel="noreferer"><h1 class="logo"><i class="fa-brands fa-youtube"></i> Lu69as</h1></a>
            <ul>
                <a href="./index.html">Home</a>
                <a href="./story.html">The story</a>
                <a href="./faq.html">FAQ</a>
                <a href="./contact.html">Contact me</a>
            </ul>
        </div>

        <a href="#" class="scrollTop"><i class="fa-solid fa-arrow-up"></i></a>
    `;
});
document.querySelectorAll("footer").forEach((e) => {
    e.innerHTML = `
        <div class="someLinks">
            <a style="background: #FF0033; color: #fff" href="https://youtube.com/@lu69as" target="_blank" rel="noreferer"><i class="fa-brands fa-youtube"></i></a>
            <a style="background: linear-gradient(45deg, #F98629, #EB2482); color: #fff" href="https://instagram.com/lu69as" target="_blank" rel="noreferer"><i class="fa-brands fa-instagram"></i></a>
            <a style="background: #222; color: #fff" href="https://x.com/lu69as" target="_blank" rel="noreferer"><i class="fa-brands fa-x-twitter"></i></a>
            <a style="background: #0D1117; color: #fff" href="https://github.com/Lu69as/" target="_blank" rel="noreferer"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="main">
            <div class="about">
                <div class="info">
                    <a href="https://www.youtube.com/@lu69as" target="_blank" rel="noreferer"><h1 class="logo"><i class="fa-brands fa-youtube"></i> Lu69as</h1></a>
                    <p>THE VR and Sim racing YouTuber!</p>
                </div>
                <div class="stats">
                    <ul>
                        <li>
                            <h2>+17<span>K</span></h2>
                            <p>Views</p>
                        </li>
                        <li>
                            <h2>+130</h2>
                            <p>Subscribers</p>
                        </li>
                        <li>
                            <h2>+120</h2>
                            <p>Videos</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                Copyright &copy; Lukas Okkenhaug <span style="margin-left: 5px;"><img src onerror="this.parentElement.innerHTML = new Date().getFullYear()"></span> | 
                Designed by <a href="https://lukasokken.com" target="_blank" rel="noreferer">Lukas Okkenhaug</a>
            </div>
        </div>
    `;
})

document.addEventListener("mousemove", (e) => {
    let s = 75;
    document.querySelectorAll("header .headerInfo .front").forEach((img) =>  {
        img.style.transform = `translate(${(e.clientX - img.parentElement.querySelector("img:not(.front, .behind)").getBoundingClientRect().left) / s}px, 
        ${(e.clientY - img.parentElement.getBoundingClientRect().top) / s}px)`
    });
    document.querySelectorAll("header .headerInfo .behind").forEach((img) =>  {
        img.style.transform = `translate(${0 - (e.clientX - img.parentElement.querySelector("img:not(.front, .behind)").getBoundingClientRect().left) / s}px, 
        ${0 - (e.clientY - img.parentElement.getBoundingClientRect().top) / s}px)`
    });

    document.querySelectorAll(".form-container .shapes .left").forEach((img) =>  {
        img.style.transform = `translate(${0 - (e.clientX - img.getBoundingClientRect().left) / s}px, 
        ${0 - (e.clientY - img.parentElement.getBoundingClientRect().top) / s}px)`
    });
    document.querySelectorAll(".form-container .shapes .right").forEach((img) =>  {
        img.style.transform = `translate(${(e.clientX - img.getBoundingClientRect().left) / s}px, 
        ${0 - (e.clientY - img.parentElement.getBoundingClientRect().top) / s}px)`
    });

    document.querySelectorAll(".timeline-container .img-container img").forEach((img) =>  {
        if (img.getBoundingClientRect().top < 100) {
            img.style.transform = `translate(${(e.clientX - img.getBoundingClientRect().left) / s}px, 
                ${(e.clientY - img.parentElement.getBoundingClientRect().top) / s}px)`
        }
    });
});

window.onload = () => {
    document.querySelectorAll("#faq .question").forEach((e) => {
        e.style.maxHeight = e.offsetHeight + "px";
        e.classList.add("closed");
    
        e.addEventListener("click", () => {
            if (e.classList[1] == "closed") {
                document.querySelectorAll("#faq .question").forEach((q) => q.classList.add("closed"));
                e.classList.remove("closed");
            }
            else {
                document.querySelectorAll("#faq .question").forEach((q) => q.classList.add("closed"));
            }
    
        });
    });
}

document.querySelectorAll("a").forEach((e) => {
    e.addEventListener("mouseleave", () => { 
        e.classList.add("hyperlink-ani");
        setTimeout(() => { e.classList.remove("hyperlink-ani"); }, 400);
    })
})
