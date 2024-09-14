import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and retrieve data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter unmount");
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); // bind is used to assign values to this object
  //   }

  // handleIncrement = () => {
  //   // console.log("Increament clicked", this); // without constructor 'this' returns undefined
  //   // without constructor we can define a callback as above and Counter class is instantiated. 'this' has all the properties of Counter class
  //   // this.props.value = 0;
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log("Counter rendered");

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
    // while returning you need to have only one element that's why we wrap it with <div> tag
    // we already had <div> tag with root id in index.html and if we wrap with another div we get div inside div. to avoid that we use React.Fragment
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
