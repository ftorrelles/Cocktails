import Card from "react-bootstrap/Card";

const CardCocktails = ({ dataCocktails }) => {
    const { strDrinkThumb, strDrink, strInstructions } = dataCocktails;
    return (
        <div className="card">
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
