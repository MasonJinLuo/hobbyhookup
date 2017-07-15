insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('monkey@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, King, Kong, KingKong, New York, 50);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('cat@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Tom, Cat, TomCat, Chicago, 20);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('dog@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Ody, Mon, OdyMon, Madison, 10);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('bird@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Bird, Man, BirdMan, San Francisco, 30);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('racoon@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Sneaky, Racoon, SneakyRacoon, Detroit, 10);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('pig@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Porky, Pig, PorkyPig, Springfield, 25);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('chicken@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Fried, Chicken, FriedChicken, Popeyes, 5);
insert into User (email, password, image_path, first_name, last_name, username, location, age) values ('monster@gmail.com', '12345678', https://impactspace.com/images/uploads/person-default.png, Monster, Madness, MonsterMadness, Lake Geneva, 40);


insert into Hobby (name) values ('bee keeping'); 
insert into Hobby (name) values ('extreme knitting');
insert into Hobby (name) values ('mountain climbing');
insert into Hobby (name) values ('dog whispering');
insert into Hobby (name) values ('candy crusher');
insert into Hobby (name) values ('deep sea diving');
insert into Hobby (name) values ('monster hunting');
insert into Hobby (name) values ('bird watching');	

insert into User2Hobby (user_id, hobby_id) values (1, 1);
insert into User2Hobby (user_id, hobby_id) values (1, 2);
insert into User2Hobby (user_id, hobby_id) values (1, 3);


insert into User2Hobby (user_id, hobby_id) values (2, 4);
insert into User2Hobby (user_id, hobby_id) values (2, 5);
insert into User2Hobby (user_id, hobby_id) values (2, 6);


insert into User2Hobby (user_id, hobby_id) values (3, 1);
insert into User2Hobby (user_id, hobby_id) values (3, 4);
insert into User2Hobby (user_id, hobby_id) values (3, 7);


insert into User2Hobby (user_id, hobby_id) values (4, 2);
insert into User2Hobby (user_id, hobby_id) values (4, 3);
insert into User2Hobby (user_id, hobby_id) values (4, 6);


insert into User2Hobby (user_id, hobby_id) values (5, 3);
insert into User2Hobby (user_id, hobby_id) values (5, 6);
insert into User2Hobby (user_id, hobby_id) values (5, 7);


insert into User2Hobby (user_id, hobby_id) values (6, 1);
insert into User2Hobby (user_id, hobby_id) values (6, 5);
insert into User2Hobby (user_id, hobby_id) values (6, 8);


insert into User2Hobby (user_id, hobby_id) values (7, 5);
insert into User2Hobby (user_id, hobby_id) values (7, 6);
insert into User2Hobby (user_id, hobby_id) values (7, 7);


insert into User2Hobby (user_id, hobby_id) values (8, 3);
insert into User2Hobby (user_id, hobby_id) values (8, 5);
insert into User2Hobby (user_id, hobby_id) values (8, 8);



insert into Chat (sender, receiver, message) values ( 'TomCat', 'OdyMon', 'I Hate you Ody!');
insert into Chat (sender, receiver, message) values ( 'BirdMan', 'KingKong', 'What are you doing tonight?');
insert into Chat (sender, receiver, message) values ( 'KingKong', 'Birdman', 'Going dancing an drinking');
insert into Chat (sender, receiver, message) values ( 'OdyMon', 'TomCat', 'Why?!');
insert into Chat (sender, receiver, message) values ( 'TomCat', 'OdyMon', 'Because you missed my birthday Party');
insert into Chat (sender, receiver, message) values ( 'BirdMan', 'KingKong', 'Cool! I will be your wingman, get it!? because i am a bird!');