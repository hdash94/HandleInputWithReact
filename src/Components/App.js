import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Imagelist from './imagelist';

class App extends React.Component {
	state = {images: []};
	//alternatively to the below comments on promise chain
	//we can use async await in axios 
	//add keywords
	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }			
			// moved to unsplash api folder
			// headers: {
			// 	Authorization: 
			// 		'Client-ID edc4606eb66cd42efd1973835bb9890cda797a1935e9f4ee4ae66606a4b5c9cd'
			// }
			//the semicolon can be removed and then a .then promise is called
		// }).then(response => {
		// 	console.log(response.data.results);
		});
		//console.log(response.data.results);
		this.setState({images: response.data.results});
		//the above method shows an error when not bound by arrow function
	};
	render() {
		return ( 
			<div className = "ui container" style = {{marginTop: '10px'}}>
				<SearchBar onSubmit = {this.onSearchSubmit} />
				<Imagelist images = {this.state.images} />
			</div>
		);
	}
}

export default App;