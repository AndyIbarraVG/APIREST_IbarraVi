const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, 'uploads');
const upload = multer({ dest: uploadDir });

app.post('/imagenes', upload.single('imagen'), (req, res) => {
    console.log(req.file);
    const newPath = GuardarImagen(req.file);
    res.send(`Imagen guardada en ${newPath}`);
});

function GuardarImagen(file) {
    const newPath = path.join(uploadDir, file.originalname);
    fs.renameSync(file.path, newPath);
    return newPath;
}

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});