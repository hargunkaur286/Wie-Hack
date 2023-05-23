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
            <h1 className="text-center">Invoice Tracker</h1>
        </div>

        <div className="retool-box h-[800px]">
          <Retool url="https://wiehacks.retool.com/embedded/public/15debe03-3dfa-42ac-870c-9a3f893c8840" />
        </div>
      </div>
    );
  }
}

export default App;
