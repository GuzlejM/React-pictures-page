import React from 'react';

class SearchBar extends React.Component {
    state = {term: '' }

    onFormSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            placeholder="Search" 
                            onChange={(e) => this.setState({ term: e.target.value })}
                            required
                        />
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;