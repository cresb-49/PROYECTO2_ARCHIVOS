const handleJwt = require('../helpers/handleJwt');
const auth = async (req, res, next) => {
	try {
		//authorization: Bearer 1010101010101001010100 
		const accessToken = req.headers['authorization'];
		if (!accessToken) {
			res.status(409);
			res.send({ error: 'Acceso denegado' });
		}

		const token = req.headers.authorization.split(' ').pop()
		const result = await handleJwt.verify(token);
		if(result){
			console.log(result);
			next();
		}else{
			res.status(409);
			res.send({ error: 'Tu por aqui no pasas!'});
		}

	} catch (e) {
		console.log(e)
		res.status(409)
		res.send({ error: 'Tu por aqui no pasas!' })
	}
}

module.exports = {
	auth: auth
}