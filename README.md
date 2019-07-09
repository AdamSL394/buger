# Dream Team 
Making your Dream Team is being hosted at <a href="https://dreamteam394.herokuapp.com/">Heroku</a> Tracing this from the front end, our database is updated once the button Trade player or Add player is clicked.
 
Inside of our index handlebars file we are capturing the information either in the input box or by the players ID and directing the <a href="https://www.w3schools.com/jquery/ajax_ajax.asp">ajax call</a>  to add a new player by posting to our data base as an object containing a key value pair. After the button is clicked on we are looking for the route that is associated with it. and passing it the information of <a href="https://www.w3schools.com/jquery/jquery_ajax_get_post.asp">POST</a> to let our database know we are posting a new entry, and a object with player name as the value. the route is found in our burger.js file where attached to the route is a function the tell passes in the information of the column and passes in the information that is contained in our request body (the player). In this function we are calling on a method that breaks out what we are doing <a href="http://www.mysqltutorial.org/mysql-create-database/">create</a> a player. the create method is passing in the to our query string the will query our database the table name and the previously captured values and column names.  Lastly we are putting the information together in our orm.js to query our database using the syntax to <a href="https://www.w3schools.com/sql/sql_insert.asp">Insert Into </a>our database. Finally we reload the page now showing our full database with the new entry. 

While the syntax changes slightly to change the player to traded the main difference happens on to in the database and where the information is rendered . We capture the players id in the database and asking the database to update the trade value, and not requesting any information back. But the handlebars show render the player in a different location as we loop over where the players are generated with <a href="https://handlebarsjs.com/builtin_helpers.html">Handlebars Syntax  </a> if the player traded is true or false it is shown with in a specific list tag. 


## Perquisites
You can either choose to visit the deployed version on Heroku or clone the the file from Git hub and run in your local browser. For this you will need to either npm install the dependencies in the package-json. or install express, handlebars & mysql .

## Running Tests/Instructions
Open the file in your text editor or terminal. Install the node packages listed below. Move into the file you have saved the file in and type node < the filename >.js. This will start the application running.

## Built with:
<ol>
<li> Javascript
<li> Express
<li> Handlebars
<li> Mysql
</ol>

### Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Dream Team 394](/public/assets/img/Dream-Team.png)








