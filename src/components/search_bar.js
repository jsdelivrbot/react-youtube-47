import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: null};
    }


    render(){
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    type="text"
                    placeholder="Search"
                    className=""
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }

    onInputChange(term){
        this.setState({
            term: event.target.value
        })
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;