import React, { Component } from 'react';

class Pagination extends Component {
    
    render() {
        return (
            <div className="nav">
                <button className="btn" onClick={() => this.props.prevPage()}>Prev</button>
                <div className="number-of-pages"> 
                    <span> {this.props.page} </span> of 13
                </div>
                <button className="btn" onClick={() => this.props.nextPage()}>Next</button>
            </div>
        )
    }
}

export default Pagination;