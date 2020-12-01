const { Mahasiswa, Matakuliah, Kontrak } = require("../models/index")

class MahasiswaController {
    //menampilkan list mahasiswa
    static listMtk(req, res) {
        Matakuliah.findAll({
            order: [['namaMatkul', 'ASC']]
        })
            .then(function (result) {
                res.render("matakuliah-list", { matakuliah: result })
            })
            .catch(function (error) {
                res.send(error)
            })
    }
//lihat matakuliah
    // static findOne(req, res) {
    //     let id = req.params.id
    //     Mahasiswa.findByPk(id, {
    //         include: [Matakuliah]
    //     })
    //         .then(function (result) {
    //             res.send(result)
    //         })
    //         .catch(function (error) {
    //             res.send(error)
    //         })
    //  }

    static formAddMatkul(req, res) {
        res.render('formAddMtk2')
    }

    static addMatkul(req, res) {
        // res.send(req.body)
        let newMatakuliah = {
            namaMatkul: req.body.namaMatkul,
            sks: +req.body.sks,
            
        }
        // console.log(newMatakuliah);

        Matakuliah.create(newMatakuliah)
            .then(result => {
                res.redirect('/matakuliah')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formEditMatakuliah(req, res) {
        let id = req.params.id
        Matakuliah.findByPk(id)
            .then(result => {
                res.render('formEditMatakuliah2', { dataMatakuliah: result })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editMatakuliah(req, res) {
        let idMtk = req.params.id
        let editedData = {
            namaMatkul: req.body.namaMatkul,
            sks: req.body.sks,
            
        }
        Matakuliah.update(editedData, {
            where: {
                id: idMtk
            }
        })
            .then(result => {
                res.redirect('/matakuliah')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteMatakuliah(req, res) {
        let idMtk = req.params.id

        Matakuliah.destroy({
            where: {
                id: idMtk
            }
        })
            .then(result => {
                res.redirect('/matakuliah')
            })
            .catch(err => {
                res.send(err)
            })
    }

    // //melihat list Mahasiswa
    static listMhs(req, res) {
        let id = req.params.id
        Matakuliah.findByPk(id, {
            include: [Mahasiswa]
        })
            .then(function(result){
                // res.send(result)
                 res.render("list-mhs-matkul",{matakuliah:result})
            })
            .catch(function (error) {
                res.send(error)
            })
    }
    
}
module.exports = MahasiswaController