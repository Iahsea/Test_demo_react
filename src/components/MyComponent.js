import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hai", age: "16" },
      { id: 2, name: "Iahsea", age: "21" },
      { id: 3, name: "Nguyen Chinh Hai", age: "50" },
    ],
  };

  handleAddNewUser = (userObj) => {
    // bad code :
    // let listUserClone = [userObj, ...this.state.listUsers];
    // this.setState({
    //   listUsers: listUserClone,
    // });

    // good code
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
