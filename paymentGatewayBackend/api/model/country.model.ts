const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, require: true, uppercase: true, trim: true, unique: true }
});

const CountryModel = mongoose.model('Country', schema);

export default CountryModel;