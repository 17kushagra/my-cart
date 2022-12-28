
import './App.css';
import Products from './components/Products/Products';
import Header from './components/Header/Header'
import Subheader from './components/Subheader/subheader';
function App() {
  return (
     <>
      {/* <Modal/> */}
    <div className="App">
      <Header/>
     <Subheader/>
     <Products/>
    </div>
     </>
  );
}

export default App;
