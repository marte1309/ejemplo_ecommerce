const URL_API 		= process.env.NODE_ENV === 'production' ? 'https://gimav.herokuapp.com' : 'http://localhost:8081';
const IMG_URL 		= process.env.NODE_ENV === 'production' ? 'https://gimav.herokuapp.com' : 'http://localhost:8081';
const SOCKET_URL 	= process.env.NODE_ENV === 'production' ? 'https://gimav.herokuapp.com' : 'http://localhost:8081';

module.exports = {
	URL_API,
	IMG_URL,
	SOCKET_URL
}