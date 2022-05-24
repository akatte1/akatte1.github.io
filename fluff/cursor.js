window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const cursor = document.getElementById('cursor');
var cursorOver = document.getElementsByClassName('cursor-over'); 

window.addEventListener('mousemove', e=> {
    cursor.setAttribute("style", "top:"+(e.pageY-20)+"px; left:"+(e.pageX-20)+"px;");
})

for (i=0; i<cursorOver.length; i++) {
    cursorOver[i].addEventListener('mouseenter', ()=> {
        cursor.classList.add('cursor-hover');
        cursor.classList.remove('cursor-leave');
    })
    
    cursorOver[i].addEventListener('mouseleave', ()=> {
        cursor.classList.remove('cursor-hover');
        cursor.classList.add('cursor-leave');
    })  
}

var menuButton = document.getElementById('menu-button');
var menuScreen = document.getElementById('menu-screen');
var menuLeft = document.getElementById('menu-left')
var menuRight = document.getElementById('menu-right')
var closeLeft = document.getElementById('close-left')
var closeRight = document.getElementById('close-right')
var closeText = document.querySelector('.close')

menuButton.addEventListener('click', ()=> {
    menuScreen.classList.toggle('hidden');
    menuLeft.classList.toggle('move-middle-left')
    menuRight.classList.toggle('move-middle-right')
    menuLeft.classList.toggle('move-out-left')
    menuRight.classList.toggle('move-out-right')
    closeLeft.classList.toggle('move-out-left')
    closeRight.classList.toggle('move-out-right')
    closeText.classList.toggle('hidden')
})

var whiteDotLeft = document.getElementsByClassName('white-dot-left')[0]
var whiteDotRight = document.getElementsByClassName('white-dot-right')[0]
var revolveMiddle = document.getElementsByClassName('revolve-middle')[0]
var aboutTitles = document.getElementsByClassName('about-item-title')
var aboutTexts = document.getElementsByClassName('about-item-text')
var revolveTitle = document.getElementById('revolve-title');
var revolveText = document.getElementById('revolve-text');
var revolveClick = document.getElementById('revolve-click');

var rotation = 0;
whiteDotRight.addEventListener('click', ()=> {
    if (rotation==5) {
        rotation=0
    }
    else {
        rotation++;
    }
    revolveMiddle.setAttribute("style", "transform: rotate(" + (rotation*30) + "deg);")
    switch(rotation) {
        case 0:
          revolveTitle.innerText = 'Family';
          revolveText.innerText = 'The people who put up with me every day.'
          break;
        case 1:
            revolveTitle.innerText = 'Friends';
            revolveText.innerText = 'The people who put up with me every other day.'
          break;
        case 2:
          revolveTitle.innerText = 'Music';
          revolveText.innerText = "Can't go anywhere without my headphones and that's all you need to know."
          break;
        case 3:
          revolveTitle.innerText = 'Coffee';
          revolveText.innerText = "I grind my own coffee and I use a Chemex, so I'm basically a barista."
          break;
        case 4:
          revolveTitle.innerText = 'Travel';
          revolveText.innerText = 'Travel? Yeah, I travel. From my bedroom to my kitchen.'
          break;
        case 5:
          revolveTitle.innerText = 'Sports';
          revolveText.innerText = 'Been working out all my life, still not fit.'
          break;
        default:
          break;
      }
})

whiteDotLeft.addEventListener('click', ()=> {
    if (rotation==5) {
        rotation=0
    }
    else {
        rotation++;
    }
    revolveMiddle.setAttribute("style", "transform: rotate(" + (rotation*30) + "deg);")
    revolveMiddle.setAttribute("style", "transform: rotate(" + (rotation*30) + "deg);")
    switch(rotation) {
        case 0:
          revolveTitle.innerText = 'Family';
          revolveText.innerText = 'The people who put up with me every day.'
          break;
        case 1:
            revolveTitle.innerText = 'Friends';
            revolveText.innerText = 'The people who put up with me every other day.'
          break;
        case 2:
          revolveTitle.innerText = 'Music';
          revolveText.innerText = "Can't go anywhere without my headphones and that's all you need to know."
          break;
        case 3:
          revolveTitle.innerText = 'Coffee';
          revolveText.innerText = "I grind my own coffee and I use a Chemex, so I'm basically a barista."
          break;
        case 4:
          revolveTitle.innerText = 'Travel';
          revolveText.innerText = 'Travel? Yeah, I travel. From my bedroom to my kitchen.'
          break;
        case 5:
          revolveTitle.innerText = 'Sports';
          revolveText.innerText = 'Been working out all my life, still not fit.'
          break;
        default:
          break;
      }
})

revolveClick.addEventListener('click', ()=> {
    for (var i = 0; i<aboutTitles.length; i++) {
        aboutTitles[i].classList.toggle('scale-out');
        aboutTexts[i].classList.toggle('scale-in');
        aboutTitles[i].classList.toggle('scale-in');
        aboutTexts[i].classList.toggle('scale-out');
    }
})

