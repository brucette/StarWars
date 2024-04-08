const form = document.querySelector('form');
const output = document.querySelector('#output');


function fetchCharacter(name) {
    output.innerHTML = `<textarea cols="40" rows="10" readonly></textarea>`;

    let response = {};

    fetch(`https://www.swapi.tech/api/people/?name=${name}`)
    .then(res => {
            if(res.ok)
                return res.json();
            throw new Error('Error when fetching') 
        })
    .then(data => {
        if(data.result.length == 0) {
            output.innerHTML = `
            <textarea cols="40" rows="10" readonly>
            No such character in the universe!
            </textarea>
            `
        }
        else {
            response = data.result[0].properties;
            output.innerHTML = `
                <h3>Here are the results for ${response.name}</h3>
                <textarea cols="40" rows="10" readonly>
                Height: ${response.height}\n 
                Mass: ${response.mass}\n 
                Gender: ${response.gender}\n 
                Hair color: ${response.hair_color}\n 
                </textarea>
            `
        }
    })
    .catch(err => console.log(err))
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const characterName = form['character'].value;

    fetchCharacter(characterName);
    form.reset();
});

