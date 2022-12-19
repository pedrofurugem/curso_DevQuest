import { useState } from 'react'

//htmlFor equivalente ao for do html para fazer ligação com o label
//for é uma palavra resevada no javascript
const Form = (props) => {
    
    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })
    //função generica
    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            //adicionar, atualizar o estado
            ...inputs,
            //ligação com o index do array
            [name]: value //pega o valor de um campo input
        })
    }

    const handleSubmit = (event) => { //lida com o submit do formulário
        event.preventDefault() //previnir que não aconteça o refresh
        props.addCard(inputs) //props definido acima junto da função addCard com o input definido acima
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <div>
                <label htmlFor="value">Nome da carta</label>
                <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value}/>
            </div>
            <div>
                <label htmlFor="suit">Naipe da carta</label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}/>
            </div>
            <input type="submit" />
        </form>
        </>
    )
}

export default Form