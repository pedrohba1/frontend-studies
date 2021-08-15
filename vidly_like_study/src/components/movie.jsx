import React, { Component } from "react";
import Favorite from "./favorite";
class Movie extends Component {
  formatFav = () => {
    return this.props.movie.favorite ? (
      <i className="fa fa-heart" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-heart-o" aria-hidden="true"></i>
    );
  };

  render() {
    const { movie, onDelete, onFav } = this.props;
    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td> {movie.genre.name}</td>
        <td> {movie.numberInStock} </td>
        <td> {movie.dailyRentalRate} </td>
        <td>
          <Favorite onFav={onFav} movie={movie}></Favorite>

          <button onClick={() => onDelete(movie)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
