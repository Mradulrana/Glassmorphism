const insta = document.querySelector(".insta");
const you = document.querySelector(".you");
const face = document.querySelector(".face");
const body = document.body;

insta.addEventListener("mouseenter", () =>{
            body.style.backgroundImage =
            "linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb"
});


you.addEventListener("mouseenter", () =>{
    body.style.backgroundImage =
    "linear-gradient(90deg, #43e97b, #38f9d7, #43e97b"
});

face.addEventListener("mouseenter", () =>{
    body.style.backgroundImage =
    "linear-gradient(90deg, #fa709a, #fee140, #fa709a"
});

