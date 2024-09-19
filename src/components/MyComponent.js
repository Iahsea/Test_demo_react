import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hai", age: "20" },
      { id: 2, name: "Iahsea", age: "21" },
      { id: 3, name: "Nguyen Chinh Hai", age: "22" },
    ],
  };

  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
