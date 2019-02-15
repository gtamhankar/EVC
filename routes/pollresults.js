var express = require('express');
var router = express.Router();


/* add new poll result . */
router.get('/add/', function(req, res, next) {
	const {PollID, PollUserName, OptionVoted,	VoteDescription, CreatedOn} = req.query;
	const TemplateAddQuery = `INSERT INTO pollresults  
		(PollID, PollUserName, OptionVoted,	VoteDescription, CreatedOn) 
		values
		(${PollID},${PollUserName},${OptionVoted},${VoteDescription},${CreatedOn});`;

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


/* GET  poll results summary  */
router.get('/pollsummary', function(req, res, next) {
	const {PollID} = req.query;
    const TemplateGetQuery = `select PollID, OptionVoted, Count(optionVoted) , VoteDescription from pollresults 
          where PollID = ${PollID} group by optionvoted ;`;
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

/* GET all poll results. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from pollresults', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
		console.log (results);
	});
});

module.exports = router;
