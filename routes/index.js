var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/pollUrl', function(req, res, next) {

	//random
	var random =  Math.floor((Math.random() * 1000) + 1);
	var data = [];


	for (var i = 0; i < random; i++) {
		var random2 =  Math.floor((Math.random() * 2) + 1);

		var messagetype = "warning";
		if(random2==2){messagetype= "danger"}

	     var obj = {
	      "operationdate": "23-02-2016 12:17:58",
	      "message": "Testing hsm: 189.211.78.137 hsm server id: "+i,
	      "messagetype": messagetype,
	      "hsmServerId": "1"
	     };
	      data.push(obj);
	}


	console.log(data);

	var response = {
	  "message": "success",
	  "data": data
	}
	res.json(response);
});

module.exports = router;
