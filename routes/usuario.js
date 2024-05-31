const express = require("express");
const router = express.Router();
const cusuario = require("../controlers/usuario");
const cpublicacion = require("../controlers/publicacion");
const ccomentario = require("../controlers/comentario");
const auth = require("../auth");
const multer = require("multer");

//Rutas de usuario

router.get("/lista", cusuario.listado);

router.put("/insertar", cusuario.insertar);

router.delete("/borrar", auth.verificatoken, cusuario.borrar);

router.post("/actualizar", auth.verificatoken, cusuario.actualizar);

router.post("/login", cusuario.verificar);

//Rutas de publicacion

router.get("/plista", cpublicacion.listado);

router.put("/pinsertar", cpublicacion.insertar);

//Rutas de comentario

router.get("/clista", ccomentario.listado);

router.put("/cinsertar", ccomentario.insertar);

module.exports = router;
