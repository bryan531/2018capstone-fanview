const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
	res.render('index');
});

router.get('/globallifepark', function(req, res){
	res.render('globallifepark');
})




module.exports = router;