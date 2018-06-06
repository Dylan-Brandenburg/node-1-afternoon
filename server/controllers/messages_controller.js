const messages = []; // create an array to hold the messages

let id = 0; // create a variable to keep track of what [id] is assigned to the messages

module.exports = {
  // export an object with methods, create, read, update, delete
  create: (req, res) => {
    // create a create method taking in req, res
    const { text, time } = req.body; // Creates the text/time const with obj destru from req.body
    messages.push({ id, text, time }); // pushes id, text, and time to messages array
    id++; // increment id which also updates the variable at the same time.
    res.status(200).send(messages); // sends the status then sends the messages array
  },
  read: (req, res) => {
    // create the read method taking in req, and res
    res.status(200).send(messages); // returns the entire messages array.
  },
  update: (req, res) => {
    // Creating the update method using req, res as parameters
    const { text } = req.body; // declaring a text const from req.body
    const updateID = req.params.id; // declaring a const of UpdateID from the req.params.id
    const messageIndex = messages.findIndex( message => message.id == updateID ); 
    //declaring a messageIndex-
    // that searches through the messages array index using .findIndex() looking for a id that matches the updateID const
    let message = messages[ messageIndex ];
// letting message = the messages array message Index found above.

    messages[messageIndex] = {
      // retrieve the object created using the array and the [messageIndex ] and update it.
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages); // sending the res.status and the .send (message)
  },
  delete: (req, res) => {
    // creating a delete methos using req, res as params
    const deleteID = req.params.id; // setting deleteID as a const which is equal to the req. parmas. id;
    messageIndex = messages.findIndex(message => message.id == deleteID); // setting messageIndex to equal the messages arrays index-verifies that messagIndex and deleteID are the same
    messages.splice(messageIndex, 1); // removes the selected message from the array using slice(at the messagesIndex, and 1(delete count))
    res.status(200).send(messages); // res.status then send the messages array
  }
};
