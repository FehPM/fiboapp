import './App.css';
import {useState} from "react";


function App() {
  const [input, setInput] = useState()
  const [result, setResult] = useState("Select a number")

  const isValidNumber = () => {
    if (isNaN(input)) {
      alert("Input a valid value => NUMBER")
      return false
    } else {
      if (input < 0) {
        alert("Input a valid value => POSITIVE NUMBER")
        return false
      }
      return true
    }
  }

  const fetchSum = async () => {
    if (!isValidNumber())
      return
    const res = await fetch("https://ikfibos.herokuapp.com/sum/" + input);
    const data = await res.json();
    setResult(data["Fibonacci_sum"]);
  }

  const fetchFibo = async () => {
    if (!isValidNumber())
      return
    const res = await fetch("https://ikfibos.herokuapp.com/fibonacci/" + input);
    const data = await res.json();
    setResult(data["Fibonacci"]);
  }


  return (
    <div className="box">
      <h1>Fibonacci calculator</h1>
      <input className="input" type={"number"} onChange={e => setInput(parseInt(e.target.value))}/>
      <div className="buttons">
        <div className="fetch-button" onClick={fetchFibo}>Fibonacci</div>
        <div className="fetch-button" onClick={fetchSum}>Sum Fibonacci</div>
      </div>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
