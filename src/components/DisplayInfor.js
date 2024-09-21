import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
import { click } from "@testing-library/user-event/dist/click";

// class DisplayInfor extends React.Component {
//   render() {
//     console.log(">>> call me render");

//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               // console.log(user);

//               return (
//                 <div
//                   key={user.id}
//                   className={+user.age > 18 ? "green_color" : "red_color"}
//                 >
//                   <div>
//                     <div>My name's: {user.name}</div>
//                     <div>My age's: {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> call me render");

  useEffect(() => {
    setTimeout(() => {
      document.title = "Iahsea";
    }, 3000);
    console.log(">>> call me user Effect");
  }, []);

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You have got delete all users");
    }
    console.log(">>> call me user Effect 1");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list user" : "Show list user"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            // console.log(user);

            return (
              <div
                key={user.id}
                className={+user.age > 18 ? "green_color" : "red_color"}
              >
                <div>
                  <div>My name's: {user.name}</div>
                  <div>My age's: {user.age}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
