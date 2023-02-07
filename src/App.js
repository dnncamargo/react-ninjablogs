import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
        <Navbar />
        <header className="App-header container">
            <Home />
        </header>
    </div>
  );
}

export default App;
