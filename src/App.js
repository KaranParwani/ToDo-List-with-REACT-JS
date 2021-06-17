import React, { Component } from "react";
import "./App.css";

// const App = () => {
//     constructor(props) {
//       super(props);
//       this.state = {
//         userName: "Karan Parwani's",
//         todoItems: [
//           { action: "Buy Bread & Butter", done: false },
//           { action: "Go to Gym", done: false },
//           { action: "Go to shop", done: false },
//         ],
//         newTodo: "",
//       };
//     }
//   return (
//     <>
//       <div className="main_div">
//         <h2 className="text_sec">TO - DO LIST WITH REACT</h2>
//         <div className="center_div"></div>
//         <div className="center_div2"> </div>
//       </div>
//     </>
//   );
// };

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "KARAN'S",
      todoItems: [
        { action: "Buy Bread & Butter", done: false },
        { action: "Go to Gym", done: false },
        { action: "Go to shop", done: false },
      ],
      newTodo: "",
    };
  }

  updateValue = (event) => this.setState({ newTodo: event.target.value });

  checkDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((i) =>
        i.action === todo.action ? { ...i, done: !i.done } : i
      ),
    });

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  todoRows = () =>
    this.state.todoItems.map((i) => (
      <tr key={i.action}>
        <td>{i.action}</td>
        <td>
          <input
            type="checkbox"
            checked={i.done}
            onChange={() => this.checkDone(i)}
          />
        </td>
      </tr>
    ));

  render = () => (
    <div className="main_div">
      <h2 className="text_sec">
        {this.state.userName} TO - DO LIST WITH REACT
      </h2>
      <div className="center_div">
        <br />
        <input type="text" className="input" placeholder="ADD ITEMS" />
        <button className="button"> + </button>
        <br />
        <br />
        <ol>
          <li>Buy Apple</li>
          <li>Buy Apple</li>
          <li>Buy Apple</li>
          <li>Buy Apple</li>
        </ol>
      </div>
    </div>
  );
}
