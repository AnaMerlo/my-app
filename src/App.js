import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = {'Bienvenido/a a la Libreria Peniel'}/>
    </>
  );
}

export default App;
