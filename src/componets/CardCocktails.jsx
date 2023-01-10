const CardCocktails = ({ dataCocktails }) => {
    const { strDrinkThumb, strDrink, strInstructions } = dataCocktails;
    return (
        <div className="card">
            <div className="card_img">
                <img className="img_cocktail" src={strDrinkThumb} alt="" />
            </div>
            <div className="card_info">
                <h2>{strDrink}</h2>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
};

export default CardCocktails;
