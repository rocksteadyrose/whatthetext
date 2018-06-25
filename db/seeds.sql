INSERT INTO user_tbl (`username`, `password`) VALUES
	('tmlstevens','letmein' ),
	('mjohnson','password123'),
	('lrose', 'mylamepassword');

INSERT INTO `text_tbl` (`image`,`caption`,`userId`) VALUES
	('myblob','bla bla bla',1),
	('marcusblob','bla bla bla',2),
	('leslieblob','bla bla bla',3);

INSERT INTO `comment_tbl` (`comment`,`textId`,`userId`) VALUES
	("Lorem ipsum dolor amet master cleanse sartorial, taiyaki marfa roof party gastropub venmo cornhole microdosing kombucha heirloom.",1,1),
	("Helvetica pop-up bitters, iceland flexitarian hammock lumbersexual artisan taiyaki. Cornhole typewriter crucifix PBR&Bb",1,2),
	("Affogato tacos sustainable, twee fixie tousled DIY flannel umami chartreuse you probably haven't heard of them man bun authentic.",1,3),
	("Schlitz seitan small batch jianbing plaid vexillologist cornhole hashtag pabst normcore cold-pressed ethical art party farm-to-table.",2,1),
	("Selvage affogato cloud bread tattooed, typewriter green juice iceland ramps la croix polaroid post-ironic quinoa.",2,2),
	("Knausgaard cray vaporware, etsy messenger bag paleo +1 sriracha bitterst",2,3);

INSERT INTO `reaction_tbl` (`like`,`userId`,`textId`) VALUES
	(1,1,1), (1,1,2), (1,2,3), (2,2,3);

INSERT INTO `comment_tbl` (`comment`,`textId`,`userId`) VALUES
	("Lorem ipsum dolor amet master cleanse sartorial, taiyaki marfa roof party gastropub venmo cornhole microdosing kombucha heirloom.",39,20),
	("Helvetica pop-up bitters, iceland flexitarian hammock lumbersexual artisan taiyaki. Cornhole typewriter crucifix PBR&Bb.",39,1),
	("Affogato tacos sustainable, twee fixie tousled DIY flannel umami chartreuse you probably haven't heard of them man bun authentic.",39,25),
	("Selvage affogato cloud bread tattooed, typewriter green juice iceland ramps la croix polaroid post-ironic quinoa.",39,20);