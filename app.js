let characters = {
    gandalf: {
        health: 100,
        image: 'https://i.pinimg.com/originals/1a/de/e1/1adee1e30eb2de66cb94bac408b7c040.jpg',
        attack: 3,
        barColor: ""
    },
    sauron: {
        health: 100,
        image: 'https://qph.fs.quoracdn.net/main-qimg-177e0356673141df16be5e6bc2b841d4',
        attack: 10,
        barColor: "bg-danger"
    }
}
let ringOfPower = 0


function draw() {
    let template = ''
    for (let key in characters) {
        let char = characters[key]
        template += `
    <div  id="${key}" class="col-12 col-md-6 d-flex">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 p-0">
                <img class="img-fluid" onclick="attack('${key}')"
                    src="${char.image}" alt="">
                <div class="progress">
                    <div class="${char.barColor} progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${char.health}%"></div>
                </div>
            </div>
        </div>
    </div>
        `
        document.getElementById('player').innerHTML = template

    }
}


function attack(key) {
    if (key == 'sauron') {
        characters[key].health -= 1
        console.log(characters[key].health);
    }
    if (characters.sauron.health < 0) {
        characters.sauron.health = 200
    }
    if (characters.sauron.health % 25 == 0) {
        ring()
    }

    updateHealth(key)
}

function updateHealth(key) {
    healthElem = document.getElementById(key)
    let bar = healthElem.querySelector('.progress-bar')
    bar.style.width = characters[key].health + '%'

}

function hurt() {
    characters.gandalf.health -= 5
    if (characters.gandalf.health < 0) {
        characters.gandalf.health = 0
    }
    updateHealth('gandalf')
}

function reset() {
    characters.gandalf.health = 100
    characters.sauron.health = 100
    draw()
}

function purchase() {
    if (ringOfPower >= 4) {
        characters.gandalf.health += 25
        ringOfPower -= 4
    }
    draw()
}

function ring() {
    ringOfPower += 1
    document.getElementById('rings').innerText = ringOfPower
}

function gameReset() {
    characters.gandalf.health = 100
    characters.sauron.health = 100
    ringOfPower = 0
    draw()
}

draw()


let hurtInterval = setInterval(hurt, 2000)

