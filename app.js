const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

rutas.use( express.urlencoded( {extended: true }) )
rutas.use( express.json() )


app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/administrarCategorias', async (req, res) => {

    if(req.session.rol=="admin"){
        const categorias = await db.Categoriajuego.findAll({
            order :[
                ['id', 'ASC']
            ]
        })

        res.render('administrarCategorias', {
            categorias : categorias,
            rol: req.session.rol,
            nombre: req.session.nombre
        })

    }
    else{
        res.redirect('/noAutorizado')
    }
})

app.listen(3000)
console.log("Server running on port 3000...")