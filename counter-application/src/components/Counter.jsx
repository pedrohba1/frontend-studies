//Mesmo não sendo usado, preciso importar React pois (linha 8)
import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses = () => {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { counter } = this.props;
    return counter.value === 0 ? "zero" : counter.value;
  };

  isDisabled = () => {
    const { counter } = this.props;
    return counter.value === 0 ? true : false;
  };

  render() {
    const { onIncrement, onDecrement, onDelete, onReset, counter } = this.props;
    return (
      <div className="row">
        <span
          style={styles.font}
          className={this.getBadgeClasses() + " col-sm m-2"}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            onIncrement(counter);
          }}
          className="btn btn-secondary btn-sm  col-sm m-2"
        >
          +
        </button>

        <button
          disabled={this.isDisabled()}
          onClick={() => {
            onDecrement(counter);
          }}
          className="btn btn-secondary btn-sm col-sm m-2"
        >
          -
        </button>

        <button
          onClick={() => {
            onDelete(counter.id);
          }}
          className="btn btn-danger btn-sm col-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => {
            onReset();
          }}
          className="btn btn-primary btn-sm col m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;

const styles = {
  font: {
    fontSize: 15,
    fontWeight: "bold"
  }
};
