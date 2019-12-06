require('dotenv').config();
var crypto = require('crypto'),
    algorithm = process.env.ALGORITHM,
    password = process.env.PASSWORD;

module.exports.encrypt = function (buffer){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
  return crypted;
}
 
module.exports.decrypt = function (buffer){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return dec;
}