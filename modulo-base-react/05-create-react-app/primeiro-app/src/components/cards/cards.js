import Card from '../card/card.js'

const cardsTitle = [ 'Titulo card 1', 'Titulo card 2', 'Titulo card 3']

const Cards = () => {
    const CardColor = (color) => {
        console.log(color)
    }

    return(
        <div>
            <h2>Meus Cards</h2>
            <div>
                { 
                    cardsTitle.map(cardTitle => (
                        <Card key={cardTitle} showCardColor={CardColor}>
                            <h3>{cardTitle}</h3>
                            <p>Texto de um card 1</p>
                        </Card>
                    ))
                }

                <Card color='yellow' showCardColor={CardColor}>
                    <h3>Card com fundo azul</h3>
                    <p>Texto de um card</p>
                </Card>
            </div>
        </div>
    )
}

export default Cards
