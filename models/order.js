const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    restaurant: [
        {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
],
    name: {
        type: integer,
    },
    price: {
        type: integer,
    },
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;