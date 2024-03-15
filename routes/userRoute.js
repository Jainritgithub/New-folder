var express = require('express')
var router = express.Router();

router.get('/', function(req,res,next){
    res.status(200).send("hello")
})
router.post('/create', function(req,res,next){
    res.status(201).json({success: true, user: req.body})
})


module.exports = router