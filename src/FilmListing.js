import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            filter:'all',
        }
    }
    
    handleFilterClick(filterEvent){
        console.log("Setting filter to ", filterEvent)
        this.setState({
            filter: filterEvent
        })
    }

    render() {
        const { films, faves} = this.props;
      
        const allFilms = films.map((film) => <FilmRow key={film.id} film={film} isFave={faves.includes(film)} onFaveToggle={() => this.props.onFaveToggle(film)}  handleDetailsClick ={this.props.handleDetailsClick}/>)
        const favesFilms = faves.map((film) => <FilmRow key={film.id} film={film} isFave={faves.includes(film)} onFaveToggle={() => this.props.onFaveToggle(film)} handleDetailsClick ={this.props.handleDetailsClick}/>)
        let showFilms = (this.state.filter == 'all') ? allFilms : favesFilms;
        // const allFilms = this.props.films.map((film) => {
        //     return (
        //     <FilmRow
        //     film={film}
        //     key={film.id}
        //     onFaveToggle={() => this.props.onFaveToggle(film)}
        //     isFave={this.props.faves.includes(film)}
        //     />
        //   )
        //   })

        return (
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{(this.props.films.length - faves.length)}</span>
                </div>
                <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}  onClick={() => this.handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
        
            {showFilms}
            {console.log(showFilms)}
        </div>
           
        )
    }
}
