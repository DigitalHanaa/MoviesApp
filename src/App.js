import React, { Component } from 'react'
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import allFilms from './TMDB';

export default class Film extends Component {
  render() {

    return (
      <div className="film-library">

        <FilmListing films={allFilms.films} />
        <FilmDetails films={allFilms.films} />
        
      </div>
    )
  }
}
