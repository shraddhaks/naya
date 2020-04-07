var mongoose = require('mongoose');
// Setup schema
var designerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    capacity: {
       type : Number,
       required : true
    },
    type_of_designer: {
        type : String,
        required : true
     },
     training: {
        type : String,
        required : true
     },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Designer = module.exports = mongoose.model('designer', designerSchema);
module.exports.get = function (callback, limit) {
    Designer.find(callback).limit(limit);
}