import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "title 1",
        body: "corpo 1",
      },
      {
        id: 2,
        title: "title 2",
        body: "corpo 2",
      },
      {
        id: 3,
        title: "title 3",
        body: "corpo 3",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map((e, index) => {
          return (
            <div key={index}>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
