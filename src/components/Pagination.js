import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        const page = this.props.page;
        return (
            <div>
                <button >Prev</button>
                <div> 
                    {page} <span>of 13</span>
                </div>
                <button >Next</button>
            </div>
        )
    }
}

export default Pagination;