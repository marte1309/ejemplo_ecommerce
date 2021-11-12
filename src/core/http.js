import Superagent from 'superagent';
import { URL_API } from './urls';

class Request {
	async get(method, data) {

		const token = localStorage.getItem('user');

		const response = await Superagent
			.get(`${URL_API}${method}`)
			.set("Authorization", token)
			.query(data)
			.then(value => {
				return value.body;
			})
			.catch(err => {
				console.log(err);
				return { error: true, message: err.message };
			});

		return response;
	}

	async post(method, data, files) {

		const token = localStorage.getItem('user');

		if (!files) {
			const response = await Superagent
				.post(`${URL_API}${method}`)
				.set("Authorization", token)
				.send(data)
				.then(value => {
					if (value.body) {
						return value.body;
					} else {
						return { error: true, message: 'Sin respuesta del servidor.' }
					}
				})
				.catch(err => {
					console.log(err);
					return { error: true, message: err.message };
				});

			return response;
		} else {
			const response = await new Promise((res) => {
				const postRequest = Superagent.post(`${URL_API}${method}`)
			
				for(let key in files) {
					let file = files[key];
					postRequest.attach(file.name, file.file);
				}

				if (data) {
					const keys = Object.keys(data);
					keys.forEach((key) => {
						if (data[key] !== undefined && data[key] !== null) {
							if(Array.isArray(data[key])) {
								if(data[key].length == 1) {
									data[key].push('');
								}
							}
							postRequest.field(key, data[key]);
						}
					});
				}

				postRequest.then((value) => {
					if (value.body) {
						res(value.body);
					} else {
						res({ error: true, message: 'Sin respuesta del servidor.' });
					}
				}).catch((error) => {
					res({ error: true, message: error.message });
				});
			});

			return response;
		}		
	}

	async put(method, data) {

		const token = localStorage.getItem('user');

		const response = await Superagent
			.put(`${URL_API}${method}`)
			.set("Authorization", token)
			.send(data)
			.then(value => {
				if (value.body) {
					return value.body;
				} else {
					return { error: true, message: 'Sin respuesta del servidor.' }
				}
			})
			.catch(err => {
				console.log(err);
				return { error: true, message: err.message };
			});

		return response;
	}
}

const request = new Request();

export default request;