import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> call constructor");

    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "Iahsea";
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snap) {
    console.log(">>> call me component did update", this.props, prevProps);
    if (this.props.listUsers != prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log(">>> call me render");

    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
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
                        this.props.handleDeleteUser(user.id);
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
  }
}

export default DisplayInfor;
