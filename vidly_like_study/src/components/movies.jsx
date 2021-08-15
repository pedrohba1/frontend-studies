import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  render() {
    const { allMovies, onDelete, onFav } = this.props;

    if (allMovies.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th> Title </th>
              <th> Genre </th>
              <th> Stock </th>
              <th> Rate </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allMovies.map(movie => (
              <Movie
                key={movie._id}
                movie={movie}
                onDelete={onDelete}
                onFav={onFav}
              ></Movie>
              /* <tr key={movie._id}>
                <td>{movie.title}</td>
                <td> {movie.genre.name}</td>
                <td> {movie.numberInStock} </td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr> */
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
