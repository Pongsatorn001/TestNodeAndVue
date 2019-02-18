module.exports = {
    index (req, res) {
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
    },

    create (req, res) {
        res.send('สร้างผู้ใช้งาน vbvb')
    },

    put (req, res) {
        res.send('แก้ไขผู้ใช้งาน')
    },

    remove (req, res) {
        res.send('ลบผู้ใช้งาน')
    },

    show (req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน')
    }
}