import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
import MovieCounter from "./components/movieCounter";

class App extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleFav = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].favorite = true;
    this.setState({ movies });
  };

  render() {
    return (
      <main className="container">
        <MovieCounter allMovies={this.state.movies}></MovieCounter>
        <Movies
          allMovies={this.state.movies}
          onDelete={this.handleDelete}
          onFav={this.handleFav}
        ></Movies>
      </main>
    );
  }
}
export default App;
