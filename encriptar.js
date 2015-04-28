var xmlenc = require('./lib/xmlenc'),
fs = require("fs");

console.log("Encriptando");
var options = {
  rsa_pub: fs.readFileSync(__dirname + '/auth0_rsa.pub'),
  pem: fs.readFileSync(__dirname + '/auth0.pem'),
  encryptionAlgorithm: 'http://www.w3.org/2001/04/xmlenc#aes256-cbc',
  keyEncryptionAlgorighm: 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p'
};

var encryptedContent = fs.readFileSync(__dirname + '/paraEncriptar.xml').toString()
xmlenc.encrypt(encryptedContent, options, function(err, result) { 
	console.log("Encriptado, Archivo creado");
	
     	fs.writeFileSync(__dirname +"/encriptado.xml", result)
	
})


var encryptedContent = fs.readFileSync(__dirname + '/encriptado.xml').toString()
xmlenc.decrypt(encryptedContent, { key: fs.readFileSync(__dirname + '/auth0.key')}, function(err, decrypted) {
   console.log("Leyendo el xml encriptado\n")
  console.log(decrypted)
});