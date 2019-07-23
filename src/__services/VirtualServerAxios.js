import axios from 'axios'

const virtserver = axios.create({
	baseURL:'https://virtserver.swaggerhub.com/',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});


export default virtserver