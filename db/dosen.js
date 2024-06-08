const { default: mongoose } = require("mongoose");
const sch={
    nama:String,
    matkul:String,
    alamat:String
}
module.exports = mongoose.model('dosen', sch);