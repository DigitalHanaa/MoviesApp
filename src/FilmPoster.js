import React, { Component } from 'react'

let posterUrl = "https://image.tmdb.org/t/p/w780/";
export default class FilmPoster extends Component {
    render() {
        return (
            <img src={posterUrl+this.props.film.poster_path} alt="" />
        )
    }
}
