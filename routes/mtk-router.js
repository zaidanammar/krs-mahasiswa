const express =require("express")
const mtksRouter=express.Router()
const MtkController=require("../controller/mtk-controller")

//read
mtksRouter.get("/", MtkController.listMtk)
// mhsRouter.get("/:id", MtkController.findOne)

//create
mtksRouter.get("/addMatakuliah", MtkController.formAddMatkul)
mtksRouter.post("/addMatakuliah", MtkController.addMatkul)

//edit
mtksRouter.get('/editMatakuliah/:id', MtkController.formEditMatakuliah)
mtksRouter.post('/editMatakuliah/:id', MtkController.editMatakuliah)

// //delete
mtksRouter.get('/deleteMatakuliah/:id', MtkController.deleteMatakuliah)

// //lihattabel matakuliah
mtksRouter.get('/:id/mahasiswa',MtkController.listMhs)
// mtksRouter.post('/:id/matakuliah/add',MtkController.addMatkul)



module.exports=mtksRouter