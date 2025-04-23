const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPot = new Schema({
  name: { type: String, required: true },
  plant_type: { type: String, required: true },
  pot_type: { type: String, required: true },
  date: { type: Date, defaukt: Date.now },
});
