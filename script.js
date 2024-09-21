let fetchButton = document.getElementById("fetch-button");
let PokemonInput = document.getElementById("Pokemon-code");
let outputDiv = document.getElementById("pokemon-output");


async function handleFetch() {
    console.log("Hello Pokemon Trainer!");
    let pokemoncode = PokemonInput.value; 
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoncode}`);
    let data = await result.json();
    console.log(data);
    let pokemonName = data.name;
    let pokemonIndex = data.game_indices[0].game_index;
    let pokemonAbility = data.abilities[0].ability.name;
    let pokemonType = data.types[0].type.name;
    let imgURL = data.sprites.front_delault;
    console.log(imgURL);
    console.log(pokemonName);
    outputDiv.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${imgURL}">
        <div class="card-body">
            <h2>${pokemonName}</h2>
            <p>Index: ${pokemonIndex}</p>
            <p>Ability: ${pokemonAbility}</p>
            <p>Type: ${pokemonType}</p> 
        </div>
    </div>`;
}




fetchButton.addEventListener("click", handleFetch);