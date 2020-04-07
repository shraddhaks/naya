var mongoose = require('mongoose');
// Setup schema
var makerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    capacity: {
       type : String,
       required : true
    },
    material: {
        type : String,
        required : true
     },
     location: {
        type : String,
        required : true
     },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Maker = module.exports = mongoose.model('maker', makerSchema);
module.exports.get = function (callback, limit) {
    Maker.find(callback).limit(limit);
}