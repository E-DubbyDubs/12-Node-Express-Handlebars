var model = require('../models/model.js')
var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
  	model.selectSpecies(function(data){ 
    var speciesObject = { species: data };
    res.render('index', speciesObject);
  });
});


router.post("/post/state", function(req,res){
  console.log("hitting /post/state route")
  console.log(req.body.state, "req.body")
  
})
router.post("/Species_ID:", function(req, res) {
        console.log(req.body);
});
router.post("/", function(req, res) {

    model.addSpecies("species.Common_Names",
      
      function(data) {
        
        res.redirect("/");
    });
});

router.post('/misc/update/:id', function(req, res) {

  model.updateSpecies(req.params.id, function() {
    
    res.redirect('/');
  });
});
 module.exports = router;