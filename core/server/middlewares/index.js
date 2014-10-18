var middleware = require('./middleware'),
	when 	   = require('when'),
	url        = require('url'),
	path 	   = require('path'),
	hbs	       = require('express-hbs'),
	express    = require('express'),
    slashes    = require('connect-slashes'),

	expressServer,
	corePath,
	contentPath,
	isAdmin,

	ONE_HOUR_S  = 60 * 60,
    ONE_YEAR_S  = 365 * 24 * ONE_HOUR_S,
    ONE_HOUR_MS = ONE_HOUR_S * 1000,
    ONE_YEAR_MS = 365 * 24 * ONE_HOUR_MS;
	corePath = path.resolve(path.resolve(__dirname, '../../../'), 'core/');
	contentPath = path.resolve(path.resolve(__dirname, '../../../'), 'contents/');

function manageThemePath(req, res, next) {
	isAdmin = req.url.lastIndexOf('/admin/', 0) === 0;


	if(isAdmin) {
		expressServer.engine('hbs', hbs.express3()); 
		expressServer.set('views', path.join(corePath, 'server/views'));
		expressServer.set('view engine', 'hbs');
	} else {
		expressServer.engine('hbs', hbs.express3()); 
		expressServer.set('views', path.join(contentPath, 'theme/default'));
		expressServer.set('view engine', 'hbs');
	}

	next();
}

module.exports = function(server) {
	expressServer = server;
	expressServer.use(manageThemePath);
	expressServer.use('/assets', express.static(path.join(contentPath, 'theme/default/assets')));

	expressServer.use(slashes(true, {headers: {'Cache-Control': 'public, max-age=' + ONE_YEAR_S}}));
}

module.exports.middleware = middleware;