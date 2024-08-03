import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defining state variables in class component methods
      count: 2.3,
      count2: 23,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>About</h1>
        <h2>Name : {name}</h2>
        <h2>Place : {location}</h2>
        <h2>State Variable : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              //updating the state variables in class components
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Update State 1
        </button>
        <h2>State Variable : {count2}</h2>
      </div>
    );
  }
}

export default UserClass;
