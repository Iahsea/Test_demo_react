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

  handleOnChangeInput(event) {
    console.log(event.target.value);

    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        My name is : {this.state.name}
        and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
