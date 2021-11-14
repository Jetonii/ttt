const $00 = document.getElementById('00')
const $01 = document.getElementById('01')
const $02 = document.getElementById('02')
const $10 = document.getElementById('10')
const $11 = document.getElementById('11')
const $12 = document.getElementById('12')
const $20 = document.getElementById('20')
const $21 = document.getElementById('21')
const $22 = document.getElementById('22')
const h2 = document.getElementById('h2')
const h1 = document.getElementById('h1')
const playAgain = document.getElementById('play-again')



let board = [[$00, $01, $02], [$10, $11, $12], [$20, $21, $22]]
// Based on count we change the mark from x to o and the opposite
let count = 0
let mark = 'x';


let isValid = function (pos) {
    console.log(pos.innerText)

    if (pos.innerText === '') {
        return true
    } else {
        return false
    }
}

$00.addEventListener('click', () => {
    let valid = isValid($00)
    if (count % 2 === 0 && valid) {
        mark = 'x'
        $00.innerText = 'x';
        $00.style.backgroundColor = 'white';
        count++;
    } else if (valid) {
        mark = 'o'
        $00.innerText = 'o';
        $00.style.backgroundColor = 'white';
        count++;
    }
})
$01.addEventListener('click', () => {
    let valid = isValid($01)
    if (count % 2 === 0 && valid) {
        mark = 'x'
        $01.innerText = 'x';
        $01.style.backgroundColor = 'white';
        count++;

    } else if (valid) {
        mark = 'o'
        $01.innerText = 'o';
        $01.style.backgroundColor = 'white';
        count++;

    }
})

$02.addEventListener('click', () => {
    let valid = isValid($02)
    if (count % 2 === 0 && valid) {
        mark = 'x'
        $02.innerText = 'x';
        $02.style.backgroundColor = 'white';
        count++;

    } else if (valid) {
        mark = 'o'
        $02.innerText = 'o';
        $02.style.backgroundColor = 'white';
        count++;

    }
})

$10.addEventListener('click', () => {
    let valid = isValid($10)
    if (count % 2 === 0 && valid) {
        mark = 'x'
        $10.innerText = 'x';
        $10.style.backgroundColor = 'white';
        count++;

    } else if (valid) {
        mark = 'o'
        $10.innerText = 'o';
        $10.style.backgroundColor = 'white';
        count++;

    }
})

$11.addEventListener('click', () => {
    let valid = isValid($11)
    if (count % 2 === 0 && valid) {
        mark = 'x'
        $11.innerText = 'x';
        $11.style.backgroundColor = 'white';
        count++;

    } else if (valid) {
        mark = 'o'
        $11.innerText = 'o';
        $11.style.backgroundColor = 'white';
        count++;

    }
})
$12.addEventListener('click', () => {
    if (count % 2 === 0 && isValid($12)) {
        mark = 'x'
        $12.innerText = 'x';
        $12.style.backgroundColor = 'white';
        count++;

    } else if (isValid($12)) {
        mark = 'o'
        $12.innerText = 'o';
        $12.style.backgroundColor = 'white';
        count++;
    }
})


$20.addEventListener('click', () => {
    if (count % 2 === 0 && isValid($20)) {
        $20.innerText = 'x';
        mark = 'x'
        $20.style.backgroundColor = 'white';
        count++;

    } else if (isValid($20)) {
        mark = 'o'
        $20.innerText = 'o';
        $20.style.backgroundColor = 'white';
        count++;

    }
})

$21.addEventListener('click', () => {
    if (count % 2 === 0 && isValid($21)) {
        mark = 'x'
        $21.innerText = 'x';
        $21.style.backgroundColor = 'white';
        count++;

    } else if (isValid($21)) {
        mark = 'o'
        $21.innerText = 'o';
        $21.style.backgroundColor = 'white';
        count++;

    }
})

$22.addEventListener('click', () => {
    if (count % 2 === 0 && isValid($22)) {
        mark = 'x'
        $22.innerText = 'x';
        $22.style.backgroundColor = 'white';
        count++;

    } else if (isValid($22)) {
        mark = 'o'
        $22.innerText = 'o';
        $22.style.backgroundColor = 'white';
        count++;
    }
})

let won = function (mark) {
    let horizontals = ($00.innerText === mark && $01.innerText === mark && $02.innerText === mark) || ($20.innerText === mark && $21.innerText === mark && $22.innerText === mark) || ($10.innerText === mark && $11.innerText === mark && $12.innerText === mark)
    let verticals = ($00.innerText === mark && $10.innerText === mark && $20.innerText === mark) || ($01.innerText === mark && $11.innerText === mark && $21.innerText === mark) || ($02.innerText === mark && $12.innerText === mark && $22.innerText === mark)
    let diagonals = ($00.innerText === mark && $11.innerText === mark && $22.innerText === mark) || ($02.innerText === mark && $11.innerText === mark && $20.innerText === mark)
    if (horizontals || verticals || diagonals) {
        return true
    }
    return false
}

let isOver = function () {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j].innerText === '') {
                return false
            }
        }
    }
    return true
}


document.addEventListener('click', () => {
    if (won('x')) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j].innerText === 'x') {
                    board[i][j].style.backgroundColor = 'green';

                } else if (board[i][j].innerText === 'o') {
                    board[i][j].style.backgroundColor = 'red';
                }
            }
        }
        h2.innerText = `Player 'X' has won. Congratulations to the pro! Shame to the nooobbb!`
    } else if (won('o')) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j].innerText === 'o') {
                    board[i][j].style.backgroundColor = 'green';
                } else if (board[i][j].innerText === 'x') {
                    board[i][j].style.backgroundColor = 'red';
                }
            }
        }
        h2.innerText = `Player 'O' has won. Congratulations to the pro! Shame to the nooobbb!`
    } else if (isOver() && !won('x') && !won('o')) {
        h2.innerText = 'Game Over! Nobody has won!'
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j].style.backgroundColor = 'lightblue';
            }
        }
    } 
})


pA = ()=> {
    window.location.reload(true)
}

playAgain.addEventListener('click', pA)
