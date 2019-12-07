const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructured

const userSchema = new Schema({
    googleID: String
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

mongoose.model('users', userSchema);