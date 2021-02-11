import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
    render() {
        const allFilms = this.props.films.map( (filmItem, index) => {
           return <FilmRow key={index} film={filmItem}/>
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
             </div>
           
        )
    }
}
