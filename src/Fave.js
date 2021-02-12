import React, { Component } from 'react'

export default class Fave extends Component {

    constructor(props) {
        super(props)
        // super is Component class
        this.state = {
            isFave: false,
        }
    }

    handleClick(e){
        /* The stopPropagation() method prevents propagation of the same event from being called.
         Propagation means bubbling up to parent elements or capturing down to child elements.
        */
        
        this.setState({
            // !this.state.isFave = which !falue = true
            isFave: !this.state.isFave,
        })
        console.log("handling Fave click!", this.state.isFave);
        e.stopPropagation();
        
    }

    render() {
        const isFaveClass = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${isFaveClass}`} onClick={(e) => this.handleClick(e)}>
                <p className="material-icons">{isFaveClass}</p>
            </div>
        )
    }
}
