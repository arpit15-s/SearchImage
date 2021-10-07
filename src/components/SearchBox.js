import React from 'react';

class SearchBox extends React.Component {
// onInputChange(event){
//     console.log(event.target.value);
// }

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><h1>Image Search</h1></label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})} 
                        />
                    </div>
                </form>
            </div >
        );
    }
}

export default SearchBox;