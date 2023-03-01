const questions = [
    "",
    ["/images/maguire.png", "(1993)"],
    "Johannes Thingnes Bø on selle spordiala valitseja (Siimu lemmik spordiala, mida vaadata)",
    "Eesti läänepoolseim linn",
    "Üks õige veoauto värv",
    "Tai suurim saar",
    "IMDb Top 100  #1 film",
    ["/images/roald.jpg", "(1979)"],
    "Selle spordiala terminite hulka kuuluvad “side out”, “monster block” ja “pokey”  (Siimu lemmik spordiala, mida harrastada)",
    ["images/siimpapsiga.jpeg", "Siimu sünnikodu tänav"],
    "Kunstniku kujutis iseendast",
    "Saar, kus asub Eesti vanim puithoone",
    "Seriaal, mis on olnud eetris alates 1993 kuni tänaseni",
    ["images/mendes.jpg", "(1974)"],
    "2007nda aasta F1 maailmameister (Siimu lemmik vormelisõitja)",
    ["images/siim.png", "Pilt on tehtud selles riigis"],
    "Firma, mis toodab nii veo- kui sõiduautosid ja ka meremootoreid",
    "Saar, kus 2017 toimusid Saarte mängud",
    "Kolmeliikmeline komöödiarühmitus, mis alustas tegutsemist 90ndatel raadios",
    ["images/saras.jpg", "(1976)"],
    ["images/kilim.png", "Maailma kõrgeim eraldiseisev mägi (Kõrgeim tipp, mille otsa Siim on roninud)"],
    ["images/vollelaager.png", "vollelaagri riik, kuhu suundutakse ka sel kevadel"],
    "Nii mitu ratast on enimlevinud poolhaakel",
    "Freddie Mercury sünnisaar",
    "1969. aastal valminud film, mille süžee põhineb Eduard Bornhöhe romaanil (Siimu lemmik Eesti film)",
    ["images/fred.png", "(1993)"],
    ["images/rannavolle.png", "Rantanen - Talistu duo parim koht Rannavolle suvetuuri etappidel"],
    "Riik, kus Siim käis arvutimängu Dreamhac võistlustel",
    "Seade, mida kasutatakse steriliseerimiseks meditsiinivaldkonnas",
    "Saar, kus sündisid kaksikutest kirjanikud Ülo ja Jüri Tuulik",
    "2001 valminud dokumentaalne teleuurimus ellujääjatest kohalikes Eesti oludes (Siimu juhendatav fantasy meeskond)"
]

const layout = document.getElementById("layout")
for (i=1;i<6;i++) {
    for (j=1; j<7; j++) {
        const square = document.createElement("div")
        square.classList.add("node")
        square.id = j + ((i-1)*6)
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