let pokeitemInput = document.getElementById("pokeitem-code");
let fetchButton2 = document.getElementById("fetchitem-button");
let pokeUL = document.getElementById("item-list");
let itemNameElm = document.getElementById("item-name");

async function handleFetchPokeItems() {
    console.log("Hello from poke-items.js!");
    let itemCode = pokeitemInput.value;
    try {
        let result = await fetch(`https://pokeapi.co/api/v2/item/${itemCode}`);
        if (!result.ok) {
            throw new Error("Item doesn't exist.");
        }
        let data = await result.json();
        console.log(data);
        
        let name = data.name;
        itemNameElm.textContent = name;
        
        let translations = data.names.map(nameObj => nameObj.name);
        console.log(translations); 
        
        translations.sort(); 
        
        let html = translations.map(translation => `<li>${translation}</li>`).join('');
        console.log(html);
        pokeUL.innerHTML = html;
    } catch (error) {
        console.error(error);
        itemNameElm.textContent = error.message;
        pokeUL.innerHTML = '';
    }
}

fetchButton2.addEventListener("click", handleFetchPokeItems);