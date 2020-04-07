const mongoose = require('mongoose');
const ManageWebModel = mongoose.model('Webmange')
exports.getImage = async (req, res) => {
    ManageWebModel.find({}).then(things => {
        return res.json(things)
    })
}
exports.addImage = async (req, res) => {
    let Config = new ManageWebModel(req.body)
    Config.save()
        .then(info => res.status(201).json(info))
        .catch(err => res.json(err))
}
exports.editImage = async (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
}
exports.deleteImage = async (req, res) => {
    ManageWebModel.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}
