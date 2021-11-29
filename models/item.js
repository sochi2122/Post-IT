// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema
const itemSchema = new Schema({
    item: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true},
    sold: Boolean,
    image: { type:String, required: false},
    price: { type: Number, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    seller: { type: String, required: false },
    quantity: { type: Number, default: 1},


}, { timestamps: true });


// export the model to be accessed in server.js
module.exports = mongoose.model('Item', itemSchema);


