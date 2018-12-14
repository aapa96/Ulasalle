'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave secreta';

exports.createToken = function(user){
	var payload = {
		sub: user.id,
		userName: user.userName,
		surname:user.surname,
		estatus:user.estatus,
		birth:user.birth,
		gender:user.gender,
		role_id:user.role_id,
		iat:moment().unix(),
		exp:moment().add(1,'days').unix
	};
	return jwt.encode(payload,secret);

};