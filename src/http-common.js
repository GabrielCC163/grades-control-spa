import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? 'https://igti-grades-control-api.herokuapp.com'
			: 'http://localhost:8081',
	headers: {
		'Content-type': 'application/json'
	}
});
