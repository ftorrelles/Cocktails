import "./App.css";
import useGetData from "./hooks/useGetData";
import CardCocktails from "./componets/CardCocktails";
import { useState } from "react";
import NavBar from "./componets/NavBar";

function App() {
    const [cocktailName, setCocktailName] = useState("");
    const { data } = useGetData(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
        (resp) => resp.data.drinks,
        cocktailName
    );

    const searchCocktails = (e) => {
        e.preventDefault();
        setCocktailName(e.target[0].value);
    };
    return (
        <div className="App">
            <NavBar />

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
                        src="/imgCocktail.png"
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
                        <img src="/noC.png" alt="Sin coincidencias"></img>
                    </div>
                )}
            </section>
        </div>
    );
}

export default App;
