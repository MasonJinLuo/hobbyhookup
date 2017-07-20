insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('monkey@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'King', 'Kong', 'KingKong', 'New York', 50);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('cat@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Tom', 'Cat', 'TomCat', 'Chicago', 20);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('dog@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Ody', 'Mon', 'OdyMon', 'Madison', 10);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('bird@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Bird', 'Man', 'BirdMan', 'San Francisco', 30);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('racoon@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Sneaky', 'Racoon', 'SneakyRacoon', 'Detroit', 10);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('pig@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Porky', 'Pig', 'PorkyPig', 'Springfield', 25);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('chicken@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Fried', 'Chicken', 'FriedChicken', 'Popeyes', 5);
insert into Users (email, password, image_path, first_name, last_name, username, location, age) values ('monster@gmail.com', '12345678', 'https://impactspace.com/images/uploads/person-default.png', 'Monster','Madness', 'MonsterMadness', 'Lake Geneva', 40);


insert into Hobbies (name) values ('bee keeping'); 
insert into Hobbies (name) values ('extreme knitting');
insert into Hobbies (name) values ('mountain climbing');
insert into Hobbies (name) values ('dog whispering');
insert into Hobbies (name) values ('candy crusher');
insert into Hobbies (name) values ('deep sea diving');
insert into Hobbies (name) values ('monster hunting');
insert into Hobbies (name) values ('bird watching');	

insert into User2Hobbies (user_id, hobby_id, level) values (1, 1, 'Novice');
insert into User2Hobbies (user_id, hobby_id, level) values (1, 2, 'Novice');
insert into User2Hobbies (user_id, hobby_id, level) values (1, 3, 'Novice');


insert into User2Hobbies (user_id, hobby_id, level) values (2, 4, 'Intermediate');
insert into User2Hobbies (user_id, hobby_id, level) values (2, 5, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (2, 6, 'Intermediate');


insert into User2Hobbies (user_id, hobby_id, level) values (3, 1, 'Intermediate');
insert into User2Hobbies (user_id, hobby_id, level) values (3, 4, 'Intermediate');
insert into User2Hobbies (user_id, hobby_id, level) values (3, 7, 'Intermediate');


insert into User2Hobbies (user_id, hobby_id, level) values (4, 2, 'Novice');
insert into User2Hobbies (user_id, hobby_id, level) values (4, 3, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (4, 6, 'Intermediate');


insert into User2Hobbies (user_id, hobby_id, level) values (5, 3, 'Intermediate');
insert into User2Hobbies (user_id, hobby_id, level) values (5, 6, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (5, 7, 'Novice');


insert into User2Hobbies (user_id, hobby_id, level) values (6, 1, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (6, 5, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (6, 8, 'Novice');


insert into User2Hobbies (user_id, hobby_id, level) values (7, 5, 'Novice');
insert into User2Hobbies (user_id, hobby_id, level) values (7, 6, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (7, 7, 'Intermediate');


insert into User2Hobbies (user_id, hobby_id, level) values (8, 3, 'Expert');
insert into User2Hobbies (user_id, hobby_id, level) values (8, 5, 'Intermediate');
insert into User2Hobbies (user_id, hobby_id, level) values (8, 8, 'Expert');



insert into Chats (sender, receiver, message) values ( 'TomCat', 'OdyMon', 'I Hate you Ody!');
insert into Chats (sender, receiver, message) values ( 'BirdMan', 'KingKong', 'What are you doing tonight?');
insert into Chats (sender, receiver, message) values ( 'KingKong', 'Birdman', 'Going dancing an drinking');
insert into Chats (sender, receiver, message) values ( 'OdyMon', 'TomCat', 'Why?!');
insert into Chats (sender, receiver, message) values ( 'TomCat', 'OdyMon', 'Because you missed my birthday Party');
insert into Chats (sender, receiver, message) values ( 'BirdMan', 'KingKong', 'Cool! I will be your wingman, get it!? because i am a bird!');