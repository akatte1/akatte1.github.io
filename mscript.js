const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function toArray(inputString) {
    output = []
    output = inputString.split(";")
    for (i=0;i<output.length;i++) {
        output[i] = output[i].split(",")
        output[i][0] = Number(output[i][0])
        output[i][1] = Number(output[i][1])
    }
    return output
}

function createTable() {
    const sidebar = document.getElementById("sidebar")
    const table = document.getElementById("table")
    for (x=-1;x<10;x++) {
        for (y=0;y<50;y++) {
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
            const title = document.createElement("div")
            title.innerText = "Etapp"
            sidebar.appendChild(title)
            const process = document.createElement("div")
            process.innerText = 'Protsess'
            process.classList.add('process')
            sidebar.appendChild(process)
        } else {
            const ele = document.createElement("div")
            ele.innerText = i+1
            sidebar.appendChild(ele)
            const process = document.createElement("div")
            process.id = 'pro'+i
            process.classList.add('process')
            sidebar.appendChild(process)
        }
        
    }
}

function clearTable() {
    const table = document.getElementById("table")
    for (x=0;x<10;x++) {
        for (y=0;y<50;y++) {
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


function FirstFit(arr) {
    for (i=0;i<arr.length;i++){
        const row = document.getElementsByClassName("row"+i)
        let first = -1
        for (j=0;j<49;j++) {
            if (row[j].classList.contains("col0") && !(row[j].classList.contains("fill"))) {
                first = 0
            } else if (row[j].classList.contains("fill") && !(row[j+1].classList.contains("fill"))) {
                count = 0
                c = j+1
                while (!(row[c].classList.contains("fill"))) {
                    if (c===49) {
                        break
                    }
                    count++
                    c++
                }
                if (count >= arr[i][0]) {
                    first = j+1
                    break
                }
            }
        }
        if (first === -1) {
            noFit(i)
            return
        } else {
            fillNodes(i, first, arr)
        }
    }
}

function LastFit(arr) {
    for (i=0;i<arr.length;i++){
        const row = document.getElementsByClassName("row"+i)
        let last = -1
        for (j=0;j<49;j++) {
            if (row[j].classList.contains("col0") && !(row[j].classList.contains("fill"))) {
                last = 0
            } else if (row[j].classList.contains("fill") && !(row[j+1].classList.contains("fill"))) {
                count = 0
                c = j+1
                while (!(row[c].classList.contains("fill"))) {
                    count++
                    if (count >= arr[i][0]) {
                        last = j+1
                        break
                    }
                    if (c===49) {
                        break
                    }
                    c++
                }
            }
        }
        if (last === -1) {
            noFit(i)
            return
        } else {
            fillNodes(i, last, arr)
        }
    }
}

function BestFit(arr) {
    for (i=0;i<arr.length;i++){
        const row = document.getElementsByClassName("row"+i)
        let best = -1
        let bestCount = 51
        for (j=0;j<49;j++) {
            if (row[j].classList.contains("col0") && !(row[j].classList.contains("fill"))) {
                best = 0
            } else if (row[j].classList.contains("fill") && !(row[j+1].classList.contains("fill"))) {
                count = 0
                c = j+1
                while (!(row[c].classList.contains("fill"))) {
                    count++
                    if (c===49) {
                        break
                    }
                    c++
                }
                if (count >= arr[i][0] && count < bestCount) {
                    best = j+1
                    bestCount = count
                }
            }
        }
        if (best === -1) {
            noFit(i)
            return
        } else {
            fillNodes(i, best, arr)
        }
    }
}

function WorstFit(arr) {
    for (i=0;i<arr.length;i++){
        const row = document.getElementsByClassName("row"+i)
        let best = -1
        let worstCount = -1
        for (j=0;j<49;j++) {
            if (row[j].classList.contains("col0") && !(row[j].classList.contains("fill"))) {
                best = 0
            } else if (row[j].classList.contains("fill") && !(row[j+1].classList.contains("fill"))) {
                count = 0
                c = j+1
                while (!(row[c].classList.contains("fill"))) {
                    if (c===49) {
                        break
                    }
                    count++
                    c++
                }
                if (count >= arr[i][0] && count > worstCount) {
                    best = j+1
                    worstCount = count
                }
            }
        }
        if (best === -1) {
            noFit(i)
            return
        } else {
            fillNodes(i, best, arr)
        }
    }
} 

function RandomFit(arr) {
    for (i=0;i<arr.length;i++){
        const row = document.getElementsByClassName("row"+i)
        let options = []
        for (j=0;j<49;j++) {
            if (row[j].classList.contains("col0") && !(row[j].classList.contains("fill"))) {
                options.push(0)
            } else if (row[j].classList.contains("fill") && !(row[j+1].classList.contains("fill"))) {
                count = 0
                c = j+1
                while (!(row[c].classList.contains("fill"))) {
                    if (c===49) {
                        break
                    }
                    count++
                    c++
                }
                if (count >= arr[i][0]) {
                    options.push(j+1)
                }
            }
        }
        console.log(options)
        if (options.length === 0) {
            noFit(i)
            return
        } else {
            const ran = options[Math.floor(Math.random() * options.length)];
            fillNodes(i, ran, arr)
        }
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

function noFit(i) {
    const elements = document.getElementsByClassName('row'+i)
    for (let i=0;i<elements.length;i++) {
        elements[i].classList.add('nofit')
    }
}


function uiFunctionality() {
    const ff = document.getElementById("ff")
    const lf = document.getElementById("lf")
    const bf = document.getElementById("bf")
    const wf = document.getElementById("wf")
    const rf = document.getElementById("rf")
    const clear = document.getElementById("puhasta")
    const re = RegExp("([0-9]+,[0-9]+;?){2,}")
    
    ff.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = toArray(value)
            FirstFit(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    lf.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = toArray(value)
            LastFit(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    bf.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = toArray(value)
            BestFit(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    wf.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = toArray(value)
            WorstFit(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    rf.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = toArray(value)
            RandomFit(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    puhasta.addEventListener("click", ()=> {
        clearTable()
    })
}

createTable()
uiFunctionality()
