import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [stringa, setStringa] = useState("");

  useEffect(() => {
    fetch(window.env.BACKEND_URL)
      .then(res => res.json())
      .then(data => setStringa(data))
  }, []);


  return (
    <div className="App">
      {stringa}
    </div>
  );
}

export default App;
