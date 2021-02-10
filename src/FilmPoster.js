import React, { Component } from 'react'

let posterPath = "https://image.tmdb.org/t/p/w780/";
export default class FilmPoster extends Component {
    render() {
        return (
            <img src={posterPath+this.props.posterURL} alt="" />
        )
    }
}
