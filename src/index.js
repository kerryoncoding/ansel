

function nextImage(){
    getImage = 11;
    document.querySelector(".photoFrame").setAttribute("src", `/images/${getImage}.jpg`);
}

let getImage= 10;
document.querySelector("#imageGenerator").addEventListener("click", nextImage);