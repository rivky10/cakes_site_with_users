const mongoose = require("mongoose");
const Joi = require("joi");

let cakesSchema = new mongoose.Schema({
  name:String,
  cals:Number,
  price:Number,
  imd:String,
  user_id:String,
  date_created:{
    type:Date , default:Date.now()
  },
  category_id:{
    type:String,default:"1"
  }
})

exports.CakeModel = mongoose.model("cakes",userSchema);

exports.validateCake = (_reqBody) => {
  let joiSchema = Joi.object({
    name:Joi.string().min(2).max(99).required(),
    cals:Joi.Number().min(0).max(9999).email().required(),
    cals:Joi.Number().min(1).max(9999).email().required(),
    img:Joi.string().min(2).max(500).allow(null, "")
  })

  return joiSchema.validate(_reqBody);
}