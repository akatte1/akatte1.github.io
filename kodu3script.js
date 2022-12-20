const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function toArray(inputString) {
    output = []
    output = inputString.split(";")
    for (i=0;i<output.length;i++) {
        output[i] = output[i].split(",")
    }
    return output
}

function createTable() {
    const sidebar = document.getElementById("sidebar")
    const table = document.getElementById("table")
    for (x=-1;x<10;x++) {
        for (y=1;y<49;y++) {
            const node = document.createElement("div")
            if (x === -1) {
                node.classList.add("index")
                node.innerText = y
            } else {
                node.classList.add("node")
            }
            let coord = x+","+y
            node.id = coord
            node.classList.add("row"+x)
            node.classList.add("col"+y)
            table.appendChild(node)
        }
    }
    for (i=-1;i<10;i++) {
        if (i === -1) {
            const process = document.createElement("div")
            process.innerText = 'Etapp'
            process.classList.add('process')
            sidebar.appendChild(process)
        } else {
            const ele = document.createElement("div")
            ele.innerText = i+1
            sidebar.appendChild(ele)
        }
        
    }
}

function parseInput(arr) {
    for (i=0;i<arr.length;i++) {
        let f = arr[i][1].charAt(0)
        if (f === '-') {
            for (let j=i;j<arr.length;j++) {
                dlt(arr[i], j)
            }
        } else if (f === '+') {
            for (let j=i;j<arr.length;j++) {
                add(arr[i], j)
            }
        } else {
            for (let j=i;j<arr.length;j++) {
                create(arr[i], j)
            }
        }
    }
}

function create(input, i) {
    let amount = Number(input[1])
    for (let j=1;j<49;j++) {
        if (amount > 0) {
            const node = document.getElementById(i+","+j)
            if (!node.classList.contains('fill')) {
                node.innerText = input[0]
                node.classList.add(input[0])
                node.classList.add('fill')
                amount--
            }
        }
    }
}

function add(input, i) {
    let amount = Number(input[1].substring(1))
    for (let j=1;j<49;j++) {
        if (amount > 0) {
            const node = document.getElementById(i+","+j)
            if (!node.classList.contains('fill')) {
                node.innerText = input[0]
                node.classList.add(input[0])
                node.classList.add('fill')
                amount--
            }
        }
    }
}

function dlt(input, i) {
    for (j=1;j<49;j++) {
        const node = document.getElementById(i+","+j)
        if (node.classList.contains(input[0])) {
            node.innerText = ""
            node.removeAttribute('class')
            node.classList.add("row"+i)
            node.classList.add("col"+j)
            node.classList.add('node')
        }
    }
}

function clearTable() {
    const table = document.getElementById("table")
    for (x=0;x<10;x++) {
        for (y=1;y<49;y++) {
            const node = document.getElementById(x+","+y)
            node.innerText = ""
            node.removeAttribute('class')
            node.classList.add("row"+x)
            node.classList.add("col"+y)
            node.classList.add('node')
        }
    }
    for (i=0;i<10;i++) {
        const pro = document.getElementById('pro'+i)
        pro.innerText = ''
    }

}



function fillNodes(i, v, arr) {
    const pro = document.getElementById('pro'+i)
    pro.innerText = arr[i][0] + ';' + arr[i][1]
    for (x=i;x<arr[i][1]+i;x++) {
        for (y=v;y<arr[i][0]+v;y++) {
            const node = document.getElementById(x+","+y)
            node.innerText = letters[i]
            node.classList.add("fill")
            node.classList.add("p"+i)
        }
    }
}




function uiFunctionality() {
    const start = document.getElementById("start")
    const clear = document.getElementById("puhasta")
    const re = RegExp("([0-9]+,[0-9]+;?){2,}")
    
    start.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        parseInput(toArray(value))
    })

    clear.addEventListener("click", ()=> {
        clearTable()
    })
}

createTable()
uiFunctionality()
