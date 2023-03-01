<template>
    <div class="bar">
        <div class="toggle">
            <div class="four-dots" @click="toggleInfo" :class="{forwards: disabled}">
                <div class="dot" :class="{p:rotation[0], g:rotation[1], y:rotation[2], b:rotation[3]}"></div>
                <div class="dot" :class="{p:rotation[1], g:rotation[2], y:rotation[3], b:rotation[0]}"></div>
                <div class="dot" :class="{p:rotation[3], g:rotation[0], y:rotation[1], b:rotation[2]}"></div>
                <div class="dot" :class="{p:rotation[2], g:rotation[3], y:rotation[0], b:rotation[1]}"></div>
            </div>
        </div>
    </div>

    <div class="infoscreen" v-if="this.showInfo">
        <nav>
            <router-link class="color-yellow" to="/" @click="toggleInfo" >Home</router-link>
            <router-link class="color-pink" to="/about" @click="toggleInfo" >About</router-link>
            <router-link class="color-green" to="/projects" @click="toggleInfo" >Projects</router-link>
            <router-link class="color-blue" to="/contact" @click="toggleInfo" >Contact</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavCompo',
    data() {
        return {
            showInfo: false,
            disabled: false,
            rotation: [true, false, false, false],
            index: 0

        }
    },
    methods: {
        toggleInfo() {
            console.log("clicked")
            this.showInfo = !this.showInfo
            this.disabled = true
            setTimeout(() => {
                this.disabled = false
                this.index = this.index === 3 ? 0 : this.index += 1
                for(let i=0;i<4;i++) {this.rotation[i] = false}
                this.rotation[this.index] = true
            }, 300)
        }
    }
}
</script>

<style scoped>
nav a {
    text-decoration: none;
    padding: 30px;
    font-size: var(--text-big);
    opacity: 1 !important;
}

.four-dots {
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
}

.forwards {
    animation:spin-in .3s ease-in-out;
}


.dot {
    position: relative;
    width: .7rem;
    height: .7rem;
    border-radius: 10px;
}

.toggle {
    z-index: 2;
    width: fit-content;
    height: fit-content;
    padding: .5rem;
    cursor: pointer;
}

.y {
    background-color: var(--fg-yellow);
}

.p {
    background-color: var(--fg-pink);
}

.g {
    background-color: var(--fg-green);
}

.b {
    background-color: var(--fg-blue);
}

.infoscreen {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
}

.infoscreen:before {
    content: " ";
    z-index: -1;
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    background-color: black;
    opacity: .4; 
}

.bar {
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: flex-end;
}

@keyframes spin-in { 
    100% { 
        transform:rotate(90deg); 
    } 
}

@keyframes spin-out { 
    100% { 
        transform:rotate(-90deg); 
    } 
}

@media (max-width: 1200px) {
    nav a {
        font-size: var(--text-medium);
    }   
}

@media (max-width: 840px) {
    nav {
        display: flex;
        flex-direction: column; 
    }
}

.router-link-exact-active {
   position: relative;
   text-decoration: underline;
}



</style>