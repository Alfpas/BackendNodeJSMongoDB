const express = require('express');
const mahasiswa = require('../db/mahasiswa');
const dosen = require('../db/dosen');
const router = express.Router();
const app = express();

//endpoint mahasiswa
// post
router.post("/mhs/post" ,async (req,res)=>{
    console.log(req.body);
    const data = new mahasiswa({
      nama:req.body.nama,
      prodi:req.body.prodi,
      npm:req.body.npm
    });
   
    const val = await data.save();
    res.send("Berhasil ditambahkan");
    console.log("Berhasil Menambahkan Data");
  })
  
// delete
router.delete('/mhs/delete/:id', async (req, res) => {
    try {
      const id = req.params.id
      const deleteMahasiswa = await mahasiswa.findByIdAndDelete(id)
  
      res.send("Berhasil menghapus data")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
  
// Update/PUT
router.put("/mhs/update/:id",async(req,res)=>{
    try {
      const id = req.params.id
      const body = req.body
  
      const PutMhs = await mahasiswa.findByIdAndUpdate(id, body)
      const IdMhs = await mahasiswa.findById(id)
  
      res.send('Berhasil Mengupdate Data');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  
//GET
router.get('/mhs', async (req, res) => {
    try {
        console.log(req.body);
        const GetMhs = await mahasiswa.find();
        res.json(GetMhs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  })

//endpoint dosen
// post
router.post("/dosen/post" ,async (req,res)=>{
    console.log(req.body);
    const data = new dosen({
      nama:req.body.nama,
      matkul:req.body.matkul,
      alamat:req.body.npm
    });
   
    const val = await data.save();
    res.send("Berhasil ditambahkan");
    console.log("Berhasil Menambahkan Data");
  })

// delete
router.delete('/dosen/delete/:id', async (req, res) => {
    try {
      const id = req.params.id
      const dltdosen = await dosen.findByIdAndDelete(id)
  
      res.send("Berhasil menghapus data")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Update/PUT
router.put("/dosen/update/:id",async(req,res)=>{
    try {
      const id = req.params.id
      const body = req.body
  
      const putdosen = await dosen.findByIdAndUpdate(id, body)
      const iddsn = await dosen.findById(id)
  
      res.send('Berhasil Mengupdate Data');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

//GET
router.get('/dosen', async (req, res) => {
    try {
        console.log(req.body);
        const getdsn = await dosen.find();
        res.json(getdsn);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  })

module.exports = router;