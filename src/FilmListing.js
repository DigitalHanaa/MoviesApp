import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map( (film, index) => 
            // <h1 key={film.id}>{film.title}</h1>
            <FilmRow 
            key={film.id} 
            title={film.title} 
            posterUrl={film.poster_path}
            year={film.release_date}
            />
        )

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
             </div>
           
        )
    }
}
