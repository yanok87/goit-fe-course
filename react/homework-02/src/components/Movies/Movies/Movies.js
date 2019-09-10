import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import movies from './movies.json';

const filterFilms = (items, input) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase()),
  );
};

class Movies extends Component {
  state = {
    input: '',
  };

  handleInputChangen = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;

    const filteredFilms = filterFilms(movies, input);

    // console.log('movies :', movies);

    // console.log('input :', input);

    // console.log('filteredFilms :', filteredFilms);

    return (
      <>
        <SearchBar
          onHandleInputChange={this.handleInputChangen}
          value={input}
        />
        <MovieGrid items={filteredFilms} />
      </>
    );
  }
}

export default Movies;
