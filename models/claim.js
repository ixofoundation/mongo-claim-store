var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create claim schema
var claimSchema = new Schema({
  owner: { // DID of the owner of this Template
    type: String, 
    required: true
  },  
  data: {
    type: String,
    get: function(data) {
      try { 
        return JSON.parse(data);
      } catch(err) { 
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  },
  created_at: Date,
});

// the schema is useless so far
// we need to create a model using it
var Claim = mongoose.model('Claim', claimSchema);

// make this available to our users in our Node applications
module.exports = Claim;