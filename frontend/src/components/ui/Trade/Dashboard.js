import React from "react";
import Retool from "react-retool";
import "./Dash.css";
class Dashboard extends React.Component {
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
        <div className="parent-react-app-container">
          <h1>I am a react app</h1>
          <h2>
            Value Retool will read on load:{" "}
            <span id="id-value-retool-reads">hello</span>
          </h2>
          <div>
            <h2>
              <span id="other-id-value-retool-reads">{this.state.value}</span>
            </h2>
            <button onClick={this.buttonClicked}>
              Increment Dynamic Value
            </button>
          </div>
        </div>

        <div className="retool-box">
          <Retool className="heighdash" url="https://wiehacks.retool.com/embedded/public/7cebae50-d431-4830-b4f4-52ed7ca23436" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
