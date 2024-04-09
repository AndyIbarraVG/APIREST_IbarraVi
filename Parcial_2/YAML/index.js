const yaml = require('yaml');
const fs = require('fs')
const path = require('path')

const archivoObj = fs.readFileSync(path.join(__dirname,'/ArchivosYAML/objeto.yaml'),'utf8')
const valorObj = yaml.parse(archivoObj)
console.log(valorObj)

const archivoArr = fs.readFileSync(path.join(__dirname,'/ArchivosYAML/arreglo.yaml'),'utf8')
const valorArr = yaml.parse(archivoArr)
console.log(valorArr)