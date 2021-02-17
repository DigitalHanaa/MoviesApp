import React, { Component } from 'react'

export default class Fave extends Component {

    constructor(props) {
        super(props)
        // super is Component class
        this.state = {
            isFave: this.props.isFave,
        }
    }

    handleClick(e) {
        e.stopPropagation()
        this.props.onFaveToggle()

        console.log("handling Fave click!")
        console.log(this.props.isFave)
        // Delete the `setState` line. You no longer track state here
        // this.setState({isFave: !this.state.isFave})
    }

    render() {
        const isFaveClass = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${isFaveClass}`} onClick={(e) => this.handleClick(e)}>
                <p className="material-icons">{isFaveClass}</p>
            </div>
        )
    }
}
