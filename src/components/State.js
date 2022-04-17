import React, { memo, useState } from "react";
import City from "./City";

const State = memo((props) => {
  const { state, handleChange } = props;
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="state-list" >
      <div className="state">
        <input
          type="checkbox"
          name={state.state}
          checked={
            state.city.filter((city) => city.isChecked !== true).length < 1
          }
          onChange={(e) => handleChange(e)}
        />
        <label onClick={handleClick} htmlFor="state">
          {state.state}
        </label>
      </div>
      {isClicked && (
        <ul>
          {/* {console.log(state.isChecked)} */}
          {state.city.map((city) => (
            <li key={city.id}>
              <City city={city} handleChange={handleChange} state={state} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default State;
