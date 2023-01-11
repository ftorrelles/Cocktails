import Card from "react-bootstrap/Card";

const CardCocktails = ({ dataCocktails }) => {
    const { strDrinkThumb, strDrink, strInstructions } = dataCocktails;
    return (
        <div className="card">
            {/* <div className="card_img">
                <img className="img_cocktail" src={strDrinkThumb} alt="" />
            </div>
            <div className="card_info">
                <h2>{strDrink}</h2>
                <p>{strInstructions}</p>
            </div> */}
            <Card className="card_cocktail" style={{ border: "none" }}>
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body style={{ padding: "0.3rem" }}>
                    <Card.Title>{strDrink}</Card.Title>
                    <Card.Text>{strInstructions}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardCocktails;
