import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "../styles/Tcg.css";
import tcgAPI from "../utils/tcgAPI";
import TCGResults from "../components/TCGResults";
import SearchBanner from "../components/SearchBanner";
const pokemon_tcg_logo = `${process.env.PUBLIC_URL}/images/pokemon_tcg_logo.png`;

export default function TCG({ route, navigate }) {
    const location = useLocation();
    const [tcgResult, setTcgResults] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState({
        error: false,
        errorMsg: ""
    });

    const history = location.state;
    
    useEffect(() => {
        if (history) {
            setTcgResults(history.tcgResult)
        }
    },
    []
  );

    const handleInputChange = event => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const clearScreen = () => {
        resetTcgResult();
        setIsLoading(false);
        setApiError({error: false, errorMsg: ""});
    };

    const resetTcgResult = () => {
        setTcgResults();
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (searchTerm === "") {
            return;
        };

        setApiError({error: false, errorMsg: ""});
        setIsLoading(true);
        resetTcgResult();

        tcgAPI.search(searchTerm)
        .then(res => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
            }
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            setTcgResults(res);
            setIsLoading(false);


        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
            setApiError({error: true, errorMsg: `This Pokémon "${searchTerm}" does not exist`});
        });

        setSearchTerm("");
    };

    const searchBannerVar = 
        <SearchBanner
            handleInputChange={handleInputChange}
            handleSubmitForm={handleSubmitForm}
            searchTerm={searchTerm}
            clearScreen={clearScreen}
            logo={pokemon_tcg_logo}
        />;

    if (tcgResult !== undefined) {
        return (
            <div className="App">
                {searchBannerVar}
                <div className="tcgResults cursor-pointer">
                    {tcgResult.data.map(item => <TCGResults key={item.id} resultsObj = {item} tcgResult = {tcgResult}/>)}
                </div>
            </div>
        )
    } else if (isLoading === true) {
        return (
            <div className="App">
                {searchBannerVar}
                <div className="centreItems">
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                </div>
            </div>
        )
    } else if (apiError.error) {
        return (
            <div className="App">
                {searchBannerVar}
                <div className="centreItems">
                    <h2 className="searchMsg">{apiError.errorMsg}</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                {searchBannerVar}
                <div className="centreItems">
                    <h2 className="searchMsg">Please search for something</h2>
                </div>
            </div>
        )
    }
}
