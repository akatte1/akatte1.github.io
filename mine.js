rows = document.createElement('ul')
var gameState=''

for (i=0; i<9; i++) {
    listRow = document.createElement('li')
    for (j=0; j<9; j++) {
        button = document.createElement('input')
        button.classList.add('btn')
        button.type = 'button'
        button.value = ' '
        button.id = j + i*9
        listRow.appendChild(button)
        rows.appendChild(listRow)
    }
}
document.body.appendChild(rows)

var buttons = document.getElementsByClassName('btn')
var buttonids = []

var bombs = document.getElementsByClassName('bomb')
q = bombs.length

while (q<12) {
    rdm = Math.floor(Math.random() * 81)
    buttons[rdm].classList.add('bomb')
    var bombs = document.getElementsByClassName('bomb')
    q = bombs.length
}

for (i=0; i<bombs.length; i++) {
    bombs[i].addEventListener('click', gameEnd)
}

for (i=1; i<8; i++){
    for (j=0; j<7; j++){
        v = 9*i+j+1
        if (!(buttons[v].classList[1] == 'bomb')) {
            var bombCount = 0
            if (buttons[v+1].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v-1].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v+9].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v-9].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v+10].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v-10].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v+8].classList[1] == 'bomb') {
                bombCount += 1
            }
            if (buttons[v-8].classList[1] == 'bomb') {
                bombCount += 1
            }
            buttons[v].classList.add(bombCount)
        }
    }
}

for (i=1; i<8; i++) {
    v=i+72
    l=i*9
    r=i*9+8
    if (!(buttons[i].classList[1] == 'bomb')) {
        bombCount = 0
        if (buttons[i+9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[i+10].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[i+8].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[i+1].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[i-1].classList[1] == 'bomb') {
            bombCount+=1
        }
        buttons[i].classList.add(bombCount)
    }
    if (!(buttons[v].classList[1] == 'bomb')) {
        bombCount = 0
        if (buttons[v-9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[v-10].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[v-8].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[v+1].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[v-1].classList[1] == 'bomb') {
            bombCount+=1
        }
        buttons[v].classList.add(bombCount)
    }
    if (!(buttons[l].classList[1] == 'bomb')) {
        bombCount = 0
        if (buttons[l-9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[l+9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[l+1].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[l+10].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[l-8].classList[1] == 'bomb') {
            bombCount+=1
        }
        buttons[l].classList.add(bombCount)
    }
    if (!(buttons[r].classList[1] == 'bomb')) {
        bombCount = 0
        if (buttons[r-9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[r+9].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[r-1].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[r+8].classList[1] == 'bomb') {
            bombCount+=1
        }
        if (buttons[r-10].classList[1] == 'bomb') {
            bombCount+=1
        }
        buttons[r].classList.add(bombCount)
    }
}

if (!(buttons[0].classList[1] == 'bomb')) {
    bombCount = 0
    if (buttons[1].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[9].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[10].classList[1] == 'bomb') {
        bombCount+=1
    }
    buttons[0].classList.add(bombCount)
}

if (!(buttons[8].classList[1] == 'bomb')) {
    bombCount = 0
    if (buttons[7].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[16].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[17].classList[1] == 'bomb') {
        bombCount+=1
    }
    buttons[8].classList.add(bombCount)
}

if (!(buttons[72].classList[1] == 'bomb')) {
    bombCount = 0
    if (buttons[73].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[63].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[64].classList[1] == 'bomb') {
        bombCount+=1
    }
    buttons[72].classList.add(bombCount)
}

if (!(buttons[80].classList[1] == 'bomb')) {
    bombCount = 0
    if (buttons[70].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[71].classList[1] == 'bomb') {
        bombCount+=1
    }
    if (buttons[79].classList[1] == 'bomb') {
        bombCount+=1
    }
    buttons[80].classList.add(bombCount)
}

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', onClick)
    buttons[i].addEventListener('contextmenu', rightClick)

}

function rightClick(event) {
    event.preventDefault()
    btn = event.target
    if (!(btn.classList[2]=='clicked')){
        btn.classList.toggle('tagged')
    }
    checkGameWin()
}

function onClick(event) {
    button = event.target
    if (!(button.classList[2] == 'tagged')){
        if (button.classList[1] == 0){
            i=button.id
            reveal(i)
            revealAll(i)
        }
        else if (!(button.classList[1] == 'bomb')){
            button.value = button.classList[1]
        }
        button.classList.add('clicked')
    }
    checkGameWin()
}

function revealAll(i) {
    var left = [0, 9, 18, 27, 36, 45, 54, 63, 72]
    var right = [8, 17, 26, 35, 44, 53, 62, 71, 80]
    var top = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var bottom = [72, 73, 74, 75, 76, 77, 78, 79, 80]

    k = parseFloat(i)

    if (!(left.includes(k))) {
        reveal(k-1)
    }
    if (!(right.includes(k))) {
        reveal(k+1)
    }
    if (!(top.includes(k))) {
        reveal(k-9)
    }
    if (!(bottom.includes(k))) {
        reveal(k+9)
    }
    if (!(bottom.includes(k)) && !(right.includes(k))) {
        reveal(k+10)
    }
    if (!(bottom.includes(k)) && !(left.includes(k))) {
        reveal(k+8)
    }
    if (!(top.includes(k)) && !(left.includes(k))) {
        reveal(k-10)
    }
    if (!(top.includes(k)) && !(right.includes(k))) {
        reveal(k-8)
    }
}


function reveal(i) {
    id = i.toString()
    btn = document.getElementById(id)
    if (!(btn.classList[2]=='tagged')) {
        if (btn.classList[1]==0) {
            btn.value = ' '
            btn.classList.add('clicked')
        }
        else {
            btn.value = btn.classList[1]
            btn.classList.add('clicked')
        }
    }
}

function checkGameWin() {
    q=0
    if (!(gameState=='lost')) {
        for (i=0; i<buttons.length; i++) {
            if (buttons[i].classList[1]=='bomb' && buttons[i].classList[2]=='tagged') {
                q+=1
            }
            else if (buttons[i].classList[2] == 'clicked') {
                q+=1
            }
        }
        if (q==81) {
            for (i=0; i<81; i++){
                if (buttons[i].classList[2] == 'tagged') {
                    buttons[i].classList.remove('tagged')
                    buttons[i].classList.add('clicked')
                }
            }
            var reloadButton = document.getElementById('reload')
            reloadButton.value = 'B)'
            gameState='win'
        }
    }
    
}

function gameEnd(event) {
    if (!(gameState=='win')) {
        btn = event.target
        buttons = document.getElementsByClassName('btn')
        if (!(btn.classList[2]=='tagged')) {
            for (i=0; i<81; i++){
                if (buttons[i].classList[1] == 0) {
                    buttons[i].value = ' '
                }
                else {
                    buttons[i].value = buttons[i].classList[1]
                }
                if (buttons[i].classList[2] == 'tagged') {
                    buttons[i].classList.remove('tagged')
                    buttons[i].classList.add('clicked')
                }
                else {
                    buttons[i].classList.add('clicked')
                }
            }
            var reloadButton = document.getElementById('reload')
            reloadButton.value = ':('
        }
        gameState = 'lost'
    }
}
    