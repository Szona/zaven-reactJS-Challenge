import React, { Component } from 'react';

class Pagination extends Component {
    
    render() {
        return (
            <div>
                <button onClick={() => this.props.prevPage()}>Prev</button>
                <div> 
                    <span> {this.props.page} </span> of 13
                </div>
                <button onClick={() => this.props.nextPage()}>Next</button>
            </div>
        )
    }
}

export default Pagination;