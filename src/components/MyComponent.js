import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hai", age: "16" },
//       { id: 2, name: "Iahsea", age: "21" },
//       { id: 3, name: "Nguyen Chinh Hai", age: "50" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // bad code :
//     // let listUserClone = [userObj, ...this.state.listUsers];
//     // this.setState({
//     //   listUsers: listUserClone,
//     // });

//     // good code
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     //C1:
//     // this.setState({
//     //   listUsers: [...this.state.listUsers.filter((item) => item.id !== userId)],
//     // });

//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   render() {
//     const test = { name: "Hai", age: "20" };
//     console.log(test);

//     return (
//       <>
//         <br />
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hai", age: "16" },
    { id: 2, name: "Iahsea", age: "21" },
    { id: 3, name: "Nguyen Chinh Hai", age: "50" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    // setListUsers([...listUsers.filter((item) => item.id !== userId)]);
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
  };

  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
