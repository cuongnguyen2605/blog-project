module.exports = function (req, res) {
   res.status(200).json({
        status: 'Success',
        link: `/uploads/${req.file.filename}`
   });
};