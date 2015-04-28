# EncritptXML
Encriptar XML con xml-encrypt, 
Este script hace que todo el documento xml este encriptado, es practico a la hora de enviar informaciones a un endpoint en este ejemplo solo hice que guardara en un archivo, podes hacerlo que responda el node directamente.

Xml-encrypt soporta mas clases de certificados.

### Forma de trabajar

##parametros
```js
var options = {
  rsa_pub: fs.readFileSync(__dirname + '/auth0_rsa.pub'),
  pem: fs.readFileSync(__dirname + '/auth0.pem'),
  encryptionAlgorithm: 'http://www.w3.org/2001/04/xmlenc#aes256-cbc',
  keyEncryptionAlgorighm: 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p'
};
```
##Encriptar
```js
var encryptedContent = fs.readFileSync(__dirname + '/paraEncriptar.xml').toString()
xmlenc.encrypt(encryptedContent, options, function(err, result) { 
	console.log("Encriptado, Archivo creado");
	
     	fs.writeFileSync(__dirname +"/encriptado.xml", result)
	
})
```
##desencriptar
```js
var encryptedContent = fs.readFileSync(__dirname + '/encriptado.xml').toString()
xmlenc.decrypt(encryptedContent, { key: fs.readFileSync(__dirname + '/auth0.key')}, function(err, decrypted) {
   console.log("Leyendo el xml encriptado\n")
  console.log(decrypted)
});
```
## Author

[Acner Pinazo](www.elyon.com.py)

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
