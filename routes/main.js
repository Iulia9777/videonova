const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/add new video', (req, res) => {
    res.render('addnewvideo');
});

//video loading
router.post('/add new video', uploads.single('video'), function(req, res, next){
    const file = req.file;
        console.log ('Тип файла:', file.mimetype);
        console.log ('Имя файла', file.originalname);
        console.log ('Размер файла:', file.size);
        console.log ('Путь для сохранения:', file.path);

res.send({ret_code: '0'});
});

router.use((req, res, next) => {
    console.log('URL:', req.url);
    next();  
});

module.exports = router;