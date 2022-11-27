import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';
import "./components/NavBar/NavBar.css";

function App() {
  return (
    <body className="body">
      <header className="header" id="encabezado"><NavBar></NavBar>
      </header>
      <ItemListContainer />
    </body>
  );
}

export default App;
