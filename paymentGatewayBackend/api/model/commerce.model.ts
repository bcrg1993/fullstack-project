const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    businessName: { type: String, require: true, uppercase: true, trim: true, unique: true },
    name: { type: String, require: true, uppercase: true, trim: true, unique: true },
    address: { type: String, require: true, uppercase: true, trim: true },
    phone: { type: String, trim: true },
    representative: {
        name: { type: String, require: true, uppercase: true, trim: true },
        phone: { type: String, trim: true }
    },
    country: { type: mongoose.Schema.ObjectId, ref: 'Country' },
    state: { type: Boolean, default: true }
});

const CommerceModel = mongoose.model('Commerce', schema);

export default CommerceModel;