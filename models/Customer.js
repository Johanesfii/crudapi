const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    phone: String,
    address: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Customer", customerSchema);