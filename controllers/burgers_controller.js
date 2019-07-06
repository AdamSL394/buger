var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        var hbsObject = {
           burgers:data 
        };
        // console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/new",function(req,res){
    burger.create([
        "player_name"
    ],[
        req.body.player,
        // req.body.trade
    ],function(result){
        console.log(result);
        res.json({id: result.insertID,player_name:result.insertPlayer_name});
    });
})

router.put("/api/player/:id",function(req,res){
    var condition = "id = " + req.params.id;
    
    console.log("below is the req.body.trade")
  console.log(req.body.trade)
    burger.update({
        trade : req.body.trade
    },condition,function(result){
        if(result.changedRows == 0 ){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
        // console.log(result);
        // res.json({id:result.insertID})
    });
})

module.exports = router;