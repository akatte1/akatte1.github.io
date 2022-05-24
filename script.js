function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var suit = document.getElementById('mast');
const wait = 100;
swapSuit();

async function swapSuit() {
    while (true) {
        suit.innerText = '♣';
        await sleep(wait);
        suit.innerText = '♦';
        await sleep(wait);
        suit.innerText = '♠';
        await sleep(wait);
        suit.innerText = '♥';
        await sleep(wait);
    }
}
