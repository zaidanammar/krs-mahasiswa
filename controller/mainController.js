const { User }= require('../models')
const {comparePassword} = require('../helper/password')

class MainController {
    static showHome(req, res) {
        res.render('showHome')
    }

    static registerForm(req, res) {
        res.render('registerForm2')
    }

    static addUser(req, res) {
        // res.send(req.body)
        const newUser = {
            nama : req.body.nama,
            username : req.body.username,
            password : req.body.password
        }
        // console.log(newUser);
        User.create(newUser)
        .then(result => {
            // res.send('berhasil')
            res.redirect('/login')
        })
        .catch(err => {
            res.send('gagalllllllllllllllllllllllllll')
        })
    }

    static loginForm(req, res) {
        res.render('loginForm2')
    }

    static login(req, res) {
        const username = req.body.username
        const password = req.body.password

        User.findOne({
            where : {
                username : username
            }
        })
        .then(result => {
            if(result &&  comparePassword(password, result.password)) {
            
                req.session.userId = result.id
                res.redirect('/')
            } else{
                res.send('invalid username or password')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if(err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = MainController