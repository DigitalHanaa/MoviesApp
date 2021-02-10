import React, { Component } from 'react'
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import allFilms from './TMDB';

//const movies = allFilms.films[0];
// const todoItems = allFilms.films.map((item, key) => (
//   // film-row comp.
//   <p key={key}>{item.title}
//   </p>

//   ))
export default class Film extends Component {
  render() {

    return (
      <div className="film-library">

            <FilmListing
              films={allFilms.films}
            />
   
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    )
  }
}
