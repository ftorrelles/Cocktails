import "./App.css";
import useGetData from "./hooks/useGetData";
import CardCocktails from "./componets/CardCocktails";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
    const [cocktailName, setCocktailName] = useState("");
    const { data } = useGetData(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
        (resp) => resp.data.drinks,
        cocktailName
    );
    console.log(data);
    const searchCocktails = (e) => {
        e.preventDefault();
        setCocktailName(e.target[0].value);
    };
    return (
        <div className="App">
            <form
                className="form_cocktail"
                onSubmit={(e) => searchCocktails(e)}
            >
                <input
                    className="input_cocktail"
                    type="text"
                    placeholder="nombre de la bebida"
                />
                <button className="btn_cocktail">
                    <img
                        className="searchCocktail"
                        src="./public/imgCocktail.png"
                        alt=""
                    />
                </button>
            </form>
            <section>
                {data ? (
                    data.map((cocktail, index) => (
                        <CardCocktails dataCocktails={cocktail} key={index} />
                    ))
                ) : (
                    <div className="img_no">
                        <img
                            src="./public/noC.png"
                            alt="Sin coincidencias"
                        ></img>
                    </div>
                )}
            </section>
        </div>
    );
}

export default App;
