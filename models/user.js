const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ThirdPartyProviderSchema = new mongoose.Schema({
  provider_name: {
    type: String,
    default: null
  },
  provider_id: {
    type: String,
    default: null
  },
  provider_data: {
    type: {},
    default: null
  }
})
const UserSchema = new Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  previousorders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  previousrestaurants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: "reservation",
    },
  ],
  third_party_auth: [ThirdPartyProviderSchema]
});
UserSchema.methods.validPassword = function( pwd ) {
  // EXAMPLE CODE!
  return ( this.password === pwd );
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
