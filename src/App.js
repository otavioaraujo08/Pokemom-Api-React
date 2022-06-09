import ListPokemons from "./components/ListPokemons";
import Home from "./components/template/home";
import Drawer from './components/template/drawer/index'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Home />
      </header>

      <div className="home">
        <Drawer />
        <ListPokemons />
      </div>
    
    </>
  );
}

export default App;