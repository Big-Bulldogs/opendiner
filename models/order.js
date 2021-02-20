const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    restaurant: [
        {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
],
    itemsOrdered: {
        type: Array
    },
    totalPrice: {
        type: Number
    },
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;