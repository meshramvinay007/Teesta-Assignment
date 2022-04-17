import task from "../task.json";

const initalState = task[0];

const checkUncheckReducer = (state = initalState, action) => {
  if (action.type === "CITY") {
    // console.log(action.payload);
    const { id, name, checked } = action.payload;
    let updatedStateIndex = state.state.findIndex((state) => state.id === id);
    let updatedState = state.state[updatedStateIndex];
    if (updatedState) {
      let updatedCities = updatedState.city.map((city) =>
        city.name === name ? { ...city, isChecked: checked } : city
      );
      updatedState = { ...updatedState, city: updatedCities };
      let updatedStates = state.state.map((state) =>
        state.id === id ? updatedState : state
      );
      const newState = { ...state, state: updatedStates };
      return newState;
    }
    return state;
  }

  if (action.type === "STATE") {
    const { name, checked } = action.payload;
    // console.log(action.payload);
    let updatedStateIndex = state.state.findIndex(
      (state) => state.state === name
    );
    let updatedState = state.state[updatedStateIndex];
    // console.log(updatedState);
    if (updatedState) {
      let updatedCities = updatedState.city.map((city) => ({
        ...city,
        isChecked: checked,
      }));
    //   console.log(updatedCities);
      updatedState = { ...updatedState, city: updatedCities };
      let updatedStates = state.state.map((state) =>
        state.state === name ? updatedState : state
      );
      const newState = { ...state, state: updatedStates };
      return newState;
    }
  }

  if(action.type === "CLEAR"){
      return initalState;
  }

  return state;
};
export default checkUncheckReducer;
