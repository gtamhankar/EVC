var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// user
// add a user or member 							http://localhost:3001/users/add?UserName=%27test%27&UserPassword=%27test%27&UserRole=%27test%27
// check if user so that can create poll ??			http://localhost:3001/users/getuser?UserName=%27test%27
// gets all users									http://localhost:3001/users

// polltemplate						
// add a new poll template							http://localhost:3001/polltemplates/add?PollID=1&PollUserName=%27Tim%27&QNumber=1&QDescription=%27how%20r%20u%20today%27&Option1=%27yes%27&Option2=%27No%27&Option3=%27XX%27&CreatedOn=%272019/01/01%27&Category=%27test%27
// if someone has a link then fetch a template		http://localhost:3001/polltemplates/getpoll?PollID=2
// show all poll tmeplates							http://localhost:3001/polltemplates/		

// pollresults
// fetch poll results - group by -		http://localhost:3001/pollresults/pollsummary?PollID=1
// insert into poll results -			http://localhost:3001/pollresults/add?PollID=1&PollUserName=%27test%27&OptionVoted=3&VoteDescription=%27xx%27&CreatedOn=%272019/01/01%27

// generic poll
// get all polls						http://localhost:3001/genericpoll