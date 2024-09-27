const slides = document.querySelectorAll(".slide")
const text = document.querySelectorAll(".info")
var counter = 0;
var target = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const moveLeft = () => {
    if (counter != 0) {
        counter--;
        slideImage()
    }
};
const moveRight = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
};
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
document.onkeydown = (e) => {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            moveUp();
            break;
        case 39:
            moveRight();
            moveDown();
            break;
    }
};

text.forEach(
    (info, index) => {
        info.style.top = `${index * 100}%`
    }
)
const moveUp = () => {
    if (target != 0) {
        target--;
        slideText()
    }
};
const moveDown = () => {
    if (target < slides.length - 1) {
        target++;
        slideText();
    }
};
const slideText = () => {
    text.forEach(
        (info) => {
            info.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}


function tap(){
    moveLeft();
    moveUp();
}

function tap2(){
    moveRight();
    moveDown();
}