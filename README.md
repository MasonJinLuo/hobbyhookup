# HobbyHookup 

## Description

HobbyHookup is a social application that focuses on connecting individuals through a variety of 'niche' hobbies.  While finding a friend or coworker who enjoys similar sports, movies, books, or other mainstream activities may be an easy task, it can be more difficult to find individuals who share uncommon interests such as beekeeping, rock climbing, salsa dancing or parkour.  Our app helps people forge connections and form a community based on any number of eclectic interests, and find exciting new activities to try!  

### Core Features

HobbyHookup provides users with the means to explore a variety of hobbies, then indicate their interest in a hobby of their choosing along with their basic level of experience (noobie, experienced, or guru). This user can then click a 'Match Me!' button to randomly match with three users who are also interested in this hobby - one of each of the three experience levels.  A user can review the basic details shared in this matching screen, then choose a member to connect with - or 'reroll' to get a new set of matches.  

Connecting with an individual brings the user to a message screen, where they can send messages back and forth to share information and anecdotes about their shared hobby and get to know each other.  All incoming messages are also stored in a user's inbox, from which they can click on a user to bring up the full conversation (incoming and outgoing messages with that specific user.)
	
### Current Scope and Future Development

The Hobby Hookup app provides foundational functionality as a social web application using a full SQL-Express-React-Node stack.  This includes all features necessary for the typical user experience;  An individual who visits our site can sign up, log in, update their profile, explore a number of hobby pages, indicate which hobbies they are interested in, match with other individuals who share these hobbies, then message back and forth with these connections.

In future builds we would like to expand this proof of concept with a variety of features to provide users with the best possible means to form connections, as well as make Hobby Hookup the fun and friendly experience we want it to be.

Currently, our matching system is somewhat limited in scope and functionality - we randomly search the entire database of users for a match at each level of experience, then display their avatar, age, and location. In the future, we would like to provide users with a means of improving the quality of their matches by enabling match-filters based on profile details (especially location), as well as which levels of experience they would prefer to be matched to (ie, a noobie may wish to only be shown as a match to other noobies, while a guru may not want to be shown as a match to any noobies).  In addition, each user will be able to share a brief description on the 'match' screen about their involvement with the hobby and indicate what kind of connections they hope to make - some may only want to find a peer to share info with online, while others want to find new friends to participate in their hobby in 'real life'.  The matching system will also be animated and stylized to make finding connections fun and visually stimulating to help encourage users to keep matching with others.

A second potential major improvement to Hobby Hookup is the incorporation of a location-based system for matching with other users as well as determining content within the main page for each hobby.  This would allow users to search only for hobbyists in their geographic area, and even enable users to easily form both online and offline communities for any given hobby in their area.  For example, a user located in Chicago who visits the Kayaking hobby page could see a list of upcoming user-organized events for kayaking in the Chicago-area, and/or links to relevant websites such as the Chicago Kayaking Facebook group.

## Technologies Used

### Database Management
* mySQL

### Deployment
* Heroku
* JawsDB MySQL
* sequelize-fixtures

### NPM Packages
* bcrypt
* body-parser
* jsonwebtoken
* express-session
* passport
* sequelize
* session-store
* react-router 

### Languages and Libraries
* CSS
* HTML
* Bootstrap
* Express
* React
* Javascript
* jQuery

## Getting Started and Prerequisites

Clone or download the repository to your desktop.

Users will need Google Chrome web browser for testing the application and Sublime (or another tool) for viewing/editing the code.  Users will also need to install the npm packages (provided in the package.json and listed above under "Technologies Used") via the terminal and use MySQL Workbench in order to establish a database.

## Testing

After downloading or cloning the repository to your desktop, create a database in MySQL Workbench entitled "hobbyhookupdb".  Use said database and seed it with the seed document in the /db folder, or add your own seeds and enter them into the MySQL database.  Add your MySQL Workbench password to the config.json.

Navigate to the file folder that holds the HobbyHookup files in the terminal.  Type "npm install".  Type 'webpack' to build the application, then run the server: "node server.js" 

From there, navigate to localhost:3000 in your browser to open up the landing page of the website. Create an account and log in.  Once logged in, you will be taken to the index page where the featured hobby of the month is located, as well as a visual grid of other featured hobbies. You will also see a nav bar at the top of the page which includes a hamburger menu of important links at the right. 

The hamburger menu, once clicked, will trigger a dropdown of links.  Users can navigate to their inbox, their profile page, a page to update their profile, or logout.

Profile pages display the profile owner's username, avatar image, age, and location.  Below the basic user information is a grid of each hobby that the profile owner has 'claimed' as an interest.  Clicking on any of these hobbies in the profile will take you to that hobby's page.

The individual hobby pages (accessed from the homepage or user profile) offer a picture and brief description of the hobby, as well as a section where a user can add the hobby to their profile along with their experience level (1, 2 or 3).  Once a user has added a hobby, they can select the 'match' button to bring up three random users to message, one for each level of experience.  Clicking on one of these users will take you to a conversation with that user. Posting a message will add a message to that conversation, as well as a new message to the recipient's inbox (where all received messages from all users are located).

The log out function in the nav bar returns the user to the log-in page.  Currently, all pages besides log-in and sign-up require a user to be logged in via a JSON Web Token, or else they will be redirected to the log-in page.


## Code Walkthrough
Please refer to the repository files for coding samples; The sections are commented to indicate their functionality.

If you have any questions about how or why something works, feel free to contact a member of the [Project Team](https://github.com/MasonJinLuo/hobbyhookup/graphs/contributors) for details!


## Authors
* **Stef Bezanis** [bezanis23](https://github.com/bezanis23)
* **Mason Luo** [MasonJinLuo](https://github.com/MasonJinLuo)
* **Adam McNerney** [NorthNern](https://github.com/NorthNern)

## Acknowledgments
Hat tip for help, inspiration, and patience to the Northwestern Coding Boot Camp team, including:

* Steven Daoud
* Nate Johnson
* Ethan Romba
* Chris Mendoza
* Liz Wylie
* Kurt Schlueter
