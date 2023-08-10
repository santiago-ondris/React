import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Pronto habrá un e-commerce" />
    </div>
  );
};

export default App
