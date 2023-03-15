import axios from "axios";
const BASEURL = "https://pokeapi.co/api/v2/pokemon/";

let searchObj = {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

export default searchObj;