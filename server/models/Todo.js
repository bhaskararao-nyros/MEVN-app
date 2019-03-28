var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
    }, {
  timestamps: true
});

module.exports = mongoose.model('todo', todoSchema);