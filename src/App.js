import logo from './logo.svg';
import './App.css';
import 'stencil-accordion-mekairaw';

function App() {
  const array = [
    {
      label: 'Accordion 1',
      description: 'Lorem ipsum',
      color: '#439ECA',
      width: '60%'
    },
    {
      label: 'Accordion 2',
      description: 'Lorem ipsum',
      color: '#7EC74A',
      width: '300px'
    },
    {
      label: 'Accordion 3',
      description: 'Lorem ipsum',
      color: '#F8CD41',
      width: '700px'
    }
  ]
  return (
    <div className="App">
      {
        array.map((array) => {
          return (
            <my-accordion 
            label={array.label}
            description={array.description}
            color={array.color}
            width={array.width}>
            </my-accordion>
          )})
      }
    </div>
  );
}

export default App;
