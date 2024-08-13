import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Noob",
        location: "NoobCountry",
      },
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/aditya-narayan-sahoo")
      .then((data) => data.json())
      .then((response) => {
        this.setState({
          userInfo: response,
        });
        //console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  /*
    above promise chaining can be done using async await too like the below one
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/aditya-narayan-sahoo"
    );
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
    console.log(response);
  }
    */

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>About</h1>
        <img src={avatar_url} alt="Profile Picture" />
        <h2>Name : {name}</h2>
        <h2>Place : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
