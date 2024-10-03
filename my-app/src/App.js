import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  
  function onSubmit(event) {
    event.preventDefault();

    const tytul = event.target.elements.tytul.value;
    const rodzaj = event.target.elements.rodzaj.value;
    console.log(`tytul: ${tytul}, rodzaj: ${rodzaj}`);
  }

}

export default App;
