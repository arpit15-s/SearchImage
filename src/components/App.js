// import axios from 'axios';
import React from 'react';
import unsplash from '../api/unsplash'
import SearchBox from './SearchBox';
import ImageList from './ImageList'

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            // headers: {
            //     Authorization:
            //         'Client-ID VEtKBrdhNG1PxQv_QGPdICfFnSeLY5U7OlYdgZF09_0'
            // }
        });
        // .then( response => {
        //     console.log(response.data.results);
        // });

        // console.log(response.data.results);
        this.setState({images: response.data.results});
    };
    

    render() {
        return (
            <div className="ui component">
                <SearchBox onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
    
}

export default App;