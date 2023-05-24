// Scroll
let span = document.querySelector(".up");

window.onscroll = function () {
    console.log(this.scrollY);
    if (this.scrollY >= 1000) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


/* Start News grop buttons */
const galleryItems = document.querySelector(".gallery-items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 6;
let index = 1;

const pagination = Math.ceil(galleryItems.length / maxItem);
console.log(pagination)

prev.addEventListener("click", function () {
    index--;
    check();
    showItems();
})
next.addEventListener("click", function () {
    index++;
    check();
    showItems();
})

function check() {
    if (index == pagination) {
        next.classList.add("disabled");
    }
    else {
        next.classList.remove("disabled");
    }

    if (index == 1) {
        prev.classList.add("disabled");
    }
    else {
        prev.classList.remove("disabled");
    }
}

function showItems() {
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove("show");
        galleryItems[i].classList.add("hide");


        if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
            galleryItems[i].classList.remove("hide");
            galleryItems[i].classList.add("show");
        }
        page.innerHTML = index;
    }


}

window.onload = function () {
    showItems();
    check();
}


/* End News group buttons */





