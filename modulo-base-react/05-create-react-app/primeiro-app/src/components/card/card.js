import React from 'react'
import './card.css'
//card extender caracteristicas de uma classe para o componente
//herda passa

//props por função
//(props)
//<h3>{props.title}</h3>
            //passando as propriedades
const Card = ({children, color, showCardColor}) => {
    return (
        <div 
        className='card' 
        style={{ backgroundColor: color }} 
        onClick={() => showCardColor(color)}> 
            {children}
        </div>
    )
}//função anonima dentro do onClick para ele não clicar enquanto eu não clicar

Card.defaultProps = { 
    color: 'red'
}

export default Card

