//create an express server 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//set ejs as the view engine
app.set('view engine', 'ejs');
//static files


//set ejs as the view engine
app.set('view engine', 'ejs');

//import routes
const routes = require('./routes/routes');

app.use('/areacharts', routes.areacharts);
app.use('/packedbubbles', routes.packedbubbles);
app.use('/horizontalbars', routes.horizontalbars);
app.use('/sidebysidebars', routes.sidebysidebars);

//send samp.ejs as response
app.get('/', (req, res) => {
    res.render('home.ejs');
});




app.listen(port);