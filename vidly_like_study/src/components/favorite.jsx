import React, { Component } from "react";

class Favorite extends Component {
  formatFav = () => {
    return this.props.movie.favorite ? (
      <i className="fa fa-heart" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-heart-o" aria-hidden="true"></i>
    );
  };

  render() {
    const { onFav, movie } = this.props;
    return (
      <span
        style={{ cursor: "pointer" }}
        className="m-4"
        onClick={() => onFav(movie)}
      >
        {this.formatFav()}
      </span>
    );
  }
}

export default Favorite;
