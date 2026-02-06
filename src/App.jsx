// import CounterEffect from "./components/CounterEffect";
// import HiddenSearchBar from "./components/HiddenSearchBar";
// import Testimonials from "./components/Testimonials";
// import Togglebackgroundcolor from "./components/Togglebackgroundcolor";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";
// import Meals from "./components/Meals";
// import Calculator from "./components/Calculator";
// import { accordionData } from "./utils/content";
// import Accordion from "./components/Accordion";
// import Form from "./components/Form";
// import Form_useReducer from "./components/Form_useReducer";

import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import React, { createContext } from "react";
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "ssa";
  const age = 22;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
      {/* <CounterEffect /> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <Togglebackgroundcolor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      {/* <Form_useReducer /> */}
    </div>
  );
};

export default App;
