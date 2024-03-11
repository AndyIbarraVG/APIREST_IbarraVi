# NPM_AndyIbarra

Prueba de Modulo NPM

Ejercicio de creacion de modulo de Javascript y publicacion en el registro NPM.

Instalacion del modulo

```bash
$npm install npm_andyibarra
```
Como se utiliza este modulo
```js
const ObtenerPokemon = require('npm_andyibarra');

const { nombre, imagen } = ObtenerPokemon();

console.log(`Nombre: ${nombre}, Imagen: ${imagen}`);