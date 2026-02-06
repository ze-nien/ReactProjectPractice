import React from "react";
import { Data, Data1 } from "../App";
import { useContext } from "react";

const ComponentC = () => {
  const userName = useContext(Data);
  return (
    <h1>{userName}</h1>

    /* <Data.Consumer>
       {(name) => {
         // return <h1>{name}</h1>;
         return (
           <Data1.Consumer>
             {(age) => {
               return (
                 <h1>
                   {name} {age}
                 </h1>
               );
             }}
           </Data1.Consumer>
         );
       }}
     </Data.Consumer>*/
  );
};

export default ComponentC;
