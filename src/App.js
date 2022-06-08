import ListPokemons from "./components/ListPokemons";
import Drawer from './components/template/drawer/index'
import './App.css'

function App() {
  return (
    <div className="home">
      <Drawer />
      <ListPokemons />
    </div>
  );
}

export default App;