// JavaScript source code
//fetch api


const people_result = document.getElementById('people_result');
const film_result = document.getElementById('film_result');
const char_btn = document.getElementById('char_btn');
const film_btn = document.getElementById('film_btn');

char_btn.addEventListener('click', getRandomCharacter)
film_btn.addEventListener('click', getRandomFilm)


function getRandomCharacter() {
    fetch('https://swapi.dev/api/people/1/').then((response) => {
        return response.json();

    }).then((data) => {
        let p = document.getElementById('text');
        console.log(data);
        p.innerHTML = JSON.stringify(data);
    })
}

function getRandomFilm() {
    fetch('https://swapi.dev/api/films/2/').then((response) => {
        return response.json();

    }).then((data) => {
        let p = document.getElementById('text_two');
        console.log(data);
        p.innerHTML = JSON.stringify(data);
    })
}


