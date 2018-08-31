const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tasks = new Schema({
  description: {
    type: String
  },
  complete: {
    type: Boolean
  }
},{
    collection: 'tasks'
});

module.exports = mongoose.model('Tasks', Tasks);
