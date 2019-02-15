-- DROP DATABASE IF EXISTS EveryVoteCounts;
-- Create database EveryVoteCounts;

use EveryVoteCounts;

CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(24) NOT NULL,
  `UserPassword` varchar(24) DEFAULT NULL,
  `UserRole` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;


CREATE TABLE PollTemplates (
	ID int NOT NULL AUTO_INCREMENT,
    PollID  int NOT NULL,
    PollUserName varchar(24) NOT NULL,
	QNumber int NOT NULL,
	QDescription  varchar(500) NOT NULL,
    Option1 varchar(500) NULL,
    Option2 varchar(500) NULL,
    Option3 varchar(500) NULL,
    CreatedOn datetime NULL,
    Category varchar(25) NULL,
    PRIMARY KEY (ID)
);


CREATE TABLE PollResults (
	ID int NOT NULL AUTO_INCREMENT,
    PollID int NOT NULL ,
    PollUserName varchar(24)  NULL,
	OptionVoted int  NULL,
	VoteDescription  varchar(500)  NULL,  
    CreatedOn datetime NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE genericpoll (
	ID int NOT NULL AUTO_INCREMENT,
    PollID int NOT NULL ,
    PollQuestion varchar(500)  NULL,
	Option1Desc varchar(100)  NULL,
	Option1Count  int  NULL,  
	Option2Desc varchar(100)  NULL,
	Option2Count  int  NULL,  
	Option3Desc varchar(100)  NULL,
	Option4Count  int  NULL,      
    PRIMARY KEY (ID)
);

-- query to get poll results. pass poll id.
select PollID, OptionVoted, Count(optionVoted) , VoteDescription
from pollresults 
where pollid = 1
group by optionvoted