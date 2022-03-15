function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var helloText = document.getElementById('hello-text');
const wait = 250;

async function greet() {
    helloText.innerText = ''
    await sleep(wait)
    helloText.innerText = '|'
    await sleep(wait*3)
    helloText.innerText = 'H|'
    await sleep(wait)
    helloText.innerText = 'He|'
    await sleep(wait)
    helloText.innerText = 'Hel|'
    await sleep(wait)
    helloText.innerText = 'Hell|'
    await sleep(wait)
    helloText.innerText = 'Hello|'
    await sleep(wait*3)
    helloText.innerText = 'Hell|'
    await sleep(wait)
    helloText.innerText = 'Hel|'
    await sleep(wait)
    helloText.innerText = 'He|'
    await sleep(wait)
    helloText.innerText = 'H|'
    await sleep(wait)
    helloText.innerText = '|'
    await sleep(wait*3)
    helloText.innerText = 'H|'
    await sleep(wait)
    helloText.innerText = 'Hi|'
    await sleep(wait)
    helloText.innerText = 'Hi'
}

greet();
