import pokemonTCG from "pokemontcgsdk";
pokemonTCG.configure({apiKey: "1959811e-c192-4364-bd64-7238abd627fe"});

let searchObj = {
    search: function(query) {
        return pokemonTCG.card.where({ q: `name:${query}` })
    }
};

export default searchObj;