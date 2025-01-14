const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

const userModel = mongoose.model("users", userSchema);
export default userModel;

// order collection-0----------------------------------------------------------------------------------------------------------

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  products: [
    {
      productsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Delivered", "Cancelled"],
    default: "Pending",
  },
});
const order=mongoose.model('order',orderSchema)
export default order

// product collection---------------------------------------------------------------------------------------------------------------------------
const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  description:{
    type:String,
    required:true,

  },
  price:{
    type:String,
    required:true,
  }

})
const product =mongoose.model('product',productSchema)
export default product