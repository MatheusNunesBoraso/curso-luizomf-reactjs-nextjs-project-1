import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
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

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutUpdate);
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "teste - 1";
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
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
