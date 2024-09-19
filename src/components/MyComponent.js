import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myInnfor = ["ab", "abc", "a"];
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor name="Nguyen Chinh Hai" age="21" />
        <hr />
        <DisplayInfor name="Hai dep trai" age={20} myInnfor={myInnfor} />
      </div>
    );
  }
}

export default MyComponent;
