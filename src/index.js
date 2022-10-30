


function getNumber() {
        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        number=(Math.floor(Math.random() * (max - min) + min));
        document.querySelector(".photoFrame").setAttribute("src", `images/${number}.jpg`)
        return null;
    }
    getRandomInt(10,32); 
}



document.querySelector("#imageGenerator").addEventListener("click", getNumber);