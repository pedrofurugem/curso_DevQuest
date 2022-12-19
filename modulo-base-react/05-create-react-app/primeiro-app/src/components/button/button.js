//pra importar mais de um elemento devemos ter uma classe pai e um fragment ()
import React, { Component } from 'react'
import './button.css'

const Button = (props) => {
    const sayHello = () => { //posso alocar a função dentro do componente
        console.log('Hello')
    }

    return <button className="btn" onClick={sayHello}>{props.label}</button>
}

//usando defaultprops com classe
/*class Button extends Component {
    render(){
        return <button className='btn'>{this.props.label}</button>
    }
}*/

Button.defaultProps = {
    label: 'Clique aqui com classe'
}

export default Button