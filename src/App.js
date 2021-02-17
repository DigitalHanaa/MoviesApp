import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

export default class Film extends Component {

  constructor(props) {
    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }

  handleFaveToggle = (film) =>{

    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film)

    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title}`)
    } else {
      faves.push(film);
      console.log(`Adding ${film.title}`)
    }
    this.setState({ faves })

    console.log("handleFav Toggle called")
  }

  handleDetailsClick(film){
    this.setState({
      current:  film
    })
    console.log(`Fetching details for ${this.state.current.title}`)
    
}
  render() {

    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing 
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
          />
          <FilmDetails film={this.state.current}  />
        </div>
      </div>
    )
  }
}
