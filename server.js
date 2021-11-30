// require deps
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const itemsController = require('./controllers/items');


// initialize app
const app = express();
//const Item = require('./models/items')
//const books = require('./controllers/books');
// configure settings
require('dotenv').config();

// connect to and configure mongoDB with mongoose
const DATABASE_URL = 'MONGODB_URI=mongodb+srv://admin:abc1234@cluster0.vn7x6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

// set up mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));

app.use(express.static(__dirname + '/public'));

// mount middleware
app.use(express.urlencoded({ extended: false })); // creates req.body
app.use(methodOverride('_method'));

// mount routes
app.use('/items', itemsController);

//create  `We! 

app.get('/', (req, res) => {
res.render('index.ejs')

})
// 

// app.get('/items', (req, res) => {
  // Book.find({}, (err, arrayOfItems) => {
      // res.send(arrayOfItems)
      // 
  // });
  // res.render('index.ejs')
// });


// Show route

// app.get('/items/:id', (req, res) => {
  // Item.findById(req.params.id, (err, foundItem) => {
      // res.send('index.ejs', foundItem)
  // });
// });
// 
// 
// app.delete('/items/:id', (req, res) => {
  // Item.findByIdAndDelete(req.params.id, (err, copyOfDeletedItem) => {
      // res.send(copyOfDeletedItem);
  // });
// });
// 
// 
// app.put('/items/:id', (req, res) => {
  // Book.findByIdAndUpdate(
      // req.params.id, 
      // req.body, 
      // { new: true }, 
      // (err, updatedItem) => {
          // res.send(updated);
  // });
// });
// 
// 
// 
// 

// Database Connection
// mongoose.connect(DATABASE_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
// })

// Database Connection Error/Success - optional but can be really helpful





// tell the app to listen

const PORT = process.env.PORT; 
// heroku or any cloud service will set this value for us

app.listen(PORT, () => {
    console.log('Express is listening on port: ' + PORT);
});
