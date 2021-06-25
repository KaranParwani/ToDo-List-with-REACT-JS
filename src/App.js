import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import List from "./listItem";
// import reactDom from "react-dom";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [itemslist, setItemslist] = useState([]);

  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const items = () => {
    setItemslist((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <h2 className="text_sec">TO - DO LIST WITH REACT JS</h2>
        <div className="center_div">
          <input
            type="text"
            placeholder="ADD ITEMS"
            className="input"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="button" onClick={items}>
            {" "}
            +{" "}
          </button>
          <br />
          
          <br />
          <ol>
            {itemslist.map((itemValue) => {
              // return <li> {itemValue}</li>;
              return <List text={itemValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
