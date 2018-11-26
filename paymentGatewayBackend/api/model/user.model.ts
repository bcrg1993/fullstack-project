const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    lastName: { type: String, require: true, trim: true },
    username: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true },
    state: { type: Boolean, default: true }
});

const UserModel = mongoose.model('User', schema);

export default UserModel;