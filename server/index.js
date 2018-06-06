const express = require('express');        // require express
const bodyParser = require('body-parser');  // require body-parser
const mc = require( __dirname + '/controllers/messages_controller'); // creeates the require messages controller with the name mc


const app = express(); // Create an express app 

app.use(bodyParser.json()); // configure the app to parse JSON from the body

const messagesBaseUrl = "/api/messages";   //creates a const for our base url from "api/messages" so we wont have to change it in the future
app.post( messagesBaseUrl, mc.create ); // created a post.get.put.delete endpoints using our created methods on mc
app.get( messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3000;  // configure the port

app.listen( port, () => { console.log(`Server listening on port ${port}`);
}); // lets usknow the port is running