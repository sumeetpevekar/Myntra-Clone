const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    id : {
        type: String,
    },
    image : {
        type: String,
    },
    company : {
        type: String,
    },
    item_name : {
        type: String,
    },
    original_price: {
        type: String,
    },
    current_price : {
        type: Number,
    },
    discount_percentage : {
        type: Number,
    },
    return_period : {
        type: Number,
    },
    delivery_date: {
        type: String,
    },
    rating : {
        type : Object,
    }
})

const Products = new mongoose.model("products", productSchema)

module.exports = Products;