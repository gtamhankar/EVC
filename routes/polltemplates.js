var express = require('express');
var router = express.Router();


/* add new poll template . */
router.get('/add/', function(req, res, next) {
	const {PollID,PollUserName,QNumber,QDescription,Option1,Option2,Option3, CreatedOn,Category} = req.query;
	const TemplateAddQuery = `INSERT INTO polltemplates 
		(PollID,PollUserName,QNumber,QDescription,Option1,Option2,Option3,CreatedOn,Category) 
		values
		(${PollID},${PollUserName},${QNumber},${QDescription},${Option1},${Option2},${Option3},${CreatedOn},${Category});`;

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
	console.log ("poll templates add method on server.");	
});


/* GET ONE poll templates by poll name. */
router.get('/getpoll', function(req, res, next) {
	const {PollID} = req.query;
    const TemplateGetQuery = `select * from pollTemplates where PollID = ${PollID} ;`;
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
	console.log ("Poll successfully fetched. ");
});



/* GET all poll templates. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from polltemplates', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
		console.log (results);
	});
});



module.exports = router;
