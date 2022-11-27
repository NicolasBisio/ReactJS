import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';
import "./components/NavBar/NavBar.css";
import "./components/CartWidget/CartWidget.css";

function App() {
  return (
    <fragment className="body">
      <header className="header" id="encabezado"><NavBar></NavBar>
      </header>
      <ItemListContainer />
    </fragment>
  );
}

export default App;
