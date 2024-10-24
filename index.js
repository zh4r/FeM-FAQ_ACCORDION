let accordion = document.querySelectorAll(".accordionBtn");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        let img = this.children[1];
        if (panel.style.display === "block") {
            panel.style.display = "none";
            img.src = "./assets/images/icon-plus.svg"
        } else {
            panel.style.display = "block";
            img.src = "./assets/images/icon-minus.svg"
        }
    });
};
