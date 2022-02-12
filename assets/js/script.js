// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0
let total = 0

//TODO: Create any elements we need
//accessing the div for all elements of the game
let game = document.querySelector('#game')
//creating image element and appending to the game div
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)
//creating a div with border for controls
let controls = document.createElement('div')
controls.setAttribute('class','controls')
game.append(controls)
//create the flip the penny button
let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip the penny'
controls.append(flip)
//create clear button
let clear = document.createElement('button')
clear.setAttribute('id','clear')
clear.textContent = "Clear Scoreboard"
controls.append(clear)

//create message
let message = document.createElement('h3')
message.setAttribute('id','message')
message.textContent = 'Let\'s get rolling'
game.append(message)

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flip.addEventListener('click', function(){
        let flipHeads = Math.random() < 0.5

        if(flipHeads){
            penny.src = './assets/images/penny-heads.jpg'
            headFlips++
            message.textContent = 'You flipped heads!'

        }
        else{
            penny.src = './assets/images/penny-tails.jpg'
            tailFlips++
            message.textContent = 'You flipped tails!'
        }
        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips

        let tScore = document.querySelector('#tails')
        tScore.textContent = tailFlips

        total++

        let pHeads = `${Math.round(headFlips/total * 100)}%`
        let pTails = `${Math.round(tailFlips/total*100)} % `

        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads

        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = pTails



    })

    clear.addEventListener('click', function(){
        total = 0
        headFlips = 0
        tailFlips = 0

        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips

        let tScore = document.querySelector('#tails')
        tScore.textContent = tailFlips

        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = '0%'

        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = '0%'


        penny.src = './assets/images/penny-heads.jpg'
        message.textContent = 'Let\'s get rolling'




    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})