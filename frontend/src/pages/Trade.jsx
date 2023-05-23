import React from "react";
import Retool from "react-retool";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="justify-center font-bold my-5">
            <h1 className="text-center">Trading Dashboard</h1>
        </div>

        <div className="retool-box h-[1400px]">
          <Retool url="https://wiehacks.retool.com/embedded/public/7cebae50-d431-4830-b4f4-52ed7ca23436" />
        </div>
      </div>
    );
  }
}

export default App;
