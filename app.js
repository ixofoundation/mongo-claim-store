require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var claim_controller = require("./controllers/claimController");

//DB setup
mongoose.connect("mongodb://mongo:27017");

var router = express.Router();

var port = process.env.PORT || '3000';

router.get("/ping", function(req, res){
 res.send("pong");
});

/* GET request for one Book. */
router.get('/claims/:id', claim_controller.claim_detail);

/* POST request for creating Book. */
router.post('/claims/create', claim_controller.claim_create_post);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(port, function(){
 console.log("Claim Store listening on port " + port + "!");
});

