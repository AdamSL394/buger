
var orm = require("../config/orm.js");

var burger = {
    all:function(cb){
        orm.all("squad",function(res){
            cb(res);
        });
    },
    create: function(cols,val,cb){
        orm.create("squad",cols,val,function(res){
            cb(res)
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("squad",objColVals,condition,function(res){
            cb(res)
        });
    }
}

module.exports = burger;