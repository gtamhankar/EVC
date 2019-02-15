var express = require('express');
var router = express.Router();

/* add new user. */
router.get('/add/', function(req, res, next) {
	const {UserName,UserPassword,UserRole} = req.query;
	const TemplateAddQuery = `INSERT INTO members 
		(UserName,UserPassword,UserRole) 
		values
		(${UserName},${UserPassword},${UserRole});`;

	console.log (TemplateAddQuery);
 	res.locals.connection.query(TemplateAddQuery, function (error, results, fields) {
	if(error) {
		throw error;
		response.setHeader("Content-Type", "text/html");
		res.send(error);		
	} 
	else {
		return res.json ({data: results});
	}
	//res.send(JSON.stringify(results));
	console.log (results);
	});
	console.log (" new user added.");	
});


/* fetch a user . */
router.get('/getuser', function(req, res, next) {
	const {UserName} = req.query;
    const TemplateGetQuery = `select * from members where UserName = ${UserName} ;`;
	console.log (TemplateGetQuery);
 
 	res.locals.connection.query(TemplateGetQuery, function (error, results, fields) {
		if(error) {
			throw error;
			response.setHeader("Content-Type", "text/html");
			res.send(error);		
		} 
		else {
			return res.json ({data: results});
		}
		//res.send(JSON.stringify(results));
		console.log (results);
	});
	console.log ("user successfully fetched. ");
});
/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from members', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
		console.log (results);
	});
});

module.exports = router;
