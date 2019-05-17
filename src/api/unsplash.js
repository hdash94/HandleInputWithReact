import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 
					'Client-ID edc4606eb66cd42efd1973835bb9890cda797a1935e9f4ee4ae66606a4b5c9cd'
			}
});