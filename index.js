// as soon as website loads

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", () => {
  const randomNumber = randomIntFromInterval(1, 898);
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
  fetch(`${baseURL}/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const pokemonDiv = document.getElementById("pokemon");

      const name = data.name;
      const header = document.createElement("h1");
      header.innerText = name;
      pokemonDiv.append(header);

      const shinySprite = data.sprites.front_shiny;
      // create img element
      const img = document.createElement("img");
      // set img source as shinySprite
      img.src = shinySprite;
      //Add img element to the div id="pokemon"

      pokemonDiv.append(img);
    });
});
