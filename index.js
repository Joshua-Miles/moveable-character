// Set up a variable to use when we need to set the characters image src
const ASSET_ROOT = './assets/green-character'

// Create an img element to represent the character
const character = document.createElement('img')

// Make the character a little bigger
character.style.width = '75px'

// Position the character absolutely in the lower left corner of the screen
character.style.position = 'absolute'
character.style.left = '0px'
character.style.bottom = '0px'

// Set the src of the img so the browser knows what to show
character.src = `${ASSET_ROOT}/static.gif`

// Add the character image to the page
document.body.append(character)

let direction = null

setInterval(function(){

    const left = parseInt(character.style.left)
    const bottom = parseInt(character.style.bottom)

    if(direction == 'right'){
        character.style.left = `${left+5}px`
    }

}, 20)

function walkLeft(){

}

function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
    direction = 'right'
}

function walkUp(){

}

function walkDown(){

}

function stop(){
    character.src = `${ASSET_ROOT}/static.gif`
    direction = null
}