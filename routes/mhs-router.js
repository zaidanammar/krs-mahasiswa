const express =require("express")
const mhsRouter=express.Router()
const MhsController=require("../controller/mhs-controller")

//read
mhsRouter.get("/", MhsController.listMhs)
// mhsRouter.get("/:id", MhsController.findOne)

//create
mhsRouter.get("/addMahasiswa", MhsController.formAddMahasiswa)
mhsRouter.post("/addMahasiswa", MhsController.addMahasiswa)

//edit
mhsRouter.get('/editMahasiswa/:id', MhsController.formEditMahasiswa)
mhsRouter.post('/editMahasiswa/:id', MhsController.editMahasiswa)

//delete
mhsRouter.get('/deleteMahasiswa/:id', MhsController.deleteMahasiswa)

//lihattabel matakuliah
mhsRouter.get('/:id/matakuliah',MhsController.listMatkul)
mhsRouter.post('/:id/matakuliah/add',MhsController.addMatkul)



module.exports=mhsRouter