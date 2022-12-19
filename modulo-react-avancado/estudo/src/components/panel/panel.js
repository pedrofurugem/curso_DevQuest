import { Component } from 'react' 
import './panel.css'

class Panel extends Component {
    constructor(){
        super() //vem da classe component
        this.state = {
            title: 'titulo princial'
        }
    }

    render(){
        return(
            <section className="panel" onClick={ 
                () =>{ this.setState({title: 'titulo novo'})
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel

//setState muda o estado de um componente