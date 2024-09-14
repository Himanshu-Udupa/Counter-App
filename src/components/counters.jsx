import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    console.log("Counters rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props; // this line fetches the values/properties specified in {} from this.props
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
