import React, { Component } from 'react';
import { store } from '.';


class App extends Component {
  input: string;
  VisibleList: any[];
  getVisibilty: any;

  constructor(props: any) {
    super(props);
    this.input = "";
    this.VisibleList = store.getState().todos.filter(
      todo => this.getVisibilty(todo, store.getState().visibilityFilter)
    )

    this.getVisibilty = (todo: any, visibility: any) => {
      var obj: any = {
        "ALL": todo,
        "COMPLETED": todo.completed,
        "PENDING": !todo.completed
      }
      return obj[visibility]
    }
  }

  render() {
    return (<div>

      {/* Input Fields */}
      <input ref={node => { this.input = node?.value || "" }} />
      <button onClick={() => {
        store.dispatch({ type: 'ADD_TODO', task: this.input || "" });
        this.input = ""
      }} >Add</button>

      <br />

      {/* TodoList */}
      <div>
        {this.VisibleList}
      </div>


    </div>)
  }
}

export default App;