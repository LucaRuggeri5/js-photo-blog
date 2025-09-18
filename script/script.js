const output = document.querySelector(".card-container");
const outputOverlay = document.querySelector(".card-overlay");
const overlay = document.getElementById("overlay");
console.log(output);
console.log(outputOverlay);


// variabile endpoint dell'api
const endPointApi = `https://lanciweb.github.io/demo/api/pictures/`;


// prendi i dati Api
axios.get(endPointApi)
    .then((rispApi) => {
        const cardData = rispApi.data;
        console.log(cardData);

        // creo variabile di accumulo
        let cards = "";

        cardData.forEach(cardItem => {
            console.log(cardItem);

            cards += `
        <div class="card" onclick="on()">
            <img src="img/pin.svg" id="pin" alt="PIN">
            <img src="${cardItem.url}" class=foto-card alt="IMMAGINE" />
            <div class="card-body">
                <span class="card-date">${cardItem.date}</span>
                <h2 class="card-title">${cardItem.title}</h2>
            </div>
        </div>
        `;
        });

        // faccio l'output
        output.innerHTML = cards;


        const allCards = document.querySelectorAll(".card");
        console.log(allCards);

        allCards.forEach(cardItem => {
            cardItem.addEventListener("click", () => {

                cardItem.querySelector(".foto-card")
                console.log(cardItem.querySelector(".foto-card").src);

                let imgSrc = cardItem.querySelector(".foto-card").src

                document.querySelector(".card-overlay img").src = imgSrc

            })
        })
    });


// OVERLAY
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}