const mongoose = require('../db')
const WebmangeSchema = new mongoose.Schema({
    IMageList: [AnswerSchema],
    ModifyDate: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false })
const AnswerSchema = new Schema({
    id: String,
    image: { type: String, required: true },
});
module.exports.Webmange = mongoose.model('Webmange', WebmangeSchema);
