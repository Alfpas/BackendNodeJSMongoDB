const { default: mongoose } = require("mongoose");
const sch={
    nama:String,
    prodi:String,
    npm:Number
}
module.exports = mongoose.model('tb_mahasiswa', sch);