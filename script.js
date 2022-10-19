class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
}

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

function FCFS(arr) {
    wait = 0
    currentTime = 0
    output=[]
    for (i=0;i<arr.length;i++) {
        startTime = arr[i][0]
        processTime = arr[i][1]
        if (startTime>currentTime) {
            output.push(['wait', startTime-currentTime])
            currentTime = startTime
        } else if (startTime<currentTime) {
            wait += currentTime - startTime
        }
        output.push(["p" + Number(i+1), processTime])
        currentTime += processTime
    }
    return {
        "output": output,
        "wait": wait/arr.length
    }
}

function RR(arr) {
    var currentTime = 0
    var output = []
    var timeQuant = 5
    var q = new Queue()
    var i = 0
    var newProcess = true
    var wait = 0
    while (i<arr.length || q.length > 0) {
        if (i < arr.length) {
            startTime=arr[i][0]
        } else {
            startTime = Infinity
        }
        newProcess = startTime <= currentTime || q.length === 0
        if (newProcess) {
            processTime=arr[i][1]
            if (startTime>currentTime) {
                output.push(['wait', startTime-currentTime])
                currentTime = startTime
            } else if (startTime < currentTime) {
                wait += currentTime - startTime
            } 
            if (processTime <= timeQuant) {
                output.push(["p" + Number(i+1), processTime])
                currentTime += processTime
                i++
            } else {
                currentTime += timeQuant
                output.push(["p" + Number(i+1), timeQuant])
                var que = [i, processTime-timeQuant]
                q.enqueue(que)
                i++
            }
        } else {
            const process = q.dequeue()
            processTime = process[1]
            if (processTime <= timeQuant) {
                output.push(["p" + Number(process[0]+1), processTime])
                currentTime += processTime
            } else {
                currentTime += timeQuant
                output.push(["p" + Number(process[0]+1), timeQuant])
                var que = [process[0], processTime-timeQuant]
                q.enqueue(que)
            }
        }
        console.log(output)

    } 

    return {
        "output": output,
        "wait": wait/arr.length
    }
}

function SJF(arr) {
    var wait = 0
    var currentTime = 0
    var output = []
    var done = []
    var i = 0
    var count = 0
    while (count<arr.length) {
        var startTime = arr[i][0]
        var processTime = arr[i][1]
        if (startTime>currentTime) {
            output.push(['wait', startTime-currentTime])
            currentTime = startTime
            continue
        } else {
            if (startTime<currentTime) {
                wait += currentTime - startTime
            }
            currentTime += processTime
            output.push(["p" + Number(i+1), processTime])
            done.push(i)
        }
        var candidates = []
        for (q=0;q<arr.length;q++) {
            var qStartTime = arr[q][0]
            var qProcessTime = arr[q][1]
            if (qStartTime<=currentTime) {
                if (!done.includes(q) && q != i) {
                    candidates.push([q, qProcessTime])
                }
            }   
        }
        if (candidates.length === 0) {
            i=0
            while (done.includes(i)) {
                i++
            } 
        } else {
            var min = 99999
            var minIndex = -1
            for (s=0;s<candidates.length;s++) {
                if (candidates[s][1] < min) {
                    min = candidates[s][1]
                    minIndex = candidates[s][0]
                }
            }
            i = minIndex
        }
        count++
    } 
    return {
        "output": output,
        "wait": wait/arr.length
    } 
}

function createGraph(obj) {
    arr = obj.output
    wait = obj.wait
    const processes = document.getElementById("process")
    processes.innerHTML = ""
    document.getElementById("wait").innerText = ""

    for (i=0;i<arr.length;i++) {
        const node = document.createElement("div")
        node.innerText = arr[i][0]
        node.style.width = (arr[i][1]*1.4) + "rem"
        node.classList.add(arr[i][0], "node")
        processes.appendChild(node)
    }
    const waitTime = document.createElement("h4")
    waitTime.innerText = "Keskmine ooteaeg " +  wait.toFixed(2)
    document.getElementById("wait").appendChild(waitTime)
}

function uiFunctionality() {
    const fcfs = document.getElementById("fcfs")
    const sjf = document.getElementById("sjf")
    const rr = document.getElementById("rr")
    const re = RegExp("([0-9]+,[0-9]+;?){2,}")
    
    fcfs.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = FCFS(toArray(value))
            createGraph(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    sjf.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = SJF(toArray(value))
            createGraph(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
    rr.addEventListener("click", ()=>{
        let value = document.querySelector('input[name="nimi"]:checked').value
        if (value === "input") {
            const input = document.getElementById("userInput")
            value = input.value
        }
        if (re.test(value)) {
            const values = RR(toArray(value))
            createGraph(values)
        } else {
            alert("Sisend ei sobi!")
        }
    })
}

uiFunctionality()
