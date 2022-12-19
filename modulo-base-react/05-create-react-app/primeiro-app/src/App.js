//import logo from './logo.svg';
import './App.css';
import Button from './components/button/button.js'
//import Card from './components/card/card.js'
import Cards from './components/cards/cards.js'

function App() {
  return (
    <>
    <Cards />
    <Button />
   </>
  );
}//autoclose, retorna um elemento react
//()<></> para retornar mais de um elemento
export default App;

/*Propriedades Defafult de componentes
  <Button label='Baixar CV'/>
      
  <Button />
*/

/*
Prop Children

<Card>
    <>
      <card>
          <h3>Titulo card 1</h3>
          <p>Texto de um card 1</p>
      </Card>
      <Card>
        <h3>Titulo card 2</h3>
        <p>Texto de um card 2</p>
      </Card>
      <Card>
        <h3>Titulo card 3</h3>
        <p>Texto de um card 3</p>
      </Card>
    </>

*/

    
/*
function App() {
  return (
    <>
      <Card title='Titulo card 1'/>
      <Card title='Titulo card 2'/>
      <Card title='Titulo card 3'/>
    </>
  );
}
*/