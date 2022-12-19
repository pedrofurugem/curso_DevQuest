//import { Component } from 'react'
//importando o useState
import { useState } from 'react'
import { useEffect } from 'react'
import Form from '../../components/forms/form'

//cria baralho
async function createDeck(){
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id //pegando um id de uma carta específica
}

//pega as cartas
async function getCards(deckId){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}

//começando a aplicar a condicional
const CardList = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value} />
                            <p>{card.value} {card.suit}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const DeckOfCards = () => {
    
    const [deck, setDeck] = useState({ 
        cards: []
    })
    
    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)
            
            setDeck({
                cards: data.cards
            })
        }
        fetchData()
    }, []) 

    //função para trazer carta nova do form
    const addCard = (newCard) => {
        console.log(newCard)
        setDeck({
            cards: [...deck.cards, newCard] //retorna array novo, usando o operador spread ...
        })
    }
    
    return(
        <section>
            <Form addCard={addCard} />
            { deck.cards.length > 0 ? <CardList cards={deck.cards}/> : "Nehuma carta encontrada" }
        </section>
    )
}


export default DeckOfCards

/*
Montando (mounting)
Estes métodos são chamados na seguinte ordem quando 
uma instância de um componente está sendo criada e inserida no DOM:

-constructor()
-static getDerivedStateFromProps()
-render()
-componentDidMount()
*/