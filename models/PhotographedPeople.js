const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotographedPeopleSchema = new Schema({
    personName: String,
    countryName: String,
    date: Date,
    photoArray: Array, 
    closeupPhoto: Number,
    fullbodyPhoto: Number,
    extraPhoto: Number, 
    quoteText: String,
    videoUrl: String, 
});

const PhotographedPeople = mongoose.model("PhotographedPeople", PhotographedPeopleSchema);
module.exports = PhotographedPeople;

