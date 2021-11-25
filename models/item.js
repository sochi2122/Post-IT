// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema
const itemSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true},
    sold: Boolean,
    image: { type:String, required: true},
    qty: { type: Number, default: 1}
}, { timestamps: true });

// export the model to be accessed in server.js
module.exports = mongoose.model('Item', itemSchema);


