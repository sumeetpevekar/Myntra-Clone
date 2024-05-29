//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the: application's: Logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

const Products = require("../models/product-model");
const getProducts = async (req, res) => {
    try{
        const product = await Products.find();
        res.status(200).send({message : product})
    }catch(error){
        // res.send(error)
        console.log(error)
    }
}
module.exports = {getProducts}