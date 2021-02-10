import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
export default class FilmRow extends Component {
    render() {
        
        return (
            
            <div className="film-row">
                <FilmPoster posterURL={this.props.posterUrl}/>
                <div className="film-summary">
                    <h1>{this.props.title}</h1>
                    <p>{new Date(this.props.year).getFullYear()}</p>
                </div>
            </div>
        )
    }
}
