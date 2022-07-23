// https://github.com/OptimalBits/redbird
// https://whatsmychaincert.com/?mydomain.com

const { constants } = require('crypto');

var redbird = new require('redbird')({ port: 8080, ssl: { port: 443 }});

redbird.register('mydomain.com', 'http://127.0.0.1:9443', {
	ssl: {
		port: 9443,
		key:  'ssl/mydomain/private.key',
		cert: 'ssl/mydomain/mydomain.com.chained.crt',
                secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1,
	}
});

redbird.register('www.mydomain.com', 'http://127.0.0.1:9443', {
	ssl: {
		port: 9443,
		key:  'ssl/mydomain/private.key',
		cert: 'ssl/mydomain/mydomain.com.chained.crt',
                secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1,
	}
});
