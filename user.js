module.exports = { save : function (name, callback){ callback(name); }, get: function (id,callback){ var user = { name : "elbeze", id : id } callback(user); } }