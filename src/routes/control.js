const express = require('express');
const router = express.Router();
const passport = require('passport');
//const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const pool = require('../db');

router.get('/control/', (req, res) => {
    res.render('control/');
});

router.get('/control/registro-producto', (req, res) => {
    res.render('control/registro-producto');
});

router.get('/control/perfil', (req, res) => {
    res.render('control/perfil');
});

router.post('/control/registro-personal', passport.authenticate('local.signup', {
    successRedirect: '/control/perfil',
    failureRedirect: '/control/',
    failureFlash: true
}));

// router.post('/control/registro-producto', async (req, res) => {
//     const {} = req.body;
//     const file = req.file
//     const newBlog = {
//         tema,
//         urlimg,
//         enlace,
//         piefoto,
//         miniatura,
//         titulo,
//         subtitulo,
//         subtitleone,
//         paraguno,
//         subtitledos,
//         paragdos,
//         subtitletres,
//         paragtres,
//         subtitlecuatro,
//         paragcuatro,
//         subtitlecinco,
//         paragcinco,
//         subtitleseis,
//         paragseis,
//         autor,
//         city
//     };
//     await pool.query('INSERT INTO blogdos SET ?', [newBlog]);
//     //req.flash('success', 'Artículo enviado satisfactoriamente');
//     res.redirect('/dia-saludable');
// });


module.exports = router;