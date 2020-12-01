const { Mahasiswa, Matakuliah, Kontrak } = require("../models/index")

class MahasiswaController {
    //menampilkan list mahasiswa
    static listMhs(req, res) {
        Mahasiswa.findAll({
            order: [['nama', 'ASC']]
        })
            .then(function (result) {
                res.render("mahasiswa-list", { mahasiswa: result })
            })
            .catch(function (error) {
                res.send(error)
            })

    }

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

    static formAddMahasiswa(req, res) {
        res.render('formAddMhs2')
    }

    static addMahasiswa(req, res) {
        let newMahasiwa = {
            nama: req.body.nama,
            nim: req.body.nim,
            alamat: req.body.alamat,
            jurusan: req.body.jurusan
        }

        Mahasiswa.create(newMahasiwa)
            .then(result => {
                res.redirect('/mahasiswa')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formEditMahasiswa(req, res) {
        let id = req.params.id
        Mahasiswa.findByPk(id)
            .then(result => {
                res.render('formEditMahasiswa2', { dataMahasiswa: result })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editMahasiswa(req, res) {
        let idMhs = req.params.id
        let editedData = {
            nama: req.body.nama,
            nim: req.body.nim,
            alamat: req.body.alamat,
            jurusan: req.body.jurusan
        }
        Mahasiswa.update(editedData, {
            where: {
                id: idMhs
            }
        })
            .then(result => {
                res.redirect('/mahasiswa')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteMahasiswa(req, res) {
        let idMhs = req.params.id

        Mahasiswa.destroy({
            where: {
                id: idMhs
            }
        })
            .then(result => {
                res.redirect('/mahasiswa')
            })
            .catch(err => {
                res.send(err)
            })
    }

    //melihat list matakuliah
    static listMatkul(req, res) {
        let id = req.params.id
        let dataMahasiswa
        let dataMataKuliah

        Mahasiswa.findByPk(id, {
            include: [Matakuliah]
        })
        .then(result => {
            dataMahasiswa = result
            return Matakuliah.findAll()
        })
        .then(result2 => {
            dataMataKuliah = result2
            // res.send({dataMahasiswa, dataMataKuliah})
            res.render('listMk', {dataMataKuliah, dataMahasiswa})
            // res.render('listMatkulMhs', {dataMahasiswa, dataMataKuliah})
        })
        .catch(err => {
            res.send(err)
        })
    }
    
    static addMatkul(req, res){
        let newKontrak = {
            mahasiswaId: req.params.id,
            matkulId: req.body.matkul,
            
        }

        Kontrak.create(newKontrak)
            .then(result => {
                res.redirect(`/mahasiswa/${newKontrak.mahasiswaId}/matakuliah`)
            })
            .catch(err => {
                res.send(err.message)
            })
    }
}
module.exports = MahasiswaController