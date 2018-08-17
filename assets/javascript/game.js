//array
let words = ['cat','dog','frog', 'bird', 'fish', 'bug', 'snake']

//Choose word
let randNum = Math.floor(Math.random() * words.length);
let rightWord = [];
let wrongWord = [];
let choosenWord = words[randNum];
let underScore = [];


let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// Create Underscores
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push(' _ ');
    }
        return underScore;
}

console.log(generateUnderscore());

//guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    if(choosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
            if(underScore.join('') == choosenWord) {
                alert('Winner Winner Chicken Dinner');
                window.location.reload();
            }

    }
    else{
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        if(wrongWord.length == 10){
            alert('Game Over')
            window.location.reload();
            

        }



    }
});

