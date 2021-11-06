import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import { initializeApp } from 'firebase/app';
import firebaseconfig from "./firebaseconfig"

const firebaseapp = initializeApp(firebaseconfig)

function App() {
  return (
    <div className="App">
      <SearchBar firebaseapp = {firebaseapp} />
    </div>
  );
}

export default App;
