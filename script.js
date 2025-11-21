const questions = [
    "",
    "Sinna TalTechi teaduskonda kuulub Kuressaare kolledž",
    "Eesti eurolaulu konkursi võitja (Eurovisioonil esines 1996)",
    "Selles seriaalis näidatakse eestlaste igapäevaelu aastast 1993",
    "77 päeva on selle talispordi sündmuseni",
    "Fotosünteesi vedel lähteaine",
    "Oluline spordirajatis, mis puudub Kuressaarest (Anna arvates)",
    "Selle Eesti väikelinna haiglas sündis Anna aastal 1995",
    "Anna ema peab seda ametit",
    "Selle spordiala jaoks vajalik väljak ehitati esimest korda 1969 Acapulcos",
    "Fermenteeritud tee",
    "Keskmiselt on seda nähtust Kuressaares 1900 tundi aastas",
    "Coolio hitt, mis oli Billboardi aastalõpu edetabelis top 1 singel aastal 1995",
    "Anna vend viibib hetkel selles poolkinnises asutuses",
    ["images/justus.jpg", "Saksa laskesuusaäss"],
    "See kuu möödus nagu pudel veini",
    "Alates järgmisest suvest saab Kuressaarest lennata sinna pealinna",
    "1995. aastal ilmunud märul, kus peategelane peab päästma New Yorgi koos Samuel L. Jacksoniga",
    "Aastal 1905 avaldatud teooria, mis muutis arusaama ajast, ruumist ja liikumisest",
    ["images/mika.jpg", "Soome kossuäss"],
    "See valge viinamarjasort on pärit Saksamaalt ja annab veinile hapuka ning õunalise maitse",
    "Kuressaarele lähim saar",
    ["images/vahter.jpg", "Too libero on sündinud Annaga samal päeval - 19.11.1995"],
    "Seisukoht filosoofias, mis peab tõde, tunnetust, väärtusi ja reaalsust sõltuvaks vaatekohast",
    ["images/smartcrop.jpg", "Eesti edukaim rannavollepaar"],
    "See kokteil - viskist, suhkrust, bitterist ja apelsinikoorest - pani aluse põgenemisautole",
]

const layout = document.getElementById("layout")
for (i=1;i<6;i++) {
    for (j=1; j<6; j++) {
        const square = document.createElement("div")
        square.classList.add("node")
        square.id = j + ((i-1)*5)
        square.addEventListener('click', ()=> {
            square.innerText = ""
            const question = document.createElement("div")
            question.classList.add("question")
            questionItem = questions[Number(square.id)]
            if (typeof questionItem === "object") {
                const image = document.createElement("img")
                image.src = questionItem[0]
                question.innerText = questionItem[1]
                question.appendChild(image)
            } else {
                question.innerText = questionItem
            }
            question.addEventListener('click', ()=> {
                question.style.display = "none"
            })
            document.body.appendChild(question)
        })
        square.innerText = i*10
        layout.appendChild(square)
    }
}

window.addEventListener("keypress", ()=> {
    const question = document.createElement("div")
    question.classList.add("question")
    question.innerText = "Maailma esimene SMS saadeti 3. detsembril 1992. aastal. Selle sisu oli just see lause."
    document.body.appendChild(question)

})