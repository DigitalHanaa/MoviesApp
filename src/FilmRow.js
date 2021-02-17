import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {

    

    render() {
        
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <FilmPoster film={this.props.film}/>
                <div className="film-summary">
                    <Fave 
                    onFaveToggle={this.props.onFaveToggle}
                    isFave={this.props.isFave}
                    />
                    <h1>{this.props.film.title}</h1>
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
            </div>
        )
    }
}
