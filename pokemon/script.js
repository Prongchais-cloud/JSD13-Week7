const progres = document.getElementById("progressX");
const btnPokemon = document.getElementById("btn-pokemon");

btnPokemon.addEventListener("click", async () => {
    try {
        const ran = Math.floor(Math.random() * 1351) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ran}`);

        if (!res) return;

        const pokeData = await res.json();
        console.log(pokeData);

        const div = document.createElement("div");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const removeBtn = document.createElement("button");

        div.className = "card";

        img.src = pokeData.sprites.front_default;

        span.textContent = pokeData.name;

        removeBtn.textContent = "Remove";
        removeBtn.id = "btn-remove";

        div.append(img);
        div.append(span);
        div.append(removeBtn);
        progres.append(div);
    } catch (err) {
        console.error(err);
    }
});

progres.addEventListener("click", (e) => {
    if (e.target.id === "btn-remove") {
        const re = e.target.closest("div");
        re.remove();
    }
});
