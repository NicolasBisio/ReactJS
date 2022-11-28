import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';
import "./components/NavBar/NavBar.css";
import "./components/CartWidget/CartWidget.css";

function App() {
  return (
    <div className="body">
      <header className="header" id="encabezado"><NavBar></NavBar>
      </header>
      <ItemListContainer greeting="¡Bienvenidos todos los amantes del tejido a crochet!"/>
    </div>
  );
}

export default App;
