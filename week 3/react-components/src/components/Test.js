import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>{" "}
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>{" "}
        </h2>
      </div>
    );
  }
}

export default Test;
