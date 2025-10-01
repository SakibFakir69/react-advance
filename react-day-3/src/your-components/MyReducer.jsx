import React, { useReducer } from "react";

function MyReducer() {
  // usereducer use to handle complex state in react

  const counterReducer = (state, action) => {
    console.log( {state}, action, " reducer ");


    switch(action.type)
    {
        case "inc":
            return {count:state.count+1 , id:1};
        
        default:
            return state;
    }

   
  };

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  console.log(state, " state ");

  return (
    <div>
      <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
    </div>
  );
}

export default MyReducer;
