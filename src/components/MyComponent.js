import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hai",
    address: "Ha Tinh",
    age: 20,
  };

  handleClick(event) {
    console.log(">> Click me my button");
    console.log("My name is :", this.state.name);

    this.setState({
      name: "Nguyen Chinh Hai",
      age: Math.round(Math.random() * 100 + 1),
    });
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        My name is : {this.state.name}
        and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click
        </button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
