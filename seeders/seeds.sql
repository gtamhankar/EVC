-- to test local server to add new Polltemplate
-- http://localhost:3001/polltemplates/add?PollID=13&PollName=%27new%20field%27&PollUserName=%27Tim%27&QNumber=1&QDescription=%27do%20you%20feel%20overwhelmed?%27&Option1=%27yes%27&Option2=%27No%27&Option3=%27XX%27&CreatedOn=%272019/01/01%27&Category=%27test%27

-- to test local server to add new poll results
http://localhost:3001/pollresults/add?PollID=1&PollUserName=%27test%27&OptionVoted=3&VoteDescription=%27xx%27&CreatedOn=%272019/01/01%27

/*
	// for testing
	//const {PollID,PollUserName,QNumber,Category} = req.query
	//const TemplateAddQuery = `INSERT INTO polltemplates (PollID,PollUserName,QNumber,QDescription,Option1,Option2,Option3,
	//CreatedOn,Category) 
	//values(${PollID},${PollUserName},${QNumber},'How do you feel today ? ','happy','stressed','a',
	//'2019-01-31 05:00:00','Generic');`
 
// VALUES ('242','polltesting','1','How do you feel today ? ','happy','stressed','a',
// '2019-01-31 05:00:00','General');`
 


http://localhost:3001/polltemplates/add?PollID=420&PollUserName=gouri&QNumber=1&QDescription='how to train your dragon'&Option1=yes&Option2=no&Option3=why&CreatedOn=2019/01/01&Category=general
add?PollID=111&PollUserName=%27Tim%27&QNumber=1&QDescription=%27do%20you%20feel%20overwhelmed%20ggggggggggggg?%27&Option1=%27yes%27&Option2=%27No%27&Option3=%27XX%27&CreatedOn=%272019/01/01%27&Category=%27nonogeneralllll%27
*/

use everyvotecounts;

 INSERT INTO `polltemplates` (`PollID`,`PollUserName`,`QNumber`,`QDescription`,`Option1`,`Option2`,`Option3`,
 `CreatedOn`,`Category`) 
 VALUES ('1','polltesting','1','What cuisine for today lunch ? ','Mexican','Indian','Thai',
 '2019-01-31 05:00:00','General');
 
 
INSERT INTO `everyvotecounts`.`members` ( `PollUserName`,`PollUserPassword`,`PollUserRole`) VALUES ('GT', 'test','admin' );

INSERT INTO `everyvotecounts`.`genericpoll`
(
`PollID`,
`PollQuestion`,
`Option1Desc`,
`Option1Count`,
`Option2Desc`,
`Option2Count`,
`Option3Desc`,
`Option4Count`)
VALUES
(
1,
'Would you rather people call you, email you or write you?',
'Call',
30,
'Email',
60,
'Write',
5);

INSERT INTO `everyvotecounts`.`genericpoll`
(
`PollID`,
`PollQuestion`,
`Option1Desc`,
`Option1Count`,
`Option2Desc`,
`Option2Count`,
`Option3Desc`,
`Option4Count`)
VALUES
(
2,
'Which you you prefer?',
'More cereal than milk',
73,
'More milk than cereal',
20,
' I don''t care', 6
);