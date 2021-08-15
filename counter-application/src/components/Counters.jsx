import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    var { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;
    return (
      <div className="container w-50 m-2" style={styles.align}>
        {counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            onDelete={onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

const styles = {
  align: {
    display: "vertical"
  }
};
