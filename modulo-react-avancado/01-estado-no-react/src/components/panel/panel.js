import { Component } from 'react' 
import './panel.css'

class Panel extends Component {
    constructor(){
        super()
        this.state = {
            title: 'titulo do painel'
        }
    }

    render(){
        return(
            <section className="panel" onClick={() => this.setState({title: 'titulo novo'})}>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel