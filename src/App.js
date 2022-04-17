import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import State from "./components/State";

function App() {
  const country = useSelector((state) => state);
  const [isClicked,setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e, id) => {
    const { name, checked } = e.target;
    if (id) {
      dispatch({ type: "CITY", payload: { id, name, checked } });
    } else {
      dispatch({ type: "STATE", payload: { name, checked } });
    }
  };

  const handleSubmit = (e) => {
e.preventDefault();
console.log(country);
dispatch({type:"CLEAR"});
setIsClicked(false)
  }

  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="App">
      <div key={country.id}>
        <h4 onClick={handleClick}>{country.country.toUpperCase()}</h4>
        {isClicked && <ul>
          {country.state.map((state) => (
            <li key={state.id}>
              <State state={state} handleChange={handleChange} />
            </li>
          ))}
        </ul>}
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
