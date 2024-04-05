const form = document.querySelector('form');
const output = document.querySelector('#output');


function fetchCharacter(name) {
    let response = {};

    fetch(`https://www.swapi.tech/api/people/?name=${name}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        response = data.result[0].properties;

        output.innerHTML = `
        <h3>Here are the results for ${name}</h3>
        <textarea
        cols="40"
        rows="10"
        readonly>
            Height: ${response.height}\n 
            Mass: ${response.mass}\n 
            Gender: ${response.gender}\n 
            Hair color: ${response.hair_color}\n 
        </textarea>
        `
        })
    .catch(err => console.log(err))
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const characterName = form['character'].value;

    fetchCharacter(characterName);
    form.reset();
});

