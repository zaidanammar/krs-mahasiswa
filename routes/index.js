const express = require("express")
const indexRouter = express.Router()
const mahasiswa = require("./mhs-router")
const matakuliah =require("./mtk-router")
const MainController = require('../controller/mainController')

const isLoggedIn = (req, res, next) => {
    if(req.session.userId) {
        next();
    } else {
        res.redirect('/login')
    }
}

const doubleLogin = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/')
    } else {
        next()
    }
}

//home
indexRouter.get('/', MainController.showHome)

//register
indexRouter.get('/register', doubleLogin, MainController.registerForm)
indexRouter.post('/register', doubleLogin, MainController.addUser)

//login
indexRouter.get('/login',doubleLogin, MainController.loginForm)
indexRouter.post('/login',doubleLogin, MainController.login)

//middleware log
indexRouter.use(isLoggedIn)

//mhs & mtk
indexRouter.use("/mahasiswa",mahasiswa)
indexRouter.use("/matakuliah",matakuliah)

//logout
indexRouter.get('/logout', MainController.logout)


module.exports=indexRouter