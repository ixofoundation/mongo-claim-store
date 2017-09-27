var Claim = require('../models/claim');

// Display detail page for a specific Claim
exports.claim_detail = function(req, res) {

  // find the claim for the ID
  Claim.findOne  ({ _id: req.params.id }, function (err, claim) {
    if (err) {
      return handleError(res, err);
    } else {
      console.log(claim.data);
      claimData = claim.data;
      res.send(JSON.stringify({
        owner: claim.owner,
        claim: claimData,
        createdAt: claim.created_at
      }));
    }
  });
};

// Handle Claim create on POST
exports.claim_create_post = function(req, res) {
  console.log(req);
  var owner = req.body.owner;
  var claim = req.body.claim;
  
  var claimInstance = new Claim({
    owner: owner,
    data: claim,
    created_at: new Date()
  });

  // Save the new model instance, passing a callback
  claimInstance.save(function (err) {
    if (err) { 
      return handleError(res, err);
    } else {
      res.send(createGlobalAddress(req, claimInstance._id));
    }
  });

};

var createGlobalAddress = function(req, id){
  var uriPrefix = process.env.URI || '';
  var address = '/claims/' + id;
  if(uriPrefix == ''){
    address = 'http://' + req.headers.host + address;
  }else{
    address = uriPrefix + address;
  }
  return address;
};

var handleError = function(res, err){
  console.log(err);
  res.send("An error occurred");
};


